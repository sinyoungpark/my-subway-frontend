/*fetch baseUrl */
const baseUrl = "http://localhost:8000";

/*withCredentials 전역 설정 
import axios from "axios";
axios.defaults.withCredentials = true;
*/

/*sections */
const $header = document.querySelector('header');
const $mainTop = document.querySelector('.main-top');
const $sectSignup = document.getElementById("signup");
const $sectLogin = document.getElementById("login");
const $sect01 = document.getElementById("sect01");


//accesstoken 
const hideRegisterPage = () => {
  if(window.sessionStorage.getItem("accesstoken")){
    $sectSignup.classList.remove("acitve");
    $sectLogin.classList.remove("active");
    $header.classList.add("active");
    $mainTop.classList.add("active");
    $sect01.classList.add("active");
  } else {
    $sectSignup.classList.add("active");
  }
} 

hideRegisterPage();