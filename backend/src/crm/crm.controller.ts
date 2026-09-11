import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CrmService } from './crm.service.js';
import { CreateLeadDto } from './dto/create-lead.dto.js';
import { UpdateLeadDto } from './dto/update-lead.dto.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';
import { UpdateCustomerDto } from './dto/update-customer.dto.js';

@Controller('crm')
export class CrmController {
  constructor(private readonly crmService: CrmService) {}

  // --- LEADS ---
  @Post('leads')
  createLead(@Body() createLeadDto: CreateLeadDto) {
    return this.crmService.createLead(createLeadDto);
  }

  @Get('leads')
  getLeads() {
    return this.crmService.getLeads();
  }

  @Get('leads/:id')
  getLeadById(@Param('id') id: string) {
    return this.crmService.getLeadById(id);
  }

  @Put('leads/:id')
  updateLead(@Param('id') id: string, @Body() updateLeadDto: UpdateLeadDto) {
    return this.crmService.updateLead(id, updateLeadDto);
  }

  @Delete('leads/:id')
  deleteLead(@Param('id') id: string) {
    return this.crmService.deleteLead(id);
  }

  // --- CUSTOMERS ---
  @Post('customers')
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.crmService.createCustomer(createCustomerDto);
  }

  @Get('customers')
  getCustomers() {
    return this.crmService.getCustomers();
  }

  @Get('customers/:id')
  getCustomerById(@Param('id') id: string) {
    return this.crmService.getCustomerById(id);
  }

  @Put('customers/:id')
  updateCustomer(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.crmService.updateCustomer(id, updateCustomerDto);
  }

  @Delete('customers/:id')
  deleteCustomer(@Param('id') id: string) {
    return this.crmService.deleteCustomer(id);
  }
}
