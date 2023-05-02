const lonoff = window.document.getElementById('onoff');
const imagem = window.document.getElementById('iimagem');

function lampadaquebrada(){

    return imagem.src.indexOf('quebrada') > -1
}

function on(){
    if(!lampadaquebrada()){
        imagem.setAttribute('src', './img/ligada.jpg')
    }
}

function off(){
    if(!lampadaquebrada()){
        imagem.src = './img/desligada.jpg'
    }
}


function quebrar(){

    imagem.src = './img/quebrada.jpg'
}

function onoff(){
    if(lonoff.textContent == "Ligar"){
        on();
        lonoff.textContent = 'Desligar';
    }else{
        off()
        lonoff.textContent = 'Ligar';
    }

}

lonoff.addEventListener('click', onoff);
imagem.addEventListener('mouseover', on)
imagem.addEventListener('mouseleave', off)
imagem.addEventListener('dblclick', quebrar)
