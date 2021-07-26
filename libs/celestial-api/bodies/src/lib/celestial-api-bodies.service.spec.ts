import { Test } from '@nestjs/testing';
import { CelestialApiBodiesService } from './celestial-api-bodies.service';

describe('CelestialApiBodiesService', () => {
  let service: CelestialApiBodiesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CelestialApiBodiesService],
    }).compile();

    service = module.get(CelestialApiBodiesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
