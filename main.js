const form = document.getElementById('form-deposito');
// form é a varival referente ao elemento <form> de id 'form-deposito'

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
    
    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');

    const msgSucesso = `Montante de: ${valorDeposito.value} | Depositado para o cliente: ${nomeBeneficiario.value} | Conta: ${numeroContaBeneficiario.value}`; 

    formValido = validaNome(nomeBeneficiario.value)
    // o form sera valido apenas se o nome do beneficiario tiver nome e sobrenome
    if (formValido) {
        alert(msgSucesso);

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } else{
        alert("o nome não está completo");
    }
})

console.log(form)

