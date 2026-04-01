let display = []

function MostrarnoDisplay(value){
    display.push(value)
    document.getElementById("visual").innerHTML += value;
}

function MostrarResultado(){
    document.getElementById("visual").innerHTML = display.join("");
}


function Apagar(){
    if (display.length !== 0) {
        display.pop()
        document.getElementById("visual").innerHTML = display.join("");
}
}

function ApagarTudo(){
    if (display.length !== 0) {
        document.getElementById("visual").innerHTML = '';
}
}

let posOperador = ''
let resultado = ''

function Calcular(){
    for (i in display){
        if ("+" == display[i]){
            posOperador = parseInt(i);
            var n = display.slice(0, posOperador);
            var num1 = parseFloat(n.join(""))
            var n2 = display.slice(posOperador + 1)
            var num2 = parseFloat(n2.join(""))
            let resultado = num1 + num2
            resultado = parseFloat(resultado.toFixed(2));
            display = []
            display.push(resultado.toString())
            MostrarResultado();
        } else if ("-" == display[i]) {
            posOperador = parseInt(i);
            var n = display.slice(0, posOperador);
            var num1 = parseFloat(n.join(""))
            var n2 = display.slice(posOperador + 1)
            var num2 = parseFloat(n2.join(""))
            let resultado = num1 - num2
            resultado = parseFloat(resultado.toFixed(2));
            display = []
            display.push(resultado.toString())
            MostrarResultado();
            // console.log("o numero antes do op: " + num1 + " e " + "o numero dps é: " + num2)
        } else if ("*" == display[i]){
            posOperador = parseInt(i);
            var n = display.slice(0, posOperador);
            var num1 = parseFloat(n.join(""))
            var n2 = display.slice(posOperador + 1)
            var num2 = parseFloat(n2.join(""))
            let resultado = num1 * num2
            resultado = parseFloat(resultado.toFixed(2));
            display = []
            display.push(resultado.toString())
            MostrarResultado();
            // console.log("o numero antes do op: " + num1 + " e " + "o numero dps é: " + num2)
        } else if ("/" == display[i]){
            posOperador = parseInt(i);
            var n = display.slice(0, posOperador);
            var num1 = parseFloat(n.join(""))
            var n2 = display.slice(posOperador + 1)
            var num2 = parseFloat(n2.join(""))
            let resultado = num1 / num2
            resultado = parseFloat(resultado.toFixed(2));
            display = []
            display.push(resultado.toString())
            MostrarResultado();
            // console.log("o numero antes do op: " + num1 + " e " + "o numero dps é: " + num2)
        }  else if ("%" == display[i]){
            posOperador = parseInt(i);
            var n = display.slice(0, posOperador);
            var num1 = parseInt(n.join(""))
            // var n2 = display.slice(posOperador + 1)
            // var num2 = parseInt(n2.join(""))
            let resultado = num1 / 100
            resultado = parseFloat(resultado.toFixed(2));
            display = []
            display.push(resultado.toString())
            MostrarResultado();
        }
        
    }
}