// Dropdown para mobile e tablets

import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const arrayEventos = ['touchstart', 'click'];
  
  dropdownMenus.forEach(menu => {
    arrayEventos.forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    })
    
    /* 
    O mesmo que isso
    
    menu.addEventListener('click', handleClick)
    menu.addEventListener('touchstart', handleClick)
  
    */
  })
  
  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, arrayEventos, () => {
      this.classList.remove('active')
    });
  }  
}

