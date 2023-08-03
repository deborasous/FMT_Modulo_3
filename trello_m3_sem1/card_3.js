//Aplicando conceitos de SOLID
class Forma {
  constructor(tipo, medidas) {
    this.tipo = tipo;
    this.medidas = medidas;
  }
}

class CalculadoraGeometrica {
  calcularArea(forma) {
    if (forma.tipo === 'quadrado') {
      return this.calcularAreaQuadrado(forma.medidas.lado);
    } else if (forma.tipo === 'circulo') {
      return this.calcularAreaCirculo(forma.medidas.raio);
    } else if (forma.tipo === 'triangulo') {
      return this.calcularAreaTriangulo(
        forma.medidas.base,
        forma.medidas.altura
      );
    }
  }

  calcularPerimetro(forma) {
    if (forma.tipo === 'quadrado') {
      return this.calcularPerimetroQuadrado(forma.medidas.lado);
    } else if (forma.tipo === 'circulo') {
      return this.calcularPerimetroCirculo(forma.medidas.raio);
    } else if (forma.tipo === 'triangulo') {
      return this.calcularPerimetroTriangulo(
        forma.medidas.lado1,
        forma.medidas.lado2,
        forma.medidas.lado3
      );
    }
  }

  calcularAreaQuadrado(lado) {
    return lado * lado;
  }
  calcularAreaCirculo(raio) {
    return Math.PI * raio * raio;
  }
  calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
  }

  calcularPerimetroQuadrado(lado) {
    return 4 * lado;
  }
  calcularPerimetroCirculo(raio) {
    return 2 * Math.PI * raio;
  }
  calcularPerimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
  }
}

const quadrado = new Forma('quadrado', { lado: 5 });
const calculadora = new CalculadoraGeometrica();

console.log(
  'Área do quadrado:',
  calculadora.calcularArea(quadrado),
  'e',
  'Perímetro do quadrado:',
  calculadora.calcularPerimetro(quadrado)
);

const circulo = new Forma('circulo', { raio: 3 });
console.log(
  'Área do círculo:',
  calculadora.calcularArea(circulo),
  'e',
  'Perímetro do círculo:',
  calculadora.calcularPerimetro(circulo)
);

const triangulo = new Forma('triangulo', {
  base: 4,
  altura: 6,
  lado1: 3,
  lado2: 4,
  lado3: 5,
});
console.log(
  'Área do triângulo:',
  calculadora.calcularArea(triangulo),
  'e',
  'Perímetro do triângulo:',
  calculadora.calcularPerimetro(triangulo)
);
