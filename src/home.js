import HeladoHome from "./helado-Home.jpg";
import Mapa from "./mapa.jpg";

function Home() {
    const divHome = document.createElement("div");

    const title = document.createElement("h1");

    const imagen = new Image();

    const ubicacion = document.createElement("div");

    const subtitle = document.createElement("h2");

    const parrafo = document.createElement("p");

    const pLocation = document.createElement("p");

    const imagenLocation = new Image();

    title.innerText = "Delicious Ice Cream, Visit us!";

    parrafo.innerText =
        "From your dreams to your palate, enjoy the different flavors we offer.";

    imagen.src = HeladoHome;

    subtitle.innerText = "Location";

    pLocation.innerText = "742 de Evergreen Terrace";

    imagenLocation.src = Mapa;

    imagen.classList.add("image-home");

    ubicacion.classList.add("location");

    ubicacion.append(subtitle, pLocation, imagenLocation);
    divHome.appendChild(title);
    divHome.appendChild(parrafo);
    divHome.appendChild(imagen);
    divHome.appendChild(ubicacion);
    return divHome;
}

export default Home;
