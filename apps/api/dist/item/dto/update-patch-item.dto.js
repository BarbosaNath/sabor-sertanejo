"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePatchItemDTO = void 0;
const create_item_dto_1 = require("./create-item.dto");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdatePatchItemDTO extends (0, mapped_types_1.PartialType)(create_item_dto_1.CreateItemDTO) {
}
exports.UpdatePatchItemDTO = UpdatePatchItemDTO;
//# sourceMappingURL=update-patch-item.dto.js.map