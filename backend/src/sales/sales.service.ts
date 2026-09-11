import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class SalesService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrder(data: any) {
    return this.prisma.salesOrder.create({ data });
  }

  async getOrders() {
    return this.prisma.salesOrder.findMany({
      include: { customer: true },
    });
  }

  async getOrderById(id: string) {
    const order = await this.prisma.salesOrder.findUnique({
      where: { id },
      include: { customer: true },
    });
    if (!order) throw new NotFoundException(`Order ${id} not found`);
    return order;
  }

  async updateOrderStatus(id: string, status: string) {
    await this.getOrderById(id);
    return this.prisma.salesOrder.update({
      where: { id },
      data: { status },
    });
  }
}
