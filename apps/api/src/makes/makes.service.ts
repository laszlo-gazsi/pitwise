import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateMakeDto } from './dto/create-make.dto.js';
import { UpdateMakeDto } from './dto/update-make.dto.js';

@Injectable()
export class MakesService {
  private readonly prismaService: PrismaService;

  constructor(prismaService: PrismaService) {
    this.prismaService = prismaService;
  }

  create(createDto: CreateMakeDto) {
    return this.prismaService.make.create({ data: createDto });
  }

  findAll() {
    return this.prismaService.make.findMany({ orderBy: { name: 'asc' } });
  }

  findOne(id: number) {
    return this.prismaService.make.findUnique({ where: { id } });
  }

  update(id: number, updateMakeDto: UpdateMakeDto) {
    return this.prismaService.make.update({
      where: { id },
      data: updateMakeDto,
    });
  }

  remove(id: number) {
    return this.prismaService.make.delete({ where: { id } });
  }
}
