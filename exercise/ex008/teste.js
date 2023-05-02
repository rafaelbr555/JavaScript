var cont = window.document.getElementById("icontar");
cont.addEventListener("click", contar);

function contar() {
  var inicio = window.document.getElementById("iinicio")
  var fim = window.document.getElementById("ifim")
  var passo = window.document.getElementById("ipasso")
  var resultado = window.document.getElementById("iresultado")

  if (inicio.value != "" && fim.value != "" && passo.value != "" && passo.value === 0) {
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);


    if(i > f){
      for(var c = i; c >= f; c -= p){
        resultado.innerHTML += `${c} 👉`;

      }
      
    }else{
      for(var c = i; c <= f; c += p){
          resultado.innerHTML += `${c} 👉`;
          
      }
    }
    resultado.innerHTML += `🏁`;
  } else {
    window.alert("Preencha todos os campos");
  }
}
