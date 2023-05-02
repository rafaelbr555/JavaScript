// utilizando Arrow function
let butoes = window.document.getElementById('butoes')
let img = window.document.getElementById('img')
let corindex = 0
let intervalId = null

const click = (Event) =>{
    pararautomatico()
    trocarcores[Event.target.id]()
}

const proximaindex = () => {

    if(corindex < 2){
        corindex ++
    }else{
        corindex = 0 
    }
}
const pararautomatico = () =>{
    clearInterval( intervalId )
}

const coresauto = () => {
    let cores = ['red', 'yellow','green']
    let cor = cores [corindex]
    trocarcores[cor]()
    proximaindex()

}

const trocarcores = {

    'red':      () => img.src = './img/vermelho.png' ,
    'yellow':   () => img.src = './img/amarelo.png',
    'green':    () => img.src = './img/verde.png',
    'automatic':() => intervalId = setInterval(coresauto, 1000)
}



butoes.addEventListener('click', click)

