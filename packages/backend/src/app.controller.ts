import { All, Controller, Get, NotFoundException } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { AppService } from './app.service';
import { openApiSpecificationFilePath } from './utils/open-api/paths.constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api')
  public async getApiSpecification() {
    return require(openApiSpecificationFilePath);
  }

  @ApiExcludeEndpoint()
  @All()
  public fallback(): string {
    throw new NotFoundException();
  }
}
