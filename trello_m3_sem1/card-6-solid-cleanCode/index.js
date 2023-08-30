class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}

class EstoqueItem {
  constructor(produto, quantidade) {
    this.produto = produto;
    this.quantidade = quantidade;
  }
}

class GerenciarEstoque {
  constructor() {
    this.estoqueItem = [];
  }

  adicionarProduto(produto, quantidade) {
    const estoqueItem = new EstoqueItem(produto, quantidade);
    this.estoqueItem.push(estoqueItem);
  }

  removerProduto(produto) {
    const index = this.estoqueItem.findIndex(
      (item) => item.produto.nome === produto.nome
    );
    if (index !== -1) {
      this.estoqueItem.splice(index, 1);
    }
  }

  listarProdutos() {
    return this.estoqueItem.map((item) => item.produto);
  }
}

const estoque = new GerenciarEstoque();

const produto1 = new Produto('Camiseta', 29.99, 50);
estoque.adicionarProduto(produto1);
const produto2 = new Produto('Calça Jeans', 89.99, 30);

estoque.adicionarProduto(produto2);
console.log('Produtos em estoque:', estoque.listarProdutos());
estoque.removerProduto(produto1);
console.log('Produtos em estoque após a remoção:', estoque.listarProdutos());


// class Produto {
//   constructor(nome, preco, quantidade) {
//     this.nome = nome;
//     this.preco = preco;
//     this.quantidade = quantidade;
//   }
// }

// class Estoque {
//   constructor() {
//     this.produtos = [];
//   }

//   adicionarProduto(produto) {
//     this.produtos.push(produto);
//   }

//   removerProduto(produto) {
//     const index = this.produtos.findIndex((p) => p.nome === produto.nome);
//     if (index !== -1) {
//       this.produtos.splice(index, 1);
//     }
//   }

//   listarProdutos() {
//     return this.produtos;
//   }
// }

// // Utilização do Estoque
// const estoque = new Estoque();

// const produto1 = new Produto('Camiseta', 29.99, 50);
// estoque.adicionarProduto(produto1);

// const produto2 = new Produto('Calça Jeans', 89.99, 30);
// estoque.adicionarProduto(produto2);

// console.log('Produtos em estoque:', estoque.listarProdutos());

// estoque.removerProduto(produto1);

// console.log('Produtos em estoque após a remoção:', estoque.listarProdutos());
