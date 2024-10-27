let somar = function () {

    let num1 = document.getElementById("1").value
    let num2 = document.getElementById("2").value
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

let soma = 0;
let aux = 0;

let bNum = function () {
    let num = document.getElementById("positiveNum").value;
    let saida = document.getElementById("saida4");

    if (parseFloat(num) != -1) {
        let n = parseFloat(num);
        soma = parseFloat(n) + parseFloat(soma);
        aux = parseFloat(aux) + 1
    } else {
        let media = parseFloat(soma) / parseFloat(aux);
        saida.innerHTML = media;
    }
};

let tabuada = function () {
    let num = document.getElementById("num").value
    let aux = 0
    let result = 0
    let resultado = ""
    let saida = document.getElementById("saida3")

    while (aux <= 10) {
        result = aux * parseFloat(num)
        resultado = resultado + num + " * " + aux + " = " + result + " | "
        aux = parseInt(aux) + 1
    }

    saida.innerHTML = resultado
}