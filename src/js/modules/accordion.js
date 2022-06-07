// Accordion 1, Service 2.0

function accordion(accordionSelector) {
  const accordion = document.querySelectorAll(accordionSelector);


  accordion.forEach(a => {
    a.addEventListener('click', () => {
      a.classList.toggle('is-open');
    });
  });

}

// module.exports = accordion;
export default accordion;


