const navToggle = document.querySelector('.nav-toggle'); //create variable for nav toggle button

const navLinks = document.querySelectorAll('.nav__link'); //variable for all links in navbar

//event listener for navToggle button
navToggle.addEventListener('click', () => {
  //add nav-open class to body, use to show nav menu and rotate nav toggle button in css
  document.body.classList.toggle('nav-open');
});

//add event listener for each nav link

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    //remove nav-open class to hide nav menu
    document.body.classList.remove('nav-open');
  });
});

