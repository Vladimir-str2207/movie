import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
  @ApiProperty({
    type: String,
    description: 'текстовое сообщение-отзыв',
    example: ' Отличный фильм...',
    required: true,
  })
  @IsString()
  text: string;

  @ApiProperty({ type: Number, description: 'оценка фильма', example: 5 })
  @IsNumber()
  estimation: number;

  @ApiProperty({
    type: [String],
    description: 'id автора рецензии',
    example: ['66a64c313967c6db6b7d4662'],
  })
  @IsArray()
  user?: string;

  @ApiProperty({
    type: [String],
    description: 'id фильма',
    example: ['66a64c313967c6db6b7d4662'],
  })
  @IsArray()
  movie: string[];
}
