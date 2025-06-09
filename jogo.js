const botaoNao = document.getElementById("botaoNao");
const botaoSim = document.getElementById("botaoSim");
const telaJogo = document.getElementById("telaJogo");
const conteudo = document.getElementById("conteudoPrincipal");

// Botão "Não" foge
botaoNao.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 40);
  botaoNao.style.left = `${x}px`;
  botaoNao.style.top = `${y}px`;
});

// Botão "Sim" revela o conteúdo
botaoSim.addEventListener("click", () => {
  alert("Eu sabia!!! Te amo muito 😍");
  telaJogo.style.display = "none";
  conteudo.style.display = "block";
});
