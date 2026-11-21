import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMakeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;
}
