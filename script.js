let ingredientesSelecionados = [];
//let lancheSelecionado = null;

function mostrarIngredientes() {
    document.getElementById("ingredientes").style.display = "block";
}

function verificar() {
    console.log("Botão verificado");
    lancheSelecionado = document.getElementById("lanches").value;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    ingredientesSelecionados = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            ingredientesSelecionados.push(checkbox.id);
        }
    });  

    let resultado = "Você acertou os ingredientes!";
    switch (lancheSelecionado) {
        case "dog frango":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente6") || !ingredientesSelecionados.includes("ingrediente20") || !ingredientesSelecionados.includes("ingrediente4") || !ingredientesSelecionados.includes("ingrediente7") || !ingredientesSelecionados.includes("ingrediente8") || !ingredientesSelecionados.includes("ingrediente9")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "dog frango duplo":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente10") || !ingredientesSelecionados.includes("ingrediente20") || !ingredientesSelecionados.includes("ingrediente4") || !ingredientesSelecionados.includes("ingrediente7") || !ingredientesSelecionados.includes("ingrediente8") || !ingredientesSelecionados.includes("ingrediente9")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "dog frango bacon":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente6") || !ingredientesSelecionados.includes("ingrediente20") || !ingredientesSelecionados.includes("ingrediente11") || !ingredientesSelecionados.includes("ingrediente4") || !ingredientesSelecionados.includes("ingrediente7") || !ingredientesSelecionados.includes("ingrediente8") || !ingredientesSelecionados.includes("ingrediente9")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "dog frango cremoso":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente6") || !ingredientesSelecionados.includes("ingrediente20") || !ingredientesSelecionados.includes("ingrediente12") || !ingredientesSelecionados.includes("ingrediente5") || !ingredientesSelecionados.includes("ingrediente13") || !ingredientesSelecionados.includes("ingrediente4") || !ingredientesSelecionados.includes("ingrediente7") || !ingredientesSelecionados.includes("ingrediente9")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "dog frango picante":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente6") || !ingredientesSelecionados.includes("ingrediente20") || !ingredientesSelecionados.includes("ingrediente14") || !ingredientesSelecionados.includes("ingrediente15") || !ingredientesSelecionados.includes("ingrediente4") || !ingredientesSelecionados.includes("ingrediente7") || !ingredientesSelecionados.includes("ingrediente9")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "dog frango defumado":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente6") || !ingredientesSelecionados.includes("ingrediente20") || !ingredientesSelecionados.includes("ingrediente11") || !ingredientesSelecionados.includes("ingrediente16") || !ingredientesSelecionados.includes("ingrediente4") || !ingredientesSelecionados.includes("ingrediente7")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "especial":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente6") || !ingredientesSelecionados.includes("ingrediente2") 
                || !ingredientesSelecionados.includes("ingrediente20") || !ingredientesSelecionados.includes("ingrediente5") || !ingredientesSelecionados.includes("ingrediente4") 
                || !ingredientesSelecionados.includes("ingrediente9") || !ingredientesSelecionados.includes("ingrediente7") || !ingredientesSelecionados.includes("ingrediente8")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "dog calabresa":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente6") || !ingredientesSelecionados.includes("ingrediente21") || !ingredientesSelecionados.includes("ingrediente17") || !ingredientesSelecionados.includes("ingrediente12") || !ingredientesSelecionados.includes("ingrediente5") || !ingredientesSelecionados.includes("ingrediente4") || !ingredientesSelecionados.includes("ingrediente7") || !ingredientesSelecionados.includes("ingrediente8") || !ingredientesSelecionados.includes("ingrediente9")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "dog bacon queijo":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente6") || !ingredientesSelecionados.includes("ingrediente11") || !ingredientesSelecionados.includes("ingrediente5") || !ingredientesSelecionados.includes("ingrediente4") || !ingredientesSelecionados.includes("ingrediente8") || !ingredientesSelecionados.includes("ingrediente9") || !ingredientesSelecionados.includes("ingrediente7")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "dog bacon":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente6") || !ingredientesSelecionados.includes("ingrediente11") || !ingredientesSelecionados.includes("ingrediente4") || !ingredientesSelecionados.includes("ingrediente7") || !ingredientesSelecionados.includes("ingrediente8") || !ingredientesSelecionados.includes("ingrediente9")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "dog queijo":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente6") || !ingredientesSelecionados.includes("ingrediente5") || !ingredientesSelecionados.includes("ingrediente4") || !ingredientesSelecionados.includes("ingrediente8") || !ingredientesSelecionados.includes("ingrediente9")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "dog duplo":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente10") || !ingredientesSelecionados.includes("ingrediente4") || !ingredientesSelecionados.includes("ingrediente7") || !ingredientesSelecionados.includes("ingrediente8") || !ingredientesSelecionados.includes("ingrediente9")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "dog tradicional":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente6")
                || !ingredientesSelecionados.includes("ingrediente4") || !ingredientesSelecionados.includes("ingrediente7")
                || !ingredientesSelecionados.includes("ingrediente8") || !ingredientesSelecionados.includes("ingrediente9")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "king simples":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente2") || !ingredientesSelecionados.includes("ingrediente5")
                || !ingredientesSelecionados.includes("ingrediente22") || !ingredientesSelecionados.includes("ingrediente4") || !ingredientesSelecionados.includes("ingrediente7")
                || !ingredientesSelecionados.includes("ingrediente8") || !ingredientesSelecionados.includes("ingrediente9")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "king duplo":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente18") || !ingredientesSelecionados.includes("ingrediente23")
                || !ingredientesSelecionados.includes("ingrediente4") || !ingredientesSelecionados.includes("ingrediente22") || !ingredientesSelecionados.includes("ingrediente7")
                || !ingredientesSelecionados.includes("ingrediente8") || !ingredientesSelecionados.includes("ingrediente9")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "king salada":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente2") || !ingredientesSelecionados.includes("ingrediente12")
                || !ingredientesSelecionados.includes("ingrediente5") || !ingredientesSelecionados.includes("ingrediente3") || !ingredientesSelecionados.includes("ingrediente4")
                || !ingredientesSelecionados.includes("ingrediente8") || !ingredientesSelecionados.includes("ingrediente9") || !ingredientesSelecionados.includes("ingrediente7")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "king egg":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente2") || !ingredientesSelecionados.includes("ingrediente12")
                || !ingredientesSelecionados.includes("ingrediente5") || !ingredientesSelecionados.includes("ingrediente19") || !ingredientesSelecionados.includes("ingrediente3")
                || !ingredientesSelecionados.includes("ingrediente4") || !ingredientesSelecionados.includes("ingrediente7") || !ingredientesSelecionados.includes("ingrediente8")
                || !ingredientesSelecionados.includes("ingrediente9")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "king bacon":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente2") || !ingredientesSelecionados.includes("ingrediente5")
                || !ingredientesSelecionados.includes("ingrediente11") || !ingredientesSelecionados.includes("ingrediente4") || !ingredientesSelecionados.includes("ingrediente22")
                || !ingredientesSelecionados.includes("ingrediente8") || !ingredientesSelecionados.includes("ingrediente9") || !ingredientesSelecionados.includes("ingrediente7")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "king bbq":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente2") || !ingredientesSelecionados.includes("ingrediente5")
                || !ingredientesSelecionados.includes("ingrediente3") || !ingredientesSelecionados.includes("ingrediente17") || !ingredientesSelecionados.includes("ingrediente4")
                || !ingredientesSelecionados.includes("ingrediente7") || !ingredientesSelecionados.includes("ingrediente16")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
        case "dog vegetariano":
            if (!ingredientesSelecionados.includes("ingrediente1") || !ingredientesSelecionados.includes("ingrediente5") || !ingredientesSelecionados.includes("ingrediente19")
                || !ingredientesSelecionados.includes("ingrediente3") || !ingredientesSelecionados.includes("ingrediente4") || !ingredientesSelecionados.includes("ingrediente17")
                || !ingredientesSelecionados.includes("ingrediente7")) {
                resultado = "Você errou os ingredientes!";
            }
            break;
    }

    document.getElementById("resultado").innerText = resultado;

}

/* function reiniciar() {
    document.getElementById("resultado").style.display = "none";
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.checked = false;
    });
    document.getElementById("ingredientes").style.display = "none";
    ingredientesSelecionados = [];
    lancheSelecionado = null;
} */