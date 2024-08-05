import { CreatePizzaDTO } from './dto/create-pizza.dto';
import { UpdatePutPizzaDTO } from './dto/update-put-pizza.dto';
import { UpdatePatchPizzaDTO } from './dto/update-patch-pizza.dto';
export declare class PizzaController {
    create(body: CreatePizzaDTO): Promise<{
        body: CreatePizzaDTO;
    }>;
    list(): Promise<{
        users: any[];
    }>;
    show(id: any): Promise<{
        user: {};
        id: any;
    }>;
    update(id: any, body: UpdatePutPizzaDTO): Promise<{
        method: string;
        body: UpdatePutPizzaDTO;
        id: any;
    }>;
    updatePartial(id: any, body: UpdatePatchPizzaDTO): Promise<{
        method: string;
        body: UpdatePatchPizzaDTO;
        id: any;
    }>;
    delete(id: any): Promise<{
        method: string;
        id: any;
    }>;
}
