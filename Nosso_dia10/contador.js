const dataInicio = new Date("2024-12-10T00:00:00");
const contador = document.getElementById("contador");

function atualizarContador() {
  const agora = new Date();
  const tempo = agora - dataInicio;

  const dias = Math.floor(tempo / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tempo / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((tempo / (1000 * 60)) % 60);
  const segundos = Math.floor((tempo / 1000) % 60);

  contador.textContent = `Estamos juntos há ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
