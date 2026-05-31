# Eval_U3A_VILLARREAL_JOHNNY

## Repositorio GitHub

El proyecto fue gestionado mediante Git y almacenado en GitHub para el control de versiones y respaldo del código fuente.

Repositorio:
https://github.com/joria1106/villarreal_johnny_frontend_eva3

## Landing Page Centro de Negocios Santiago – SERCOTEC

### Descripción del proyecto

Este proyecto corresponde al desarrollo de una Landing Page para el Centro de Negocios Santiago de SERCOTEC utilizando React como framework principal y Bootstrap para el diseño visual.

La solución implementada busca modernizar el sitio actual mediante una interfaz intuitiva, accesible y responsive, incorporando componentes reutilizables, contenido dinámico y herramientas de administración de contenido.

---

## Tecnologías utilizadas

* React
* Vite
* Bootstrap
* React Bootstrap
* JavaScript (ES6+)
* HTML5
* CSS3
* LocalStorage
* Git y GitHub

---

## Instalación

### Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### Ingresar al proyecto

```bash
cd villarreal_johnny_frontend
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar proyecto

```bash
npm run dev
```

### Generar versión de producción

```bash
npm run build
```

---

## Estructura del proyecto

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── ServiceCard.jsx
│   ├── TestimonialCarousel.jsx
│   ├── ContactForm.jsx
│   ├── FaqSection.jsx
│   ├── NewsSection.jsx
│   ├── AdminPanel.jsx
│   └── Footer.jsx
│
├── pages/
│   └── Home.jsx
│
├── services/
│   └── api.js
│
├── data/
│   └── content.json
│
├── styles/
│   └── main.css
│
├── App.jsx
└── main.jsx
```

---

## Funcionalidades implementadas

### 1. Componente reutilizable de servicios

Se implementó el componente ServiceCard.jsx que permite mostrar:

* Imagen
* Título
* Descripción
* Botón de contacto

El botón completa automáticamente el campo servicio del formulario de contacto.

### 2. Carrusel de testimonios

Se implementó TestimonialCarousel.jsx utilizando React Bootstrap.

Características:

* Responsive
* Navegación manual
* Cambio automático de testimonios

### 3. Sistema de gestión de contenido

Se desarrolló un panel de administración (AdminPanel.jsx) que permite:

* Crear contenido
* Visualizar contenido
* Eliminar contenido

La información se almacena mediante LocalStorage simulando un CMS o BackOffice.

### 4. Navegación interactiva

La landing incluye:

* Navbar responsiva
* Navegación por secciones
* Scroll intuitivo

### 5. Formulario de contacto

Incluye:

* Nombre
* Correo electrónico
* Teléfono
* Servicio seleccionado
* Mensaje

Validaciones:

* Campos obligatorios
* Validación de correo
* Longitud mínima de texto

### 6. Preguntas frecuentes

Implementadas mediante componente dinámico con Bootstrap Accordion.

### 7. Recursos para emprendedores

Se muestran dinámicamente utilizando una capa de servicios (api.js), simulando integración con API/CMS.

---

## Accesibilidad y Usabilidad

Se aplicaron las siguientes medidas:

* Navegación clara y consistente
* Diseño responsive
* Etiquetas descriptivas
* Contraste adecuado
* Formularios accesibles
* Componentes reutilizables

---

## Optimización

Se aplicaron las siguientes estrategias:

* Componentización de la interfaz
* Carga diferida de imágenes (lazy loading)
* Reutilización de componentes
* Organización modular del proyecto
* Compilación optimizada mediante Vite

---

## Seguridad

Se implementaron medidas de validación en el lado cliente:

* Validación de campos obligatorios
* Validación de correo electrónico
* Restricción de longitud mínima
* Prevención de envío de formularios incompletos

Como mejora futura se recomienda incorporar validaciones del lado servidor y mecanismos anti-bots.

---

## Relación con los requerimientos de la evaluación

| Requerimiento           | Implementación             |
| ----------------------- | -------------------------- |
| Tarjeta reutilizable    | ServiceCard                |
| Carrusel                | TestimonialCarousel        |
| CMS                     | AdminPanel                 |
| Buenas prácticas        | BUENAS_PRACTICAS.md        |
| Git y documentación     | README.md                  |
| Navegación y formulario | Navbar + ContactForm       |
| Optimización            | Lazy Loading + Vite        |
| Interactividad          | React + Bootstrap          |
| Datos dinámicos         | content.json + api.js      |
| Seguridad               | Validaciones de formulario |
| Retrospectiva           | RETROSPECTIVA.md           |

---

## Autor

Johnny Villarreal

Evaluación Sumativa Unidad 3 – Desarrollo Frontend

