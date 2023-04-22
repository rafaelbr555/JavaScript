var igerar = window.document.getElementById('igerar')
igerar.addEventListener("click", gerar)

function gerar(){
    var numero = window.document.getElementById('inumero')
    var resultado = window.document.getElementById('iresultado')
    var num = Number(numero.value)

    resultado.innerHTML = ''
    for(var c = 1; c <= 10; c++){

        var mult = (c * num)
        resultado.innerHTML += `${num} * ${c} = ${mult}<br>`
    }

}

