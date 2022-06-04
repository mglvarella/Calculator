function clean(){
    document.getElementById('screen').value = '';
}

function preencher(valor){
    document.getElementById('screen').value += valor;
}

function calcular(){
    var resultado = 0;
    preresultado = document.getElementById('screen').value;
    preresultado2 = preresultado.replace("×", "*");
    resultado = preresultado2.replace("÷", "/");
    document.getElementById('screen').value = '';
    document.getElementById('screen').value = eval(resultado);
}

