import {
  isIn,
  IsInt,
  isInt,
  IsNotEmpty,
  isNotEmpty,
  IsString,
  isString,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsInt()
  year: number;
}
