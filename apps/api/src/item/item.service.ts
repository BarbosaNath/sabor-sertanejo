import { Injectable } from '@nestjs/common';
import { CreateItemDTO } from './dto/create-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePutItemDTO } from './dto/update-put-item.dto';
import { UpdatePatchItemDTO } from './dto/update-patch-item.dto';

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
    });
  }

  async list() {
    return this.prisma.item.findMany();
  }

  async show(id: string) {
    return this.prisma.item.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: UpdatePutItemDTO) {
    return this.prisma.item.update({
      where: { id },
      data: {
        name: data.name,
        category: data.category,
        description: data.description,
        estimatedTime: data.estimatedTime,
        imageURL: data.imageURL,
        originalPrice: data.originalPrice,
        price: data.price,
        stock: data.stock,
        offer: data.isOffer,
      },
    });
  }

  async updatePartial(id: string, data: UpdatePatchItemDTO) {
    return this.prisma.item.update({
      where: { id },
      data: {
        name: data.name,
        category: data.category,
        description: data.description,
        estimatedTime: data.estimatedTime,
        imageURL: data.imageURL,
        originalPrice: data.originalPrice,
        price: data.price,
        stock: data.stock,
        offer: data.isOffer,
      },
    });
  }

  async delete(id: string) {
    return this.prisma.item.delete({
      where: { id },
    });
  }
}
