import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../models/product.entity';
import { Module } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { ProductsController } from '../controllers/ProductsController';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  exports: [TypeOrmModule],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductModule {}
