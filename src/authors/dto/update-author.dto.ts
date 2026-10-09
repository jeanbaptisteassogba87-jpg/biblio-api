import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateAuthorDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;
}
