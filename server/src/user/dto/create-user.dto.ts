import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsString,
  Length,
} from 'class-validator'

export class CreateUserDto {
  @ApiProperty({
    required: true,
    type: String,
    description: 'email',
    example: 'lima@mail.ru',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ type: String, description: 'nickname', example: 'lima' })
  @IsString()
  @Length(3,15)
  username: string;

  @ApiProperty({
    required: false,
    enum: ['admin', 'user'],
    default: 'user',
    type: [String],
    description: 'роли',
    example: ['admin'],
  })
  @IsArray()
  roles?: string[];

  @ApiProperty({
    required: true,
    type: String,
    description: 'пароль',
    example: '12345678',
    minimum: 8,
    maximum: 20
  })
  @IsString()
  @Length(8,20)
  password: string;


  @ApiProperty({
    type: [String],
    description: 'Id плейлистов',
    example: ['66b0e5fb43477e523f52aa95'],
  })
  @IsArray()
  playlists?: string[];
}
