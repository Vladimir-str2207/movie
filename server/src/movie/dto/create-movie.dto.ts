import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString, Length } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty({
    type: String,
    description: 'Название фильма',
    example: 'Терминатор',
    required: true,
    minLength: 3,
    maxLength: 30,
  })
  @IsString()
  @Length(3, 30)
  title: string;

  @ApiProperty({ type: Number, description: 'Год выпуска', example: 2023 })
  @IsNumber()
  year: number;

  @ApiProperty({
    type: Number,
    description: 'Продолжительность фильма в минутах',
    example: 120,
  })
  @IsNumber()
  duration: number;

  @ApiProperty({
    type: [String],
    description: 'Id жанра фильма',
    example: ['669e73554a5ff881af4af312', '669e73554a5ff881af4af504'],
  })
  @IsArray()
  genre: string[];

  @ApiProperty({
    type: [String],
    description: 'Id режиссера фильма',
    example: ['669e74044a5ff881af4af314'],
  })
  @IsArray()
  director: string[];

  @ApiProperty({
    type: [String],
    description: 'Id рецензий к фильму',
    example: ['669e74044a5ff881af4af314'],
  })
  @IsArray()
  reviews?: string[];

  @ApiProperty({ type: String, description: 'Путь к постеру' })
  @IsString()
  poster_path: string;
}
