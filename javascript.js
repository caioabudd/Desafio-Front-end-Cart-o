const form = document.getElementById("form");
const input = document.getElementById("numero");
const inputData = document.getElementById("data");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});



function imprimir() {
  
    var nome = document.getElementById("nome").value;
    document.getElementById("recebe_valor_nome").innerHTML = nome;

    if(nome === ""){
        errorNome();

    } else {
        certoNome();

    }

    var numero =  document.getElementById("numero").value;
    document.getElementById("recebe_valor_numero").innerHTML = numero;

    if(numero === ""){
        errorNumero();

    } else {
        certoNumero();

    }

    var data =  document.getElementById("data").value;
    document.getElementById("recebe_valor_data").innerHTML = data;

    if(data === ""){
        errorData();

    } else {
        certoData();

    }

    var cvc =  document.getElementById("cvc").value;
    document.getElementById("recebe_valor_cvc").innerHTML = cvc;

    if(cvc === ""){
        errorCvc();

    } else {
        certoCvc();

    }
  

  

}



input.addEventListener('keypress', () => {
    let inputLength = input.value.length

    if (inputLength === 4){
        input.value += " ";

    }
    if (inputLength === 9){
        input.value += " ";

    }
    else if (inputLength === 14){
        input.value += " ";

    }
   
   

}); 


inputData.addEventListener('keypress', () => {
    let inputLengthData = inputData.value.length

    if (inputLengthData === 2){
        inputData.value += "/";
    }

    
   

}); 

function errorNome() {
    
    nome.style.border = '2px solid #e63636';

}

function certoNome() {
    nome.style.border = '2px solid green';

}

function errorNumero() {
    
    numero.style.border = '2px solid #e63636';

}
function certoNumero() {
    numero.style.border = '2px solid green';

}

function errorData() {
    
    data.style.border = '2px solid #e63636';

}
function certoData() {
    data.style.border = '2px solid green';

}
function errorCvc() {
    
    cvc.style.border = '2px solid #e63636';

}
function certoCvc() {
    cvc.style.border = '2px solid green';

}