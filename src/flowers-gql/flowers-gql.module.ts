import { Module } from '@nestjs/common';
import { FlowersGqlService } from './flowers-gql.service';
import { FlowersGqlResolver } from './flowers-gql.resolver';
import { FlowersService } from '../flowers/flowers.service';
import { PrismaService } from '../prisma.service';
import { FlowersModule } from '../flowers/flowers.module';

@Module({
  providers: [FlowersGqlResolver, FlowersGqlService, PrismaService],
  imports: [FlowersModule]
})
export class FlowersGqlModule {}
