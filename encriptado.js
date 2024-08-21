function encryptText() {
    let text = document.getElementById("encriptador").value;
    if (/[A-ZÁÉÍÓÚÜÑ]/.test(text) || /[.,;:!?¿¡]/.test(text)) {
        alert("Por favor, corrige tu texto: no se permiten mayúsculas, acentos ni signos de puntuación.");
        return; // Detener la ejecución de la función
    }
    let encryptedText = text.replace(/u/g, "ufat")
                            .replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/o/g, "ober")
                            .replace(/a/g, "ai");
    document.getElementById("aqui_se_imprime").innerHTML = "";
    let p = document.createElement("p");
    p.id = "aqui-aparece-el-mensaje";
    p.textContent = encryptedText;
    let container = document.getElementById("aqui_se_imprime");
    container.appendChild(p);
    container.style.justifyContent = 'start';
    //boton//
    let button = document.createElement ("button");
    button.id = "boton-copiado";
    button.onclick = copiar;
    button.textContent="Copiar";
    container.appendChild(button);
    container.style.alignItems = 'start';
    container.style.justifyContent='space-between';
    container.style.width='auto'
    document.getElementById("encriptador").value = "";

}
//desencriptar//
function decryptedText(){
    let text = document.getElementById("encriptador").value;
    if (/[A-ZÁÉÍÓÚÜÑ]/.test(text) || /[.,;:!?¿¡]/.test(text)) {
        alert("Por favor, corrige tu texto: no se permiten mayúsculas, acentos ni signos de puntuación.");
        return; // Detener la ejecución de la función
    }
    let encryptedText = text.replace(/imes/g, "i")
                            .replace(/enter/g, "e")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    document.getElementById("aqui_se_imprime").innerHTML = "";
    let p = document.createElement("p");
    p.id = "aqui-aparece-el-mensaje";
    p.textContent = encryptedText;
    let container = document.getElementById("aqui_se_imprime");
    container.appendChild(p);
    //boton//
    let button = document.createElement ("button");
    button.id = "boton-copiado";
    button.onclick = copiar;
    button.textContent="Copiar";
    container.appendChild(button);
    container.style.alignItems = 'start';
    container.style.justifyContent='space-between';
    document.getElementById("encriptador").value = "";
}

     //copiar//
function copiar() {
    let textToCopy = document.getElementById("aqui-aparece-el-mensaje").textContent;
    navigator.clipboard.writeText(textToCopy);
    document.getElementById("encriptador").value = textToCopy;
    document.getElementById("aqui-aparece-el-mensaje").innerText = "";
   

}
    


                                 
