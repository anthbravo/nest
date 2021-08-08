import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('resource/:id')
  getResource(@Param('id') id: string) {
    return id;
  }

  @Get('resource')
  getResourcePagination(
    @Query() queryParams: any,
    @Query('limit') limit: number,
    @Query('offset') offset: string,
  ) {
    console.log(queryParams);
    return `limit ${limit} - offset ${offset}`;
  }
}
