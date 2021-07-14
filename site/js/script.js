// DOM manipulation

function sayHello () {
  this.textContent = "said it!";
  var name = document.getElementById("name").value;
  var messege = "<h2>Hello " + name + "!</h2>";
  // console.log(messege);
  document.getElementById("content").innerHTML = messege;

  if (name==="student") {
    document.querySelector("#title").textContent += " & Lovin' it!";
  }
}

// Unobstrusive event binding

document.querySelector("button").addEventListener("click", sayHello);

// document.querySelector("button").onclick = sayHello;
