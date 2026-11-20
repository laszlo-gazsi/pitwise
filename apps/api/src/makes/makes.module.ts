import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { MakesController } from './makes.controller.js';
import { MakesService } from './makes.service.js';

@Module({
  imports: [PrismaModule],
  controllers: [MakesController],
  providers: [MakesService],
})
export class MakesModule {}
