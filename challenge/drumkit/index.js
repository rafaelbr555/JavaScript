const sons = {
  'A': "boom.wav",
  'S': "clap.wav",
  'D': "hihat.wav",
  'F': "kick.wav",
  'G': "openhat.wav",
  'H': "ride.wav",
  'J': "snare.wav",
  'K': 'tink.wav',
  'L': 'tom.wav'
};

const criarDiv = (texto) => {
    const div = document.createElement('div')
    div.classList.add('teclas')
    div.id = texto
    div.textContent = texto
    document.querySelector("#contanier").appendChild(div);
    
}

const exibir = (sons) =>{
    Object.keys(sons).forEach(criarDiv)
}

exibir(sons)