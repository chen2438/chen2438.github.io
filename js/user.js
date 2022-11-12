var requestURL = 'https://web-1303840613.cos.ap-shanghai.myqcloud.com/json/user.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var userData = request.response;
    var userID = getQueryID("id");
    populateHeader(userData, userID);
}
function getQueryID(property) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] === property) {
            return pair[1];
        }
    }
    return -1;
}
function populateHeader(userData, userID) {
    if (userID == 0) {
        userName.textContent = '诸葛呼吸';
    }
    const userName = document.querySelector('.top-xm-1');
    for (let i = 0; i < userData.length; i++) {
        if (userData[i]["id"] == userID) {
            userName.textContent = userData[i]["name"];
        }
    }
}