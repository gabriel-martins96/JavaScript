//1º Criar listener e a função
var seletorcalcular = document.getElementById('input-calcular')
seletorcalcular.addEventListener('click', multa)

function multa() {
    var seletor_input = document.getElementById('input1')
    var input = Number(seletor_input.value)
    var resultado = document.getElementById('resultado')
    if (input >= 60 ) {

        resultado.innerHTML = `<p>A <strong>velocidade</strong> é: ${input}, portanto, <strong>Multado</strong>! </p>`
    } else {
        resultado.innerText = 'Você não está multado'
    }

}