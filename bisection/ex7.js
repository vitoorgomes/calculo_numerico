const { pi, e, pow, sin, cos } = require('mathjs');

const a = -0.001
const b = 1.6
const w = 0.01*pi

// Um ajudante para calcular os valores na f(x) dentro do código sem precisar repetir o código
function func(x) {                     
  const ppp = (2 - pow(e, a*x));
  const f1 = w*cos(w*x)*ppp
  const f2 = a*pow(e, a*x)*sin(w*x);
  const f3 = pow((2 - pow(e, a*x)), 2);

  return (b*(f1*ppp + f2))/f3;
}

// Função iterativa, aceitando os pontos [a,b] e o valor da precisão (p)
function calcularBissecao(a, b, p) {    
  // Contador de iterações
  let k = 0;         
  // Definir um valor inicial para inicializar a raiz                 
  let raizMedia = 0;                  

  // Condicional para verificar se o ponto b - a é maior que a precisão
  while (( b - a ) > p) {             
    k++;

    // Calcula a raiz média para usar na f(x)
    raizMedia = (a + b) / 2;        

    // Calcula o f(x) com o valor do ponto a
    let fa = func(a);        
    // Calcula o f(x) com o valor da raiz média       
    let fm = func(raizMedia);       

    // Verificar o condicional se a multiplicação entre f(a) e f(raizMedia) é maior que 0
    if ( fa * fm > 0)  {    
      // Caso seja verdadeiro, atribui o valor da raiz média ao ponto A        
        a = raizMedia;               
    }

    else {               
      // Caso seja falso, atribui o valor da raiz média ao ponto B           
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
console.log(
  // Mostrar o resultado na tela de acordo com os pontos [A,B] e a precisão(P)                        
  calcularBissecao(-60, 1, 0.01)
  // func(1)
); 
