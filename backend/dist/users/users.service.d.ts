import { PrismaService } from '../prisma/prisma.service.js';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<({
        organization: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            logoUrl: string | null;
            gst: string | null;
            address: string | null;
        } | null;
        role: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
        };
    } & {
        id: string;
        email: string;
        passwordHash: string;
        firstName: string;
        lastName: string;
        phone: string | null;
        isActive: boolean;
        organizationId: string | null;
        roleId: string;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
    findById(id: string): Promise<{
        organization: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            logoUrl: string | null;
            gst: string | null;
            address: string | null;
        } | null;
        role: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
        };
    } & {
        id: string;
        email: string;
        passwordHash: string;
        firstName: string;
        lastName: string;
        phone: string | null;
        isActive: boolean;
        organizationId: string | null;
        roleId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createUser(data: any): Promise<{
        id: string;
        email: string;
        passwordHash: string;
        firstName: string;
        lastName: string;
        phone: string | null;
        isActive: boolean;
        organizationId: string | null;
        roleId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        organization: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            logoUrl: string | null;
            gst: string | null;
            address: string | null;
        } | null;
        role: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
        };
    } & {
        id: string;
        email: string;
        passwordHash: string;
        firstName: string;
        lastName: string;
        phone: string | null;
        isActive: boolean;
        organizationId: string | null;
        roleId: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    updateUser(id: string, data: any): Promise<{
        id: string;
        email: string;
        passwordHash: string;
        firstName: string;
        lastName: string;
        phone: string | null;
        isActive: boolean;
        organizationId: string | null;
        roleId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteUser(id: string): Promise<{
        id: string;
        email: string;
        passwordHash: string;
        firstName: string;
        lastName: string;
        phone: string | null;
        isActive: boolean;
        organizationId: string | null;
        roleId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
