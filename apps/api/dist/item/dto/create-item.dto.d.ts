import { Category } from '@prisma/client';
export declare class CreateItemDTO {
    name: string;
    price: number;
    originalPrice: number;
    description: string;
    estimatedTime: number;
    imageURL: string;
    isOffer: boolean;
    category: Category;
    stock: number;
}
