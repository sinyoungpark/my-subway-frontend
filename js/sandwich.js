const fillSandwichContent = () => {
  fetch("http://localhost:3000/info")
  .then((response) => response.json())
  .then((data) => data.sandwich)
  .then((data) => {
     const $ul = document.querySelector("ul.items");
     data.name.forEach((name, idx) => {
         let textNode;
 
         const $list = document.createElement("li");
 
         const $img = document.createElement("img");
         $img.setAttribute("src", data.img[idx]);
 
         const $name = document.createElement("p");
         textNode = document.createTextNode(name);
         $name.appendChild(textNode);
         $name.classList.add("name");
 
         const $kcal = document.createElement("p");
         textNode = document.createTextNode(data.kcal[idx] + "kcal");
         $kcal.appendChild(textNode);
         $kcal.classList.add("kcal");
 
         $list.appendChild($img);
         $list.appendChild($name);
         $list.appendChild($kcal);
 
         $ul.appendChild($list);
 
     });
  });
 }
 
 fillSandwichContent();
 
 /*데이터 전송받고, 데이터로 */