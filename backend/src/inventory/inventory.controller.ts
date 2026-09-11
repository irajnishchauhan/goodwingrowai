import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { InventoryService } from './inventory.service.js';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  findAll() {
    return this.inventoryService.findAll();
  }

  @Get('warehouses')
  getWarehouses() {
    return this.inventoryService.getWarehouses();
  }

  @Put(':id')
  updateStock(@Param('id') id: string, @Body() body: any) {
    return this.inventoryService.updateStock(id, body);
  }
}
