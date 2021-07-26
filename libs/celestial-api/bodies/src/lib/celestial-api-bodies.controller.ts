import { Controller, Get } from '@nestjs/common';
import { CelestialApiBodiesService } from './celestial-api-bodies.service';

@Controller('bodies')
export class CelestialApiBodiesController {
  constructor(private celestialApiBodiesService: CelestialApiBodiesService) {}

  @Get()
  getAllBodies() {
    return this.celestialApiBodiesService.getBodies();
  }
}
