let display = []

function MostrarnoDisplay(value){
    display.push(value)
    document.getElementById("visual").innerHTML += value;
}

function MostrarResultado(){
    document.getElementById("visual").innerHTML = display.join("");
}

let posOperador = ''
let resultado = ''

function Calcular(){
    for (i in display){
        if ("+" == display[i]){
            posOperador = parseInt(i);
            var n = display.slice(0, posOperador);
            var num1 = parseInt(n.join(""))
            var n2 = display.slice(posOperador + 1)
            var num2 = parseInt(n2.join(""))
            let resultado = num1 + num2
            display = []
            display.push(resultado.toString())
            MostrarResultado();
            // console.log("o numero antes do op: " + num1 + " e " + "o numero dps é: " + num2)
        }
    }
}