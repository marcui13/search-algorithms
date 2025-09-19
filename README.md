# Search Algorithms

Un sitio web educativo sobre algoritmos de búsqueda, construido con Astro. Explora desde los fundamentos hasta técnicas avanzadas de búsqueda en ciencias de la computación e inteligencia artificial.

## 🌟 Características

- **Diseño minimalista y moderno**: Interfaz limpia con excelente legibilidad
- **Contenido estructurado**: Organizado en secciones temáticas progresivas
- **Responsive**: Optimizado para desktop, tablet y móvil
- **Rendimiento**: Generación estática con Astro para carga ultra-rápida
- **Navegación intuitiva**: Fácil exploración entre algoritmos y conceptos

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
- 📊 Análisis de complejidad (tiempo y espacio)
- 🎯 Criterios de optimalidad y completitud
- 🏗️ Estructuras de datos utilizadas
- 🔗 Algoritmos relacionados

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
│   ├── AlgorithmCard.astro
│   └── SectionHero.astro
├── data/               # Datos de algoritmos
│   └── algorithms.ts
├── layouts/            # Layouts base
│   └── Layout.astro
├── pages/              # Páginas del sitio
│   ├── algoritmos/     # Páginas individuales de algoritmos
│   ├── secciones/      # Páginas de secciones
│   └── index.astro     # Página principal
└── styles/             # Estilos globales
```

## 🎨 Diseño y Estilo

- **Paleta de colores**: Tonos sobrios con acentos en azul
- **Tipografía**: System fonts para máxima legibilidad
- **Espaciado**: Generoso uso de espacios en blanco
- **Interactividad**: Transiciones suaves y estados hover
- **Responsive**: Mobile-first design

## 🔧 Tecnologías

- **Framework**: [Astro](https://astro.build/) - Generador de sitios estáticos
- **Lenguajes**: TypeScript, HTML, CSS
- **Arquitectura**: Componentes modulares y reutilizables
- **Optimización**: Generación estática para máximo rendimiento

## 📱 Responsive Design

El sitio está optimizado para múltiples dispositivos:

- **Desktop**: Experiencia completa con navegación lateral
- **Tablet**: Layout adaptado con navegación colapsable
- **Mobile**: Interfaz tactil optimizada con menú hamburguesa

## 🚀 Despliegue

El sitio está configurado para despliegue en:

- **Netlify**: Despliegue automático desde Git
- **Vercel**: Integración directa con Astro
- **GitHub Pages**: Compilación y despliegue con Actions
- **Cualquier CDN**: Archivos estáticos optimizados

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📞 Contacto

Para preguntas, sugerencias o reportar problemas, puedes:

- Abrir un issue en GitHub
- Contactar al equipo de desarrollo

---

**Search Algorithms** - Educación accesible sobre algoritmos de búsqueda 🔍
