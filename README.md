# Informe Detallado del Diseño Web

## 1. Descripción General
Este proyecto es un **portafolio personal** desarrollado con tecnologías modernas de desarrollo web, cuyo objetivo es mostrar la información del autor, sus habilidades, proyectos y un medio de contacto. El diseño está enfocado en la **usabilidad**, **responsividad** y **experiencia del usuario**.

---

## 2. Justificación de las Tecnologías Utilizadas

- **HTML5**: Se usa como base para la estructura del contenido.
- **CSS3 / TailwindCSS**: Para la personalización de estilos y diseño responsivo de manera rápida y eficiente.
- **Bootstrap Icons**: Iconos ligeros para enriquecer la interfaz.
- **JavaScript (ES6+)**: Lógica y dinamismo en el frontend.
- **React.js**: Librería para crear interfaces de usuario con componentes reutilizables y arquitectura modular.
- **React Router DOM**: Gestión de rutas para navegación interna sin recargar la página.
- **Vite**: Herramienta para empaquetar y optimizar el proyecto con recarga rápida.
- **Node.js y npm**: Gestión de dependencias y entorno de ejecución para desarrollo.

Cada tecnología fue elegida para lograr un **desarrollo ágil**, un **diseño moderno** y un sitio con **buen rendimiento**.

---

## 3. Estructura del Proyecto

```plaintext
project_pa1_g6/
│── public/                # Archivos estáticos
│   ├── avatar.jpg
│   └── react.svg
│
│── src/
│   ├── assets/            # Recursos como imágenes y estilos
│   ├── components/        # Componentes reutilizables
│   │   ├── contact/Info.jsx
│   │   ├── home/Hero.jsx
│   │   ├── home/Skills.jsx
│   │   ├── projects/Project.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   └── Navbar.jsx
│   ├── pages/             # Páginas principales
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
│
│── index.html             # Plantilla principal
│── package.json           # Dependencias del proyecto
│── vite.config.js         # Configuración de Vite
│── eslint.config.js       # Configuración de ESLint
```

---

## 4. Diseño y Funcionalidades

- **Navbar**: Barra de navegación fija con enlaces dinámicos y menú responsive.
- **Home**: Presentación principal con sección "Hero" y habilidades.
- **About**: Información personal, experiencia y trayectoria.
- **Projects**: Listado de proyectos con categorías y tarjetas visuales.
- **Contact**: Información de contacto y formulario para mensajes.
- **Footer**: Pie de página con redes sociales y derechos reservados.

Todo está diseñado con **responsividad total** y **animaciones ligeras** para mejorar la interacción.

---

## 5. Desafíos Enfrentados Durante el Desarrollo

Uno de los principales desafíos fue **la organización de los componentes y la gestión de rutas en React**. Al inicio, todo el contenido estaba en un solo archivo, lo que dificultaba la legibilidad y el mantenimiento del código.

Para resolverlo:
- Se optó por **React Router DOM** para manejar las diferentes páginas (Home, About, Contact, Projects) sin recargar la aplicación.
- Se reorganizó el proyecto creando carpetas separadas para *components* y *pages*, lo que permitió un código más **modular y reutilizable**.
- Se utilizó **Vite** para optimizar la recarga en tiempo real y acelerar el desarrollo.

Otro desafío fue la **responsividad del diseño**. Se probó en distintos dispositivos y se ajustaron estilos con **CSS y Tailwind** para asegurar que todo se viera bien tanto en PC como en móviles.

Finalmente, se enfrentaron algunos problemas con dependencias en npm, que se solucionaron reinstalando paquetes y verificando versiones en el archivo *package.json*.

---

## 7. Conclusiones
Este proyecto evidencia la correcta aplicación de un ecosistema de tecnologías modernas orientadas al desarrollo web. La implementación con React, Vite y Tailwind permitió crear una arquitectura modular, optimizada y adaptable a distintos entornos, garantizando un producto escalable, mantenible y con un alto estándar de rendimiento y usabilidad.