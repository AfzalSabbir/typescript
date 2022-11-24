export class Invoice {
    constructor(name, invoice_id) {
        this.name = name;
        this.invoice_id = invoice_id;
    }
    getData() {
        return { name: this.name, invoice_id: this.invoice_id };
    }
}
