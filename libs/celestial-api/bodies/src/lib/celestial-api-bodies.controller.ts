import { Controller } from '@nestjs/common';
import { CelestialApiBodiesService } from './celestial-api-bodies.service';

@Controller('celestial-api-bodies')
export class CelestialApiBodiesController {
  constructor(private celestialApiBodiesService: CelestialApiBodiesService) {}
}
