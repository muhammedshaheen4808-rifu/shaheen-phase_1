
function addItem() {
  var text = document.getElementById("item").value;

  var li = document.createElement("li");
  li.innerText = text;

  document.getElementById("list").appendChild(li);
}

function addTask() {
  var text = document.getElementById("task").value;

  var li = document.createElement("li");
  li.innerText = text;

  
  li.onclick = function() {
    li.remove();
  };

  document.getElementById("todo").appendChild(li);
}

function toggle() {
  var text = document.getElementById("status");

  if (text.innerText === "OFF") {
    text.innerText = "ON";
  } else {
    text.innerText = "OFF";
  }
}