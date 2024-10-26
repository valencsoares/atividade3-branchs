let somar = function () {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let saida = document.getElementById("saida1")

    let soma = parseFloat(num1) + parseFloat(num2)
    saida.innerHTML = soma
}

let mediaArit = function () {
    let n1 = document.getElementById("valor1").value
    let n2 = document.getElementById("valor2").value
    let saida = document.getElementById("saida2")

    let media = (parseFloat(n1) + parseFloat(n2)) /2
    saida.innerHTML = media
}