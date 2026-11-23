import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateMakeDto } from './dto/create-make.dto.js';
import { UpdateMakeDto } from './dto/update-make.dto.js';
import { isForeignKeyConflictError, isUniqueConflictError } from '../prisma/isError.fn.js';

@Injectable()
export class MakesService {
  private readonly prismaService: PrismaService;

  constructor(prismaService: PrismaService) {
    this.prismaService = prismaService;
  }

  async create(createDto: CreateMakeDto) {
    try {
      return await this.prismaService.make.create({ data: createDto });
    } catch (e) {
      if (isUniqueConflictError(e)) {
        throw new ConflictException(`Make "${createDto.name}" already exists!`);
      }
      throw e;
    }
  }

  findAll() {
    return this.prismaService.make.findMany({ orderBy: { name: 'asc' } });
  }

  async findOne(id: number) {
    const make = await this.prismaService.make.findUnique({ where: { id } });

    if (!make) {
      throw new NotFoundException(`Make ${id} was not found!`);
    }

    return make;
  }

  async update(id: number, updateMakeDto: UpdateMakeDto) {
    await this.findOne(id);

    try {
      return await this.prismaService.make.update({
        where: { id },
        data: updateMakeDto,
      });
    } catch (e) {
      if (isUniqueConflictError(e)) {
        throw new ConflictException(`Make ${updateMakeDto.name} already exists!`);
      }
      throw e;
    }
  }

  async remove(id: number) {
    await this.findOne(id);

    try {
      return await this.prismaService.make.delete({ where: { id } });
    } catch (e) {
      if (isForeignKeyConflictError(e)) {
        throw new ConflictException(`Make ${id} is in use!`);
      }
      throw e;
    }
  }
}
