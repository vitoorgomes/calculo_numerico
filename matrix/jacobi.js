const { matrix } = require("mathjs");

function norm(Matrix) {
  return matrix(Matrix)
}

// A = matriz, B = resultado
function gaussJacobi(A, b) {
  var X = new Array();
  var x = new Array();
  for (var k = 0; k < b.length; k++)
  {
    X[k] = 0; //Math.floor((Math.random() * 10000) + 1);
  }

  // precisão
  var p = 0.001; 
  var k = 0;
  var continuar = true;

  while (continuar && k < m) {
      for (var i=0; i < b.length; i++) {
          soma = 0;
          for (var j = 0; j < b.length; j++) {
              if (j != i) {
                  soma = soma + A[i][j]*X[j]/A[i][i];
              }
              x[i] = (b[i]/A[i][i]) - soma;
          }
    }
      if (Math.abs(norm(x) - norm(X)) < p) {
          continuar = false;
    } else {
          X=x.slice(0);
    }
      k++;
  }
  return { X, k };
}

console.log(gaussJacobi([[-4,-1,2],[1,6,-1],[4,-3,-13]], [7,-6,6]));