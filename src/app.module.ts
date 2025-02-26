import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FlowersModule } from './flowers/flowers.module';
import { LoggerMiddleware } from './conception/loggerMiddleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [FlowersModule, ConfigModule.forRoot({isGlobal: true})],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('flowers')
  }
}
