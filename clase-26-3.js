// 1. `let` y `const`
// a) Declara una variable usando `let` para almacenar tu edad y otra usando `const` para tu nombre. Luego, intenta reasignar valores a ambas y explica qué sucede.

console.log("\n1a) Variables 'let' y 'const'");
let edad = 23
const nombre = "Tobias"

console.log(`Inicialmente: Edad = ${edad}, Nombre = ${nombre}`)

edad = 31;
console.log(`Después de reasignar 'let' (edad): Edad = ${edad}`)

try {
  nombre = "Marcelo"
} catch (error) {
  console.log(error)
  console.log("No se puede modificar el valor de una variable const");
}

// b) Crea un bucle que incremente una variable declarada con `let`. ¿Qué pasaría si la declaras con 'const'?

console.log("\n1b) Bucle con 'let' y 'const'");
let contadorLet = 0;
for (let i = 0; i < 3; i++) {
  contadorLet++;
  console.log(`Contador con let: ${contadorLet}`);
}

const contadorConst = 0;
try {
  for (let i = 0; i < 3; i++) {
    contadorConst++; 
    console.log(`Contador con const: ${contadorConst}`);
  }
} catch (error) {
  console.log(error)
  console.log("Si 'contador' se declarara con 'const' en el bucle, intentar incrementarlo causa un error porque no se puede modificar el valor de una variable const.");
}

// c) Declara una constante que sea un objeto con tu información personal. Intenta modificar una propiedad del objeto. ¿Es esto posible? ¿Por qué?.

console.log("\n1c) Modificación de propiedad de objeto `const`");
const persona = {
  nombre: "Tobias",
  edad: 23,
  ciudad: "Buenos Aires",
};
console.log("Objeto inicial:", persona);

persona.edad = 26; // Modificar una propiedad del objeto
persona.ocupacion = "Ingeniero"; // Añadir una nueva propiedad
console.log("Objeto después de modificar propiedades:", persona);
console.log(
  "Es posible modificar las propiedades de un objeto declarado con `const`. `const` asegura que la referencia al objeto no cambie, pero no hace inmutables las propiedades del objeto en sí."
);

// d) Dentro de una función, declaramos una variable con var, otra con let y otra con const. Luego imprimimos sus valores dentro y fuera de un bloque {}. Observamos y explicamos los resultados

console.log("\n1d) Alcance de `var`, `let`, `const`");
function scopeExample() {
  var varVariable = "Soy var (función)";
  let letVariable = "Soy let (función)";
  const constVariable = "Soy const (función)";

  console.log("Dentro de la función (antes del bloque):");
  console.log("varVariable:", varVariable);
  console.log("letVariable:", letVariable);
  console.log("constVariable:", constVariable);

  {
    var varVariableBloque = "Soy var (bloque)"; // var tiene alcance de función
    let letVariableBloque = "Soy let (bloque)"; // let tiene alcance de bloque
    const constVariableBloque = "Soy const (bloque)"; // const tiene alcance de bloque

    console.log("Dentro del bloque {}:");
    console.log("varVariableBloque:", varVariableBloque);
    console.log("letVariableBloque:", letVariableBloque);
    console.log("constVariableBloque:", constVariableBloque);
  }

  console.log("Dentro de la función (después del bloque):");
  console.log(
    "varVariableBloque (accesible fuera del bloque):",
    varVariableBloque
  );
  try {
    console.log("letVariableBloque:")
    console.log(letVariableBloque)
  } catch (error) {
    console.log(error)
  }
  try {
    console.log("constVariableBloque:")
    console.log(constVariableBloque)
  } catch (error) {
    console.log(error)
  }
  console.log("letVariableBloque y constVariableBloque NO son accesibles fuera de su bloque.")
}

scopeExample();
try {
  console.log("varVariable:")
  console.log(varVariable);
} catch (error) {
  console.log(error)
}
console.log("varVariable, letVariable, constVariable (de la función) NO son accesibles fuera de la función.");

// 2. Arrays (operaciones básicas)

console.log("\n--- 2. Arrays (operaciones básicas) ---");

// a) Crea un array con los nombres de cinco frutas. Añade una fruta al principio y otra al final usando métodos de array.
console.log("\n2a) Añadir elementos a un array");
const frutas = ["Manzana", "Banana", "Naranja", "Pera", "Uva"];
console.log("Array inicial:", frutas);

