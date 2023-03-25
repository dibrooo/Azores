let faial =
  document.getElementById(
    "faial"
  ); /* cria uma variável que corresponde ao id "faial" que está associado ao path do svg do faial */
let pico = document.getElementById("pico");
let sao_jorge = document.getElementById("sao_jorge");
let terceira = document.getElementById("terceira");
let graciosa = document.getElementById("graciosa");

let info_faial =
  document.querySelector(
    ".info_faial"
  ); /* criar uma variável que corresponde à classe "info_faial" */
let info_pico = document.querySelector(".info_pico");
let info_sao_jorge = document.querySelector(".info_sao_jorge");
let info_terceira = document.querySelector(".info_terceira");
let info_graciosa = document.querySelector(".info_graciosa");

let info = document.querySelector(".info");

faial.addEventListener("click", () => {
  /* adiciona um evento de clique à ilha*/
  if (info_faial.style.display === "none") {
    /* verifica se a info está escondida */
    /* se estiver escondida ele mostra */
    info.style.display = "inline-block";
    info.style.margin =
      "-490px 0 0 220px"; /* posiciona a info no lugar correto */
    info.style.borderWidth = "5px 5px 2px 2px"; /* ajusta a borda */
    info_faial.style.display = "inline-block";
  } else {
    /* se estiver à mostra ele esconde */
    info.style.display = "none";
    info_faial.style.display = "none";
  }
});

pico.addEventListener("click", () => {
  if (info_pico.style.display === "none") {
    info.style.display = "inline-block";
    info.style.margin = "-165px 0 0 530px";
    info.style.borderWidth = "2px 5px 5px 2px";
    info_pico.style.display = "inline-block";
  } else {
    info.style.display = "none";
    info_pico.style.display = "none";
  }
});

sao_jorge.addEventListener("click", () => {
  if (info_sao_jorge.style.display === "none") {
    info.style.display = "inline-block";
    info.style.margin = "-260px 0 0 670px";
    info.style.borderWidth = "2px 5px 5px 2px";
    info_sao_jorge.style.display = "inline-block";
  } else {
    info.style.display = "none";
    info_sao_jorge.style.display = "none";
  }
});

terceira.addEventListener("click", () => {
  if (info_terceira.style.display === "none") {
    info.style.display = "inline-block";
    info.style.margin = "-350px 0 0 300px";
    info.style.borderWidth = "2px 2px 5px 5px";
    info_terceira.style.display = "inline-block";
  } else {
    info.style.display = "none";
    info_terceira.style.display = "none";
  }
});

graciosa.addEventListener("click", () => {
  if (info_graciosa.style.display === "none") {
    info.style.display = "inline-block";
    info.style.margin = "-580px 0 0 585px";
    info.style.borderWidth = "2px 5px 5px 2px";
    info_graciosa.style.display = "inline-block";
  } else {
    info.style.display = "none";
    info_graciosa.style.display = "none";
  }
});
