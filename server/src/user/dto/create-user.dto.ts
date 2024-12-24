import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator'

export class CreateUserDto {
  @ApiProperty({
    required: true,
    type: String,
    description: 'email',
    example: 'lima@mail.ru',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ type: String, description: 'nickname', example: 'lima' })
  @IsNotEmpty()
  @IsString()
  @Length(3,15)
  @MinLength(3)
  @MaxLength(15)
  username: string;

  @ApiProperty({
    required: true,
    type: String,
    description: 'пароль',
    example: '12345678',
    minimum: 8,
    maximum: 20
  })
  @IsNotEmpty() 
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;


  @ApiProperty({
    type: [String],
    description: 'Id плейлистов',
    example: ['66b0e5fb43477e523f52aa95'],
  })
  @IsArray()
  playlists?: string[];
}
