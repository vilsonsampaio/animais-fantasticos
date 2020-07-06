// Dropdown para mobile e tablets

import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, arrayEventos) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // Define touchstart e click como argumento padrão de arrayEventos, caso usuário não defina
    if (arrayEventos === undefined) this.arrayEventos = ['touchstart', 'click'];
    else this.arrayEventos = arrayEventos;

    this.activeClass = 'active';

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Ativando dropdown menu e adicionando a função que observa o click fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    this.classList.add(this.activeClass);
    outsideClick(element, this.arrayEventos, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona os eventos ao dropdown menu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.arrayEventos.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });

      /*
      O mesmo que isso

      menu.addEventListener('click', handleClick)
      menu.addEventListener('touchstart', handleClick)

      */
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
