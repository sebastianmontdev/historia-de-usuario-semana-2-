const usuarios = {
    estudiante1: 'sebastian',
    estudiante2: 'jaime',
    estudiante3: 'pepe',

}

const llaves = Object.keys(usuarios);
console.log(llaves);

const valores = Object.values(usuarios);
console.log(valores);

const entradas = Object.entries(usuarios);
console.log(entradas);

for (const [clave, valor] of Object.entries(usuarios)) {
  console.log(`${clave}: ${valor}`);
}