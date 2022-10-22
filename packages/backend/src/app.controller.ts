import { All, Controller, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @All()
  public fallback(): string {
    throw new NotFoundException();
  }
}
