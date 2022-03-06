const body = document.body;
for (var i = 0; i < 100; i++) {
  var div = document.createElement("div");
  div.innerText = "2200";
  div.style.color = "hsl(" + Math.random() * 360 + "deg, 100%, 50%)";
  div.style.fontWeight = Math.floor(Math.random() * 10) * 100;
  body.appendChild(div);
}

function spin(eName) {
  var elementName = document.querySelectorAll(eName);
  var num = Math.floor(Math.random() * elementName.length);
  elementName[num].classList.add("spin");
  elementName[num].onanimationend = function () {
    elementName[num].classList.remove("spin");
  };

  setTimeout(function () {
    spin(eName);
  }, 100);
}

function changeSpanColor() {
  var spans = document.querySelectorAll("span");
  var num = Math.floor(Math.random() * spans.length);
  spans[num].style.color = "hsl(" + Math.random() * 360 + "deg, 100%, 50%)";

  setTimeout(changeSpanColor, 200);
}

spin("div");
changeSpanColor();
