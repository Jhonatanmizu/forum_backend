import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UsersModule,
    // TypeOrmModule.forRoot({
    //   type: 'mariadb',
    //   host: process.env.DATABASE_HOST,
    //   port: Number(process.env.DATABASE_PORT),
    //   username: process.env.DATABASE_USER,
    //   password: process.env.DATABASE_PASSWORD,
    //   database: process.env.DATABASE_NAME,
    //   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
    // TypeOrmModule.forRoot({
    //   type: 'mariadb',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'my-secret',
    //   database: 'mydb',
    //   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
