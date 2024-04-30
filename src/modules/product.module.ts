import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../models/product.entity';
import { Module } from '@nestjs/common';
import { ProductsServices } from '../services/ProductsServices';
import { ProductsController } from '../controllers/ProductsController';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  exports: [TypeOrmModule],
  providers: [ProductsServices],
  controllers: [ProductsController],
})
export class ProductModule {}
