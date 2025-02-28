import { Injectable } from '@nestjs/common';
import { Flower } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateFlowersDto } from './createFlowers.dto';
import { ConfigService } from '@nestjs/config';
import { EnumAppMode } from '../types';

@Injectable()
export class FlowersService {
	constructor(
		private readonly prismaService: PrismaService,
		private  readonly configService: ConfigService
	) {
	}
	create(createFlowerDto: CreateFlowersDto){
		return this.prismaService.flower.create({
			data: createFlowerDto
		})
	}

	findAll(){
		console.log(this.configService.get<EnumAppMode>('MODE'));
		return  this.prismaService.flower.findMany();
	}
}
