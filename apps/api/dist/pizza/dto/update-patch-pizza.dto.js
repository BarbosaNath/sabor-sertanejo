"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePatchPizzaDTO = void 0;
const create_pizza_dto_1 = require("./create-pizza.dto");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdatePatchPizzaDTO extends (0, mapped_types_1.PartialType)(create_pizza_dto_1.CreatePizzaDTO) {
}
exports.UpdatePatchPizzaDTO = UpdatePatchPizzaDTO;
//# sourceMappingURL=update-patch-pizza.dto.js.map