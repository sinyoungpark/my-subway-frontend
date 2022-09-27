const staffArea = document.querySelector(".staff p");
const customerArea = document.querySelector(".customer p");

staffArea.textContent = "HI!";
customerArea.textContent ="wow!";

/*callback version */
// const chatbot = () => {
//     /*
//     1. 어서오세요. 서브웨이입니다~! / 2초 
//     2. 메뉴랑 빵 선택해주세요 2초 
//     */

//    setTimeout(() => {
//     staffArea.textContent = "어서오세요. 서브웨이입니다.";
//     setTimeout(() => {
//         staffArea.textContent = "메뉴랑 빵을 선택해주세요";
//     }, 2000);
//    }, 2000)
// }

// chatbot();

/*promise version */
const chatbot = (time, work) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(work());
        }, time);
    });
}

chatbot(2000, () => staffArea.textContent = "어서오세요. 서브웨이입니다.")

.then(() => chatbot(2000, () => staffArea.textContent = "메뉴랑 빵을 선택해주세요"));