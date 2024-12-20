import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Movie, MovieDocument } from './movie.schema';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { UserDocument } from 'src/user/user.schema';
import * as NodeCache from 'node-cache';
const myCache = new NodeCache({ stdTTL: 600, checkperiod: 620 });

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
  ) {}
  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const createdMovie = new this.movieModel(createMovieDto);
    myCache.del('movies');
    return createdMovie.save();
  }

  async findAll(user?: UserDocument): Promise<Movie[] | string[]> {
    let movies;
    if (myCache.has('movies')) {
      movies = myCache.get('movies') as Movie[];
    } else {
      movies = await this.movieModel.find().exec();
      myCache.set('movies', movies);
    }
    if (user) {
      return movies;
    }
    return movies.map((movie) => {
      return movie.title;
    });
  }

  async findOne(id: string, user?: UserDocument): Promise<Movie | null> {
    if (user) {
      return this.movieModel.findById(id);
    }
    return this.movieModel.findById(id).select('title');
  }

  async update(
    id: string,
    updateMovieDto: UpdateMovieDto,
  ): Promise<Movie | null> {
    myCache.del('movies');
    return await this.movieModel.findByIdAndUpdate(id, updateMovieDto, {
      new: true,
    });
  }

  async remove(
    id: string,
    session: mongoose.mongo.ClientSession,
  ): Promise<Movie | null> {
    myCache.del('movies');
    const deletedMovie = await this.movieModel.findByIdAndDelete(id, {
      session,
    });
    return deletedMovie;
  }
}
