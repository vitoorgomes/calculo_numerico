const { cosh, e, pow } = require('../node_modules/mathjs')

function func(x) {                      // Uma função para calcular o valor de X sem precisar ficar repetindo a f(x)
    return cosh(x)- 2*pow(e, -0.3*x);
}

function calcularBissecao(a, b, p) {
    let k = 0;                          // Contador de iterações
    let raizMedia = 0;                  // Definir um valor inicial para inicializar a raiz

    while (( b - a ) > p) {             // Condicional para verificar se o ponto b - a é maior que a precisão
        k++;

        raizMedia = (a + b) / 2;        // Calcula a raiz média para usar na f(x)

        let fa = func(a);               // Calcula o f(x) com o valor do ponto a
        let fm = func(raizMedia);       // Calcula o f(x) com o valor da raiz média

        if ( fa * fm > 0)  {            // Verificar o condicional se a multiplicação entre f(a) e f(raizMedia) é maior que 0
           a = raizMedia;               // Caso seja verdadeiro, atribui o valor da raiz média ao ponto A
        }

        else {                          // Caso seja falso, atribui o valor da raiz média ao ponto B
           b = raizMedia;
        }   

    }
                                        // Após fazer todas as iterações e o valor de B - A for menor que a precisão,
                                        // retorna o valor final da raíz média e o número de iterações como resposta.
    return {                            
        raizMedia,
        k
    }
}
console.log(calcularBissecao(0.5, 1.5, 0.001));