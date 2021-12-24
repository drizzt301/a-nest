import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import * as ormconfig from '../ormconfig';
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ChannelsModule } from './channels/channels.module';
import { DmsModule } from './dms/dms.module';
import { UsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/Users';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    WorkspacesModule,
    ChannelsModule,
    DmsModule,
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([Users]),
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
  //exports: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

/*
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['entities/*.js'], //entities 폴더의 파일들 import 해서 명칭 넣어놓기..
  synchronize: false, //생성시에만 true, 나머지경우 false 맞추기
  logging: true, // 개발시에만 true - orm이 어떤 쿼리를 생성하는가 확인해야한다.
  keepConnectionAlive: true, // true 가 아닐경우, 서버재시작 시 연결해제
}),
*/
