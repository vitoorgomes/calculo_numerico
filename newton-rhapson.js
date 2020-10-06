const { derivative, pow, cosh, e } = require('../node_modules/mathjs');

const derivada = derivative('cosh(x) - 2*pow(e, -0.3*x)', 'x');

function funcDerivada(x) {                                  // Calcular a f(x) com a fórumla de Newton-Raphson
    return x - (funcFX(x)/ derivada.evaluate({x}))
}

function funcFX(x) {                                        // Método para calcular o f(x) com a raiz
    return cosh(x) - 2*pow(e, -0.3*x);                      // encontrada
}

function corrSinal(fx) {                                    // Como não há uma função nativa para módulo
    if (fx < 0) {                                           // apenas um ajudante para conferir o valor
        return fx*(-1);                                     // da raíz e se for negativo apenas multiplicar
    }                                                       // por -1 e inverter o sinal
    return fx;
}

function calcularMNR(a, b, p) {
    let k = 1;
    let raizMedia = (a + b) / 2;                            
    let testeFim = 0;                                       

    if (derivada.toString() != '0') {                       // Antes de começar as iterações, confere se
        while (raizMedia > p) {                             // a derivada não é igual a zero
            k++;
            raizMedia = funcDerivada(raizMedia);

            testeFim = funcFX(raizMedia);
            if (corrSinal(testeFim) < p) {
                raizMedia = testeFim;
                break;
            }
        }

        return { raizMedia, k };                            // Retorna o valor final da raíz e iterações
    } else {
        return 'A derivada não pode ser igual a 0';     
    }

}
console.log(calcularMNR(0.5,1.5,0.001));