var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var pencil = document.querySelector("#pencil");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var tipsBtn = document.querySelector(".tipBtn");
var closeBtn = document.querySelector(".closeBtn");
var overlay = document.getElementById("overlay")

function deleteTodo() {
  for (let span of spans) {
    span.addEventListener("click", function () {
      span.parentElement.remove();
    });
  }
}

function loadTodo() {
  if (localStorage.getItem('todoList')) {
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}

input.addEventListener("keypress", function (keyPressed) {
  if (keyPressed.which === 13) {
    var li = document.createElement("li");
    var spanElement = document.createElement("span");
    var icon = document.createElement("i");

    var newTodo = this.value;
    this.value = " ";

    icon.classList.add('fa-solid', 'fa-square-minus');
    li.classList.add('todo_element');
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement, newTodo);

    deleteTodo();
  }
});

ul.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false
);

saveBtn.addEventListener('click', function () {
  localStorage.setItem('todoList', ul.innerHTML);

});

clearBtn.addEventListener('click', function () {
  ul.innerHTML = "";
  localStorage.removeItem('todoList', ul.innerHTML);
});

deleteTodo();

loadTodo();