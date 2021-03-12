let navBtn = document.querySelector(".burger-menu");
let menu = document.querySelector(".navigation");

navBtn.addEventListener("click", function(){
    menu.classList.toggle('open-menu');
    navBtn.classList.toggle('click');
    if (menu.style.maxHeight){
        menu.style.maxHeight = null;
      } else {
        menu.style.maxHeight = menu.scrollHeight + "px";
      }
})

let header = document.querySelector('.header-block');

document.addEventListener('scroll', function() {
  if (window.scrollY >= header.offsetHeight) {
    header.classList.add('bg-header')
  } 
  else {
    header.classList.remove('bg-header')
  };
});
