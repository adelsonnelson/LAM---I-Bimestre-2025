// 1. Botão: Mensagem Simples
function mostrarMensagem() {
    alert("Hello World");
  }
  
  // 2. Botão: Mostrar Nome
  function mostrarNome() {
    const nome = prompt("Digite seu nome:");
    alert("Olá, " + nome + "!");
  }
  
  // 3. Botão: Soma de Números
  function mostrarSoma() {
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));
    const resultado = numero1 + numero2;
    alert("A soma dos dois números é: " + resultado);
  }
  
  // 4. Botão: Verificar Idade
  function verificarIdade() {
    const idade = parseInt(prompt("Digite sua idade:"));
    if (idade >= 18) {
      alert("Você é maior de idade.");
    } else {
      alert("Você é menor de idade.");
    }
  }
  
  // 5. Botão: Saudação pelo Horário
  function saudacaoHorario() {
    const horaAtual = new Date().getHours();
    let saudacao;
  
    if (horaAtual < 12) {
      saudacao = "Bom dia!";
    } else if (horaAtual < 18) {
      saudacao = "Boa tarde!";
    } else {
      saudacao = "Boa noite!";
    }
  
    alert(saudacao);
  }
  