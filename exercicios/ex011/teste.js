var icadastro = window.document.getElementById('icadastro')
icadastro.addEventListener('click', cadastro)

function cadastro(){

    var user = window.document.getElementById('iuser').value
    var pass = window.document.getElementById('ipass').value
    
   if(user == '' && pass ==''){

        window.alert('Preencha os campos.')
   }else{
        if(user == pass){
            window.alert('ERRO! A senha não pode ser igual ao usuario.')
        }else{
            window.alert('Cadastro feito!')
        }
   }
} 