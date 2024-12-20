import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Length, minLength } from 'class-validator';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  @ApiProperty({ type: String, minLength: 3, maxLength: 30 })
  @IsString()
  @Length(3, 30)
  title?: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  year?: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  duration?: number;

  @ApiProperty({ type: [String] })
  genre?: string[];

  @ApiProperty({ type: [String] })
  director?: string[];

  @ApiProperty({ type: [String] })
  reviews?: string[];

  @ApiProperty({ type: String })
  poster_path: string;
}
