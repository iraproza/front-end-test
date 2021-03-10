let accordion = document.getElementsByClassName("accordion");
console.log(accordion)

for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }

    if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
  });
}