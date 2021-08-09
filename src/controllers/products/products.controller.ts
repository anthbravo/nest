import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ParseIntPipe } from 'src/commons/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/product.dto';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getProducts() {
    return this.productsService.findAll();
  }

  @Get(':idProduct')
  getProductById(@Param('idProduct', ParseIntPipe) idProduct: any) {
    return this.productsService.findById(idProduct);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.createProduct(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.updateProduct(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.productsService.deleteProduct(+id);
  }
}
