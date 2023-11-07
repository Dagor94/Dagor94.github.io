function showMore(id) {
  var btnText = document.querySelector('.show-details');
  var detailsText = document.querySelector('.details');

  if (detailsText.style.display === "none" || detailsText.style.display === "") {
    btnText.innerHTML = "Vis mindreTEST";
    detailsText.classList.add('active');
    detailsText.style.opacity = "1";
    detailsText.style.display = "inline";
    detailsText.style.transition = "0.5";
  } else {
    btnText.innerHTML = "Vis detaljerTEST";
    detailsText.classList.remove('active');
    detailsText.style.opacity = "0";
    detailsText.style.display = "none";
    detailsText.style.transition = "0.5";
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