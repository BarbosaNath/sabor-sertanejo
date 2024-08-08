import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDTO } from './dto/create-item.dto';
import { UpdatePutItemDTO } from './dto/update-put-item.dto';
import { UpdatePatchItemDTO } from './dto/update-patch-item.dto';
import { ItemService } from './item.service';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  async create(@Body() body: CreateItemDTO) {
    return this.itemService.create(body);
  }

  @Get()
  async list() {
    return this.itemService.list();
  }

  @Get(':id')
  async show(@Param('id') id) {
    return this.itemService.show(id);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() body: UpdatePutItemDTO) {
    return this.itemService.update(id, body);
  }

  @Patch(':id')
  async updatePartial(@Param('id') id, @Body() body: UpdatePatchItemDTO) {
    return this.itemService.updatePartial(id, body);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return { method: 'delete', id };
  }
}
