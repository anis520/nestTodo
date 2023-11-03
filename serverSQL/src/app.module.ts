import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'roundho',
      port: 54168,
      username: 'root',
        password: 'D1GGhbF',
      database: 'railway',
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // logging: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
