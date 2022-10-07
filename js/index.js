/*accordion menu*/
const makeAccordion = () => {
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
}

makeAccordion();

/*SPA */
const makeSPA = () => {
  const $list = document.querySelectorAll("#gnb li");

  $list.forEach((list) => {
    const target = list.dataset.id;
    if(target){
      list.addEventListener("click", () => {
        $section = document.getElementById(target);

        document.querySelector("section.active").classList.remove("active");
        console.log($section);
        $section.classList.add("active");
      });
    }
  });
}

makeSPA();
