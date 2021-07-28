import { Module } from '@nestjs/common';

import { CelestialApiBodiesService } from './celestial-api-bodies.service';

@Module({
  providers: [CelestialApiBodiesService],
  exports: [CelestialApiBodiesService],
})
export class CelestialApiBodiesModule {}
