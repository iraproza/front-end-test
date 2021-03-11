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
