function sumar(num1, num2) {
    return num1 + num2
}

function restar(num1, num2) {
    return num1 - num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    if (num2 == 0) {
        return "No se puede dividir por 0"
    }
    return num1 / num2
}

export {
    sumar,
    restar,
    multiplicar,
    dividir
}