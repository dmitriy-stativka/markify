const mobileNav = document.querySelector('.js-mobileNav');
const bodyClass = document.querySelector('body');

mobileNav.addEventListener('click', () => {
    bodyClass.classList.toggle('nav-active');
});



let observSections = document.querySelectorAll('.mark');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {  
        entry.target.classList.add('animated');
      }else{
        entry.target.classList.remove('animated');
      }
    });
  }, {
    threshold: 0.4
  });
  
observSections.forEach((section) => observer.observe(section));