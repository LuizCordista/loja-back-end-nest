import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Product } from './models/product.entity';
import { ProductModule } from './modules/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'luizcordista',
      password: '123',
      database: 'nest_store',
      entities: [Product],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProductModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
