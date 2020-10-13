const { pi, cos, e, pow, sin } = require('mathjs');

// const derivada = derivative('1*pow(e, -0.3*x)*(sin(3*x) - 0.6*pow(x, 2)) + 6', 'x');
const a = -0.001
const b = 1.6
const w = 0.01*pi

// 0,0503414039
function der(x) {
  return 
}

function funcDerivada(x) {                                  // Calcular a f(x) com a fórumla de Newton-Raphson
    return x - (funcFX(x)/ der(x))
}

function funcFX(x) {
  const ppp = (2 - pow(e, a*x));
  const f1 = w*cos(w*x)*ppp
  console.log('f1', f1)
  const f2 = a*pow(e, a*x)*sin(w*x);
  console.log('f2', f2)
  const f3 = pow((2 - pow(e, a*x)), 2);
  console.log('f3', f3)

  return (b*(f1*ppp + f2))/f3;
  // return 'ok'
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

console.log(funcFX(1));
// console.log(funcDerivada(derivada));
// console.log(der(1));