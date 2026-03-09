import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileGeneratedModule } from './file-generated/file-generated.module';

@Module({
  imports: [FileGeneratedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
