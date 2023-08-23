const Item = require('./item.models');

class Order {
  constructor(user) {
    this.user = user;
    this.items = [];
  }

  addItem(item) {
    if (item instanceof Item) {
      this.items.push(item);
    } else {
      throw new Error('Item inválido');
    }
    console.log(this.items, 'itensss')
  }


  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.calculateSubtotal(),
      0
    );
  }
}

module.exports = Order;
