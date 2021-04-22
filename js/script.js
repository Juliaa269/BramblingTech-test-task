$(() => {
    function burgerMenu(selector) {
    let menu = $(selector);
    let button = $('.burger-menu_button');
    let links = $('.burger-menu_link');
    let overlay = $('.burger-overlay');
  
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
  
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
  
    function toggleMenu() {
      menu.toggleClass('burger-menu_active');
      if(menu.hasClass('burger-menu_active')) {
        $('body').css('overflow', 'hidden');
      } else {
        $('body').css('overflow', 'visible');
      }
    }
  }
  
  burgerMenu('.burger-menu');
});

$(() => {
  function burgerMenu(selector) {
  let menu = $(selector);
  let button = $('.burger-menu_button2');
  let links = $('.burger-menu_link2');
  let overlay = $('.burger-overlay2');

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass('burger-menu_active2');
    if(menu.hasClass('burger-menu_active2')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'visible');
    }
  }
}

burgerMenu('.burger-menu2');
});


$('.header-2-back').addClass('original').clone().insertAfter('.header-2-back')
    .addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0')
    .css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) { 
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}


$(document).ready(function(){
  $('a[href^="#"]').click(function(){ 
    if(document.getElementById($(this).attr('href').substr(1)) != null) { 
       $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 2000);
    }     
    return false;
  });
});

let animItems = document.querySelectorAll('.anim-items');

if(animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(){
    for(let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active');
      } else {
        if(!animItem.classList.contains('anim-no-hide')) {
          animItem.classList.remove('active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop, left: rect.left + scrollLeft
    }
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}
