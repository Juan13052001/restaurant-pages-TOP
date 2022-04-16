function Contact() {
    const contactDiv = document.createElement("div");
    const title = document.createElement("h1");
    const parrafo = document.createElement("p");
    title.innerText = "Contact";
    parrafo.innerText = "Juan Herrera";
    contactDiv.classList.add("contact-div");

    contactDiv.append(title, parrafo);
    console.log(contactDiv);
    return contactDiv;
}

export default Contact;
