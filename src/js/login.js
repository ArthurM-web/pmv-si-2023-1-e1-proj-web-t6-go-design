var object = {
    usuarios: [
        {
            Login:"vgoncalves",
            Senha: "Teste"
        },
        {
            Login:"vgoncalves2",
            Senha: "Teste2"
        },
        {
            Login:"vgoncalves3",
            Senha: "Teste3"
        },
        {
            Login:"usuario",
            Senha: "1234"
        },
    ]
}
var tentativas = 0;
    
function Login() {
        
        var usuario = document.getElementById('login');
        var senha = document.getElementById('senha');
        
        ++tentativas;

        console.log(tentativas);   
    

        for(let i=0;i<object.usuarios.length;i++){

            if(usuario.value == object.usuarios[i].Login && senha.value == object.usuarios[i].Senha){
        
                window.location.href= "index.html";
                
                var cont = 1;  
            }    
        }
        
        if(cont != 1)
            
            alert("Usuario ou senha incorreto");    
        
        if(tentativas>3){
            
            alert("Tentativas Excedidas");
            window.location.href = "index3.html";
        }
    }

var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}