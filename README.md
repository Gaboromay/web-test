# web-test

Este es un proyecto web de prueba.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de directorios:

- `css/`: Contiene los archivos CSS para estilos generales y efectos visuales.
    - `effects.css`:  Define efectos visuales como el borde iluminado para las tarjetas de proyecto.
    - `style.css`: Contiene los estilos principales del sitio, incluyendo variables de color y estilos para diferentes secciones.
- `js/`: Contiene archivos JavaScript.
    - `script.js`: Lógica para mostrar proyectos dinámicamente y alternar el modo oscuro.
- `projects/`: Contiene subproyectos individuales.
    - `Landing_mitsubishi/`: Un landing page básico para Mitsubishi.
        - `index.html`: Página principal del landing page.
        - `login.html`: Página de inicio de sesión.
        - `css/`: Hojas de estilo específicas para el landing page.
            - `login.css`: Estilos para la página de login.
            - `styles.css`: Estilos generales del landing page.
        - `fonts/`: Contiene fuentes personalizadas.
        - `img/`: Contiene imágenes utilizadas en el landing page.
- `index.html`: Página principal del proyecto web.
- `LICENSE`: Archivo de licencia.
- `README.md`: Este archivo.

## Descripción

Este proyecto incluye una página principal (`index.html`) que muestra una lista de proyectos.  Los proyectos se cargan dinámicamente utilizando JavaScript desde el archivo [`js/script.js`](js/script.js).  También incluye un modo oscuro que se puede activar o desactivar.

El subproyecto `Landing_mitsubishi` es un ejemplo de un landing page independiente con su propio conjunto de estilos, fuentes e imágenes.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript

## Cómo Ejecutar

1.  Clona este repositorio.
2.  Abre el archivo `index.html` en tu navegador web.

Para ejecutar el subproyecto `Landing_mitsubishi`, abre el archivo `projects/Landing_mitsubishi/index.html` en tu navegador.

## Personalización

Puedes personalizar los estilos generales del sitio modificando los archivos en el directorio `css/`.  Para modificar la lista de proyectos mostrados en la página principal, edita el archivo [`js/script.js`](js/script.js).

## Licencia

Este proyecto está bajo la licencia especificada en el archivo "LICENSE"