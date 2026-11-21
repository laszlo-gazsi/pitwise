import {
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  @IsOptional()
  @MaxLength(10)
  licensePlate?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  name?: string;

  @IsString()
  @IsOptional()
  @Length(17, 17)
  vin?: string;

  @IsInt()
  @IsOptional()
  @IsPositive()
  makeId?: number;
}
