let data;

const requestData = () => {
    const requestURL = "../db.json";

    /*db.json 파일 읽어오기 */
    let request = new XMLHttpRequest();
    request.open("get", requestURL);

    request.responseType = "json";
    request.send();

    request.onload = function(){
        data = request.response;
        console.log(data);
    }
}

requestData();