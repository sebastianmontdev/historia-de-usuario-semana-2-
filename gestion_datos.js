
const inventario = [
  { id: 1, nombre: "Smartphone", precio: 499.99 },
  { id: 2, nombre: "Laptop", precio: 899.00 },
  { id: 3, nombre: "Audífonos", precio: 50.00 }
];

//validacion para revisar si no hay ningun dato vacio 
inventario.forEach(prod => {
    if(!prod.id || !prod.nombre || typeof prod.precio !== 'number') {
        console.error(`Producto inválido: ${prod.nombre}`);
    }
});
//aqui esta el set solicitado
let miSet = new Set([1,2,3,4,4,1,2]);
const mimap = new Map()
// mostrar contenido
console.log(miSet);
//añadir datos al set
miSet.add(9);

console.log(miSet);
//verificar si un dato esta dentro del set si esta debe devolver true
console.log(miSet.has(3));
//eliminar un dato del set
miSet.delete(9)

console.log(miSet);
// este ciclo serve para recorrer el set
for (const producto of miSet) {
  console.log(producto);
}
//creo un objeto
const object = { a: 1, b: 2, c: 3 };
//uso del for....in para recorrer el objeto
for (const data in object){
  console.log(`${data}: ${object[data]}`)
  
}
//creacion de un nuevo map 
const productosCategoria = new Map();
productosCategoria.set("Electrónica", inventario[0].nombre);
productosCategoria.set("Computación", inventario[1].nombre);
productosCategoria.set("Audio", inventario[2].nombre);

console.log("--- Propiedades del primer producto (for...in) ---");
for (const propiedad in inventario[0]) {
  console.log(`${propiedad}: ${inventario[0][propiedad]}`);
}

console.log("--- Usando Object.entries() ---");
Object.entries(inventario[1]).forEach(([clave, valor]) => {
    console.log(`${clave} -> ${valor}`);
});

console.log("--- Recorriendo el Map (forEach) ---");
productosCategoria.forEach((valor, clave) => {
  console.log(`Categoría: ${clave} | Producto: ${valor}`);
});


