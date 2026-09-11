import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CrmService {
  constructor(private readonly prisma: PrismaService) {}

  // --- LEADS ---
  async createLead(data: any) {
    return this.prisma.lead.create({ data });
  }

  async getLeads() {
    return this.prisma.lead.findMany();
  }

  async getLeadById(id: string) {
    const lead = await this.prisma.lead.findUnique({ where: { id } });
    if (!lead) throw new NotFoundException(`Lead with ID ${id} not found`);
    return lead;
  }

  async updateLead(id: string, data: any) {
    await this.getLeadById(id); // Ensure exists
    return this.prisma.lead.update({ where: { id }, data });
  }

  async deleteLead(id: string) {
    await this.getLeadById(id); // Ensure exists
    return this.prisma.lead.delete({ where: { id } });
  }

  // --- CUSTOMERS ---
  async createCustomer(data: any) {
    return this.prisma.customer.create({ data });
  }

  async getCustomers() {
    return this.prisma.customer.findMany();
  }

  async getCustomerById(id: string) {
    const customer = await this.prisma.customer.findUnique({ where: { id } });
    if (!customer) throw new NotFoundException(`Customer with ID ${id} not found`);
    return customer;
  }

  async updateCustomer(id: string, data: any) {
    await this.getCustomerById(id);
    return this.prisma.customer.update({ where: { id }, data });
  }

  async deleteCustomer(id: string) {
    await this.getCustomerById(id);
    return this.prisma.customer.delete({ where: { id } });
  }
}
