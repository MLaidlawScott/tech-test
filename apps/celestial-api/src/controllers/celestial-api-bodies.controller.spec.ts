import { Test } from '@nestjs/testing';
import { PrismaClientService } from '@pe-test/prisma-client';
import { CelestialApiBodiesController } from './celestial-api-bodies.controller';
import { CelestialApiBodiesService } from '@pe-test/celestial-api/bodies';

describe('CelestialApiBodiesController', () => {
  let controller: CelestialApiBodiesController;
  let service: CelestialApiBodiesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CelestialApiBodiesService, PrismaClientService],
      controllers: [CelestialApiBodiesController],
    }).compile();

    controller = module.get(CelestialApiBodiesController);
    service = module.get(CelestialApiBodiesService);
  });

  describe('getBodies', () => {
    it('should return an array of celestial bodies', async () => {
      const result = [
        {
          id: 1,
          name: 'test planet',
          imageUrl: 'www.image.com/planet',
          age: '45000000',
          solarMass: '55000000',
        },
      ];
      jest
        .spyOn(service, 'getBodies')
        .mockImplementation(async () => await result);

      expect(await controller.getAllBodies()).toBe(result);
    });
  });
});
