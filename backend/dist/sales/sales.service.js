var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
let SalesService = class SalesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createOrder(data) {
        return this.prisma.salesOrder.create({ data });
    }
    async getOrders() {
        return this.prisma.salesOrder.findMany({
            include: { customer: true },
        });
    }
    async getOrderById(id) {
        const order = await this.prisma.salesOrder.findUnique({
            where: { id },
            include: { customer: true },
        });
        if (!order)
            throw new NotFoundException(`Order ${id} not found`);
        return order;
    }
    async updateOrderStatus(id, status) {
        await this.getOrderById(id);
        return this.prisma.salesOrder.update({
            where: { id },
            data: { status },
        });
    }
};
SalesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], SalesService);
export { SalesService };
//# sourceMappingURL=sales.service.js.map