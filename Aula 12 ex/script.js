
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 14
    msg.innerHTML= `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        alert("Bom dia");
        document.body.style.backgroundImage = "url('Sapinho/Dia.jpg')";
    } else if (hora >= 12 && hora <= 18) {
        alert("Boa Tarde");
        document.body.style.backgroundImage = "url('Sapinho/tarde.jpg')";
    } else {
        document.body.style.backgroundImage = "url('Sapinho/noite.jpg')";
    }
}
