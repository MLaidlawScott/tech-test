import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthCheck(): { message: string } {
    return { message: 'celestial api running.' };
  }
}
