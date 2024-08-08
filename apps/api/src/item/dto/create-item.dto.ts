import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  Matches,
} from 'class-validator';
import { Category } from '@prisma/client';

export class CreateItemDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  originalPrice: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  estimatedTime: number;

  @IsNotEmpty()
  @IsString()
  imageURL: string;

  @IsNotEmpty()
  isOffer: boolean;

  @Matches(
    `^${Object.values(Category)
      .filter((v) => typeof v !== 'number')
      .join('|')}$`,
    'i',
  )
  category: Category;

  @IsNotEmpty()
  stock: number;

  // favoritedBy: string[];
  // order: string[];

  // createdAt: Date;
  // updatedAt: Date;
}
