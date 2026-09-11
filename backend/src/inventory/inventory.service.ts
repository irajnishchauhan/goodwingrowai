import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.inventory.findMany({
      include: {
        product: true,
        warehouse: true,
      },
    });
  }

  async getWarehouses() {
    return this.prisma.warehouse.findMany();
  }

  async updateStock(id: string, data: any) {
    return this.prisma.inventory.update({
      where: { id },
      data,
    });
  }
}
