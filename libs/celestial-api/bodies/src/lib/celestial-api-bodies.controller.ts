import { Controller, Get } from '@nestjs/common';
import { ICelestialBody } from '@pe-test/shared-models';

import { CelestialApiBodiesService } from './celestial-api-bodies.service';

@Controller('bodies')
export class CelestialApiBodiesController {
  constructor(private celestialApiBodiesService: CelestialApiBodiesService) {}

  @Get()
  async getAllBodies(): Promise<ICelestialBody[]> {
    return await this.celestialApiBodiesService.getBodies();
  }
}
