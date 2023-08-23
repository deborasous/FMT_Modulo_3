const User = require('./models/user.models');
const Item = require('./models/item.models');
const Product = require('./models/product.models');
const InvoiceService = require('./service/generateInvoice.service');

const product1 = new Product('Fralda Pampers', 10);
const product2 = new Product('Absorvente Sempre Livre', 5);

const user = new User('Catia');
const item1 = new Item(product1, 3);
const item2 = new Item(product2, 1);

const invoiceService = new InvoiceService();
const { record } = invoiceService.createOrder(user, [item1, item2]);
console.log('\nNota Fiscal:\n', record);
