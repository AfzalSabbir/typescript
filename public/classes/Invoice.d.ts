import { GetData } from '../interfaces/GetData.js';
export declare class Invoice implements GetData {
    private name;
    private invoice_id;
    constructor(name: string, invoice_id: number);
    getData(): {
        name: string;
        invoice_id: number;
    };
}
