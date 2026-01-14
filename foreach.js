const inventario = {
  "product1": {
    nombre: "Laptop Pro",
    precio: 1200,
    id: 1
  },
  "product2": {
    nombre: "Mouse Gamer",
    precio: 50,
    id: 2
  },
  "product2": {
    nombre: "Teclado Mecánico",
    precio: 80,
    id: 3
  }
};

const miSet = new Set([1,2,3,4,4,1,2]);
const mimap = new Map()

console.log(miSet);

miSet.add(9);

console.log(miSet);

console.log(miSet.has(3));

miSet.delete(9)

console.log(miSet);

for (const producto of miSet) {
  console.log(producto);
}
// Object.values convierte el diccionario de diccionarios en una lista recorrible
Object.values(inventario).forEach(producto => {
  const nombre = producto.nombre;
  const precio = producto.precio;

  console.log(`Producto: ${nombre} - Precio: $${precio}`);
});

