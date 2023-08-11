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
  textNumber.innerText = e.target.value;
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

function verificarError(e) {
  e.preventDefault();  
  if (!inputName.value) {
    inputName.classList.add("error");
    inputName.parentElement.classList.add("error_mensagem");
  } else {
    inputName.classList.remove("error");
    inputName.parentElement.classList.remove("error_mensagem");
  }
  if(!inputNumber.value){
    inputNumber.classList.add('error')
    inputNumber.parentElement.classList.add('error_mensagem')
  }else{
    inputNumber.classList.remove('error_mensagem')
    inputNumber.parentElement.classList.remove('error_mensagem')
  }
  if (inputNumber.value.length >=1 && inputNumber.value.length < 16) {
    inputNumber.classList.add('incomplete')
    inputNumber.parentElement.classList.add("error_incomplete");
  } else {
    inputNumber.classList.remove('incomplete')
    inputNumber.parentElement.classList.remove("error_incomplete");
  }
  if (!inputMes.value || !inputAno.value) {
    inputAno.classList.add("error");
    inputMes.classList.add("error");
    inputMes.parentElement.classList.add("error_mensagem");
  } else {
    inputAno.classList.remove("error");
    inputMes.classList.remove("error");
    inputMes.parentElement.classList.remove("error_mensagem");
  }
  if (!inputCvc.value) {
    inputCvc.classList.add("error");
    inputCvc.parentElement.classList.add("error_mensagem");
  } else {
    inputCvc.classList.remove("error");
    inputCvc.parentElement.classList.remove("error_mensagem");
  }
}

inputName.addEventListener("keyup", substituirName);
inputNumber.addEventListener("keyup", substituirNumber);
inputMes.addEventListener("keyup", substituirMes);
inputAno.addEventListener("keyup", substituirAno);
inputCvc.addEventListener("keyup", substituirCvc);
btnConfirm.addEventListener("click", verificarError);
