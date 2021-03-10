let accordion = document.getElementsByClassName("accordion");

for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
    let panel = this.nextElementSibling;
    this.classList.toggle('open');
      panel.classList.toggle('open');
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
    
}