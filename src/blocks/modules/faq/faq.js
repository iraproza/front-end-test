let accordion = document.getElementsByClassName("accordion-item");
let panel = document.querySelectorAll(".panel");

for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
      for(let j = 0; j < accordion.length; j++){
        if(accordion[j].classList.contains('open')  && i !== j){
          accordion[j].classList.remove('open');
          panel[j].style.maxHeight = null;
        }
      }

      accordion[i].classList.toggle('open');
      panel[i].style.maxHeight = panel[i].style.maxHeight
        ? null
        : panel[i].scrollHeight + "px";
    });
    
}
