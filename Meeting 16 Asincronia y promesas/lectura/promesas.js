let mi_promesa = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 4);
    if (number > 0) {
        resolve((number % 2) ? "es impar" : "es par");
    } else {
        reject("es cero")
    }
});

mi_promesa
    .then(promesacumplida => console.log(promesacumplida))
    .catch(promesanocumplida => console.error(promesanocumplida));

