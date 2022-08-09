import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'secret',
      database: 'projectz',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_history',
      migrationsRun: true,
    }),
  ],
})
export class DatabaseModule {}
