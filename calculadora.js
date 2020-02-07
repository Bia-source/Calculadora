function botao(num) {
    if (typeof gvisor == 'undefined') {
    document.calculadora.visor.value = '';
    }
    
    document.calculadora.visor.value = document.calculadora.visor.value + num;
    gvisor = 1;
    }
    
    function reset() {
    document.calculadora.visor.value = '';
    }
    
    function calcule(calculadora, valor1, valor2) {
    if (calculadora == "+") {
    var resultado = (valor1) + (valor2);
    } else {
    if (calculadora == "-") {
    var resultado = (valor1 - valor2);
    } else {
    if (calculadora == "*") {
    var resultado = (valor1 * valor2);
    } else {
    var resultado = valor1 / valor2;
    }
    }
    }
    return(resultado);
    }