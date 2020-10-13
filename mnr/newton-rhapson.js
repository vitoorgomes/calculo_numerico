const { derivative, sinh, cosh, e, pow } = require('../../node_modules/mathjs');

// A função é declara aqui e com o auxilio da biblioteca, o método faz o cálculo da primeira derivada
const derivada = derivative('-(1/x)*(sinh(-30*x) - sinh(15*x))', 'x');

// Calcular a f(x) com a fórumla de Newton-Raphson
function funcDerivada(x) {                                  
    return x - (funcFX(x)/ derivada.evaluate({x}))
}

// Método para calcular o f(x) com a raiz encontrada
function funcFX(x) {                                        
    return -(1/x)*(sinh(-30*x) - sinh(15*x)) - 120; 
}

function calcularMNR(a, p) {
    // Número de tentativas
    let k = 1;
    let raizMedia = a;                 
    let testeFim = 0;                                       

    // Antes de começar as iterações, confere se a derivada não é igual a zero
    if (derivada.toString() != '0') {                       
        while (raizMedia > p) {                            
            k++;
            raizMedia = funcDerivada(raizMedia);

            testeFim = funcFX(raizMedia);
            if (Math.abs(testeFim) < p) {
                break;
            }
        }

        // Retorna o valor final da raíz e iterações
        return { raizMedia, k };                            
    } else {
        return 'A derivada não pode ser igual a 0';
    }

}
console.log(calcularMNR(0.12,0.01));