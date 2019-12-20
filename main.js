var navBar = document.querySelector('nav');
var navButtons = document.querySelectorAll('.nav-button');
var allCourses = document.querySelector('#all-courses');
var collections = document.querySelector('#collections');
var wishlist = document.querySelector('#wishlist');
var archived = document.querySelector('#archived');

collections.remove();
wishlist.remove();
archived.remove();

navBar.addEventListener('click', selectNavOption);

function selectNavOption(event) {
  if (event.target.classList.contains('nav-button')) {
    highlightNavButton(event);
    switchContent(event);
  }
}

function highlightNavButton(event) {
  for (var i = 0; i < navButtons.length; i++) {
    navButtons[i].classList.remove('selected')
  }
  event.target.classList.add('selected');
}

function switchContent(event) {
  switch (event.target.id) {
    case 'all-courses-nav':
      console.log('courses');
      break;
    case 'collections-nav':
      console.log('collections');
      break;
    case 'wishlist-nav':
      console.log('wishlist');
      break;
    case 'archived-nav':
      console.log('archived');
      break;
  }
}
