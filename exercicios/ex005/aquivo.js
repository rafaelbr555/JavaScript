function carregar() {
  var msg = window.document.getElementById("horas");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = 21;
  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {

    img.src = "imagens/manha.jpg";
    document.body.style.background = "rgba(255, 166, 0, 0.877";

  } else if (hora >= 12 && hora < 18) {

    img.src = "imagens/tarde.jpg";
    document.body.style.background = "rgba(0, 183, 255, 0.856)";

  } else {
    document.body.style.background = "rgba(0, 0, 0, 0.575)";
    img.src = "imagens/noite.jpg";
  }
}
