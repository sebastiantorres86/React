# Estado: arrays y objetos

Trabajar con arrays y objetos como estado tiene la peculiaridad en React de que cada vez que queremos hacer alguna modificación a alguno de estos, tenemos que _proporcionar un nuevo array u objeto_. Para esto, podemos aprovechar varios métodos y técnicas, como todos los métodos que devuelven un nuevo elemento (`map`, `filter`, `reduce`, `slice`) y el `spread operator`

## Spread operator

El `spread operator` es una característica de ES6. La sintaxis es la siguiente:

```jsx
const numeros = [1, 2, 3, 4];
console.log(...numeros); // [1, 2, 3, 4]
```

El `spread operator` se escribe con 3 puntos (`...`) seguido del nombre del array (u objeto), y contiene todos los elementos (u propiedades) del mismo. En principio esto no parece muy útil, pero nos permite hacer cosas como las siguiente:

```jsx
const frutas = ["kiwi", "uva"];
const frutasYVerduras = ["lechuga", ...frutas, "repollo"];
console.log(frutasYVerduras); // ['lechuga', 'kiwi', 'uva', 'repollo']
```

Lo mismo con un objeto:

```jsx
const persona = {
  nombre: "Ada",
  apellido: "Lovelace",
};

const empleada = {
  puesto: "desarrolladora",
  infoPersonal: {
    ...persona,
  },
};

console.log(empleada); /* {
  puesto: 'desarrolladora',
  imfoPersonal: {
    nombre: 'Ada',
    apellido: 'Lovelace'
  }
} */
```

## Trabajando con arrays

- **Vaciando un array**
  Reemplazamos el array anterior por uno nuevo y vacío

```jsx
setFruits([]);
```

- **Concatenando arrays**
  Creamos un nuevo array que contenga todos los ítems de distintos arrays

```jsx
setFoods([...salads, ...desserts, ...snacks]);
```

- **Agregando un ítem**
  Creamos un nuevo array que contenga los ítems del array original, más el nuevo

```jsx
setFruits([...fruits, "Pera"]);
```

- **Eliminando un item**
  Filtramos el array original buscando sólo aquellos elementos que no queremos eliminar (es decir, los que son distintos al que queremos sacar) y obtenemos un nuevo array con todos los ítems menos el que no necesitamos (se pueden eliminar más ítems agregando mpas condiciones)

```jsx
setFruits(fruits.filter((fruit) => fruit !== "Manzana"));
```

También podemos utilizar _slice_ si sabemos el índice del elemento que queremos extraer

```jsx
setFruits(fruits.slice(3, 5));
```

- **Reemplazando un item**
  Obtenemos un nuevo array resultado de mapear todos los elementos del array a sí mismo, excepto el que queremos cambiar, que se mapea a uno nuevo

```jsx
setFruits(fruits.map((fruit) => (fruit === "Manzana" ? "Pera" : fruit)));
```

## Trabajando con objetos

- **Agregando una propiedad**
  Creamos un nuevo objeto que contenga todas las propiedades del objeto original, más la nueva

```jsx
setAnimal({ ...animal, tipo: "perro" });
```

- **Modificando una propiedad**
  Creamos un nuevo objeto que contenga todas las propiedades del objeto original, y agregamos la que queremos modificar, que si ya estaba en las anteriores se sobreescribe

```jsx
setAnimal({ ...animal, tipo: "perro" });
```

- **Eliminando una propiedad**
  Desestructuramos el objeto en la propiedad que queremos eliminar y las demás, y creamos un objeto nuevo con las demás

```jsx
const { propToDelete, ...otherProps } = myObject;
setObject(otherProps);
```

- **Uniendo las propiedades de varios objetos**
  Creamos un nuevo objeto que contenga todas las propiedades de distintos objetos

```jsx
setUser({ ...personalInfo, ...contactInfo, ...workInfo });
```

## Trabajando con propiedades anidadas

Si bien React no está pensado para utilizar estado anidado, y por lo tanto no es recomendable hacerlo y siempre que se pueda hay que evitarlo, hay veces que no tenemos muchas alternativas. Por lo tanto, si necesitamos actualizar alguna propiedad anidada, podemos utilizar las técnicas anteriores para ir reconstruyendo el objeto:

```jsx
setUser({
  ...user,
  personalInfo: {
    ...user.personalInfo,
    name: "Áda",
  },
});
```
