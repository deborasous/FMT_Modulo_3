const Order = require('../models/order.models');
const Invoice = require('../models/invoice.models');

class InvoiceService {
  constructor() {
    this.invoice = new Invoice();
  }

  createOrder(user, items) {
    const order = new Order(user);
    items.forEach((item) => order.addItem(item));
    const total = order.calculateTotal();
    const record = this.invoice.generateInvoice(user, items, total);
    return { order, total, record };
  }
}

module.exports = InvoiceService;