frutas.unshift("Kiwi"); 
frutas.push("Fresa");
console.log("Array modificado:", frutas);

// b) Dado un array de números del 1 al 5, crea otro array que contenga el doble de cada número usando un bucle 'for`.
console.log("\n2b) Duplicar elementos de un array con bucle 'for'");
const numerosOriginales = [1, 2, 3, 4, 5];
const numerosDuplicados = [];

for (let i = 0; i < numerosOriginales.length; i++) {
  numerosDuplicados.push(numerosOriginales[i] * 2);
}
console.log("Números originales:", numerosOriginales);
console.log("Números duplicados:", numerosDuplicados);

// c) Crea un array con tres colores. Luego, crea otro array con dos colores más. Combina ambos arrays en uno solo usando el método `concat()`.
console.log("\n2c) Combinar arrays con `concat()`");
const colores1 = ["Rojo", "Verde", "Azul"];
const colores2 = ["Amarillo", "Morado"];
console.log("Colores 1:", colores1);
console.log("Colores 2:", colores2);

const todosLosColores = colores1.concat(colores2);
console.log("Todos los colores:", todosLosColores);

// d) Dado un array de 6 elementos, eliminamos el primero y el último, y mostramos el resultado. ¿Qué método usamos para no modificar el array original?
console.log("\n2d) Eliminar elementos sin modificar el array original");
const elementos = ["a", "b", "c", "d", "e", "f"];
console.log("Array original:", elementos);
const elementosModificados = elementos.slice(1, -1);
console.log("Array modificado (usando slice):", elementosModificados);
console.log("Array original (sin modificar):", elementos);
console.log("Método usado para no modificar el array original: `slice()`");

// 3. Objetos y cómo acceder a las propiedades

console.log("\n--- 3. Objetos y cómo acceder a las propiedades ---");

// a) Crea un objeto que represente un libro con propiedades como título, autor y año. Accede a cada propiedad e imprimilas.
console.log("\n3a) Acceder a propiedades de un objeto");
const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  año: 1967,
};

console.log("Título del libro:", libro.titulo);
console.log("Autor del libro:", libro.autor);
console.log("Año de publicación:", libro.año);

// b) Dado un objeto que representa una persona, añade una nueva propiedad "hobby" y modifica la propiedad "edad".
console.log("\n3b) Añadir y modificar propiedades de un objeto");
const persona2 = {
  nombre: "Luis",
  edad: 28,
  ciudad: "Barcelona",
};
console.log("Persona inicial:", persona2);

persona2.hobby = "Senderismo"; // Añadir nueva propiedad
persona2.edad = 29; // Modificar propiedad existente
console.log("Persona modificada:", persona2);

// c) Crea un objeto que represente una calculadora con métodos para sumar, restar, multiplicar y dividir. Utiliza estos métodos con diferentes números.
console.log("\n3c) Objeto calculadora con métodos");
const calculadora = {
  sumar: function (a, b) {
    return a + b;
  },
  restar: function (a, b) {
    return a - b;
  },
  multiplicar: function (a, b) {
    return a * b;
  },
  dividir: function (a, b) {
    if (b === 0) {
      return "No se puede dividir por cero";
    }
    return a / b;
  },
};

console.log("Suma (5 + 3):", calculadora.sumar(5, 3));
console.log("Resta (10 - 4):", calculadora.restar(10, 4));
console.log("Multiplicación (6 * 7):", calculadora.multiplicar(6, 7));
console.log("División (20 / 5):", calculadora.dividir(20, 5));
console.log("División (10 / 0):", calculadora.dividir(10, 0));

// d) Creamos un objeto con varias propiedades. Accedemos a una de ellas usando una variable con el nombre de la propiedad
console.log("\n3d) Acceder a propiedades usando una variable");
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  color: "Blanco",
};

const propiedadDeseada = "modelo";
console.log(`El ${propiedadDeseada} del coche es:`, coche[propiedadDeseada]);

const otraPropiedad = "color";
console.log(`El ${otraPropiedad} del coche es:`, coche[otraPropiedad]);

// 4. Template Literals

console.log("\n--- 4. Template Literals ---");

// a) Usando template literals, crea una cadena que incluya variables para tu nombre, edad y profesión.
console.log("\n4a) Cadena con variables usando template literals");
const miNombre = "Tobias";
const miEdad = 23;
const miProfesion = "Analista de Innovacion";

const presentacion = `Hola, soy ${miNombre}, tengo ${miEdad} años y soy ${miProfesion}.`;
console.log(presentacion);

