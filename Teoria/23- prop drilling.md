# Prop drilling

Cuando necesitamos que dos o más componentes compartan un mismo estado o acciones que modifiquen un mismo estado, vimos que teníamos que _elevar_ el estado y sus métodos al _componente ancestro común más inmediato_ en la jerarquía, y pasar luego dicho estado y métodos mediante props. Esto sucede porque el flujo del estado en una aplicación de React es de arriba hacia abajo (top down), es decir, el estado sólo puede ser compartido a componentes hijos.

En React se llama a este fenómeno `props drilling` (taladrado de props) poorque los props van pasando por todos los componentes (capas) de nuestra aplicación como si fuera un taladro. El `prop drilling` no es de por sí algo malo o que haya que evitar a toda costa. De hecho, es parte integral del funcionamiento de React. pero sí puede volverse bastante engorroso, molesto, difícil de seguir, de pensar en forma lógica y de mantener. Dependiendo de que tan alejados estén dichos componentes en la estructura de nuestra app, es probable que tengamos que pasar esos estados por un montón de componentes intermedios para llegar al que necesitamos.

Otro problema que tiene el `prop drilling` es que genera componentes muy "acoplados" o dependientes entre sí. Si tenemos un conjunto de varios componentes anidados que se van pasando props entre sí, nos queda una jerarquía muy rígida. No podemos sacar ninguno de esos componentes porque se corta la cadena, y si lo hacemos tenemos que modificar los que ya tenemos. Tampoco podemos agregar fácilmente un componte entre medio de estos, si lo hacemos, tenemos que tomar los props del componente padre y pasarlo a los hijos para no cortar el flujo del "taladrado".

Pasar props entre dos componentes es aceptable y no trae demasiados inconvenientes, pero cuando ya nos excedemos de esta cantidad se empieza a volver inmanejable.

Para solucionar esto, existen un par de técnicas al respecto.

## Composición (vs anidado)

La composición es una técnica o patrón muy utilizada en React, que nos permite construir componentes de forma modular, compuestos o integrados por otros componentes combinados de forma diversa. De esta forma, tenemos un componente más genérico y reutilizable, que no contiene siempre los mismos componentes hijos, sino uqe puede aceptar numerosas variaciones.

Primero veamoslo a nivel de sintaxis, y después analicemos como lograrlo. Un componente anidado nos queda de la siguiente forma:

```jsx
const SocialCard = () => (
  <Card>
    <Avatar />
    <Username />
    <Date />
    <Text />
  </Card>
);
```

Este componente tiene siempre los mismos componentes hijos. Si quisieramos obtener variaciones de este componente tendríamos que crear otros componentes, por ejemplo:

```jsx
const SocialCardWithoutAvatar = () => (
  <Card>
    <Username />
    <Date />
    <Text />
  </Card>
);
```

O personalizarlo mediante props:

```jsx
const SocialCard = ({ hasAvatar, hasDate }) => (
  <Card>
    {hasAvatar && <Avatar />}
    <Username />
    {hasDate && <Date />}
    <Text />
  </Card>
);
```

De todas formas, si queremos por ejemplo cambiar el orden de los componentes, se vuelve más complicado.

En cambio, un componente que utiliza composición, podemos usarlo de la siguiente forma:

```jsx
// ... (el algún JSX válido)

<SocialCard>
  <Avatar />
  <Username />
  <Date />
  <Text />
</SocialCard>

<SocialCard>
  <Avatar />
  <Username />
  <Text />
</SocialCard>

<SocialCard>
  <Username />
  <Date />
  <Text />
</SocialCard>

// ...
```

Como ves, cada vez que utulizamos el componente `SocialCard` definimos qué componentes queremos que lo compongan, e incluso el orden en que queremos que aprezcan. De esta forma, el componente se vuelve mucho más reutilizable, ya que nos permite crear mpultiples variaciones y "armarlo" con los componentes que deseemos de la forma que deseemos.

