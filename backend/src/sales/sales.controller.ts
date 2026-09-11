import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { SalesService } from './sales.service.js';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post('orders')
  createOrder(@Body() body: any) {
    return this.salesService.createOrder(body);
  }

  @Get('orders')
  getOrders() {
    return this.salesService.getOrders();
  }

  @Get('orders/:id')
  getOrderById(@Param('id') id: string) {
    return this.salesService.getOrderById(id);
  }

  @Put('orders/:id/status')
  updateOrderStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.salesService.updateOrderStatus(id, status);
  }
}
