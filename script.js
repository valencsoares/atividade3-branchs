let somar = function () {
    let num1 = document.getElementById("1").value
    let num2 = document.getElementById("2").value
    let saida = document.getElementById("saida1")

    let soma = parseFloat(num1) + parseFloat(num2)
    saida.innerHTML = soma
}
