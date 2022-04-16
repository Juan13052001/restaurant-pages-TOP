function Header() {
    const Header = document.createElement("header");

    const botonHome = document.createElement("button");

    const botonContact = document.createElement("button");

    const botonMenu = document.createElement("button");

    botonHome.type = "button";

    botonMenu.type = "button";

    botonContact.type = "button";

    botonHome.id = "Home";

    botonContact.id = "Contact";

    botonMenu.id = "Menu";

    botonHome.innerText = "Home";

    botonMenu.innerText = "Menu";

    botonContact.innerText = "Contact";

    Header.append(botonHome, botonMenu, botonContact);

    return Header;
}

export default Header;
