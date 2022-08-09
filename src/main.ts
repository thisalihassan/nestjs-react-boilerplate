import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';
import helmet from 'helmet';
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
  app.use(helmet());

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
