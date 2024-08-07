import { CreateItemDTO } from './dto/create-item.dto';
import { UpdatePutItemDTO } from './dto/update-put-item.dto';
import { UpdatePatchItemDTO } from './dto/update-patch-item.dto';
export declare class ItemController {
    create(body: CreateItemDTO): Promise<{
        body: CreateItemDTO;
    }>;
    list(): Promise<{
        users: any[];
    }>;
    show(id: any): Promise<{
        user: {};
        id: any;
    }>;
    update(id: any, body: UpdatePutItemDTO): Promise<{
        method: string;
        body: UpdatePutItemDTO;
        id: any;
    }>;
    updatePartial(id: any, body: UpdatePatchItemDTO): Promise<{
        method: string;
        body: UpdatePatchItemDTO;
        id: any;
    }>;
    delete(id: any): Promise<{
        method: string;
        id: any;
    }>;
}
