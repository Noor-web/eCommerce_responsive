// copy menu for mobile
function copyMenu() {
// copy inside .dpt-cat to departments
var optCategory = document.querySelector('.dpt-cat');
var optPlace = document.querySelector('.departments');
optPlace.innerHTML = optCategory.innerHTML;

// copy inside nav to nav
var mainNav = document.querySelector('.header-nav nav');
var navPlace = document.querySelector('.off-canvas nav');
navPlace.innerHTML = mainNav.innerHTML;

// copy .header-top .wrapper to theTopnav
var topNav = document.querySelector('.header-top .wrapper');
var topPlace = document.querySelector('.off-canvas .thetop-nav');
topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//show mobile menu
const menuButton = document.querySelector('.trigger');
	closeButton = document.querySelector('.t-close');
	addClass = document.querySelector('.site');
menuButton.addEventListener('click', function(){
	addClass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function(){
	addClass.classList.remove('showmenu')
})

// show submenu on mobile
const subMenu = document.querySelectorAll('.has-child .icon-small')
subMenu.forEach((menu) => menu.addEventListener('click', toggle))

function toggle(e) {
	e.preventDefault();
	subMenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null)
	if (this.closest('.has-child').classList != 'expand');
	this.closest('.has-child').classList.toggle('expand')
}

//Slider
const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

// show search
const searchButton = document.querySelector(".t-search");
 	tClose = document.querySelector(".search-close");
 	showClass = document.querySelector(".site");
 searchButton.addEventListener('click', function(){
 	showClass.classList.toggle("showsearch")
 })

 tClose.addEventListener('click', function(){
 	showClass.classList.remove('showsearch')
 })
