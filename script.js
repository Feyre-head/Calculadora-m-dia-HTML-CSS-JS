//Seleciona o formulário e o corpo da tabela
const form = document.querySelector('form')
const corpoTabela = document.querySelector('#corpoTabela')

//Define od ícones para aprovado e reprovado
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Aprovado"/>'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Reprovado"/>'

//Adiciona um evento de submit ao formulário
form.addEventListener('submit', function(e) {
    e.preventDefault() //Evita que a página recarregue

    //Captura os valores de nome e nota da atividade
    const nomeAtividade = document.getElementById('nomeDaAtividade').value.trim()
    const notaAtividade = document.getElementById('notaDaAtividade').value.trim()

    //Verifica se o campo de nota foi preenchido corretamente
    if(nomeAtividade === '' || notaAtividade === '' || isNaN(Number(notaAtividade))){
        alert('Por favor, preencha todos os campos.')
        return
    }

    // Converte `notaAtividade` para número após validação
    const nota = Number(notaAtividade);
    const statusImagem = nota >= 7? imgAprovado : imgReprovado

    //Cria uma nova linha para a tabela com nome, nota e emoji de aprovação ou reprovação.
    const novaLinha = `
    <tr>
        <td>${nomeAtividade}</td>
        <td>${nota}</td>
        <td>${statusImagem}</td>    
    </tr>`

    //Adiciona uma nova linha ao corpo da tabela
    corpoTabela.innerHTML += novaLinha

    //Limpa os campos de entrada
    form.reset()
})