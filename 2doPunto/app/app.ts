var Vehiculos = []

interface Vehiculo {
    nombre: string,
    marca: string,
    modelo: string,
    precio: string

}
var vehiculo1: Vehiculo = {
    nombre: "Chevrolet Corvette",
    marca: "Chevrolet",
    modelo: "2013",
    precio: "55.000"

}
var vehiculo2: Vehiculo = {
    nombre: "Lamborghini Countach",
    marca: "Lamborghini",
    modelo: "LP400",
    precio: "56.000"

}
Vehiculos.push(vehiculo1)
Vehiculos.push(vehiculo2)

Vehiculos.forEach(element => { console.log(element) });
console.log(Vehiculos)
