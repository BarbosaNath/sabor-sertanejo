import { Module } from '@nestjs/common';
import { ItemController } from './pizza.controller';

@Module({
  imports: [],
  controllers: [ItemController],
  providers: [],
  exports: [],
})
export class ItemModule {}
