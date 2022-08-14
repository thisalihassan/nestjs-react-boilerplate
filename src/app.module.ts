import { Module } from '@nestjs/common';
import { AppController } from '@src/app.controller';
// import { AppService } from '@src/app.service';
import { DatabaseModule } from '@src/database/database.module';
import { UsersModule } from '@src/users/users.module';
import { ProjectModule } from '@src/project/project.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: resolve('client/dist'),
    }),
    DatabaseModule,
    UsersModule,
    ProjectModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
