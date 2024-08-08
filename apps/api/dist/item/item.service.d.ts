import { CreateItemDTO } from './dto/create-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePutItemDTO } from './dto/update-put-item.dto';
import { UpdatePatchItemDTO } from './dto/update-patch-item.dto';
export declare class ItemService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create({ name, price, originalPrice, estimatedTime, imageURL, isOffer, stock, description, category, }: CreateItemDTO): Promise<{
        id: string;
        name: string;
        price: number;
        originalPrice: number;
        description: string;
        estimatedTime: number;
        imageURL: string;
        offer: boolean;
        category: import(".prisma/client").$Enums.Category;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    list(): Promise<{
        id: string;
        name: string;
        price: number;
        originalPrice: number;
        description: string;
        estimatedTime: number;
        imageURL: string;
        offer: boolean;
        category: import(".prisma/client").$Enums.Category;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    show(id: string): Promise<{
        id: string;
        name: string;
        price: number;
        originalPrice: number;
        description: string;
        estimatedTime: number;
        imageURL: string;
        offer: boolean;
        category: import(".prisma/client").$Enums.Category;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: UpdatePutItemDTO): Promise<{
        id: string;
        name: string;
        price: number;
        originalPrice: number;
        description: string;
        estimatedTime: number;
        imageURL: string;
        offer: boolean;
        category: import(".prisma/client").$Enums.Category;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updatePartial(id: string, data: UpdatePatchItemDTO): Promise<{
        id: string;
        name: string;
        price: number;
        originalPrice: number;
        description: string;
        estimatedTime: number;
        imageURL: string;
        offer: boolean;
        category: import(".prisma/client").$Enums.Category;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
