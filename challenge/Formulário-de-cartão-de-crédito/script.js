let textName = document.querySelector(".text-name");
let inputName = document.getElementById("input-name");

let textNumber = document.querySelector(".text-number");
let inputNumber = document.getElementById("input-number");

let textMes = document.querySelector(".text-mes");
let inputMes = document.getElementById("input-mother");

let textAno = document.querySelector(".text-ano");
let inputAno = document.getElementById("input-year");

let textCvc = document.querySelector(".text-cvc");
let inputCvc = document.getElementById("input-cvc");

let btnConfirm = document.querySelector(".btn-confirm");


function substituirName(e) {
  textName.innerText = e.target.value.toUpperCase();
}

function substituirNumber(e) {
  textNumber.innerText = formatar(e.target.value);
}

function substituirMes(e) {
  textMes.innerText = e.target.value;
}
function substituirAno(e) {
  textAno.innerText = e.target.value;
}

function substituirCvc(e) {
  textCvc.innerText = e.target.value;
}
function formatar(e) {
  return e.toString().replace(/\d{4}(?=.)/g, "$& ");
}

function enviar(e){
  e.preventDefault();  
  verificarError()

  const camposComErro = document.querySelectorAll('.error')
  let form = document.getElementById("form");
  let thanks = document.querySelector('.thank-you')
  if(camposComErro.length === 0){
    form.remove()
    thanks.classList.add('on')
  
  }else{
    console.log('tem error')
  }
}

function verificarError() {
  // Validando o input Name se está vazio
  if (!inputName.value) {
    inputName.classList.add("error");
    inputName.parentElement.classList.add("error_mensagem");
  } else {
    inputName.classList.remove("error");
    inputName.parentElement.classList.remove("error_mensagem");
  }
  // Validando o input Number se está vazio
  if(!inputNumber.value){
    inputNumber.classList.add('error')
    inputNumber.parentElement.classList.add('error_mensagem')
  }else{
    inputNumber.classList.remove('error_mensagem')
    inputNumber.parentElement.classList.remove('error_mensagem')
  }
  // Validando se o input Number está com todos os 16 digitos 
  if (inputNumber.value.length >=1 && inputNumber.value.length < 16) {
    inputNumber.classList.add('error')
    inputNumber.parentElement.classList.add("error_incomplete");
  } else {
    inputNumber.classList.remove('error')
    inputNumber.parentElement.classList.remove("error_incomplete");
  }
  // Validando se o input mês e ano estão vazios
  if (!inputMes.value || !inputAno.value) {
    inputAno.classList.add("error");
    inputMes.classList.add("error");
    inputMes.parentElement.classList.add("error_mensagem");
  } else {
    inputAno.classList.remove("error");
    inputMes.classList.remove("error");
    inputMes.parentElement.classList.remove("error_mensagem");
  }
  // Validando se o input Mês está recebendo um mês invalido
  if(inputMes.value == 0 || inputMes.value > 12){
    inputMes.classList.add('error')
    inputMes.parentElement.classList.add("errorValue-invalid");
  }else{
    inputMes.classList.remove('error')
    inputMes.parentElement.classList.remove("errorValue-invalid");
  }
  //validando se o input Cvc está vazio
  if (!inputCvc.value) {
    inputCvc.classList.add("error");
    inputCvc.parentElement.classList.add("error_mensagem");
  } else {
    inputCvc.classList.remove("error");
    inputCvc.parentElement.classList.remove("error_mensagem");
  }
  //validando se o input cvc está completo
  if(inputCvc.value.length < 3){
    inputCvc.classList.add('error')
    inputCvc.parentElement.classList.add('error_incomplete')
  }else{
    inputCvc.classList.remove('error')
    inputCvc.parentElement.classList.remove('error_incomplete')
  }
}

inputName.addEventListener("keyup", substituirName);
inputNumber.addEventListener("keyup", substituirNumber);
inputMes.addEventListener("keyup", substituirMes);
inputAno.addEventListener("keyup", substituirAno);
inputCvc.addEventListener("keyup", substituirCvc);
btnConfirm.addEventListener("click", enviar);
