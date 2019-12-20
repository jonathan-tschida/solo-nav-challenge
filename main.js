var header = document.querySelector('header');
var navBar = document.querySelector('nav');
var navButtons = document.querySelectorAll('.nav-button');
var allCourses = document.querySelector('#all-courses');
var collections = document.querySelector('#collections');
var wishlist = document.querySelector('#wishlist');
var archived = document.querySelector('#archived');

changeMain(allCourses);


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
      changeMain(allCourses);
      break;
    case 'collections-nav':
      changeMain(collections);
      break;
    case 'wishlist-nav':
      changeMain(wishlist);
      break;
    case 'archived-nav':
      changeMain(archived);
      break;
  }
}

function changeMain(node) {
  allCourses.remove();
  collections.remove();
  wishlist.remove();
  archived.remove();
  header.parentNode.insertBefore(node, header.nextSibling);
}
