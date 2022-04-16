import Header from "./Header";
import Home from "./home";
import Menu from "./Menu";
import Contact from "./Contact.js";
import "./style.css";

const render = function () {
    const content = document.querySelector("#content");
    content.style = "";
    while (content.children.length > 1) {
        content.children[1].remove();
    }
};
document.querySelector("#content").append(Header(), Home());
const botonHome = document.querySelector("#Home");
const botonMenu = document.querySelector("#Menu");
const botonContact = document.querySelector("#Contact");

botonHome.addEventListener("click", (e) => {
    render();
    document.querySelector("#content").appendChild(Home());
});

botonMenu.addEventListener("click", (e) => {
    render();
    document.querySelector("#content").appendChild(Menu());
});

botonContact.addEventListener("click", (e) => {
    render();
    document.querySelector("#content").appendChild(Contact());
});
