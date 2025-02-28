import { Body, Controller, Get, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from '../conception/parseInt.pipe';
import { AuthGuard } from '../conception/auth.guard';
import { CreateFlowersDto } from './createFlowers.dto';

@Controller('flowers')
export class FlowersController {
	constructor(private readonly flowersService: FlowersService) {
	}

	@Get()
	@UseGuards(AuthGuard)
	findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
		return this.flowersService.findAll();
	}

	@Post()
	@UsePipes(new ValidationPipe())
	create(@Body() dto: CreateFlowersDto){
		return this.flowersService.create(dto);
	}

	// @Get('new-order')
	// newOrder(){
	//
	// }
}
