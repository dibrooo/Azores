let sao_miguel = document.getElementById("sao_miguel");
let santa_maria = document.getElementById("santa_maria");

let info_sao_miguel = document.querySelector(".info_sao_miguel");
let info_santa_maria = document.querySelector(".info_santa_maria");

let info = document.querySelector(".info");

sao_miguel.addEventListener("click", () => {
  if (info_sao_miguel.style.display === "none") {
    info.style.display = "inline-block";
    info.style.margin = "-610px 0 0 -150px";
    info.style.borderWidth = "2px 2px 5px 5px";
    info_sao_miguel.style.display = "inline-block";
  } else {
    info.style.display = "none";
    info_sao_miguel.style.display = "none";
  }
});

santa_maria.addEventListener("click", () => {
  if (info_santa_maria.style.display === "none") {
    info.style.display = "inline-block";
    info.style.margin = "-320px 0 0 150px";
    info.style.borderWidth = "5px 2px 2px 5px";
    info_santa_maria.style.display = "inline-block";
  } else {
    info.style.display = "none";
    info_santa_maria.style.display = "none";
  }
});
