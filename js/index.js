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
  const $list = document.querySelectorAll("#gnb a");
  const $logo = document.querySelector(".logo a");
  const $path = document.querySelector(".main-top .path");

  const showSection = (target) => {
    const sect = target.dataset.id;

    target.addEventListener("click", (e) => {
      e.preventDefault();

      $path.removeChild(document.querySelector(".path span"));
      const $curpath = document.createElement("span");
      $curpath.innerText = target.innerText;

      console.log(target.innerText);

      target.dataset.parent ?  $path.innerText = target.dataset.parent + " >" : $path.innerText = "";

      $path.appendChild($curpath);

      const $section = document.getElementById(sect);
      document.querySelector("section.active").classList.remove("active");
      $section.classList.add("active");
    });
  }

  $list.forEach((list) => showSection(list));
  showSection($logo);
}

makeSPA();