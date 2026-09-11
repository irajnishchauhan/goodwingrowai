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
let CrmService = class CrmService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createLead(data) {
        return this.prisma.lead.create({ data });
    }
    async getLeads() {
        return this.prisma.lead.findMany();
    }
    async getLeadById(id) {
        const lead = await this.prisma.lead.findUnique({ where: { id } });
        if (!lead)
            throw new NotFoundException(`Lead with ID ${id} not found`);
        return lead;
    }
    async updateLead(id, data) {
        await this.getLeadById(id);
        return this.prisma.lead.update({ where: { id }, data });
    }
    async deleteLead(id) {
        await this.getLeadById(id);
        return this.prisma.lead.delete({ where: { id } });
    }
    async createCustomer(data) {
        return this.prisma.customer.create({ data });
    }
    async getCustomers() {
        return this.prisma.customer.findMany();
    }
    async getCustomerById(id) {
        const customer = await this.prisma.customer.findUnique({ where: { id } });
        if (!customer)
            throw new NotFoundException(`Customer with ID ${id} not found`);
        return customer;
    }
    async updateCustomer(id, data) {
        await this.getCustomerById(id);
        return this.prisma.customer.update({ where: { id }, data });
    }
    async deleteCustomer(id) {
        await this.getCustomerById(id);
        return this.prisma.customer.delete({ where: { id } });
    }
};
CrmService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], CrmService);
export { CrmService };
//# sourceMappingURL=crm.service.js.map