const btnMenu = document.querySelector(".menu");
const menuOculto = document.querySelector(".navbar-list");
const quitMenu = document.querySelector(".quit");
const blur = document.querySelector(".blur");
btnMenu.addEventListener("click", () => {
  mostrarMenu();
});
quitMenu.addEventListener("click", () => {
  noMostrarMenu();
});
function mostrarMenu() {
  menuOculto.style.width = "235px";
  blur.style.display = "block";
}
function noMostrarMenu() {
  menuOculto.style.width = "0";
  blur.style.display = "none";
}
blur.addEventListener("click", () => {
  noMostrarMenu();
});
// Seccion de Botones dentro de la lista
const listaFeature = document.querySelectorAll(".feature");
const listaCompany = document.querySelectorAll(".company");
const botonFeature = document.querySelectorAll(".slice-feature");
const botonCompany = document.querySelectorAll(".slice-company");
let condocionFeature = true;
botonFeature.forEach((boton) => {
  boton.addEventListener("click", () => {
    if (condocionFeature) {
      listaFeature.forEach((lista) => {
        lista.style.display = "flex";
        lista.style.height = "auto";
      });
      boton.style.transform = "rotate(-180deg)"; // Aplica la rotación al botón
      condocionFeature = false;
    } else {
      listaFeature.forEach((lista) => {
        lista.style.display = "none";
        lista.style.height = "0";
      });
      condocionFeature = true;
      boton.style.transform = "rotate(0deg)"; // Vuelve a la posición original el botón
    }
  });
});

let condocionCompany = true;
botonCompany.forEach((boton) => {
  boton.addEventListener("click", () => {
    if (condocionCompany) {
      listaCompany.forEach((lista) => {
        lista.style.display = "flex";
        lista.style.height = "auto";
      });
      boton.style.transform = "rotate(-180deg)";
      condocionCompany = false;
    } else {
      listaCompany.forEach((lista) => {
        lista.style.display = "none";
        lista.style.height = "0";
      });
      condocionCompany = true;
      boton.style.transform = "rotate(0deg)";
    }
  });
});
