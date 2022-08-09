import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_history',
      migrationsRun: true,
      logger: 'advanced-console',
      logging: process.env.NODE_ENV === 'development',
    }),
  ],
})
export class DatabaseModule {}
