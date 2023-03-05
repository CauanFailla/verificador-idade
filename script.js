function veri() {
    var p = document.getElementById('res')
    var atual = new Date()
    var img = document.querySelector('img')
    var in1_nas = document.getElementById('inas')
    var in2_op = document.getElementsByName('op')
    var anoat = atual.getFullYear()
    var ano_nas = Number(in1_nas.value)
    var idade = anoat - ano_nas
    var sexo
    console.log(idade)

    if (idade >= 0 && idade <= 4 && in2_op[0].checked) { // Homem
        sexo = 'Homem'
        img.src = 'imagens/masculino/bebe.png'
    } else if (idade < 0) {
        img.src = ''
    }else if (idade <= 12 && in2_op[0].checked) {
        sexo = 'Homem'
        img.src = 'imagens/masculino/crianca.png'
    } else if (idade <= 17  && in2_op[0].checked) {
        sexo = 'Homem'
        img.src = 'imagens/masculino/adolecente.png'
    } else if (idade <= 26 && in2_op[0].checked) {
        sexo = 'Homem'
        img.src = 'imagens/masculino/jovem.png'
    } else if (idade <= 45 && in2_op[0].checked) {
        sexo = 'Homem'
        img.src = 'imagens/masculino/adulto.png'
    } else if (idade <= 120 && in2_op[0].checked) {
        sexo = 'Homem'
        img.src = 'imagens/masculino/velho.png'
    } else if (idade >= 0 &&  idade <= 4 && in2_op[1].checked) { //Mulher
        sexo = 'Mulher'
        img.src = 'imagens/feminino/bebe.png'
    } else if (idade <= 12 && in2_op[1].checked) {
        sexo = 'Mulher'
        img.src = 'imagens/feminino/crianca.png'
    } else if (idade <= 17 && in2_op[1].checked) {
        sexo = 'Mulher'
        img.src = 'imagens/feminino/adolecente.png'
    } else if (idade <= 26 && in2_op[1].checked) {
        sexo = 'Mulher'
        img.src = 'imagens/feminino/jovem.png'
    } else if (idade <= 45 && in2_op[1].checked) {
        sexo = 'Mulher'
        img.src = 'imagens/feminino/adulta.png'
    } else if (idade <= 120 && in2_op[1].checked) {
        sexo = 'Mulher'
        img.src = 'imagens/feminino/velha.png'
    }

    if (idade < 0 || idade > 120) {
        p.innerHTML = 'Erro'
    } else {
        p.innerHTML = `Detectamos ${sexo} com ${idade} anos`
    }

}
