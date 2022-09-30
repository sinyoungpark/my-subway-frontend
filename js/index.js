const $nav = document.querySelectorAll("#gnb > li");

$nav.forEach((list) => {
  list.addEventListener("click", function(){
    this.classList.toggle("active");
    const panel = this.children[0];
    if(panel.classList.contains("gnb-sub-wrap")){
      panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
