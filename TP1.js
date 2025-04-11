const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
]    

const punto1 = (productos) => productos[0].nombre
console.log("Punto 1:")
console.log(punto1(productos), '\n')

const punto2 = (productos) => {
    for (const producto of productos) {
        console.log("Producto: " + producto.nombre + " - Precio: " + producto.precio)
    }
}
console.log("Punto 2:")
punto2(productos)
console.log('\n')

const punto3 = (productos) => {
    productos.forEach(producto => {
        console.log("Producto: " + producto.nombre + " - Precio: " + producto.precio)
    });
}
console.log("Punto 3:")
punto3(productos)
console.log('\n')

const punto4 = (productos) => productos.map((producto) => producto.nombre)
console.log("Punto 4:")
console.log(punto4(productos), '\n')

const punto5 = (productos) => productos.filter((producto) => producto.categoria == "Ropa")
console.log("Punto 5:")
console.log(punto5(productos), '\n')

const punto6 = (productos) => productos.filter((producto) => producto.precio > 3000)
console.log("Punto 6:")
console.log(punto6(productos), '\n')

const punto7 = (productos) => productos.find((producto) => producto.nombre == "Gorra")
console.log("Punto 7:")
console.log(punto7(productos), '\n')

const punto8 = (productos) => productos.some((producto) => producto.precio > 10000)
console.log("Punto 8:")
console.log(punto8(productos), '\n')

const punto9 = (productos) => productos.every((producto) => producto.precio > 1000)
console.log("Punto 9:")
console.log(punto9(productos), '\n')

const punto10 = (productos) => productos.includes("Campera")
console.log("Punto 10:")
console.log(punto10(punto4(productos)), '\n')

const punto11 = (productos) => productos.sort((producto1, producto2) => producto1.precio - producto2.precio)
console.log("Punto 11:")
console.log(punto11(productos), '\n')

const punto12 = (productos) => productos.map((producto) => producto = "El producto " + producto.nombre + " cuesta $" + producto.precio + " y pertenece a la categoria " + producto.categoria)
console.log("Punto 12:")
console.log(punto12(productos), '\n')

const punto13 = (productos, masProductos) => [...productos, ...masProductos]
const masProductos = [
    { id: 6, nombre: "Remera Manga Larga", precio: 2500, categoria: "Ropa" },
    { id: 7, nombre: "Short", precio: 2000, categoria: "Ropa" },
    { id: 8, nombre: "Botas", precio: 15000, categoria: "Calzado" },
    { id: 9, nombre: "Corbata", precio: 7200, categoria: "Accesorios" },
    { id: 10, nombre: "Camperon de River", precio: 91218, categoria: "Ropa" }
] 
console.log("Punto 13:")
console.log(punto13(productos, masProductos), '\n')