// b) Crea una función que reciba un precio y una cantidad, y devuelva una frase usando calculos. La frase es “El total es: [total]"
console.log("\n4b) Función con cálculos en template literal");
function calcularTotal(precio, cantidad) {
  const total = precio * cantidad;
  return `El total es: ${total}`;
}

console.log(calcularTotal(10, 3)); // Output: El total es: 30
console.log(calcularTotal(2.5, 4)); // Output: El total es: 10

// c) Utiliza template literals para crear un mensaje de error que incluya el nombre del error y su descripción.
console.log("\n4c) Mensaje de error con template literals");
const errorNombre = "TypeError";
const errorDescripcion = "No se puede leer la propiedad de 'undefined'";

const mensajeError = `¡Error detectado!
Tipo: ${errorNombre}
Descripción: ${errorDescripcion}
Por favor, revisa tu código.`;
console.log(mensajeError);

// 5. Arrow Functions

console.log("\n--- 5. Arrow Functions ---");

// a) Convierte la siguiente función tradicional a una arrow function:
// function saludar(nombre) {
//   return "Hola, " + nombre + "!";
// }
console.log("\n5a) Función tradicional a Arrow Function");

// Función tradicional
function saludarTradicional(nombre) {
  return "Hola, " + nombre + "!";
}
console.log("Tradicional:", saludarTradicional("Juan"));

// Arrow Function
const saludarArrow = (nombre) => `Hola, ${nombre}!`;
console.log("Arrow Function:", saludarArrow("María"));

// b) Crea una arrow function que reciba un número y devuelva su cuadrado.
console.log("\n5b) Arrow Function para el cuadrado");
const cuadrado = (numero) => numero * numero;
console.log("Cuadrado de 5:", cuadrado(5));
console.log("Cuadrado de 9:", cuadrado(9));

// c) Crea una arrow function que reciba dos números y devuelva el mayor de ellos.
console.log("\n5c) Arrow Function para el mayor de dos números");
const mayorDeDos = (a, b) => (a > b ? a : b);
console.log("Mayor entre 10 y 7:", mayorDeDos(10, 7));
console.log("Mayor entre 3 y 15:", mayorDeDos(3, 15));

// d) Crea una arrow function que reciba un array y devuelva otro array con los elementos al cuadrado.
// Usamos map() adentro y la menor cantidad de codigo posible.
console.log("\n5d) Arrow Function con `map()` para cuadrados de array");
const cuadradosArray = (arr) => arr.map((num) => num * num);
const numerosParaCuadrados = [1, 2, 3, 4, 5];
console.log(
  "Array original:",
  numerosParaCuadrados,
  "-> Array de cuadrados:",
  cuadradosArray(numerosParaCuadrados)
);

// 6. Métodos de array

console.log("\n--- 6. Métodos de array ---");

// a) Dado un array de números, utiliza `filter()` para obtener un nuevo array solo con los números pares.
console.log("\n6a) `filter()` para números pares");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter((num) => num % 2 === 0);
console.log("Números originales:", numeros);
console.log("Números pares:", numerosPares);

// b) Crea un array de objetos representando estudiantes con propiedades de nombre, edad y calificación.
// Usa `map()` para obtener un nuevo array solo con los nombres y las edades de los estudiantes.
console.log("\n6b) `map()` para extraer nombres y edades de objetos");
const estudiantes = [
  { nombre: "Pedro", edad: 20, calificacion: 85 },
  { nombre: "Laura", edad: 22, calificacion: 92 },
  { nombre: "Miguel", edad: 19, calificacion: 78 },
  { nombre: "Sofía", edad: 21, calificacion: 95 },
];

const nombresYEdades = estudiantes.map((estudiante) => ({
  nombre: estudiante.nombre,
  edad: estudiante.edad,
}));
console.log("Estudiantes originales:", estudiantes);
console.log("Nombres y edades de estudiantes:", nombresYEdades);

// c) Dado el array de objetos con nombre y edad anterior, usamos `find()` para obtener la primera persona mayor de 25 años.
console.log("\n6c) `find()` para encontrar el primer estudiante mayor de 25");
const estudiantesParaBuscar = [
  { nombre: "Ana", edad: 24 },
  { nombre: "Diego", edad: 26 },
  { nombre: "Paula", edad: 23 },
  { nombre: "Javier", edad: 27 },
];

