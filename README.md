# 🔍 Search Algorithms

Un sitio web educativo interactivo sobre algoritmos de búsqueda, construido con Astro. Explora desde los fundamentos hasta técnicas avanzadas de búsqueda en ciencias de la computación e inteligencia artificial con visualizaciones dinámicas.

## 🌟 Características

- **🎬 Visualizaciones interactivas**: Animaciones paso a paso de BFS, DFS y UCS
- **⚙️ Configuración dinámica**: Genera árboles personalizables con diferentes niveles y ramificación
- **📊 Métricas en tiempo real**: Seguimiento de tiempo, memoria y eficiencia de algoritmos
- **🎯 Feedback inmediato**: Alertas de éxito cuando se encuentra el nodo objetivo
- **🎨 Tema dinámico**: Modo oscuro/claro con detección de preferencias del sistema
- **📱 Super responsive**: Optimizado para desktop, tablet y móvil con controles táctiles
- **⚡ Rendimiento**: Generación estática con Astro para carga ultra-rápida
- **🧭 Navegación activa**: Resaltado inteligente de la sección actual

## 📚 Contenido

### Secciones Principales

1. **Introducción a los Problemas de Búsqueda**
   - Definiciones formales
   - Componentes de un problema
   - Criterios de evaluación

2. **Búsqueda No Informada (Ciega)**
   - Breadth-First Search (BFS)
   - Depth-First Search (DFS)
   - Uniform Cost Search (UCS)

3. **Búsqueda Informada (Heurística)**
   - A* (A Estrella)
   - Greedy Best-First Search
   - Heurísticas admisibles y consistentes

4. **Búsqueda Local**
   - Hill Climbing
   - Simulated Annealing
   - Algoritmos genéticos

5. **Búsqueda Adversaria**
   - Minimax
   - Poda Alfa-Beta
   - Teoría de juegos

### Para cada algoritmo se incluye:

- ✅ Explicación teórica detallada
- 💻 Pseudocódigo paso a paso
- 🎬 **Visualización interactiva en tiempo real** (BFS, DFS, UCS)
- 📊 Análisis de complejidad (tiempo y espacio)
- 🎯 Criterios de optimalidad y completitud
- 🏗️ Estructuras de datos utilizadas
- 🔗 Algoritmos relacionados
- ⚡ Métricas de rendimiento en vivo

## 🎮 Funcionalidades Interactivas

### Visualizador de Algoritmos
- **Controles de reproducción**: Play, Pause, Reset con velocidad ajustable
- **Generación dinámica**: Crea árboles con 2-5 niveles y factor de ramificación 2-4
- **Selección de objetivo**: Elige cualquier nodo como meta o usa detección automática
- **Animaciones fluidas**: Transiciones suaves que muestran el proceso paso a paso

### Métricas en Tiempo Real
- 🕐 **Tiempo de ejecución**: Medición precisa en milisegundos
- 🧠 **Uso de memoria**: Seguimiento del tamaño máximo de frontera
- 📈 **Nodos visitados**: Contador en tiempo real
- 🎯 **Longitud del camino**: Distancia al objetivo encontrado

### Sistema de Alertas
- Modal animado al encontrar el objetivo
- Estadísticas del algoritmo ejecutado
- Auto-cierre o cierre manual
- Diseño responsive y accesible

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Comandos disponibles

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview
```

### Estructura del proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── AlgorithmCard.astro         # Tarjetas de algoritmos
│   ├── AlgorithmVisualization.astro # Sistema de visualización interactiva
│   ├── Navigation.astro            # Navegación con estado activo
│   ├── ThemeToggle.astro          # Selector de tema dinámico
│   └── SectionHero.astro
├── data/               # Datos de algoritmos
│   └── algorithms.ts   # Definiciones completas de algoritmos
├── layouts/            # Layouts base
│   └── Layout.astro    # Layout principal con tema y navegación
├── pages/              # Páginas del sitio
│   ├── algoritmos/     # Páginas individuales de algoritmos
│   ├── secciones/      # Páginas de secciones
│   └── index.astro     # Página principal
└── public/             # Recursos estáticos
    └── favicon.svg     # Favicon personalizado (lupa)
```

## 🎨 Diseño y Estilo

- **🌓 Tema dinámico**: Sistema automático de modo oscuro/claro con detección de preferencias
- **🎨 Paleta moderna**: Tonos sobrios con acentos en azul, optimizada para ambos temas
- **✍️ Tipografía premium**: JetBrains Mono para código + Inter para textos
- **📐 Espaciado**: Generoso uso de espacios en blanco con proporciones áureas
- **✨ Animaciones**: Transiciones fluidas, hover states y micro-interacciones
- **📱 Mobile-first**: Diseño responsive con controles táctiles optimizados
- **🎯 Favicon personalizado**: Lupa SVG que representa algoritmos de búsqueda

## 🔧 Tecnologías

- **Framework**: [Astro](https://astro.build/) - Generador de sitios estáticos moderno
- **Lenguajes**: TypeScript, HTML, CSS con variables CSS nativas
- **Visualizaciones**: SVG dinámico con JavaScript vanilla para máximo rendimiento
- **Animaciones**: CSS3 + RequestAnimationFrame para 60fps
- **Arquitectura**: Componentes modulares y reutilizables con Islands Architecture
- **Optimización**: Generación estática + Tree-shaking automático
- **Accesibilidad**: Soporte completo para lectores de pantalla y navegación por teclado

## 📱 Responsive Design

El sitio ofrece una experiencia optimizada en todos los dispositivos:

- **Desktop (1200px+)**: Experiencia completa con visualizaciones de 800px y controles expandidos
- **Tablet (768px-1199px)**: Layout adaptado con visualizaciones de 500px y navegación reorganizada
- **Mobile (≤767px)**: Interfaz táctil con nodos más pequeños, controles compactos y scroll horizontal
- **Mobile pequeño (≤480px)**: Controles ultra-compactos con inputs en columna para máxima usabilidad

### Optimizaciones móviles específicas:
- 🎯 Nodos y textos escalados para pantallas pequeñas
- ⚡ ViewBox dinámico que se adapta al ancho disponible
- 👆 Controles táctiles con área mínima de 44px
- 📐 Layout vertical automático en pantallas estrechas

## 🚀 Despliegue

El sitio está configurado para despliegue automático en:

- **Vercel**: Integración directa con Astro y despliegue continuo
- **Netlify**: Compatible con generación estática
- **GitHub Pages**: Build automático con GitHub Actions

## 🎓 Para Educadores

Este proyecto es ideal para:
- 📚 **Clases de Algoritmos**: Visualizaciones en vivo durante las lecciones
- 🏠 **Tareas interactivas**: Los estudiantes pueden experimentar con diferentes configuraciones
- 📊 **Análisis de rendimiento**: Comparación visual entre algoritmos
- 🎮 **Aprendizaje gamificado**: Interfaz atractiva que mantiene el engagement

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Especialmente:
- 🎬 Nuevas visualizaciones para algoritmos adicionales
- 🌍 Traducciones a otros idiomas
- 📱 Mejoras en accesibilidad
- 🎨 Nuevos temas y personalizaciones

---

<div align="center">

**🔍 Search Algorithms** - Educación interactiva sobre algoritmos de búsqueda

*Desarrollado con ❤️ por [Agustín Marquardt](https://github.com/marcui13)*

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=flat&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Responsive](https://img.shields.io/badge/Responsive-✅-green)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks)

</div>
