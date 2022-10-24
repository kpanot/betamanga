import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { promises as fs } from 'node:fs';
import { resolve } from 'node:path';
import type { PackageJson } from 'type-fest';
import { openApiSpecificationFilePath } from './utils/open-api/paths.constants';
import type { INestApplication } from '@nestjs/common';

async function generateOpenApiDoc(app: INestApplication) {
  const pck: PackageJson = JSON.parse(
    await fs.readFile(resolve(__dirname, '..', 'package.json'), {
      encoding: 'utf-8',
    }),
  );
  const { name, url, email } =
    typeof pck.author !== 'string'
      ? pck.author
      : { name: pck.author, url: undefined, email: undefined };

  const config = new DocumentBuilder()
    .setTitle(pck.name)
    .setDescription(pck.description)
    .setVersion(pck.version)
    .setContact(name, url || 'none', email || 'none')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  await fs.writeFile(openApiSpecificationFilePath, JSON.stringify(document));
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await generateOpenApiDoc(app);
  await app.listen(process.env.PORT || 3000);
}

void bootstrap();
