import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [RenderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
