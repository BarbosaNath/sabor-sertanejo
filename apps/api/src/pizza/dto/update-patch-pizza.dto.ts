import { CreatePizzaDTO } from './create-pizza.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePatchPizzaDTO extends PartialType(CreatePizzaDTO) {}
