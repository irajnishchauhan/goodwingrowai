import { SalesService } from './sales.service.js';
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    createOrder(body: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        orderNumber: string;
        totalAmount: number;
        tax: number;
        grandTotal: number;
        customerId: string;
    }>;
    getOrders(): Promise<({
        customer: {
            id: string;
            email: string | null;
            phone: string | null;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            address: string | null;
            company: string | null;
            whatsapp: string | null;
            city: string | null;
            state: string | null;
            customerType: string;
            assignedToId: string | null;
            gstin: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        orderNumber: string;
        totalAmount: number;
        tax: number;
        grandTotal: number;
        customerId: string;
    })[]>;
    getOrderById(id: string): Promise<{
        customer: {
            id: string;
            email: string | null;
            phone: string | null;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            address: string | null;
            company: string | null;
            whatsapp: string | null;
            city: string | null;
            state: string | null;
            customerType: string;
            assignedToId: string | null;
            gstin: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        orderNumber: string;
        totalAmount: number;
        tax: number;
        grandTotal: number;
        customerId: string;
    }>;
    updateOrderStatus(id: string, status: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        orderNumber: string;
        totalAmount: number;
        tax: number;
        grandTotal: number;
        customerId: string;
    }>;
}
