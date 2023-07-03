//Contador de login inválidos 
var contaerro  = 0;

function Login(){

//Guarda login e senha digitado 
let login = document.getElementById('login').value
let senha = document.getElementById('senha').value

//Acessa o banco 
let getuser = localStorage.getItem('listaUser')

//Converte 
let userobj = JSON.parse(getuser)

console.log(login)

//Comando de repetição comparando login e senha no banco
for(let i=0;i<userobj.length;i++){

    console.log(userobj[i].email)

    if(userobj[i].email==login && userobj[i].senha==senha){
        //Va para 
        window.location.href= "../src/index.html";
        var cont = 1
    }
    }
    //Alerta de bem vindo ou erro
    if(cont===1){
        alert("Bem vindo")
    }
    
    else if(cont!=1){
        alert("Usuario Invalido")    
        contaerro++;
        console.log(contaerro);
        
            //Caso a tentativa de login seja superior a 3, insere a mensagem de erro 
            if(contaerro>3){
                alert("Tentativa Excedida")
                window.location.href = "../src/esqueceusenha.html";
        }
    }

}
    //Função para aparecer o menu hamburguer 
    function hamburguer(){        
        
        var ul = document.querySelector('nav ul');
        var menuBtn = document.querySelector('.menu-btn i');
        
        if (ul.classList.contains('open')) {
            ul.classList.remove('open');
        }else{
            ul.classList.add('open');
        }
    }