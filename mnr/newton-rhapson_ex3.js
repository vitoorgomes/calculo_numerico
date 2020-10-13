const { derivative, sinh, sin, cos, e, pow } = require('../../node_modules/mathjs');

// const derivada = derivative('1*pow(e, -0.3*x)*(sin(3*x) - 0.6*pow(x, 2)) + 6', 'x');

function der(x) {
  return (0.054*pow(e, -0.3*x)*pow(x, 2)) - (1.8*pow(e, -0.3*x)*cos(3*x)) - (1.2*pow(e, -0.3*x)) - (8.91*pow(e, -0.3*x)*sin(3*x))
}

function funcDerivada(x) {                                  // Calcular a f(x) com a fórumla de Newton-Raphson
    return x - (funcFX(x)/ der(x))
}

function funcFX(x) {                                        // Método para calcular o f(x) com a raiz
    return pow(e, -0.3*x)*(-1.2*x + 3*cos(3*x)) - 0.3*pow(e, -0.3*x)*(-0.6*pow(x, 2) + sin(3*x));      // encontrada
}



function calcularMNR(a, p) {
    let k = 1;
    let raizMedia = a;                 
    let testeFim = 0;                                       

    // if (derivada.toString() != '0') {                       // Antes de começar as iterações, confere se
        while (raizMedia > p) {                             // a derivada não é igual a zero
            k++;
            raizMedia = funcDerivada(raizMedia);

            testeFim = funcFX(raizMedia);
            if (Math.abs(testeFim) < p) {
                break;
            }
        }

        return { raizMedia, k };                            // Retorna o valor final da raíz e iterações
    // } else {
    //     return 'A derivada não pode ser igual a 0';     
    // }

}

console.log(calcularMNR(2,0.01));
// console.log(funcDerivada(derivada));
// console.log(der(1));