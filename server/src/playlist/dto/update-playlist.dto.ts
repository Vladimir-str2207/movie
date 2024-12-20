import { PartialType } from '@nestjs/mapped-types';
import { CreatePlaylistDto } from './create-playlist.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayUnique,
  IsArray,
  IsBoolean,
  IsString,
  Length,
} from 'class-validator';

export class UpdatePlaylistDto extends PartialType(CreatePlaylistDto) {
  @ApiProperty({ type: String })
  @IsString()
  @Length(1, 20)
  title?: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  @ArrayUnique()
  movie?: string[];

  @ApiProperty({ type: Boolean })
  @IsBoolean()
  isPrivate?: boolean;
}
