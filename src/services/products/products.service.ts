import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/product.dto';
import { ProductEntity } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;

  private products: Array<ProductEntity> = [
    {
      id: 1,
      description: 'Product 01',
      name: 'Product 01',
      price: 1,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findById(id: number) {
    return this.products.find(
      (productEntity: ProductEntity) => productEntity.id === id,
    );
  }

  createProduct(payload: CreateProductDto) {
    this.counterId += 1;
    const product = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(product);

    return product;
  }

  updateProduct(idProduct: number, payload: UpdateProductDto) {
    const productUpdate = this.findById(idProduct);

    if (productUpdate) {
      const indexProductForUpdate = this.products.findIndex(
        (product) => product.id === idProduct,
      );
      this.products[indexProductForUpdate] = { ...productUpdate, ...payload };
      return this.products[indexProductForUpdate];
    }

    return null;
  }

  deleteProduct(idProduct: number) {
    const indexProductForUpdate = this.products.findIndex(
      (product) => product.id === idProduct,
    );
    this.products.splice(indexProductForUpdate, 1);
  }
}
