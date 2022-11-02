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

    /*ad */
  const adSlider = () => {
    let total = null;
    const adData = fakeDB.ad;
    const $slides = document.querySelector(".ad-slides");
    const $circles = document.querySelector(".circles");

    //슬라이드 리스트, circle 생성
    adData.forEach((item) => {
      const $list = document.createElement("li");
      /*광고 이미지 */
      const $img = document.createElement("img");
      $img.setAttribute("src", item);
      $list.append($img);
      $slides.appendChild($list);
      /*create circles */
      const $circle = document.createElement("li");
      $circles.appendChild($circle);
    });

    total = adData.length;
    /*앞 뒤 하나씩 슬라이드 추가 */
    const $lastChild = document.createElement("li");
    const $lastImg = document.createElement("img");

    $lastImg.setAttribute("src", adData[0]);
    $lastChild.appendChild($lastImg);
    $slides.appendChild($lastChild);

    const $firstChild = document.createElement("li");
    const $firstImg = document.createElement("img");

    $firstImg.setAttribute("src", adData[adData.length - 1]);
    $firstChild.appendChild($firstImg);
    $slides.prepend($firstChild);
    //circle도 2개 추가 
    for(let i = 0 ; i < 2; i++){
      /*create circle */
      const $circles = document.querySelector(".circles");
      const $circle = document.createElement("li");

      $circles.appendChild($circle);
    }

    const $slidesList = document.querySelector(".ad-slides li");
    let idx = 1;

    const slideHandler = () => {
      //현재 보여지는 slide

      //현재 idx x clientWidth 만틈 왼쪽으로 보내기.
      let clientWidth = $slidesList.clientWidth;
      $slides.style.left = `-${clientWidth * idx}px`;

      //circle 함수 호출 
      circleHandler();
    }

    const circleHandler = () => {
      const target =document.querySelector(".circles .active");
      if(target){
        target.classList.remove("active");
      }
      $circles.children[idx].classList.add("active");
      countIdx();
    }

    const countIdx = () => {
      idx === total ? idx = 1 : idx++;
    }

    slideHandler();
    setInterval(slideHandler, 2000);
  }
  adSlider();
}

home();


