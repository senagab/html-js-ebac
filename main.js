const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(evento){
    evento.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    if (validaNome(nomeBeneficiario.value) === false) {
        alert("o nome não está completo");
    } else{
        console.log("tudo certo")
    }
})

console.log(form)

