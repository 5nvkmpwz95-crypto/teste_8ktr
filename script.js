function agrandirImage(img) {

    if (img.classList.contains("image-fullscreen")) {

        img.classList.remove("image-fullscreen");
        document.body.style.overflow = "auto";
    }

    else {

        img.classList.add("image-fullscreen");
        document.body.style.overflow = "hidden";
    }
}

function modeSombre() {
    document.body.classList.toggle("sombre");
}

function envoyer() {
    alert("Message envoyé à Saif & Pato ! Merci.");
}