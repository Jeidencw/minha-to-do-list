const input = document.getElementById("input");
const ul = document.getElementById("list-container");

function addTask(){
    if(input.value === ""){
        alert("Digite algo")
    }else{
        const li = document.createElement('li');
        li.innerHTML = input.value;
        ul.appendChild(li)

        const span = document.createElement("span")
        span.innerHTML = "&#x1F5D1;";
        li.appendChild(span);
    }

    input.value = ""

    saveData()
}

input.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

ul.addEventListener("click", (event) => {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("check");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
}, false)


function saveData() {
    localStorage.setItem("data", ul.innerHTML); 
}

function showList() {
    ul.innerHTML = localStorage.getItem("data");
}

showList()