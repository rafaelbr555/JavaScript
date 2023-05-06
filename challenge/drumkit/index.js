const sons = {
  A: "boom.wav",
  S: "clap.wav",
  D: "hihat.wav",
  F: "kick.wav",
  G: "openhat.wav",
  H: "ride.wav",
  J: "snare.wav",
  K: "tink.wav",
  L: "tom.wav",
};

const criarDiv = (texto) => {
  const div = document.createElement("div");
  div.classList.add("teclas");
  div.id = texto;
  div.textContent = texto;
  document.querySelector("#contanier").appendChild(div);
};

const exibir = (sons) => {
  Object.keys(sons).forEach(criarDiv);
};

const tocarSom = (letra) => {
  const audio = new Audio(`./sons/${sons[letra]}`);
  audio.play();
};
const adicionarEfeito = (letra) => document.getElementById(letra)
                                           .classList.add('active')


const removerEfeito = (letra) =>{
  const div = document.getElementById(letra)
  const removerActive = () => div.classList.remove('active')
    div.addEventListener('transitionend', removerActive)
  

}
const ativarSom = (evento) => {
  let letra =''
  if(evento.type == 'click'){
    letra = evento.target.id;
  }else{
    letra = evento.key.toUpperCase()
  }
  
  const validaçãoLetra = sons.hasOwnProperty(letra);
  if (validaçãoLetra) {
    adicionarEfeito(letra);
    tocarSom(letra);
    removerEfeito(letra)
  }
};

exibir(sons);
document.getElementById("contanier").addEventListener("click", ativarSom);

window.addEventListener('keydown',ativarSom)