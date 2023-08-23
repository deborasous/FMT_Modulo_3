class Invoice {
  generateInvoice(user, items, total) {
    const itemsInfo = items.map((item) => {
      return `${item.product.name},\n Quantidade: ${
        item.quantity
      },\n Valor Unitário: $${item.product.price.toFixed(
        2
      )}`;
    });
    const record = `Cliente: ${user.name}\nItens: ${itemsInfo.join(
      '\n\n'
    )}\nTotal: $${total.toFixed(2)}`;
    return record;
  }
}

module.exports = Invoice;
