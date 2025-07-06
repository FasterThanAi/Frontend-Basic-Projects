const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
    if (inputbox.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;

        li.addEventListener("click", function () {
            li.classList.toggle("checked");
            saveData();
        });

        listcontainer.appendChild(li);

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        span.addEventListener("click", function (e) {
            e.stopPropagation();
            li.remove();
            saveData();
        }, false);
    }

    inputbox.value = "";
    saveData();
}

// Save the current innerHTML to localStorage
function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

// Re-bind click and delete event listeners to each li/span
function rebindListeners() {
    const allLis = listcontainer.querySelectorAll("li");
    allLis.forEach((li) => {
        li.addEventListener("click", function () {
            li.classList.toggle("checked");
            saveData();
        });

        const span = li.querySelector("span");
        if (span) {
            span.addEventListener("click", function (e) {
                e.stopPropagation();
                li.remove();
                saveData();
            });
        }
    });
}

// Load saved list and rebind listeners
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data") || "";
    rebindListeners();
}

showTask();
