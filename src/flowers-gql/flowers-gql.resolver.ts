import { Query, Resolver } from '@nestjs/graphql';
import { FlowersService } from '../flowers/flowers.service';
import { FlowerModel } from './flower.model';

@Resolver()
export class FlowersGqlResolver {
  constructor(private readonly flowersService: FlowersService) {}

  @Query(() => [FlowerModel], {name: 'flowers'})
  findAll(){
    return this.flowersService.findAll();
  }
}
