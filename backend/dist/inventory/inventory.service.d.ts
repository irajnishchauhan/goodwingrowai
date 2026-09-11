import { PrismaService } from '../prisma/prisma.service.js';
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        product: {
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            sku: string;
            batteryModel: string;
            batteryType: string | null;
            category: string | null;
            subcategory: string | null;
            brand: string | null;
            voltage: string | null;
            ah: string | null;
            cca: string | null;
            dimensions: string | null;
            weight: number | null;
            warrantyMonths: number | null;
            mrp: number;
            dealerPrice: number;
            distributorPrice: number;
            b2bPrice: number;
            costPrice: number | null;
            taxRate: number;
            hsn: string | null;
            barcode: string | null;
            isSerialTracked: boolean;
            isBatchTracked: boolean;
            amazonSku: string | null;
            amazonAsin: string | null;
        };
        warehouse: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            address: string | null;
            type: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        warehouseId: string;
        availableStock: number;
        reservedStock: number;
        inTransit: number;
        damaged: number;
        warrantyStock: number;
        reorderLevel: number;
        reorderQuantity: number;
    })[]>;
    getWarehouses(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        address: string | null;
        type: string;
    }[]>;
    updateStock(id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        warehouseId: string;
        availableStock: number;
        reservedStock: number;
        inTransit: number;
        damaged: number;
        warrantyStock: number;
        reorderLevel: number;
        reorderQuantity: number;
    }>;
}
