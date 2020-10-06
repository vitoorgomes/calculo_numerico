const { math, derivative, pow, evaluate, parse } = require('../node_modules/mathjs');

const derivada = derivative('(pow(x, 3) - 9*x + 5)', 'x');

function funcDerivada(x) {    
    return x - (funcFX(x)/ derivada.evaluate({x}))
}

function funcFX(x) {
    return (pow(x, 3) - 9*x + 5);
}

function corrSinal(fx) {
    if (fx < 0) {
        return fx*(-1);
    }
    return fx;
}

function calcularMNR(a, b, p) {
    let k = 1;
    let raizMedia = (a + b) / 2;
    let testeFim = 0;

    if (funcFX(raizMedia)*(-1) > p) {
        if (derivada.toString() != '0') {
            while (raizMedia > p) {
                k++;
                raizMedia = funcDerivada(raizMedia);

                testeFim = funcFX(raizMedia);
                if (corrSinal(testeFim) < p) {
                    raizMedia = testeFim;
                    break;
                }
            }

            return { raizMedia, k };
        } else {
            return 'A derivada não pode ser igual a 0';
        }
    } else {
        return { raizMedia, k }
    }
   
}

console.log(calcularMNR(0.5,1,0.01));