import heladoGalleta from "./heladogalleta.jpg";
import heladoChocolate from "./heladoChocolate.jpg";
import heladoVainilla from "./heladoVainilla.jpg";
import heladoMamey from "./heladoMamey.jpg";

function itemGrid(sabor, imagen) {
    const elementGrid = document.createElement("div");
    const nameSabor = document.createElement("h3");
    nameSabor.innerText = sabor;
    const imagenSabor = document.createElement("img");
    imagenSabor.src = imagen;
    imagenSabor.classList.add("sabor-imagen");
    elementGrid.classList.add("card-sabor");
    elementGrid.append(nameSabor, imagenSabor);
    return elementGrid;
}
function Menu() {
    const divMenu = document.createElement("div");

    const title = document.createElement("h1");

    const divGrid = document.createElement("div");

    const parrafo = document.createElement("p");

    divGrid.classList.add("div-grid");

    divGrid.appendChild(itemGrid("Galleta", heladoGalleta));

    divGrid.appendChild(itemGrid("Chocolate", heladoChocolate));

    divGrid.appendChild(itemGrid("Vainilla", heladoVainilla));

    divGrid.appendChild(itemGrid("Mamey", heladoMamey));

    title.innerText = "Menu";

    parrafo.innerText = "Próximamente Nuevos sabores...";

    divMenu.classList.add("menu");

    divMenu.append(title, divGrid, parrafo);

    return divMenu;
}

export default Menu;
