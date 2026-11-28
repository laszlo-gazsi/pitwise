import { Module } from '@nestjs/common';
import { AuthGuard } from './auth.guard.js';
import { APP_GUARD } from '@nestjs/core';

@Module({
  providers: [{ provide: APP_GUARD, useClass: AuthGuard }],
})
export class AuthModule {}
