function geraCorRndomica() {
    const cores = '0123456789ABCDEF'
    var chave = '#'

    for(i = 0; i < 6; i++){
        chave += cores.charAt(Math.floor(Math.random() * cores.length))
    }
    return chave
}

function tocar(audio) {
    let musica = document.getElementById(""+ audio + "")
    musica.play()
    var cor = geraCorRndomica()
    var body_cor = document.getElementById('corFundo')
    body_cor.style.backgroundColor = cor
}