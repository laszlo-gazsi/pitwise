import { PartialType } from '@nestjs/mapped-types';
import { CreateMakeDto } from './create-make.dto.js';

export class UpdateMakeDto extends PartialType(CreateMakeDto) {}
