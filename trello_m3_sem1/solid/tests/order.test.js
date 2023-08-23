const { describe } = require('node:test');
const Item = require('../models/item.models');
const Order = require('../models/order.models');

describe('Order', () => {
  it('deve adicionar um item valido à lista de itens', () => {
    const user = { name: 'Luana' };
    const order = new Order(user);

    const item = new Item({ name: 'Produto inválido', price: 10 }, 2);

    order.addItem(item);

    expect(order.items).toHaveLength(1);
    expect(order.items[0]).toBe(item);
  });

  it('deve lançar um erro ao adicionar um item inválido', () => {
    const user = { name: 'João' };
    const order = new Order(user);

    const invalidItem = { name: 'item inválido', price: 0 };

    const addInvalidItem = () => {
      order.addItem(invalidItem);
    };

    expect(addInvalidItem).toThrowError('Item inválido');
    expect(order.items).toHaveLength(0);
  });
});
