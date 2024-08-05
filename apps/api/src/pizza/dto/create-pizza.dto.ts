import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePizzaDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  //   @IsPositive()
  //   @IsNumber({ maxDecimalPlaces: 2 })
  price: number;

  @IsNotEmpty()
  //   @IsPositive()
  //   @IsNumber({ maxDecimalPlaces: 2 })
  'original-price': number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  //   @IsPositive()
  //   @IsNumber({ maxDecimalPlaces: 0 })
  'estimated-time': number;

  @IsNotEmpty()
  @IsString()
  'image-url': string;
}
