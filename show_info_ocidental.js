let corvo = document.getElementById("corvo");
let flores = document.getElementById("flores");

let info_corvo = document.querySelector(".info_corvo");
let info_flores = document.querySelector(".info_flores");

let info = document.querySelector(".info");

corvo.addEventListener("click", () => {
  if (info_corvo.style.display === "none") {
    info.style.display = "inline-block";
    info.style.margin = "-600px 0 0 50px";
    info.style.borderWidth = "2px 2px 5px 5px";
    info_corvo.style.display = "inline-block";
  } else {
    info.style.display = "none";
    info_corvo.style.display = "none";
  }
});

flores.addEventListener("click", () => {
  if (info_flores.style.display === "none") {
    info.style.display = "inline-block";
    info.style.margin = "-500px 0 0 580px";
    info.style.borderWidth = "5px 5px 2px 2px";
    info_flores.style.display = "inline-block";
  } else {
    info.style.display = "none";
    info_flores.style.display = "none";
  }
});