const mayorDe25 = estudiantesParaBuscar.find(
  (estudiante) => estudiante.edad > 25
);
console.log("Estudiantes:", estudiantesParaBuscar);
console.log("Primera persona mayor de 25:", mayorDe25);

// d) Utiliza `reduce()` para calcular la suma de todos los números en un array.
console.log("\n6d) `reduce()` para sumar números en un array");
const numerosParaSuma = [1, 5, 8, 2, 10];
const sumaTotal = numerosParaSuma.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Números para suma:", numerosParaSuma);
console.log("Suma total:", sumaTotal);

// 7. Spread Operator

console.log("\n--- 7. Spread Operator ---");

// a) Crea una función que reciba un número indefinido de argumentos y devuelva la suma de todos ellos usando el spread operator.
console.log("\n7a) Suma de argumentos indefinidos con spread");
const sumarTodos = (...numeros) => {
  return numeros.reduce((acc, num) => acc + num, 0);
};

console.log("Suma de (1, 2, 3):", sumarTodos(1, 2, 3)); // Output: 6
console.log("Suma de (5, 10, 15, 20):", sumarTodos(5, 10, 15, 20)); // Output: 50

// b) Dado un array de números, usa el spread operator para encontrar el número máximo.
console.log("\n7b) Encontrar el número máximo con spread y `Math.max`");
const listaNumeros = [3, 9, 1, 6, 8, 2];
const maximo = Math.max(...listaNumeros);
console.log("Lista de números:", listaNumeros);
console.log("Número máximo:", maximo);

// c) Combina dos objetos en uno solo utilizando el spread operator.
console.log("\n7c) Combinar objetos con spread");
const infoPersonal = { nombre: "David", edad: 40 };
const infoContacto = { email: "david@example.com", telefono: "123-456-7890" };

const personaCompleta = { ...infoPersonal, ...infoContacto };
console.log("Información personal:", infoPersonal);
console.log("Información de contacto:", infoContacto);
console.log("Persona completa:", personaCompleta);

// d) Tenemos un array con subarrays (por ejemplo: [1, [2,3], [4]]). Usamos el spread operator para combinar todo en un solo array plano.(tip: no alcanza solo con spread)
console.log("\n7d) Aplanar array con subarrays usando spread");
const arrayAnidado = [1, [2, 3], 4, [5, 6, 7]];
const arrayPlanoConFlat = arrayAnidado.flat();
console.log("Array anidado:", arrayAnidado);
console.log("Array aplanado con `flat()`:", arrayPlanoConFlat);

// Si se quisiera hacer manualmente sin `flat()` y solo con spread para un nivel específico:
const arrayPlanoManual = [].concat(...arrayAnidado);
console.log("Array aplanado manualmente con spread (para 1 nivel):", arrayPlanoManual);

// 8. Destructuring

console.log("\n--- 8. Destructuring ---");

// a) Dado un objeto con propiedades de una persona, usa destructuring para extraer el nombre y la edad en variables separadas.
console.log("\n8a) Destructuring de objeto (nombre y edad)");
const persona3 = {
  nombre: "Isabel",
  edad: 32,
  pais: "México",
  ocupacion: "Diseñadora",
};

const { nombre: nombrePersona, edad: edadPersona } = persona3;
console.log("Objeto persona:", persona3);
console.log("Nombre (destructuring):", nombrePersona);
console.log("Edad (destructuring):", edadPersona);

// b) Utiliza destructuring en una función para extraer las propiedades de un objeto pasado como argumento.
console.log("\n8b) Destructuring en parámetros de función");
function mostrarDetalles({ producto, precio, cantidad }) {
  console.log(`Producto: ${producto}, Precio: $${precio}, Cantidad: ${cantidad}`);
}

const item = {
  producto: "Laptop",
  precio: 1200,
  cantidad: 1,
  color: "Gris",
};
console.log("Objeto item:", item);
mostrarDetalles(item);

// c) Dado un array con información de una ciudad (nombre, país, población), usa destructuring para asignar cada elemento a una variable.
console.log("\n8c) Destructuring de array");
const ciudadInfo = ["París", "Francia", 2141000];

const [nombreCiudad, paisCiudad, poblacionCiudad] = ciudadInfo;
console.log("Array ciudadInfo:", ciudadInfo);
console.log("Nombre de la ciudad:", nombreCiudad);
console.log("País:", paisCiudad);
console.log("Población:", poblacionCiudad);