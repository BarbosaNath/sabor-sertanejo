import { CreateItemDTO } from './dto/create-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';
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
}
