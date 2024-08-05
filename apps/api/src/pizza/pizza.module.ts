import { Module } from '@nestjs/common';
import { PizzaController } from './pizza.controller';

@Module({
  imports: [],
  controllers: [PizzaController],
  providers: [],
  exports: [],
})
export class PizzaModule {}
