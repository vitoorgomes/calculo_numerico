const { derivative, sinh, cosh, e, pow } = require('../node_modules/mathjs');

const derivada = derivative('-(1/x)*(sinh(-30*x) - sinh(15*x))', 'x');

function funcDerivada(x) {                                  // Calcular a f(x) com a fórumla de Newton-Raphson
    return x - (funcFX(x)/ derivada.evaluate({x}))
}

function funcFX(x) {                                        // Método para calcular o f(x) com a raiz
    return -(1/x)*(sinh(-30*x) - sinh(15*x)) - 120;         // encontrada
}

function calcularMNR(a, p) {
    let k = 1;
    let raizMedia = a;                 
    let testeFim = 0;                                       

    if (derivada.toString() != '0') {                       // Antes de começar as iterações, confere se
        while (raizMedia > p) {                             // a derivada não é igual a zero
            k++;
            raizMedia = funcDerivada(raizMedia);

            testeFim = funcFX(raizMedia);
            if (Math.abs(testeFim) < p) {
                break;
            }
        }

        return { raizMedia, k };                            // Retorna o valor final da raíz e iterações
    } else {
        return 'A derivada não pode ser igual a 0';     
    }

}
console.log(calcularMNR(0.12,0.01));