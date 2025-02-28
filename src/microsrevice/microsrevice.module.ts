import { Module } from '@nestjs/common';
import { MicrosreviceService } from './microsrevice.service';
import { MicrosreviceController } from './microsrevice.controller';

@Module({
  controllers: [MicrosreviceController],
  providers: [MicrosreviceService],
})
export class MicrosreviceModule {}
