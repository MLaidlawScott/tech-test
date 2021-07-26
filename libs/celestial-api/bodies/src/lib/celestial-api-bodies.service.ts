import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '@pe-test/prisma-client';
import { CelestialBody } from '@prisma/client';

@Injectable()
export class CelestialApiBodiesService {
  constructor(private prisma: PrismaClientService) {}

  async getBodies(): Promise<CelestialBody[]> {
    return this.prisma.celestialBody.findMany();
  }
}
