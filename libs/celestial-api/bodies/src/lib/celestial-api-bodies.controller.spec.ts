import { Test } from '@nestjs/testing';
import { CelestialApiBodiesController } from './celestial-api-bodies.controller';
import { CelestialApiBodiesService } from './celestial-api-bodies.service';

describe('CelestialApiBodiesController', () => {
  let controller: CelestialApiBodiesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CelestialApiBodiesService],
      controllers: [CelestialApiBodiesController],
    }).compile();

    controller = module.get(CelestialApiBodiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
