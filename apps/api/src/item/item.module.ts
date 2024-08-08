import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';

@Module({
  imports: [],
  controllers: [ItemController],
  providers: [],
  exports: [],
})
export class ItemModule {}
