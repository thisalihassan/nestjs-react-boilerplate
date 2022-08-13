import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';
import helmet from 'helmet';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
// import myDataSource from '@src/database/ormconfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });
  // myDataSource
  // .initialize()
  // .then(() => {
  //   console.log("Data Source has been initialized!");
  // })
  // .catch((err) => {
  //   console.error("Error during Data Source initialization:", err);
  // });

  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('ProjectZ')
    .setDescription('The ProjectZ API description')
    .setVersion('1.0')
    .addTag('projectz')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  writeFileSync(
    resolve(process.cwd(), 'swagger.json'),
    JSON.stringify(document, null, 4),
    { encoding: 'utf8' },
  );

  SwaggerModule.setup('/', app, document);
  app.use(helmet());

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
