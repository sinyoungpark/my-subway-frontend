const submitLogin = () => {
  const $form = document.querySelector("#login form");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = e.target.querySelector('input[type="email"]');
    const pwd = e.target.querySelector('input[type="password"]');

  
    let isBoolean = Boolean(email.value) && Boolean(pwd.value);

    /*login fetch */
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
        body : JSON.stringify(data)
      })
      .then((res) => {
        if(res.status === 404){
          alert("이메일, 비밀번호를 확인해주세요.")
        }
        else {
          return res.json();
        }
      })
      .then((data) => {
        accessToken = data.accesstoken;
        hideRegisterPage();
        $sect01.classList.add("active");
      })
      .catch((err) => console.log(err))
    }
    else{
      alert("이메일, 비밀번호를 입력해주세요.");
    }
  });

  const $signupBtn = document.querySelector(".signup_btn");

  $signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    $sectLogin.classList.remove("active");
    $sectSignup.classList.add("active");
  })
}

submitLogin();