//NÃO LEVAR EM CONSIDERAÇÃO ESTA PASTA QUANDO ESTIVER CORRIGINDO O TRELLO. OBRIGADA

const User = require('../models/user.models');
const Item = require('../models/item.models');
const Product = require('../models/product.models');
const InvoiceService = require('../service/generateInvoice.service');

//a função DESCRIBE tem a função de agrupar testes relacionados
//a função IT é usado para criar testes indviduais, assim temos dois testes
//a função EXPECT é usada para definir afirmações no teste, usado para verificar se um valor atende a uma condição
describe('InvoiceService', () => {
  it('deve gerar fatura corretamente para pedido válido', () => {
    const user = new User('Maria');
    const item1 = new Item(new Product('Fralda Pampers', 10), 3);
    const item2 = new Item(new Product('Absorvente Sempre Livre', 5), 1);

    const invoiceService = new InvoiceService();
    const { record } = invoiceService.createOrder(user, [item1, item2]);

    expect(record).toContain('Cliente: Maria');
    expect(record).toContain('Fralda Pampers');
    expect(record).toContain('Absorvente Sempre Livre');
    expect(record).toContain('Total: $35.00');
  });

  it('deve lidar com itens inválidos gerando um erro', () => {
    const user = new User('John');
    const invalidItem = { name: 'Invalid Item', price: 0 };
    const invoiceService = new InvoiceService();

    const createInvalidOrder = () => {
      invoiceService.createOrder(user, [invalidItem]);
    };

    expect(createInvalidOrder).toThrowError('Item inválido');
  });
});
