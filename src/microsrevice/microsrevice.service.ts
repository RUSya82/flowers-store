import { Injectable } from '@nestjs/common';

@Injectable()
export class MicrosreviceService {
	handleMessage(message: string){
		console.log(`Microservice received message ${message}`);
	}
}
