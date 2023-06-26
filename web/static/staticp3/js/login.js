// 登录方法、函数

var saveName = function (arr) {
    localStorage.name = JSON.stringify(arr);//把数组变为字符串，把字符串存到name中
}
var loadName = function () {
    var arr = JSON.parse(localStorage.name);//把本地存储name变为数组
    return arr;//返回数组
}
var savePass = function (arr) {
    localStorage.pass = JSON.stringify(arr);//把数组变为字符串，把字符串存到pass中
}
var loadPass = function () {
    var arr = JSON.parse(localStorage.pass);//把本地存储pass变为数组
    return arr;//返回数组
}
function login() {
    var N = [];
    var P = [];
    if (localStorage.name != null) {
        N = loadName();
    }
    if (localStorage.pass != null) {
        P = loadPass();
    }
    //获取输入框的值（文本）
    //document.getElementById("username").value;
    //username.value;
    //判断用户名是否为空
    if (document.getElementById("username").value == "") {
        // alert("Username can't be empty!");
        msg.style.display = "block";
        msg.innerText = "用户名不能为空！";
        return;
    }
    //判断密码不可为空
    if (document.getElementById("pwd").value == "") {
        // alert("Password can't be empty!");
        msg.style.display = "block";
        msg.innerText = "密码不能为空！";
        return;
    }
    var i = 0;
    for (i = 0; i < N.length; i++) {
        if (document.getElementById("username").value == N[i] && document.getElementById("pwd").value == P[i]) {
            // alert("Login successfuly!");
            msg.style.display = "block";
            msg.innerText = "登录成功！";
            msg.style.color="green";
            setTimeout(function () {
                //延迟1s跳转 get传参 字符串拼接
                window.location.href = "./index.html?username=" + document.getElementById("username").value + "&pws=" + document.getElementById("pwd").value + "";
            }, 1000);
            return;
        }
    }

    // alert("Username or password is wrong!");
    msg.style.display = "block";
    msg.innerText = "用户名或密码错误！"
    return;
}

function register() {
    var N = [];
    var P = [];
    var x = document.getElementById("username1").value;
    var y = document.getElementById("pwd1").value;
    var i = 0;
    if (localStorage.name != null) {
        N = loadName();
    }
    if (localStorage.pass != null) {
        P = loadPass();
    }
    if (x == "") {
        // alert("Username can't be empty!");
        msg1.style.display = "block";
        msg1.innerText = "账号不可为空！";
        return;
    }
    //判断密码不可为空
    if (y == "") {
        // alert("Password can't be empty!");
        msg1.style.display = "block";
        msg1.innerText = "密码不可为空！";
        return;
    }
    for (i = 0; i < N.length; i++) {
        if (N[i] == x) {
            // alert("That username has already been registered!");
            msg1.style.display = "block";
            msg1.innerText = "该用户名已被注册";
            return;
        }
    }
    if (i == N.length) {
        // alert("Successfuly register!");
        msg1.style.display = "block";
        msg1.innerText = "注册成功！";

        N.push(x);
        saveName(N);

        P.push(y);
        savePass(P);
        return;
    }
}

function loginToComment() {
    var N = [];
    var P = [];
    if (localStorage.name != null) {
        N = loadName();
    }
    if (localStorage.pass != null) {
        P = loadPass();
    }
    //获取输入框的值（文本）
    //document.getElementById("username").value;
    //username.value;
    //判断用户名是否为空
    if (document.getElementById("username").value == "") {
        // alert("Username can't be empty!");
        msg.style.display = "block";
        msg.innerText = "用户名不能为空！";
        return;
    }
    //判断密码不可为空
    if (document.getElementById("pwd").value == "") {
        // alert("Password can't be empty!");
        msg.style.display = "block";
        msg.innerText = "密码不能为空！";
        return;
    }
    var i = 0;
    for (i = 0; i < N.length; i++) {
        if (document.getElementById("username").value == N[i] && document.getElementById("pwd").value == P[i]) {
            // alert("Login successfuly!");
            msg.style.display = "block";
            msg.innerText = "登录成功！";
            msg.style.color="green";
            setTimeout(function () {
                //延迟1s跳转 get传参 字符串拼接
                window.location.href = "./JiuYeQianJing.html?username=" + document.getElementById("username").value + "&pws=" + document.getElementById("pwd").value + "#loginbox";
            }, 1000);
            return;
        }
    }

    // alert("Username or password is wrong!");
    msg.style.display = "block";
    msg.innerText = "用户名或密码错误！"
    return;
}

function loginToStudy() {
    var N = [];
    var P = [];
    if (localStorage.name != null) {
        N = loadName();
    }
    if (localStorage.pass != null) {
        P = loadPass();
    }
    //获取输入框的值（文本）
    //document.getElementById("username").value;
    //username.value;
    //判断用户名是否为空
    if (document.getElementById("username").value == "") {
        // alert("Username can't be empty!");
        msg.style.display = "block";
        msg.innerText = "用户名不能为空！";
        return;
    }
    //判断密码不可为空
    if (document.getElementById("pwd").value == "") {
        // alert("Password can't be empty!");
        msg.style.display = "block";
        msg.innerText = "密码不能为空！";
        return;
    }
    var i = 0;
    for (i = 0; i < N.length; i++) {
        if (document.getElementById("username").value == N[i] && document.getElementById("pwd").value == P[i]) {
            // alert("Login successfuly!");
            msg.style.display = "block";
            msg.innerText = "登录成功！";
            msg.style.color="green";
            setTimeout(function () {
                //延迟1s跳转 get传参 字符串拼接
                window.location.href = "./study.html?username=" + document.getElementById("username").value + "&pws=" + document.getElementById("pwd").value + "#loginbox";
            }, 1000);
            return;
        }
    }

    // alert("Username or password is wrong!");
    msg.style.display = "block";
    msg.innerText = "用户名或密码错误！"
    return;
}

function loginToTalk() {
    var N = [];
    var P = [];
    if (localStorage.name != null) {
        N = loadName();
    }
    if (localStorage.pass != null) {
        P = loadPass();
    }
    //获取输入框的值（文本）
    //document.getElementById("username").value;
    //username.value;
    //判断用户名是否为空
    if (document.getElementById("username").value == "") {
        // alert("Username can't be empty!");
        msg.style.display = "block";
        msg.innerText = "用户名不能为空！";
        return;
    }
    //判断密码不可为空
    if (document.getElementById("pwd").value == "") {
        // alert("Password can't be empty!");
        msg.style.display = "block";
        msg.innerText = "密码不能为空！";
        return;
    }
    var i = 0;
    for (i = 0; i < N.length; i++) {
        if (document.getElementById("username").value == N[i] && document.getElementById("pwd").value == P[i]) {
            // alert("Login successfuly!");
            msg.style.display = "block";
            msg.innerText = "登录成功！";
            msg.style.color="green";
            setTimeout(function () {
                //延迟1s跳转 get传参 字符串拼接
                window.location.href = "./Talk.html?username=" + document.getElementById("username").value + "&pws=" + document.getElementById("pwd").value + "";
            }, 1000);
            return;
        }
    }

    // alert("Username or password is wrong!");
    msg.style.display = "block";
    msg.innerText = "用户名或密码错误！"
    return;
}