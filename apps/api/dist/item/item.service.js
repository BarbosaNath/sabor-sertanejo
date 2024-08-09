"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ItemService = class ItemService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create({ name, price, originalPrice, estimatedTime, imageURL, isOffer, stock, description, category, }) {
        return this.prisma.item.create({
            data: {
                name,
                price,
                originalPrice,
                estimatedTime,
                imageURL,
                offer: isOffer,
                stock,
                description,
                category,
            },
        });
    }
    async list() {
        return this.prisma.item.findMany();
    }
    async show(id) {
        return this.prisma.item.findUnique({
            where: { id },
        });
    }
    async update(id, data) {
        return this.prisma.item.update({
            where: { id },
            data: {
                name: data.name,
                category: data.category,
                description: data.description,
                estimatedTime: data.estimatedTime,
                imageURL: data.imageURL,
                originalPrice: data.originalPrice,
                price: data.price,
                stock: data.stock,
                offer: data.isOffer,
            },
        });
    }
    async updatePartial(id, data) {
        return this.prisma.item.update({
            where: { id },
            data: {
                name: data.name,
                category: data.category,
                description: data.description,
                estimatedTime: data.estimatedTime,
                imageURL: data.imageURL,
                originalPrice: data.originalPrice,
                price: data.price,
                stock: data.stock,
                offer: data.isOffer,
            },
        });
    }
    async delete(id) {
        return this.prisma.item.delete({
            where: { id },
        });
    }
};
exports.ItemService = ItemService;
exports.ItemService = ItemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ItemService);
//# sourceMappingURL=item.service.js.map