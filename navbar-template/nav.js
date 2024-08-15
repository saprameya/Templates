const primayNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    const visibility = primayNav.getAttribute('data-visible');

    if(visibility === "false"){
        primayNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }else{
        primayNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);

    }
    
})