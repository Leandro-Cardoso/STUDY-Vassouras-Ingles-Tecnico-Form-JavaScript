let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let userName = id("userName");
let userEmail = id("userEmail");
let userMsg = id("userMsg");
let form = id("form");
let errorMsg = classes("error");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    engine(userName, 0, "O nome não pode estar em branco");
    engine(userEmail, 1, "O email não pode estar em branco");
    engine(userMsg, 2, "A senha não pode estar em branco");
});

let engine = (id, serial, message) => {
    // ERROR:
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "1px solid #900";
        id.style.background = "#fee"
    }
    // SUCESS:
    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "1px solid #090";
        id.style.background = "#efe"
    }
}
