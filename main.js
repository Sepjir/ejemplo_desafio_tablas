// Tablas Factoriales
const tablaFactoriales = (num) => {
    for (let i = 1; i <= num; i++) {
        let acc = 1
        for (let j = 1; j <= i; j++) {
            acc = acc*j
            //acc *= j
        }
        document.write(`El factorial de ${i} es ${acc} <br>`)
    }
}


// Tabla de multiplicar
let tablaMultiplicar = (num) => {
    
    for (let i = 1; i <= num; i++) {
        document.write(`${i} x ${num} = ${num * i} <br>`)
    } 
}

let funcionValidar = () => {
    // ingresando el dato del usuario
    const num = parseInt(prompt("Ingrese el número, que sea entre 1 y 20", 10));

    // Validar que el número sea un número y que esté entre 1 y 20
    if (num > 20 || num < 1 || isNaN(num)) {
        document.write(`<h1>${num} no es un número entre 1 y 20</h1>`)
        return funcionValidar()
    } 
   tablaMultiplicar(num)
   tablaFactoriales(num)

}
funcionValidar()

