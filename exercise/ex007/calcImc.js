var calcular = window.document.getElementById('icalcular')
calcular.addEventListener('click', imc)

function imc(){
    var nome = window.document.getElementById('inome').value
    var altura = window.document.getElementById('ialtura').value
    var peso = window.document.getElementById('ipeso').value
    var resultado = window.document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== ''){
        
        var resImc = peso / (altura * altura)
        var classificacao 
        if(resImc < 18.5){
            
            classificacao = 'Abaixo do peso normal'

        }else if(resImc > 18.5 && resImc < 24.9){

            classificacao = 'Peso normal'

        }else if(resImc > 25 && resImc < 29.9){

            classificacao = 'Excesso de peso'

        }else if (resImc > 30 && resImc < 34.9){

            classificacao = 'Obesidade classe 1'

        }else if(resImc > 35 && resImc < 39.9){

            classificacao = 'Obesidade classe 2'
        }else if(resImc >= 40){

            classificacao = 'Obesidade classe 3'
            
        }
        resultado.innerHTML = `Olá ${nome} seu imc é ${resImc.toFixed(2)}. ${classificacao}`

    }else{
      
        window.alert('Preencha todos os campos!')
    }
}