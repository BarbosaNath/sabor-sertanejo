import { CreateItemDTO } from './dto/create-item.dto';
import { UpdatePutItemDTO } from './dto/update-put-item.dto';
import { UpdatePatchItemDTO } from './dto/update-patch-item.dto';
import { ItemService } from './item.service';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    create(body: CreateItemDTO): Promise<{
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
    show(id: any): Promise<{
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
    update(id: any, body: UpdatePutItemDTO): Promise<{
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
    updatePartial(id: any, body: UpdatePatchItemDTO): Promise<{
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
    delete(id: any): Promise<{
        method: string;
        id: any;
    }>;
}
