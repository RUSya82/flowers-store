import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform{
	transform(value: string, metadata: ArgumentMetadata): number {
		const val = parseInt(value);
		if(isNaN(val)){
			throw new BadRequestException('Param is not number')
		}
		return val;
	}
}