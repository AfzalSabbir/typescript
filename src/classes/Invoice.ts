import {GetData} from '../interfaces/GetData.js';

export class Invoice implements GetData {
    constructor(
        private name: string,
        private invoice_id: number
    ) {
    }

    getData() {
        return {name: this.name, invoice_id: this.invoice_id}
    }
}