import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { ChannelChats } from './src/entities/ChannelChats';
import { ChannelMembers } from './src/entities/ChannelMembers';
import { Channels } from './src/entities/Channels';
import { DMs } from './src/entities/DMs';
import { Mentions } from './src/entities/Mentions';
import { Users } from './src/entities/Users';
import { WorkspaceMembers } from './src/entities/WorkspaceMembers';
import { Workspaces } from './src/entities/Workspaces';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    ChannelChats,
    ChannelMembers,
    Channels,
    DMs,
    Mentions,
    Users,
    WorkspaceMembers,
    Workspaces,
  ],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  // charset: 'UTF8',
  synchronize: false,
  logging: true /* 개발할때는 true, 
   ts를 자동변환하는데 비효율적인 경우 확인차..
   코드가 복잡해 질 수록 ORM이 비효율적일 확율이 올라간다 
   ORM이 만드는 쿼리를 확인하고 튜닝해야함 */,
  keepConnectionAlive: true /* true가 아닌경우, 
  서버재시작시 typeORM이 DB연결을 끊어버림 
  For Hot Reloading*/,
};

export = config;
