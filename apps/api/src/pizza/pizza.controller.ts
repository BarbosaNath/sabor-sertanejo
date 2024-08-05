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
import { CreatePizzaDTO } from './dto/create-pizza.dto';
import { UpdatePutPizzaDTO } from './dto/update-put-pizza.dto';
import { UpdatePatchPizzaDTO } from './dto/update-patch-pizza.dto';

@Controller('pizzas')
export class PizzaController {
  @Post()
  async create(@Body() body: CreatePizzaDTO) {
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
  async update(@Param('id', ParseIntPipe) id, @Body() body: UpdatePutPizzaDTO) {
    return { method: 'put', body, id };
  }

  @Patch(':id')
  async updatePartial(
    @Param('id', ParseIntPipe) id,
    @Body() body: UpdatePatchPizzaDTO,
  ) {
    return { method: 'patch', body, id };
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return { method: 'delete', id };
  }
}
