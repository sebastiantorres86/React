# Estado

En React el estado es uno de los conceptos más importantes que tenemos que manejar. Podemos entender al estado como el **conjunto de propiedades, valores y datos que algo (un componente, una aplicación, etc) contiene _en un momento dado_**. El estado es lo que hace _dinámica_ a una aplicación, es aquello que cambia: algo está en un estado, y pasa a estarlo en otro. Si no hay cambios de estado, es porque nada se modifica.

Todo aquello que cambie en un componente, o que pueda ser alterado mediante alguna acción o interacción, forma parte del estado de ese componente. Por ejemplo, en un botón que al hacer click cambia de color, se puede decir que pasa de un estado no clickeado a uno en el que sí lo está. Cualquier cosa que necesitemos modificar dentro de un componente tiene que ser parte de su estado (o del estado de otros, como ya veremos). En React no está permitido modificar otras cosas dentro de un componente, como los props. Por ejemplo, lo siguinete no debe hacerse:

```jsx
const Modal = ({ visible }) => {
  const close = () => {
    visible = false; // 🚫 PROHIBIDO!
  };

  return visible && <div className="modal" onClick={close} />;
};
```

Tampoco debemos declarar una variable afuera y utlizar para tal caso:

```jsx
const Modal = () => {
  let visible = true; // 🚫 PROHIBIDO!

  const close = () => {
    visible = false; // 🚫 PROHIBIDO!
  };

  return visible && <div className="modal" onClick={close} />;
};
```

La razón de esto es que React no puede detectar por sí solo cuando una variable cambia y en consecuencia no puede re renderizar el componente para mostrar el cambio. En este caso, or mpas quie hagamos click, ejecutemos la función `close` y esta modifique el valor de la variable `visible`, el componente va a seguir mostrándose, ya que React no está al tanto de este cambio y no se actualiza para mostrarlo.

Para poder acceder al estado en un componente funcional, necesitamos un concepto de React conocido como `hooks`.

## Hooks

Los `hooks` son funciones que te permiten "enganchar" el estado de React y el ciclo de vida desde componentes funcionales. Los hooks no funcionan dentro de componentes de clases -te permiten usar React sin clases-.

Existen varios `hooks` que son propios de React, también podemos crear los nuestros, lo que nos permitirá reutilizar lógica y compartirla entre componentes. Algunos de los que vermeos son:

- `useState`
- `useEffect`
- `useReducer`
- `useCallback`
- `useContext`
- `useRef`

COmo ves, todo `hook` comienza con el prefijo `use-`. Cuando agregamos una nueva librería, es común que esta ccontenga sus propios `hooks`, por lo que es fundamental aprender a utilizarlos para ppoder explotar todo el potencial de React y su ecosistema.

## Reglas de Hooks

los `hooks` tienen dos reglas muy sencillas:

1. Sólo pueden llamarse en componentes funcionales y otros `hooks` personalizados
2. Sólo pueden llamarse en el _nivel superior_ de la función, es decir, \*no pueden usarse dentro de **condicionales**, **bucles** o **funciones anidadas\***. Esto permite que cuando un componente se re renderiza, los hooks se ejecuten en el mismo orden en que fueron declarados, y no se generen bugs o errores por ciertas condiciones no cumplidas.

```jsx
const miComponente = ({algunProp}) => {
  // Nivel superior
  useEffect() // ✅ CORRECTO

  if (algunProp > 10) {
    useEffect() // 🚫 PROHIBIDO!
  }

  for (const i = 0; i<= algunProp; i++) {
    useEffect() // 🚫 PROHIBIDO!
  }

  const fruncionAnidada = () => {
    useEffect() // 🚫 PROHIBIDO!
  }

  return(
    // JSX
  )
}
```
