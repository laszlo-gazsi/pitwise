import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { VehiclesModule } from './vehicles/vehicles.module.js';
import { MakesModule } from './makes/makes.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), VehiclesModule, MakesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
