import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsServices } from '../services/ProductsServices';
import { Product } from '../models/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsServices: ProductsServices) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product | null> {
    return this.productsServices.findOne(id);
  }

  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return this.productsServices.create(product);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.productsServices.remove(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() productData: Partial<Product>,
  ): Promise<Product> {
    return this.productsServices.update(id, productData);
  }
}
