function showMore(id) {
  var btnText = document.getElementById(id);
  var detailsText = document.getElementById(id + '-details'); // Tilføj "-details" til ID for at finde det tilhørende detalje-element

  if (detailsText.style.display === "none" || detailsText.style.display === "") {
    btnText.innerHTML = "Vis mindre";
    detailsText.classList.add('active');
    detailsText.style.opacity = "1";
    detailsText.style.display = "inline";
    detailsText.style.transition = "0.5s";
  } else {
    btnText.innerHTML = "Vis detaljer";
    detailsText.classList.remove('active');
    detailsText.style.opacity = "0";
    detailsText.style.display = "none";
    detailsText.style.transition = "0.5s";
  }
}

/*
const showDetailButtons = document.querySelectorAll('.show-details');

showDetailButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;

    if (details.style.display === 'block' || details.style.display === '') {
      details.style.display = 'none';
    } else {
      details.style.display = 'block';
    }
  });
});
*/