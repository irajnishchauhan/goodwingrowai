var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CrmService } from './crm.service.js';
import { CreateLeadDto } from './dto/create-lead.dto.js';
import { UpdateLeadDto } from './dto/update-lead.dto.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';
import { UpdateCustomerDto } from './dto/update-customer.dto.js';
let CrmController = class CrmController {
    crmService;
    constructor(crmService) {
        this.crmService = crmService;
    }
    createLead(createLeadDto) {
        return this.crmService.createLead(createLeadDto);
    }
    getLeads() {
        return this.crmService.getLeads();
    }
    getLeadById(id) {
        return this.crmService.getLeadById(id);
    }
    updateLead(id, updateLeadDto) {
        return this.crmService.updateLead(id, updateLeadDto);
    }
    deleteLead(id) {
        return this.crmService.deleteLead(id);
    }
    createCustomer(createCustomerDto) {
        return this.crmService.createCustomer(createCustomerDto);
    }
    getCustomers() {
        return this.crmService.getCustomers();
    }
    getCustomerById(id) {
        return this.crmService.getCustomerById(id);
    }
    updateCustomer(id, updateCustomerDto) {
        return this.crmService.updateCustomer(id, updateCustomerDto);
    }
    deleteCustomer(id) {
        return this.crmService.deleteCustomer(id);
    }
};
__decorate([
    Post('leads'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateLeadDto]),
    __metadata("design:returntype", void 0)
], CrmController.prototype, "createLead", null);
__decorate([
    Get('leads'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CrmController.prototype, "getLeads", null);
__decorate([
    Get('leads/:id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CrmController.prototype, "getLeadById", null);
__decorate([
    Put('leads/:id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateLeadDto]),
    __metadata("design:returntype", void 0)
], CrmController.prototype, "updateLead", null);
__decorate([
    Delete('leads/:id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CrmController.prototype, "deleteLead", null);
__decorate([
    Post('customers'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCustomerDto]),
    __metadata("design:returntype", void 0)
], CrmController.prototype, "createCustomer", null);
__decorate([
    Get('customers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CrmController.prototype, "getCustomers", null);
__decorate([
    Get('customers/:id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CrmController.prototype, "getCustomerById", null);
__decorate([
    Put('customers/:id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateCustomerDto]),
    __metadata("design:returntype", void 0)
], CrmController.prototype, "updateCustomer", null);
__decorate([
    Delete('customers/:id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CrmController.prototype, "deleteCustomer", null);
CrmController = __decorate([
    Controller('crm'),
    __metadata("design:paramtypes", [CrmService])
], CrmController);
export { CrmController };
//# sourceMappingURL=crm.controller.js.map