import { Module } from '@nestjs/common';
import { CelestialApiBodiesModule } from '@pe-test/celestial-api/bodies';
import { PrismaClientModule } from '@pe-test/prisma-client';

import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [CelestialApiBodiesModule, PrismaClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
