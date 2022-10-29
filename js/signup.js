
const submitSignup = () => {
  const $signup = document.querySelector("#signup");
  const $login = document.querySelector("#login");
  const baseUrl = "http://localhost:8000";
  const $form = document.querySelector("#signup form");

  $form.addEventListener("submit", (e) => {    
    e.preventDefault();
    const name = e.target.querySelector('input[type="text"]');
    const email = e.target.querySelector('input[type="email"]');
    const pwd = e.target.querySelector('input[type="password"]');

  
    let isBoolean = Boolean(name.value) && Boolean(email.value) && Boolean(pwd.value);

    /*signup fetch */
    if(isBoolean){
      const data = {
        name : name.value,
        email : email.value,
        password : pwd.value
      }

      fetch(`${baseUrl}/customers/signup`, {
        method : "POST",
        mode : "cors",
        headers :{
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
      .then((res) => {
        if(res.status === 409){
          alert("이미 사용 중인 이메일입니다.");
        } 
        else if(res.status === 201){
          //redirect
          $signup.classList.remove("active");
          $login.classList.add("active");
          
          alert("가입을 축하드립니다.");
        }
      })
      .catch((error) => console.log(error));
    } else {
      alert("이름, 이메일, 비밀번호를 입력해주세요.")
    }
  });

}

submitSignup();