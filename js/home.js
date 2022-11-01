const home = () => {

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

  /*나의 레시피 받아오기 */
  const getMyRecipes = () => {

    const recipes = fakeDB.board;  
    const $parentElement = document.querySelector("#sect01 .recipes");

    recipes.forEach((recipe) => {
      const { title, img, ingredients, likes } = recipe;
      const $listElement = document.createElement("li");
      $listElement.classList.add("recipe");
      //create title element 
      const $titleElement = document.createElement("p");
      $titleElement.classList.add("recipe_title");
      $titleElement.textContent = title;
      //create menu-img element
      const $menuImg = document.createElement("img");
      $menuImg.classList.add("menu_img");
      $menuImg.setAttribute("src", img);
      //create ingredients img
      const $ingredients = document.createElement("ul");
      $ingredients.classList.add("ingredients");
      ingredients.forEach((ingredient) => {
        const $ingre_item = document.createElement("li");
        const $ingre_title = document.createElement("p");
        const $ingre_img = document.createElement("img");

        $ingre_title.textContent = ingredient;
        $ingre_img.setAttribute("src", `../img/ingredients/${ingredient}.jpg`);
        $ingre_item.append($ingre_title, $ingre_img);
        $ingredients.append($ingre_item);
      });
      //likes
      const $likes = document.createElement("p");
      $likes.textContent = `좋아요 ${likes}개`;
      $likes.classList.add("likes");

      $listElement.append($titleElement, $menuImg, $ingredients, $likes);
      $parentElement.append($listElement);
    });
  }
  getMyRecipes();

  /*랭킹 데이터 받아오기 */
  const getRankingData = () => {
    const rankings = fakeDB.ranking;  
    const $parentElement = document.querySelector("#sect01 .rankings");

    rankings.forEach((item, idx) => {
      const { writer, profile, title, img, ingredients, likes } = item;
      const $listElement = document.createElement("li");
      $listElement.classList.add("item");

      //create num element 
      const $num = document.createElement("span");
      $num.classList.add("num");
      $num.textContent = idx + 1;
      //create title element 
      const $titleElement = document.createElement("p");
      $titleElement.classList.add("recipe_title");
      $titleElement.textContent = title;
      //create menu-img element
      const $menuImg = document.createElement("img");
      $menuImg.classList.add("menu_img");
      $menuImg.setAttribute("src", img);
      //create ingredients img
      const $ingredients = document.createElement("ul");
      $ingredients.classList.add("ingredients");
      ingredients.forEach((ingredient) => {
        const $ingre_item = document.createElement("li");
        const $ingre_title = document.createElement("p");
        const $ingre_img = document.createElement("img");

        $ingre_title.textContent = ingredient;
        $ingre_img.setAttribute("src", `../img/ingredients/${ingredient}.jpg`);
        $ingre_item.append($ingre_title, $ingre_img);
        $ingredients.append($ingre_item);
      });
      //create user-profile element 
      const $profile = document.createElement("p");
      $profile.classList.add('writer-profile');
      $profile.textContent = writer;
      const $writerImg = document.createElement("img");
      $writerImg.setAttribute("src", profile);
      $profile.appendChild($writerImg);
      //likes
      const $likes = document.createElement("p");
      $likes.textContent = `좋아요 ${likes}개`;
      $likes.classList.add("likes");

      $listElement.append($num, $titleElement, $menuImg, $ingredients, $profile, $likes);
      $parentElement.append($listElement);
    })
  }
  getRankingData();
}

home();


// /*ad */
// const adSlider = () => {
//   let total ; 
//   fetch("http://localhost:3000/ads")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((img) => {
//       /*create list */
//       const $slides = document.querySelector(".ad-slides");
//       const $list = document.createElement("li");
//       const $img = document.createElement("img");

//       $img.setAttribute("src", img);
//       $list.appendChild($img);
//       $slides.appendChild($list);

//       /*create circle */
//       const $circles = document.querySelector(".circles");
//       const $circle = document.createElement("li");

//       $circles.appendChild($circle);
//     });
//     return data;
//   })
//   .then((data) => {
//     total = data.length;
//     const $slides = document.querySelector(".ad-slides");
//     const $lastChild = document.createElement("li");
//     const $lastImg = document.createElement("img");

//     $lastImg.setAttribute("src", data[0]);
//     $lastChild.appendChild($lastImg);
//     $slides.appendChild($lastChild);

//     const $firstChild = document.createElement("li");
//     const $firstImg = document.createElement("img");

//     $firstImg.setAttribute("src", data[data.length - 1]);
//     $firstChild.appendChild($firstImg);
//     $slides.prepend($firstChild);

//     for(let i = 0 ; i < 2; i++){
//       /*create circle */
//       const $circles = document.querySelector(".circles");
//       const $circle = document.createElement("li");

//       $circles.appendChild($circle);
//     }
//   })
//   .then(() => {
//     let idx = 1;

//     const slideAd = () => {
//       let $slides = document.querySelector(".ad-slides");
//       let $list = document.querySelector(".ad-slides li");

//       let clientWidth = $list.clientWidth;
//       $slides.style.left = `-${clientWidth * idx}px`;
//       idx === total - 1? idx = 1 : idx++;

//       activeCircles();
//     }

//     const activeCircles = () => {
//       let $circles = document.querySelectorAll(".circles li");
      
//       document.querySelector(".active").classList.remove("active");
//       $circles[idx].classList.add("active");
//     }
    

//     setInterval(slideAd, 2000);
//   });
// }

// adSlider();


// /*signup page */
// const showSignup = () => {
//   const $header = document.querySelector("header");
//   const $maintop = document.querySelector(".main-top");

//   if($sectSignup.classList.contains("active")){
//     $header.style.display = "none";
//     $maintop.style.display = "none";
//   }
// }

// showSignup();
