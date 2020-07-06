export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    // O map em uma array de strings, passando o Number como parâmetro,
    // transforma todos os ítens em número.
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    // O indexOf procura dentro da array o index do ítem passado por parâmetro e retorna ele.
    // Caso não tenha nenhum ítem na Array igual ao passado por parâmetro, ele retorna -1.

    // Aqui vai retornar true ou false.
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    // eslint-disable-next-line max-len
    const horarioAberto = this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];

    // Retorna true ou false
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    this.dadosFuncionamento();
    this.dadosAgora();
    this.ativaAberto();
    return this;
  }
}
