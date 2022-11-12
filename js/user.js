var deptURL = 'https://web-1303840613.cos.ap-shanghai.myqcloud.com/json/dept.json';
var request_dept = new XMLHttpRequest();
request_dept.open('GET', deptURL);
request_dept.responseType = 'json';
request_dept.send();
request_dept.onload = function () {
    var deptOBJ = request_dept.response;
    mainRequest(deptOBJ);
}

function mainRequest(deptOBJ) {
    var requestURL = 'https://web-1303840613.cos.ap-shanghai.myqcloud.com/json/userData.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        var userData = request.response;
        var inputID = getQueryID("id");
        updateConfig(userData, inputID, deptOBJ);
    }
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
function updateConfig(userData, inputID, deptOBJ) {
    const userName = document.querySelector('.top-xm-1');
    const userID = document.querySelector('.top-xgh');
    const userDept = document.querySelector('#dept');
    userName.textContent = '魏明铭';
    if (inputID == -1) {
        alert('未配置 Student ID');
        return;
    }
    var found = 0;
    for (let i = 0; i < userData.length; i++) {
        if (userData[i] == null) continue;
        if (userData[i]["学号"] == inputID) {
            found = 1;
            userName.textContent = userData[i]["姓名"];
            userID.textContent = '学工号：' + userData[i]["学号"];
            userDept.textContent = '学院/班级：' + deptOBJ[userData[i]["分流专业"]];
            return;
        }
    }
    if (found == 0) {
        alert('未找到匹配的 Student Name');
    }
}