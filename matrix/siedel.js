const { matrix } = require("mathjs");

function norm(Matrix) {
  return matrix(Matrix)
}
/*
* A = Matriz
* b = Resultado da matriz
*/
function gaussSeidel(A, b) {
  var X = new Array();
  var x = new Array();
  for (var k = 0; k < b.length; k++)
  {
    X[k] = 0; //Math.floor((Math.random() * 10000) + 1);
  }
  var p = 0.001; //precisao, tolerância
  var m = 1000; //número máximo de iterações
  var k = 0; //contador de iterações
  var continuar = true;

  while (continuar && k < m) {
      for (var i=0; i < b.length; i++) {
          soma = 0;
          for (var j = 0; j < i; j++) {
                  soma = soma + A[i][j] * x[j];
          }
          for (var j = i + 1; j < b.length; j++) {
                  soma = soma + A[i][j] * X[j];
          }
    x[i] = (b[i] - soma) / A[i][i];
      }
      // se | x - xo | < Tolerância
      if (Math.abs(norm(x) - norm(X)) < p) {
          continuar = false;
      } else {
          X=x.slice(0);
      }
      k = k + 1;
  }
  return {x, k};
}

console.log(gaussSeidel([[-4,-1,2],[1,6,-1],[4,-3,-13]], [7,-6,6]))