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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaController = void 0;
const common_1 = require("@nestjs/common");
const create_pizza_dto_1 = require("./dto/create-pizza.dto");
const update_put_pizza_dto_1 = require("./dto/update-put-pizza.dto");
const update_patch_pizza_dto_1 = require("./dto/update-patch-pizza.dto");
let PizzaController = class PizzaController {
    async create(body) {
        return { body };
    }
    async list() {
        return { users: [] };
    }
    async show(id) {
        return { user: {}, id };
    }
    async update(id, body) {
        return { method: 'put', body, id };
    }
    async updatePartial(id, body) {
        return { method: 'patch', body, id };
    }
    async delete(id) {
        return { method: 'delete', id };
    }
};
exports.PizzaController = PizzaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pizza_dto_1.CreatePizzaDTO]),
    __metadata("design:returntype", Promise)
], PizzaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PizzaController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PizzaController.prototype, "show", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_put_pizza_dto_1.UpdatePutPizzaDTO]),
    __metadata("design:returntype", Promise)
], PizzaController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_patch_pizza_dto_1.UpdatePatchPizzaDTO]),
    __metadata("design:returntype", Promise)
], PizzaController.prototype, "updatePartial", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PizzaController.prototype, "delete", null);
exports.PizzaController = PizzaController = __decorate([
    (0, common_1.Controller)('pizzas')
], PizzaController);
//# sourceMappingURL=pizza.controller.js.map