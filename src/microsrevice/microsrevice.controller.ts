import { Controller } from '@nestjs/common';
import { MicrosreviceService } from './microsrevice.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MicrosreviceController {
  constructor(private readonly microsreviceService: MicrosreviceService) {}

  @EventPattern('message')
  handleMessage(message: string){
    this.microsreviceService.handleMessage(message)
  }
}
