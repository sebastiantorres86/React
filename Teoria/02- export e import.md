# Export e import

Una de las nuevas versiones de JS (ES6) trae la posibilidad de exportar e importar código de un archivo a otro. Esto significa que desde un archivo X podemos exportar (o poner pública, o a disponibilidad) un valor Y, y cuando un archivo Z importa ese archivo X, puede obtener y trabajar con el valor Y.

Hay dos formas de exportar, **nombrada** y **por defecto**, y cada una tiene su sintaxis. En un archivo se pueden tener varias exportaciones de forma nombrada, pero una sola por defecto.

*Siempre que tenemos un componente de React necesitamos tener un export por default, pero esto no implica que en todo archivo .js necesitemos tener un export por default*

## Export por default

Para exportar por default un valor, simplemente tenemos que poner las palabras reservadas `export dafault` y el valor qaue queramos exportar. Se pueden exportar todo tipo de valores (números, string, booleanos, arrays, objetos, funciones)

```
export dafault 3
```

También podemos exportar una variable (que en el export se reemplaza por el valor quie contiene):

```
const miVariable = 3
export default miVariable
```

O directamente todo en una misma línea:

```
export default miVariable = 3
```

Cuando hacemos esto último no hay que declarar la palabra `const` o `let` de la variable. En el caso de un componente, podemos crear el componente y luego exportarlo:

```
const MiComponente = () => (<></>)

export default MiComponente
```

o hacer todo junto

```
export default MiComponente = () => (<></>)
```

Para importar el valor exportado en otro archivo, necesitamos poner:

```
import miVariable from 'ruta/al/archivo'
```

Y ya podemos usar `miVariable` dentro de dicho archivo, que contendrá el valor exportado por defecto. Como el export por default no tiene un nombre (puede ser solo un valor) y es único por archivo, podemos al importarlo asignarlo es una variable con otro nombre, pero a la hora de trabajar con componentes en React esto no es una práctica recomendable.

La ruta al archivo puede ser una ruta absoluta (dependiendo de cómo tengamos configurado nuestro entorno), o una ruta relativa, donde `./` indica la posición en la carpeta actual, y `..` se utiliza para subir un nivel hacia arriba. Cuando importamos archivos .js, **no hace falta incluir la extensión del mismo**

## Export con nombre

Para exportar un valor con nombre, tenemos que declararlo en una misma línea, junto a la declaración de la variable donde va a estar contenido, por ejemplo:

```
export miVariable = 3
const moOtraVariable = 5
export {miVariable, miOtraVariable}
```

A la hora de importar, tenemos dos opciones:

1. Importar todo en una variable, y acceder a las distíntas variables como propiedades del objeto:

```
import * as misVariables from 'ruta/al/archivo'

console.log(misVariables.miOtraVariable)
```

2. Utilizar destructuring, para declarar las cosas que necesitamos importar y utilizarlas directamente

```
import {miVariable, miOtraVariable} from 'ruta/al/archivo'

console.log(miVariable)
```

Para esto necesitamos utilizar exactamente el mismo nombre con el que exportamos el valor, pero podemos ponerle un *alias*:

```
import {miVariable as miVariableConAlias} from 'ruta/al/archivo'

console.log(miVariableConAlias)
```

A su vez, podemos importar los valores por default y con nombre en una misma línea:

```
import ValorPorDefault, {miVariable, miOtraVariable} from 'ruta/al/archivo'
```

En cuanto al orden de las importaciones, es preferible importar todo en la parte superior del archivo. Primero se importan las librerías externas o de terceros, luego los componentes externos o de terceros, luego los componentes propios, y luego otros archivos que necesitemos (estilos, etc).
