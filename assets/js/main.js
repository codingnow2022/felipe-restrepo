function mostrarMenu(){
    let selector = document.getElementById("menu-ocultar");
    selector.classList.toggle("active");
}

function activarDw(){
    let mostrar  = document.getElementById("web-cat-i");
    let ocultar  = document.getElementById("ui-cat-i");
    let ocultarB = document.getElementById("front-cat-i");
    let mostrarC = document.getElementById("web-cat-c");
    let ocultarC = document.getElementById("ui-cat-c");
    let ocultarCB = document.getElementById("front-cat-c");
    let button1 = document.getElementById("cat1");
    let button2 = document.getElementById("cat2");
    let button3 = document.getElementById("cat3");
    
    mostrar.classList.remove("hide");
    mostrar.classList.add("show");
    ocultar.classList.remove("show");
    ocultar.classList.add("hide");
    ocultarB.classList.remove("show");
    ocultarB.classList.add("hide");
    // -------
    button1.classList.add("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    // -------
    mostrarC.classList.remove("hide");
    mostrarC.classList.add("show");
    ocultarC.classList.remove("show");
    ocultarC.classList.add("hide");
    ocultarCB.classList.remove("show");
    ocultarCB.classList.add("hide");
}

function activarUi(){
    let mostrar  = document.getElementById("ui-cat-i");
    let ocultar  = document.getElementById("web-cat-i");
    let ocultarB = document.getElementById("front-cat-i");
    let mostrarC = document.getElementById("ui-cat-c");
    let ocultarC = document.getElementById("web-cat-c");
    let ocultarCB = document.getElementById("front-cat-c");
    let button1 = document.getElementById("cat2");
    let button2 = document.getElementById("cat1");
    let button3 = document.getElementById("cat3");
    
    mostrar.classList.remove("hide");
    mostrar.classList.add("show");
    ocultar.classList.remove("show");
    ocultar.classList.add("hide");
    ocultarB.classList.remove("show");
    ocultarB.classList.add("hide");
    // -------
    button1.classList.add("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    // -------
    mostrarC.classList.remove("hide");
    mostrarC.classList.add("show");
    ocultarC.classList.remove("show");
    ocultarC.classList.add("hide");
    ocultarCB.classList.remove("show");
    ocultarCB.classList.add("hide");
}

function activarDf(){
    let mostrar  = document.getElementById("front-cat-i");
    let ocultar  = document.getElementById("web-cat-i");
    let ocultarB = document.getElementById("ui-cat-i");
    let mostrarC = document.getElementById("front-cat-c");
    let ocultarC = document.getElementById("web-cat-c");
    let ocultarCB = document.getElementById("ui-cat-c");
    let button1 = document.getElementById("cat3");
    let button2 = document.getElementById("cat1");
    let button3 = document.getElementById("cat2");
    
    mostrar.classList.remove("hide");
    mostrar.classList.add("show");
    ocultar.classList.remove("show");
    ocultar.classList.add("hide");
    ocultarB.classList.remove("show");
    ocultarB.classList.add("hide");
    // -------
    button1.classList.add("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    // -------
    mostrarC.classList.remove("hide");
    mostrarC.classList.add("show");
    ocultarC.classList.remove("show");
    ocultarC.classList.add("hide");
    ocultarCB.classList.remove("show");
    ocultarCB.classList.add("hide");
}