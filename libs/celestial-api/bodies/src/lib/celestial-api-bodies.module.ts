import { Module } from '@nestjs/common';
import { CelestialApiBodiesController } from './celestial-api-bodies.controller';
import { CelestialApiBodiesService } from './celestial-api-bodies.service';

@Module({
  controllers: [CelestialApiBodiesController],
  providers: [CelestialApiBodiesService],
  exports: [CelestialApiBodiesService],
})
export class CelestialApiBodiesModule {}
