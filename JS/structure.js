src = "https://code.jquery.com/jquery-3.6.1.min.js"
integrity = "sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="; crossorigin = "anonymous";
/*NAVBAR MOVING SETTING*/
const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
    if (!scrolled) {
      navbar.style.transform = 'translateY(-70px)';
    }
    setTimeout(function () {
      navbar.style.transform = 'translateY(0)';
      scrooled = true;
    }, 200);
  } else {
    navbar.classList.add('top');
    scrooled = false;
  }

}
// Smooth Scrolling
$('#navbar a, .btn').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    )
  }

});

/*Hamburger setting*/
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  if (Event.type === 'touchstart') Event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  Event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    Event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    Event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

/*Animation report page*/
//smooth scrolling
$('.btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      }, 400
    );
  }
});