La "contra" que tiene es que hace el código donde tenemos que utlizar el componente un poco más verborrágico. **Esto no implica que siempre hay que usar una composición y nunca anidar componentes**. Como todo, son estrategias y herramientas que tenemos a nuestro alcance, ninguna de ellas es mejor o peor, sino que cada una tiene su utilidad, sus ventajas y sus desventajas según el caso de uso. Todo depende de qué tanta reutilización y poersonalización queremos darle a nuestro componente. Por lo general esto es siempre algo deseable, pero muchas veces tenemos componentes que no necesitamos o no queremos que varíen tanto.

¿Cómo solución la composición el problema del `prop drilling`? Veamoslo con otro ejemplo. Supongamos que tenemos la siguiente jerarquía de componentes:

```jsx
const App = () => <Nav />;

const Nav = () => <UserInfo />;

const UserInfo = () => <Username />;

const Username = ({ username }) => <p>{username}</p>;
```

Si tuviésemos la info del username en nuestra `App` (porque la obtenemos de un `fetch`, por ejemplo), tendríamos que pasarla como prop por toda la jerarquía para que llegue a `username`:

```jsx
const App = () => <Nav username="Ada" />;

const Nav = ({ username }) => <UserInfo username={username} />;

const UserInfo = ({ username }) => <Username username={username} />;

const Username = ({ username }) => <p>{username}</p>;
```

En cambio, si lo hiciésemos mediante composición, nos quedaría así:

```jsx
const App = () => (
  <Nav>
    <UserInfo>
      <Username username="Ada" />
    </UserInfo>
  </Nav>
);
```

Como ves, no hizo falta que pasásemos `username` por toda la jerarquía. De esta forma, nos evitamos el inconveniente del `prop drilling`.

## 🤔 ¿Cómo hacemos esto?

La técnica es la siguiente. Todo componente tiene un prop propio de React llamado `children` (hijos). En ese prop están los **componentes hijos inmediatos** que se le anidan cuiando se utiliza el componente. Por lo tanto, volviendo a nuestro ejemplo anterior:

```jsx
const SocialCard = ({ children }) => <Card>{children}</Card>;
```

En `children` van todos los componentes que anidamos cuando utilizamos nuestro componente con **etiquetas cerradas**. Por lo tanto, si en algún lado usamos:

```jsx
// ... algún JSX válido
<SocialCard>
  <Avatar />
  <Username />
  <Date />
  <Text />
</SocialCard>

<SocialCard>
  <Avatar />
  <Username />
  <Text />
</SocialCard>
// ...
```

En el primer caso, `children` contiene los componentes `<Avatar />`, `<Username />`, `<Date />`, `<Text />`; en el segundo, `<Avatar />`, `<Username />`, `<Text />`.

## Componentes como props

En vez de agrupar todos los componentes que se incluyan dentro de `props.children`, quizás lo que queremos es tener _cierta_ personalización de lo que el componente puede aceptar, y tener el control como para poder distribuirlos dentro de nuestro componente. Para esto, lo que podemos hacer es pasar componentes como props. Supongamos lo siguiente:

```jsx
const FormControl = { header, input, button } => (
  <div className='form'>
    {header}
    <div className='input-container'>
      {input}
      {button}
    </div>
  </div>
)
```

Acá tenemos un componente `FormControl` que acepta tres props, `header`, `input`, `button`. Esoss props después los distribuye dentro de sí mismo como le conviene o considere necesario.

Ahora podemos utilizar este componente de la siguiente forma:

```jsx
const Modal = () => (
  <FormControl
    header={<Label>Username</Label>}>
    input={<TextInput placeholder={Ingrese su usuario} />}
    header={<Button type='primary'>Ingresar</Button>}
  />
)
```

Y en otro lado:

```jsx
const Modal = () => (
  <FormControl
    header={<Text type='important'>Ingrese su fecha de nacimiento</Text>}>
    input={<DatePicker />}
    header={<Button type='warning'>Ingresar</Button>}
  />
)
```
