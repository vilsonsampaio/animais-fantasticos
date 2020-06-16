export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {    
    const windowMetade = window.innerHeight * 0.8;
    function animaScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade)<0; // etorna boolean
        if (isSectionVisible) {
          section.classList.add('ativo')
        } 
        // repetir a animação quando subir ao topo
        // else {
        //   section.classList.remove('ativo')
        // }
      })
    }
    
    animaScroll() // ativando a função para já funcionar com a primeira seção
    
    window.addEventListener('scroll', animaScroll)
  }
}