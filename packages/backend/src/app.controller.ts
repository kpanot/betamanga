import { All, Controller, Get, NotFoundException } from '@nestjs/common';
import {
  ApiExcludeEndpoint,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { openApiSpecificationFilePath } from './utils/open-api/paths.constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api')
  @ApiOperation({
    description: 'Retrieve the OpenApi 3.0 Specification',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Open API Specification for the BetaManga API',
    schema: {
      $ref: 'https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/schemas/v3.0/schema.json',
    },
  })
  public async getApiSpecification() {
    return require(openApiSpecificationFilePath);
  }

  @ApiExcludeEndpoint()
  @All()
  public fallback(): string {
    throw new NotFoundException();
  }
}
