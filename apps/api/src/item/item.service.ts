import { Injectable } from '@nestjs/common';
import { CreateItemDTO } from './dto/create-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemService {
  constructor(private readonly prisma: PrismaService) {}
  async create({
    name,
    price,
    originalPrice,
    estimatedTime,
    imageURL,
    isOffer,
    stock,
    description,
    category,
  }: CreateItemDTO) {
    return this.prisma.item.create({
      data: {
        name,
        price,
        originalPrice,
        estimatedTime,
        imageURL,
        offer: isOffer,
        stock,
        description,
        category,
      },
      select: {
        id: true,
      },
    });
  }
}
