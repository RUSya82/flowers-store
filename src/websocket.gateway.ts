import {
	MessageBody,
	OnGatewayConnection,
	OnGatewayDisconnect,
	OnGatewayInit, SubscribeMessage,
	WebSocketGateway,
	WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class WebsocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
	@WebSocketServer() server: Server

	afterInit(server: Server) {
	}

	handleConnection(client: Socket, ...args: any[]): any {
	}

	@SubscribeMessage('message')
	handleDisconnect(client: Socket): any {
	}
	handleMessage(@MessageBody() message: string):void{
		console.log('Message:', message);
		this.server.emit('message', `Echo: ${message}`)
	}
}