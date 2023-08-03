const form = document.getElementById('form-deposito');
// form é a varival referente ao elemento <form> de id 'form-deposito'

const nomeBeneficiario = document.getElementById('nome-beneficiario');
// nomeBeneficiario quando declarado antes do código o torna uma variavel global

function validaNome(nomeCompleto){
    // passa o nome inserido como parametro
    
    const nomeComoArray = nomeCompleto.split(' ');
    // recebe o nome inserido como array e splita

    return nomeComoArray.length >= 2;
    // retorna (como true) o nome - como array - se forem pelo menos 2 nomes (sugerindo assim que o usuario inseriu pelo menos nome + sobrenome)
}

form.addEventListener('submit', function(evento){
    let formValido = false;
    // cria a variavel formValida com valor inicial setado em false
    
    evento.preventDefault();
    // método que quando chamado impede a execução da ação padrão associada ao evento
    
    // const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');

    const msgSucesso = `Montante de: <b>${valorDeposito.value}</b> | Depositado para o cliente: <b>${nomeBeneficiario.value}</b> | Conta: <b>${numeroContaBeneficiario.value}</b>`; 

    formValido = validaNome(nomeBeneficiario.value)
    // o form sera valido apenas se o nome do beneficiario tiver nome e sobrenome
    
    if (formValido) {
        // alert(msgSucesso);
        const containerMsgSucesso = document.querySelector('.success-message');
        containerMsgSucesso.innerHTML = msgSucesso;
        containerMsgSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } else{
        nomeBeneficiario.style.border = "1px solid red";
        document.querySelector('.error-message').style.display = 'block';
    }
})

