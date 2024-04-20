const socket = io();


document.getElementById('btnConfirmName').addEventListener('click',()=>
{
    let nome_usuario = document.getElementById('valueInpt').value;
    let dialog = document.querySelector('dialog');
    dialog.classList.add('hidden');

    // Nomes Aleatorios
    var ff = [
        "Cloud Strife",
        "Sephiroth",
        "Vincent Valentine",
        "Zack Fair",
        "Aerith Gainsborough",
        "Tifa Lockhart",
        "Barret Wallace",
        "Yuffie Kisaragi",
    ];

    

// Caso usuário não informe um nome será atribuido um nome aleatório da lista
    if (nome_usuario === null || nome_usuario == "" || nome_usuario == " ") 
    {
        nome_usuario = ff[Math.floor(Math.random() * ff.length)];
    }

// Mexendo com Socket
socket.emit('chat message' , `Bem vindo! ${nome_usuario} \n\n`);

document.getElementById('enviar_menssagem').addEventListener('click',enviar_menssagem)

function enviar_menssagem()
{
    let msg = document.getElementById('menssagem').value;
    let limpa = document.getElementById('menssagem').value = '';

    if(msg.length > 0)
    {
        console.log(msg);

        // Nome de usuario e sua fala
        socket.emit('chat message' , `${nome_usuario} : \b  ${msg}`);
        
        // Reset valor do input
        limpa
    }
}

// Input submit value
let inputMess = document.getElementById('menssagem');

inputMess.addEventListener('keyup',(e)=>
{
    if(e.code == 'Enter')
    {
        enviar_menssagem();
    }
})


// Sempre que receber ela adiciona a lista
socket.on('chat message' , (msg)=>
{
    let ul = document.getElementById("messages");
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(msg));
    ul.appendChild(li);
})
})



