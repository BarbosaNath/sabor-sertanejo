import { CreateItemDTO } from './create-item.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePatchItemDTO extends PartialType(CreateItemDTO) {}
