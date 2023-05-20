// Função para exibir a data atual no currículo
function exibirDataAtual() {
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1; // Os meses em JavaScript começam do 0
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;

    const dataElement = document.getElementById('data-atual');
    dataElement.textContent = dataFormatada;
  }

  // Chamando a função para exibir a data atual
  exibirDataAtual();