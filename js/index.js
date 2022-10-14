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


/*ad */
const adSlider = () => {
  let total ; 
  fetch("http://localhost:3000/ads")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((img) => {
      /*create list */
      const $slides = document.querySelector(".ad-slides");
      const $list = document.createElement("li");
      const $img = document.createElement("img");

      $img.setAttribute("src", img);
      $list.appendChild($img);
      $slides.appendChild($list);

      /*create circle */
      const $circles = document.querySelector(".circles");
      const $circle = document.createElement("li");

      $circles.appendChild($circle);
    });
    return data;
  })
  .then((data) => {
    total = data.length;
    const $slides = document.querySelector(".ad-slides");
    const $lastChild = document.createElement("li");
    const $lastImg = document.createElement("img");

    $lastImg.setAttribute("src", data[0]);
    $lastChild.appendChild($lastImg);
    $slides.appendChild($lastChild);

    const $firstChild = document.createElement("li");
    const $firstImg = document.createElement("img");

    $firstImg.setAttribute("src", data[data.length - 1]);
    $firstChild.appendChild($firstImg);
    $slides.prepend($firstChild);

    for(let i = 0 ; i < 2; i++){
      /*create circle */
      const $circles = document.querySelector(".circles");
      const $circle = document.createElement("li");

      $circles.appendChild($circle);
    }
  })
  .then(() => {
    let idx = 1;

    const slideAd = () => {
      let $slides = document.querySelector(".ad-slides");
      let $list = document.querySelector(".ad-slides li");

      let clientWidth = $list.clientWidth;
      $slides.style.left = `-${clientWidth * idx}px`;
      idx === total - 1? idx = 1 : idx++;

      activeCircles();
    }

    const activeCircles = () => {
      let $circles = document.querySelectorAll(".circles li");
      
      document.querySelector(".active").classList.remove("active");
      $circles[idx].classList.add("active");
    }
    

    setInterval(slideAd, 2000);
  });
}

adSlider();