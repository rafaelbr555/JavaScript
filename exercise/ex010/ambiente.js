/*Faça um programa que peça uma nota, entre zero e dez. 
Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 
*/

function enviar(){

    var num = window.document.getElementById('inum').value
    var res = window.document.getElementById('iresultado')

    if (num == '' || num > 10){
        res.innerHTML = 'Digite um valor valido'
    }else{
        res.innerHTML = num
    }


}