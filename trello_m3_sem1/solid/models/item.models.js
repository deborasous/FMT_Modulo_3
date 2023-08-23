const Product = require('./product.models');

class Item {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  calculateSubtotal() {
    if (this.product instanceof Product) {
      return this.product.price * this.quantity;
    } else {
      throw new Error('Produto inválido');
    }
  }
}

module.exports = Item;
