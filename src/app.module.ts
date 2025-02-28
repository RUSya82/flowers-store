import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FlowersModule } from './flowers/flowers.module';
import { LoggerMiddleware } from './conception/loggerMiddleware';
import { ConfigModule } from '@nestjs/config';
import { MicrosreviceModule } from './microsrevice/microsrevice.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { FlowersGqlModule } from './flowers-gql/flowers-gql.module';
import * as path from 'path';
import { WebsocketGateway } from './websocket.gateway';

@Module({
	imports: [
		FlowersModule,
		ConfigModule.forRoot({ isGlobal: true }),
		MicrosreviceModule,
        ClientsModule.register([
          {
            name: 'ORDER_SERVICE',
            transport: Transport.TCP,
            options:{
              host: 'localhost',
              port: 8877
            }
          }
        ]),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
			sortSchema: true
		}),
		FlowersGqlModule,
	],
  controllers: [AppController],
  providers: [AppService, WebsocketGateway]
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer): any {
		consumer.apply(LoggerMiddleware).forRoutes('flowers');
	}
}
