const submitSignup = () => {
  /*
  1. 회원가입 rest api 요청
  2. login 화면 전환
  */

  const $form = document.querySelector("#signup form");

  $form.addEventListener("submit", (e) => {    
    e.preventDefault();
    const name = e.target.querySelector('input[type="text"]');
    const email = e.target.querySelector('input[type="email"]');
    const pwd = e.target.querySelector('input[type="password"]');

  
    let isBoolean = Boolean(name.value) && Boolean(email.value) && Boolean(pwd.value);


    /*request signup api*/
    if(isBoolean){
      const data = {
        name : name.value,
        email : email.value,
        password : pwd.value
      }

      axios.post(`${baseUrl}/customers/signup`, JSON.stringify(data))
      .then((res) => res.json())
      .then((data) => {
        if(data.error) alert(data.error);
        else{
          $sectSignup.classList.remove("active");
          $sectLogin.classList.add("active");
          alert(data.result);
        }
      })
      .catch((error) => alert(error));
    } else {
      alert("이름, 이메일, 비밀번호를 입력해주세요.")
    }
  });
  
  /*loginBtn clickHandler*/
  const $loginBtn = document.querySelector("#signup .login_btn");

  $loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    $sectSignup.classList.remove("active");
    $sectLogin.classList.add("active");
  });

}

submitSignup();