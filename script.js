// Seleciona o formulário e o corpo da tabela
const form = document.querySelector('form');
const corpoTabela = document.querySelector('#corpoTabela');

// Define os ícones para aprovado e reprovado
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Aprovado"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Reprovado"/>';

// Arrays para armazenar as atividades e notas
const atividades = [];
const notas = [];

// Adiciona um evento de submit ao formulário
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que a página recarregue

    // Captura os valores de nome e nota da atividade
    const nomeAtividade = document.getElementById('nomeDaAtividade').value.trim();
    const notaAtividade = document.getElementById('notaDaAtividade').value.trim();

    // Verifica se os campos foram preenchidos corretamente
    if (nomeAtividade === '' || notaAtividade === '' || isNaN(Number(notaAtividade))) {
        alert('Por favor, preencha todos os campos corretamente.');
        return; // Interrompe a execução caso os dados estejam inválidos
    }

    // Verifica se a atividade já foi adicionada
    if (atividades.includes(nomeAtividade)) {
        alert('Esta matéria já foi adicionada.');
        return; // Impede a duplicação de atividades
    }

    // Converte `notaAtividade` para número após validação
    const nota = Number(notaAtividade);

    // Determina o emoji baseado na nota
    const statusImagem = nota >= 7 ? imgAprovado : imgReprovado;

    // Cria uma nova linha para a tabela com nome, nota e emoji de aprovação ou reprovação
    const novaLinha = `
        <tr>
            <td>${nomeAtividade}</td>
            <td>${nota}</td>
            <td>${statusImagem}</td>    
        </tr>`;

    // Adiciona a nova linha ao corpo da tabela
    corpoTabela.innerHTML += novaLinha;

    // Armazena a atividade e a nota
    atividades.push(nomeAtividade);
    notas.push(nota);

    // Atualiza a média final após adicionar a nova nota
    atualizaMediaFinal();

    // Limpa os campos de entrada
    form.reset();
});

// Função para atualizar a média final na interface
function atualizaMediaFinal() {
    // Calcula a média final
    const mediaFinal = calculaMediaFinal();

    // Exibe a média final e o status (aprovado ou reprovado)
    document.getElementById('mediaFinal').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('resultado').innerHTML =
        mediaFinal >= 7 ? 'Aprovado!' : 'Reprovado.';
}

// Função para calcular a média final
function calculaMediaFinal() {
    // Soma as notas armazenadas no array `notas`
    const somaDasNotas = notas.reduce((soma, nota) => soma + nota, 0);
    return somaDasNotas / notas.length; // Retorna a média
}
