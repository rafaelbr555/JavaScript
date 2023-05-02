function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var nasc = window.document.getElementById("inascimento");
  var msg = window.document.getElementById("res");

  if (nasc.value.length == 0 || Number(nasc.value) > ano) {
    window.alert("ERRO! Verifique os dados corretamente.");
  } else {
    var sexo = window.document.getElementsByName("sexo");
    var idade = ano - Number(nasc.value);
    var genero = " ";
    var imagem = document.createElement("img");
    

    if (sexo[0].checked) {
      genero = "Homem";

      if (idade >= 0 && idade < 10) {
        imagem.setAttribute("src", "imagens/criança-homem.jpg");
      } else if (idade > 10 && idade <= 21) {
        imagem.setAttribute("src", "imagens/adolecente-homem.jpg");
      } else if (idade > 21 && idade <= 60) {
        imagem.setAttribute("src", "imagens/adulto-homem.jpg");
      } else if (idade > 60) {
        imagem.setAttribute("src", "imagens/idoso-homem.jpg");
      }
    } else {
      genero = " Mulher";

      if (idade >= 0 && idade < 10) {
        imagem.setAttribute("src", "imagens/criança-mulher.jpg");
      } else if (idade > 10 && idade <= 21) {
        imagem.setAttribute("src", "imagens/adolecente-mulher.jpg");
      } else if (idade > 21 && idade <= 60) {
        imagem.setAttribute("src", "imagens/adulto-mulher.jpg");
      } else if (idade > 60) {
        imagem.setAttribute("src", "imagens/idosa-mulher.jpg");
      }
    }
    imagem.style.borderRadius = "50%";
    imagem.style.width = "200px";
    imagem.style.height = "200px";
    msg.style.display = 'grid'
    msg.style.justifyContent = "center";
    msg.innerHTML = `Detectamos ${genero} com ${idade} Anos`;
    msg.appendChild(imagem);
  }
}
