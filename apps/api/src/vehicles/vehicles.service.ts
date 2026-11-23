import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { isForeignKeyConflictError } from '../prisma/isError.fn.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateVehicleDto } from './dto/create-vehicle.dto.js';
import { UpdateVehicleDto } from './dto/update-vehicle.dto.js';

@Injectable()
export class VehiclesService {
  private readonly prismaService: PrismaService;

  constructor(prismaService: PrismaService) {
    this.prismaService = prismaService;
  }

  async create(createVehicleDto: CreateVehicleDto) {
    try {
      return await this.prismaService.vehicle.create({
        data: createVehicleDto,
        include: { make: true },
      });
    } catch (e) {
      if (isForeignKeyConflictError(e)) {
        throw new BadRequestException(`Make id "${createVehicleDto.makeId}" does not exist!`);
      }
      throw e;
    }
  }

  findAll() {
    return this.prismaService.vehicle.findMany({ include: { make: true } });
  }

  async findOne(id: number) {
    const result = await this.prismaService.vehicle.findUnique({
      where: { id },
      include: { make: true },
    });

    if (!result) {
      throw new NotFoundException(`Vehicle ${id} not found!`);
    }

    return result;
  }

  async update(id: number, updateVehicleDto: UpdateVehicleDto) {
    await this.findOne(id);

    try {
      return await this.prismaService.vehicle.update({
        where: { id },
        data: updateVehicleDto,
        include: { make: true },
      });
    } catch (e) {
      if (isForeignKeyConflictError(e)) {
        throw new BadRequestException(`Make id ${updateVehicleDto.makeId} does not exist!`);
      }
      throw e;
    }
  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.prismaService.vehicle.delete({ where: { id } });
  }
}
