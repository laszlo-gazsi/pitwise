import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateVehicleDto } from './dto/create-vehicle.dto.js';
import { UpdateVehicleDto } from './dto/update-vehicle.dto.js';

@Injectable()
export class VehiclesService {
  private readonly prismaService: PrismaService;

  constructor(prismaService: PrismaService) {
    this.prismaService = prismaService;
  }

  create(createVehicleDto: CreateVehicleDto) {
    return this.prismaService.vehicle.create({ data: createVehicleDto });
  }

  findAll() {
    return this.prismaService.vehicle.findMany();
  }

  findOne(id: number) {
    return this.prismaService.vehicle.findUnique({ where: { id } });
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return this.prismaService.vehicle.update({
      where: { id },
      data: updateVehicleDto,
    });
  }

  remove(id: number) {
    return this.prismaService.vehicle.delete({ where: { id } });
  }
}
