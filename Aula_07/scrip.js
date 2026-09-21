// const nome = localStorage.getItem('nome');

// alert (nome);

// localStorage.setItem("nome", "Maria Eduarda");

// alert(localStorage.getItem("nome"));

// localStorage.removeItem("nome");

function login(){
    // 1 Acessar o valor digitado nos campos USUARIO e SENHA
    const local_usuario = localStorage.getItem("usuario")
    const local_senha = localStorage.getItem("senha")

    // 2 Valisdar se o valores são iguais aos valores armazenados
    const campo_usuario = document.getElementById("usuario");
    const campo_senha = document.getElementById("senha");


    // 3 no LocalStorage 
    if(campo_usuario == local_usuario){
        alert("Login realizado com sucesso!");
    }else{
        alert("Usúario invalido!");
    }

    alert( campo_usuario.value + " " + campo_senha.value);

}