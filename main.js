var navBar = document.querySelector('nav');
var navButtons = document.querySelectorAll('.nav-button');

navBar.addEventListener('click', selectNavOption);

function selectNavOption(event) {
  if (event.target.classList.contains('nav-button')) {
    for (var i = 0; i < navButtons.length; i++) {
      navButtons[i].classList.remove('selected')
    }
    event.target.classList.add('selected');
  }
}
