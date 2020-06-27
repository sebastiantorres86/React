# Iconos

Para utilizar íconos de FontAwesome al estilo de React, tenemos que instalar las siguientes dependencias:

```terminal
npm install @fontawesome/fontawesome-svg-core @fontawesome/free-solid-svg-icons @fontawesome/free-regular-svg-icons @fontawesome/react-fontawesome
```

Cada vez que queramos mostrar un ícono, tenemos que utilizar el componente `FontAwesomeIcon`

```jsx
import React from 'react'
import {FontAwesomeIcon} from '@fontawesome/react-fontawesome'

// ... en alguna parte de algún componente
<FontAwesomeIcon icon={icon} />
// ...
```

El componente tiene una propiedad `icon` obligatoria, en la cual tenemos que declarar que ícono va a estar mostrando. Este ícono tenemos que importarlo de la librería `@fontawesome/free-solid-svg-icons` (íconos solidos) o de `@fontawesome/free-regular-svg-icons` (íconos normales). No todos los íconos están en ambas. Los nombres de los íconos empiezan con fa (Font Awesome) más el nombre (que se puede buscar en la página de Font Awesome), todo en `camelCase`.

```jsx
import React from 'react'
import {FontAwesomeIcon} from '@fontawesome/react-fontawesome'
import {faCoffee, faHome} from '@fontawesome/free-solid-svg-icons'

// ... en alguna parte de algún componente
<FontAwesomeIcon icon={faCoffee} />
<FontAwesomeIcon icon={faHome} />
// ...
```

Si tenemos algún componente que tenga un ícono de Font Awesome, pero queremos que ese ícono sea personalizable, podemos pasarlo como prop de ese componente:

```jsx
import React from 'react'
import {FontAwesomeIcon} from '@fontawesome/react-fontawesome'

const Button = ({icon, text}) => (
  <fontAwesomeIcon icon={icon} />
)
```

y en algún lado donde necesitemos invocar ese componente:

```jsx
import React from 'react'
import {faCoffee} from '@fontawesome/free-solid-svg-icons'

<Button icon={faCoffee} />}
```
