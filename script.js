let myNodeList = document.getElementsByTagName("LI");
let myList = document.getElementById("mylist");
let add = document.getElementById("add");

for (let i = 0; i < myNodeList.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  let checkBox = document.createElement("INPUT");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "checkbox";
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
  myNodeList[i].appendChild(checkBox);
}

function adding() {
  let newList = document.createElement("li");
  let inputval = document.getElementById("input").value;
  let text = document.createTextNode(inputval);
  newList.appendChild(text);
  myList.appendChild(newList);
  for (let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    let checkBox = document.createElement("INPUT");
    checkBox.setAttribute("type", "checkbox");
    checkBox.className = "checkbox";
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
    myNodeList[i].appendChild(checkBox);
  }

  let close = document.querySelectorAll(".close");

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
