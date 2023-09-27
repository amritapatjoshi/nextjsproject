import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['./env/.env', './env/.env.development'],
  }), 
    SampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
