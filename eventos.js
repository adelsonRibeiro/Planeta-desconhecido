let dia = 0

function proximoDia() {
    if (dia ===0){
        habilitaCampoNome = document.getElementById("campo-nome");
        habilitaCampoNome.style.display = "block";
        progressão.innerHTML = `Qual seu nome, comandante?`;
        descansar = document.getElementById("btn3");
        descansar.style.display = "none";
    }else {
        dia += 1
        novoDia()
    }

}
function nomeOK() {
    dia += 1
    novoDia()
}