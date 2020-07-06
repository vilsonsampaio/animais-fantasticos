export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");

  // O map em uma array de strings, passando o Number como parâmetro, transforma todos os ítens em número.
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  // O indexOf procura dentro da array o index do ítem passado por parâmetro e retorna ele. Caso não tenha nenhum ítem na Array igual ao passado por parâmetro, ele retorna -1.
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1; // Aqui vai retornar true ou false.

  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  } else {
    funcionamento.classList.add("fechado");
  }
}
