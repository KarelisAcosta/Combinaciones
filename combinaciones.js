let btn_fondo = document.getElementById("btn_fondo");
btn_fondo.addEventListener("click", cambiofondo);

let current_fondo = 1;

function cambiofondo() {
  let img_fondo = document.getElementById("fondo");
  current_fondo = current_fondo + 1;

  if (current_fondo == 4) {
    current_fondo = 1;
  }
  img_fondo.src = `./Img/Fondo${current_fondo}.png`;
}

let btn_deco = document.getElementById("btn_deco");
btn_deco.addEventListener("click", cambiodeco);

let current_deco = 1;

function cambiodeco() {
  let img_deco = document.getElementById("deco");
  current_deco = current_deco + 1;

  if (current_deco == 4) {
    current_deco = 1;
  }
  img_deco.src = `./Img/deco${current_deco}.png`;
}

let btn_velas = document.getElementById("btn_velas");
btn_velas.addEventListener("click", cambiovelas);

let current_velas = 1;

function cambiovelas() {
  let img_velas = document.getElementById("velas");
  current_velas = current_velas + 1;

  if (current_velas == 5) {
    current_velas = 1;
  }
  img_velas.src = `./Img/velas${current_velas}.png`;
}
