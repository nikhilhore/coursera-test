// Handling Events

document.addEventListener("DOMContentLoaded",
  function (event) {
    function sayHello () {
      console.log(event);
      this.textContent = "said it!";
      var name = document.getElementById("name").value;
      var messege = "<h2>Hello " + name + "!</h2>";
      document.getElementById("content").innerHTML = messege;

      if (name==="student") {
        document.querySelector("#title").textContent += " & Lovin' it!";
      }
    }
    document.querySelector("button").addEventListener("click", sayHello);
  }
);
