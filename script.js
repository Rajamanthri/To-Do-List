const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write somthing.");
    } else {
        let l = document.createElement("li");
        l.innerHTML = inputBox.value;
        list.appendChild(l);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        l.appendChild(span);
    }

    inputBox.value = "";
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}
function showTask() {
    list.innerHTML = localStorage.getItem("data");
}
showTask();