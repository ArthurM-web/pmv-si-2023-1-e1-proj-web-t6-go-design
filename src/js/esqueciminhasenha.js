window.verificarEmail = function(email) {
  let getuser = localStorage.getItem("listaUser");
  let userobj = JSON.parse(getuser);
  let cont = 0;

  if (userobj && userobj.length) {
    for (let i = 0; i < userobj.length; i++) {
      console.log(userobj[i].email);

      if (userobj[i].email === email) {
        cont = 1;
      }
    }
  }

  if (cont === 1) {
    alert(`Email de redefinição de senha enviado para: ${email}`);
  } else {
    alert("Email inválido");
  }
}