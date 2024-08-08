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

@Controller('items')
export class ItemController {
  @Post()
  async create(@Body() body: CreateItemDTO) {
    return { body };
  }

  @Get()
  async list() {
    return { users: [] };
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id) {
    return { user: {}, id };
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id, @Body() body: UpdatePutItemDTO) {
    return { method: 'put', body, id };
  }

  @Patch(':id')
  async updatePartial(
    @Param('id', ParseIntPipe) id,
    @Body() body: UpdatePatchItemDTO,
  ) {
    return { method: 'patch', body, id };
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return { method: 'delete', id };
  }
}
