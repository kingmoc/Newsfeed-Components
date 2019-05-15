
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open')
  if(menu.classList.contains('menu--open')) {
      TweenMax.to(menu, .8, {
        x: 500,    
        ease: Power4.easeOut,
      });
      console.log('opening');
  }
  else {
      TweenMax.to(menu, 1.5, {
        x: -500,    
        ease: Power4.easeOut,
      });
      console.log('closing');
  }
}


// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
console.log(menuButton);



// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', e => {
  toggleMenu()
})