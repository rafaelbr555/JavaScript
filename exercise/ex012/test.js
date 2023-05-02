let add = window.document.getElementById("iadicionar");
add.addEventListener("click", adicionar);

let fim = window.document.getElementById('ifinalizar')
fim.addEventListener('click', finalizar)

let num = window.document.getElementById('inumero')
let lista = window.document.getElementById('ivalores')
let res = window.document.querySelector('div#iresultado')
let valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){

    if(isNumber(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        lista.innerText += `Valor ${num.value} Adicionado`
        res.innerHTML =''
    }else{
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()


}

function finalizar(){

    if(lista.value == ''){
        window.alert('Preecha a lista ')
        
    }else{
        let soma = 0
        let media = 0
        for( var cont in valores){
            soma += valores[cont]
            media += valores[cont] / valores.length
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados </p>`
        res.innerHTML += `<p>O maior valor informado foi ${Math.max.apply(null,valores)}<p>`
        res.innerHTML += `<p>O menor valor informado foi ${Math.min.apply(null, valores)}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p> A media de todos os valores é ${media}`
    }
    
}




