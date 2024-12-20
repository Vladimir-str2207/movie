import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty({
    type: String,
    description: 'email',
    example: 'lima@mail.ru',
  })
  email: string;

  @ApiProperty({
    type: String,
    description: 'пароль',
    example: '1234u',
  })
  password: string;
}
