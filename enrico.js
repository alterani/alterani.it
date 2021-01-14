var elemH2;
var nomeEmma = "ENRICO";
var saluto = "Ciao da ....";
console.log("funziona!");

document.addEventListener("DOMContentLoaded", function () {
  elemH2 = document.getElementById("idEmma");
  console.log("funziona2!");
});

setInterval(function () {
  if (elemH2) {
    if (nomeEmma.length == 6) {
      nomeEmma = "";
      elemH2.innerHTML = saluto + nomeEmma;
    } else if (nomeEmma.length == 0) {
      nomeEmma = "E";
      elemH2.innerHTML = saluto + nomeEmma;
    } else if (nomeEmma.length == 1) {
      nomeEmma = "En";
      elemH2.innerHTML = saluto + nomeEmma;
    } else if (nomeEmma.length == 2) {
      nomeEmma = "Enr";
      elemH2.innerHTML = saluto + nomeEmma;
    } else if (nomeEmma.length == 3) {
      nomeEmma = "Enri";
      elemH2.innerHTML = saluto + nomeEmma;
    } else if (nomeEmma.length == 4) {
      nomeEmma = "Enric";
      elemH2.innerHTML = saluto + nomeEmma;
    } else if (nomeEmma.length == 5) {
      nomeEmma = "Enrico";
      elemH2.innerHTML = saluto + nomeEmma;
    }
  }
}, 1000);

setInterval(function () {
  reload();
}, 18000);

function reload() {
  if (elemH2) {
    console.log("Refreshed into");
    window.location.reload();
    var content = container.innerHTML;
    container.innerHTML = content;
  }
  //this line is to watch the result in console , you can remove it later
  console.log("Refreshed");
}
