const navToggle = document.querySelector('.nav-toggle'); //create variable for nav toggle button


//event listener for navToggle button
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})