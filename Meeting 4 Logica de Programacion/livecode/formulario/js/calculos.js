function compararNumero() {
    let valor1 = parseInt(document.getElementById("n1").value);
    let valor2 = parseInt(document.getElementById("n2").value);

    if (valor1 > valor2) {
        var msg = "el primer valor es mayor"
    } else {
        var msg = "el segundo valor es mayor"
    }
    alert(msg)
}