const { pi, e, pow, sin } = require('mathjs');

const g = 9.8;
const c = 14;
const v = 35;
const t = 7;

// Um ajudante para calcular os valores na f(x) dentro do código sem precisar repetir o código
function func(x) {                     
  return v - (g*x)*(1 - pow(e, (-c/x)*t))/c;
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
  calcularBissecao(50, 80, 0.01)
  // func(1)
); 
