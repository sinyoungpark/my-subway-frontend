const submitLogin = () => {
  /*
  1. 로그인 rest api 요청
  2. accesstoken 
  3. hideRegisterPage 함수 실행 
  4. sect01로 리다이렉트 
  */
  const $form = document.querySelector("#login form");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = e.target.querySelector('input[type="email"]');
    const pwd = e.target.querySelector('input[type="password"]');

    let isBoolean = Boolean(email.value) && Boolean(pwd.value);

    /*request login api */
    if(isBoolean){
      const data = {
        email : email.value,
        password : pwd.value
      }

      fetch(`${baseUrl}/customers/login`,{
        method : 'POST',
        mode : "cors",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data),
        credentials : "include"
      })
      .then((res) => res.json())
      .then((data) => {
        if(data.error) alert(data.error);
        else{
          accessToken = data.accesstoken;
          hideRegisterPage();
          $sectLogin.classList.remove("active");
          $sect01.classList.add("active");
          console.log(document.cookie);
        }
      })
      .catch((err) => alert(err));
    }
    else{
      alert("이메일, 비밀번호를 입력해주세요.");
    }
  });

  /*signupBtn clickHandler */
  const $signupBtn = document.querySelector("#login .signup_btn");

  $signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    $sectLogin.classList.remove("active");
    $sectSignup.classList.add("active");
  });
}

submitLogin();


//accesstoken 
const hideRegisterPage = () => {
  if(accessToken !== null){
    $sectSignup.classList.remove("acitve");
    $sectLogin.classList.remove("active");
  }
} 