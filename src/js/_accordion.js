// Accordion 1, Service 2.0


const accordion = document.querySelectorAll('.we-offer__accordion');


accordion.forEach(a => {
  a.addEventListener('click', () => {
    a.classList.toggle('is-open');
  });
});

