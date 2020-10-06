const { derivative, pow } = require('../node_modules/mathjs');

const derivada = derivative('(pow(x, 3) - 9*x + 5)', 'x');

function funcDerivada(x) {                                  // Calcular a f(x) com a fórumla de Newton-Raphson
    return x - (funcFX(x)/ derivada.evaluate({x}))
}

function funcFX(x) {                                        // Método para calcular o f(x) com a raiz
    return (pow(x, 3) - 9*x + 5);                           // encontrada
}

function corrSinal(fx) {                                    // Como não há uma função nativa para módulo
    if (fx < 0) {                                           // apenas um ajudante para conferir o valor
        return fx*(-1);                                     // da raíz e se for negativo apenas multiplicar
    }                                                       // por -1 e inverter o sinal
    return fx;
}

function calcularMNR(a, b, p) {
    let k = 1;
    let raizMedia = (a + b) / 2;                            // Testa o primeiro valor chute de raíz com o
    let testeFim = 0;                                       // ponto médio

    if (funcFX(raizMedia)*(-1) > p) {
        if (derivada.toString() != '0') {                   // Antes de começar as iterações, confere se
            while (raizMedia > p) {                         // a derivada não é igual a zero
                k++;
                raizMedia = funcDerivada(raizMedia);

                testeFim = funcFX(raizMedia);
                if (corrSinal(testeFim) < p) {
                    raizMedia = testeFim;
                    break;
                }
            }

            return { raizMedia, k };                        // Retorna o valor final da raíz e iterações
        } else {
            return 'A derivada não pode ser igual a 0';     
        }
    } else {
        return { raizMedia, k }
    }
   
}
console.log(calcularMNR(0.5,1,0.01));