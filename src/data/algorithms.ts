export interface Algorithm {
  id: string;
  title: string;
  description: string;
  category: 'no-informadas' | 'informadas' | 'local' | 'adversaria';
  complexity: {
    time: string;
    space: string;
  };
  optimal: boolean;
  complete: boolean;
  content: {
    explanation: string;
    pseudocode: string;
    analysis: {
      optimality: string;
      completeness: string;
      timeComplexity: string;
      spaceComplexity: string;
      dataStructures: string[];
    };
  };
}

export const algorithms: Algorithm[] = [
  // Búsqueda No Informada
  {
    id: 'bfs',
    title: 'Búsqueda en Anchura (BFS)',
    description: 'Explora el espacio de búsqueda nivel por nivel, garantizando encontrar la solución óptima en términos de número de pasos.',
    category: 'no-informadas',
    complexity: {
      time: 'O(b^d)',
      space: 'O(b^d)'
    },
    optimal: true,
    complete: true,
    content: {
      explanation: `
        La Búsqueda en Anchura (Breadth-First Search, BFS) es un algoritmo de búsqueda que explora el espacio de estados nivel por nivel. Comienza desde el nodo raíz y explora todos los nodos vecinos antes de pasar al siguiente nivel de profundidad.

        **Características principales:**
        - Utiliza una cola (FIFO) para mantener los nodos por explorar
        - Garantiza encontrar la solución con menor número de pasos
        - Es completo si el factor de ramificación es finito
        - Puede requerir mucha memoria para problemas con factor de ramificación alto

        **Cuándo usarlo:**
        - Cuando necesitas la solución óptima en términos de número de pasos
        - Cuando la profundidad de la solución es relativamente pequeña
        - Cuando tienes suficiente memoria disponible
      `,
      pseudocode: `
function BFS(problema):
    nodo ← crear_nodo(problema.estado_inicial)

    si problema.es_objetivo(nodo.estado):
        return nodo

    frontera ← cola_vacia()
    frontera.insertar(nodo)
    explorados ← conjunto_vacio()

    mientras frontera no esté vacía:
        nodo ← frontera.quitar()
        explorados.agregar(nodo.estado)

        para cada accion en problema.acciones(nodo.estado):
            hijo ← nodo_hijo(problema, nodo, accion)

            si hijo.estado no está en explorados y no está en frontera:
                si problema.es_objetivo(hijo.estado):
                    return hijo
                frontera.insertar(hijo)

    return fallo
      `,
      analysis: {
        optimality: 'Óptimo si el costo de cada paso es uniforme',
        completeness: 'Completo si el factor de ramificación b es finito',
        timeComplexity: 'O(b^d) donde b es el factor de ramificación y d la profundidad de la solución',
        spaceComplexity: 'O(b^d) para almacenar todos los nodos en la frontera',
        dataStructures: ['Cola (Queue)', 'Conjunto para estados explorados']
      }
    }
  },
  {
    id: 'dfs',
    title: 'Búsqueda en Profundidad (DFS)',
    description: 'Explora tan profundo como sea posible antes de retroceder, útil cuando el espacio de memoria es limitado.',
    category: 'no-informadas',
    complexity: {
      time: 'O(b^m)',
      space: 'O(bm)'
    },
    optimal: false,
    complete: false,
    content: {
      explanation: `
        La Búsqueda en Profundidad (Depth-First Search, DFS) es un algoritmo que explora tan profundo como sea posible a lo largo de cada rama antes de retroceder.

        **Características principales:**
        - Utiliza una pila (LIFO) o recursión
        - Requiere menos memoria que BFS
        - No garantiza encontrar la solución óptima
        - Puede perderse en ramas infinitas

        **Cuándo usarlo:**
        - Cuando la memoria es limitada
        - Cuando todas las soluciones están a gran profundidad
        - Para exploración exhaustiva del espacio de estados
      `,
      pseudocode: `
function DFS(problema):
    nodo ← crear_nodo(problema.estado_inicial)

    si problema.es_objetivo(nodo.estado):
        return nodo

    frontera ← pila_vacia()
    frontera.insertar(nodo)
    explorados ← conjunto_vacio()

    mientras frontera no esté vacía:
        nodo ← frontera.quitar()

        si nodo.estado no está en explorados:
            explorados.agregar(nodo.estado)

            si problema.es_objetivo(nodo.estado):
                return nodo

            para cada accion en problema.acciones(nodo.estado):
                hijo ← nodo_hijo(problema, nodo, accion)
                frontera.insertar(hijo)

    return fallo
      `,
      analysis: {
        optimality: 'No óptimo - puede encontrar soluciones subóptimas',
        completeness: 'No completo en espacios infinitos',
        timeComplexity: 'O(b^m) donde m es la profundidad máxima del espacio',
        spaceComplexity: 'O(bm) solo necesita almacenar el camino actual',
        dataStructures: ['Pila (Stack)', 'Conjunto para estados explorados']
      }
    }
  },
  {
    id: 'ucs',
    title: 'Búsqueda de Costo Uniforme (UCS)',
    description: 'Expande siempre el nodo con menor costo acumulado, garantizando la solución óptima.',
    category: 'no-informadas',
    complexity: {
      time: 'O(b^(C*/ε))',
      space: 'O(b^(C*/ε))'
    },
    optimal: true,
    complete: true,
    content: {
      explanation: `
        La Búsqueda de Costo Uniforme (Uniform Cost Search, UCS) expande siempre el nodo con el menor costo de camino acumulado desde el estado inicial.

        **Características principales:**
        - Utiliza una cola de prioridad ordenada por costo
        - Garantiza encontrar la solución con menor costo
        - Generalización de BFS para costos no uniformes
        - Equivalente al algoritmo de Dijkstra

        **Cuándo usarlo:**
        - Cuando los costos de las acciones no son uniformes
        - Cuando necesitas la solución de menor costo
        - En problemas donde el costo importa más que el número de pasos
      `,
      pseudocode: `
function UCS(problema):
    nodo ← crear_nodo(problema.estado_inicial)
    frontera ← cola_prioridad_vacia()
    frontera.insertar(nodo, nodo.costo_camino)
    explorados ← conjunto_vacio()

    mientras frontera no esté vacía:
        nodo ← frontera.quitar_minimo()

        si problema.es_objetivo(nodo.estado):
            return nodo

        explorados.agregar(nodo.estado)

        para cada accion en problema.acciones(nodo.estado):
            hijo ← nodo_hijo(problema, nodo, accion)

            si hijo.estado no está en explorados y no está en frontera:
                frontera.insertar(hijo, hijo.costo_camino)
            sino si hijo.estado está en frontera con mayor costo:
                reemplazar nodo en frontera con hijo

    return fallo
      `,
      analysis: {
        optimality: 'Óptimo si los costos de paso son ≥ ε > 0',
        completeness: 'Completo si los costos de paso son ≥ ε > 0',
        timeComplexity: 'O(b^(C*/ε)) donde C* es el costo de la solución óptima',
        spaceComplexity: 'O(b^(C*/ε)) para almacenar todos los nodos',
        dataStructures: ['Cola de prioridad', 'Conjunto para estados explorados']
      }
    }
  },

  // Búsqueda Informada
  {
    id: 'a-star',
    title: 'A* (A Estrella)',
    description: 'Combina el costo real con una heurística admisible para encontrar la solución óptima de manera eficiente.',
    category: 'informadas',
    complexity: {
      time: 'O(b^d)',
      space: 'O(b^d)'
    },
    optimal: true,
    complete: true,
    content: {
      explanation: `
        A* es el algoritmo de búsqueda heurística más conocido y utilizado. Combina las ventajas de UCS y Greedy Best-First Search utilizando la función de evaluación f(n) = g(n) + h(n).

        **Características principales:**
        - f(n) = g(n) + h(n), donde g(n) es el costo real y h(n) la heurística
        - Garantiza optimalidad si la heurística es admisible
        - Más eficiente que UCS al usar información heurística
        - Ampliamente utilizado en pathfinding y planificación

        **Cuándo usarlo:**
        - Cuando tienes una buena heurística admisible
        - Necesitas la solución óptima
        - Quieres mejor rendimiento que UCS
      `,
      pseudocode: `
function A_ESTRELLA(problema, heuristica):
    nodo ← crear_nodo(problema.estado_inicial)
    frontera ← cola_prioridad_vacia()
    frontera.insertar(nodo, f(nodo))
    explorados ← conjunto_vacio()

    mientras frontera no esté vacía:
        nodo ← frontera.quitar_minimo()

        si problema.es_objetivo(nodo.estado):
            return nodo

        explorados.agregar(nodo.estado)

        para cada accion en problema.acciones(nodo.estado):
            hijo ← nodo_hijo(problema, nodo, accion)

            si hijo.estado no está en explorados:
                f_hijo ← hijo.costo_camino + heuristica(hijo.estado)

                si hijo.estado no está en frontera:
                    frontera.insertar(hijo, f_hijo)
                sino si f_hijo < f(nodo_en_frontera):
                    reemplazar nodo en frontera con hijo

    return fallo

function f(nodo):
    return nodo.costo_camino + heuristica(nodo.estado)
      `,
      analysis: {
        optimality: 'Óptimo si la heurística es admisible (h(n) ≤ h*(n))',
        completeness: 'Completo con heurística admisible',
        timeComplexity: 'O(b^d) en el peor caso, pero típicamente mucho mejor',
        spaceComplexity: 'O(b^d) para almacenar todos los nodos generados',
        dataStructures: ['Cola de prioridad', 'Conjunto para estados explorados', 'Función heurística']
      }
    }
  },
  {
    id: 'greedy',
    title: 'Búsqueda Greedy',
    description: 'Selecciona siempre el nodo que parece más cercano al objetivo según la heurística.',
    category: 'informadas',
    complexity: {
      time: 'O(b^m)',
      space: 'O(b^m)'
    },
    optimal: false,
    complete: false,
    content: {
      explanation: `
        La Búsqueda Greedy (Greedy Best-First Search) siempre expande el nodo que parece estar más cerca del objetivo según la función heurística.

        **Características principales:**
        - Utiliza solo h(n) para evaluar nodos
        - Muy eficiente en memoria y tiempo
        - No garantiza optimalidad
        - Puede quedarse atrapado en mínimos locales

        **Cuándo usarlo:**
        - Cuando necesitas una solución rápida (no necesariamente óptima)
        - Cuando tienes una buena heurística
        - En problemas con recursos limitados
      `,
      pseudocode: `
function GREEDY_BEST_FIRST(problema, heuristica):
    nodo ← crear_nodo(problema.estado_inicial)
    frontera ← cola_prioridad_vacia()
    frontera.insertar(nodo, heuristica(nodo.estado))
    explorados ← conjunto_vacio()

    mientras frontera no esté vacía:
        nodo ← frontera.quitar_minimo()

        si problema.es_objetivo(nodo.estado):
            return nodo

        explorados.agregar(nodo.estado)

        para cada accion en problema.acciones(nodo.estado):
            hijo ← nodo_hijo(problema, nodo, accion)

            si hijo.estado no está en explorados y no está en frontera:
                frontera.insertar(hijo, heuristica(hijo.estado))

    return fallo
      `,
      analysis: {
        optimality: 'No óptimo - puede encontrar soluciones subóptimas',
        completeness: 'No completo - puede perderse en bucles infinitos',
        timeComplexity: 'O(b^m) en el peor caso',
        spaceComplexity: 'O(b^m) para almacenar nodos en frontera',
        dataStructures: ['Cola de prioridad', 'Función heurística']
      }
    }
  },

  // Búsqueda Local
  {
    id: 'hill-climbing',
    title: 'Hill Climbing',
    description: 'Algoritmo de búsqueda local que se mueve hacia estados que mejoran la función objetivo.',
    category: 'local',
    complexity: {
      time: 'O(∞)',
      space: 'O(1)'
    },
    optimal: false,
    complete: false,
    content: {
      explanation: `
        Hill Climbing es un algoritmo de optimización local que mejora iterativamente una solución moviendo hacia estados vecinos que mejoran la función objetivo.

        **Características principales:**
        - Solo mantiene el estado actual (muy eficiente en memoria)
        - Puede quedarse atrapado en máximos locales
        - No garantiza encontrar el óptimo global
        - Muy rápido para problemas bien estructurados

        **Variantes:**
        - Simple Hill Climbing
        - Steepest-Ascent Hill Climbing
        - Stochastic Hill Climbing
        - Random-Restart Hill Climbing

        **Cuándo usarlo:**
        - Optimización de problemas con espacios de estados grandes
        - Cuando necesitas una solución rápida y no necesariamente óptima
        - Problemas donde los máximos locales son aceptables
      `,
      pseudocode: `
function HILL_CLIMBING(problema):
    actual ← problema.estado_inicial

    mientras verdadero:
        vecino ← mejor_vecino(actual, problema)

        si valor(vecino) ≤ valor(actual):
            return actual

        actual ← vecino

function mejor_vecino(estado, problema):
    mejor ← nulo
    mejor_valor ← -∞

    para cada accion en problema.acciones(estado):
        vecino ← problema.resultado(estado, accion)
        valor_vecino ← problema.valor(vecino)

        si valor_vecino > mejor_valor:
            mejor ← vecino
            mejor_valor ← valor_vecino

    return mejor
      `,
      analysis: {
        optimality: 'No óptimo - se detiene en máximos locales',
        completeness: 'No completo - puede no encontrar solución existente',
        timeComplexity: 'O(∞) puede ejecutarse indefinidamente',
        spaceComplexity: 'O(1) solo almacena el estado actual',
        dataStructures: ['Variable de estado actual', 'Función de evaluación']
      }
    }
  },
  {
    id: 'simulated-annealing',
    title: 'Simulated Annealing',
    description: 'Algoritmo probabilístico que permite movimientos hacia estados peores para escapar de óptimos locales.',
    category: 'local',
    complexity: {
      time: 'O(∞)',
      space: 'O(1)'
    },
    optimal: false,
    complete: false,
    content: {
      explanation: `
        Simulated Annealing es una mejora del Hill Climbing que permite movimientos hacia estados peores con cierta probabilidad, la cual disminuye con el tiempo.

        **Características principales:**
        - Inspirado en el proceso de enfriamiento de metales
        - Permite escapar de óptimos locales
        - La probabilidad de aceptar movimientos malos disminuye con el tiempo
        - Requiere una función de "temperatura"

        **Cuándo usarlo:**
        - Problemas de optimización con muchos óptimos locales
        - Cuando Hill Climbing se queda atrapado
        - Problemas NP-difíciles donde necesitas buenas aproximaciones
      `,
      pseudocode: `
function SIMULATED_ANNEALING(problema, calendario):
    actual ← problema.estado_inicial

    para t ← 1 hasta ∞:
        T ← calendario(t)

        si T = 0:
            return actual

        siguiente ← sucesor_aleatorio(actual)
        ΔE ← valor(siguiente) - valor(actual)

        si ΔE > 0:
            actual ← siguiente
        sino:
            probabilidad ← exp(ΔE / T)
            si aleatorio() < probabilidad:
                actual ← siguiente

    return actual

function calendario(t):
    // Función que decrece la temperatura con el tiempo
    return temperatura_inicial / log(t + 1)
      `,
      analysis: {
        optimality: 'No garantiza óptimo, pero mejor que Hill Climbing',
        completeness: 'Completo si la temperatura decrece suficientemente lento',
        timeComplexity: 'Depende del calendario de temperatura',
        spaceComplexity: 'O(1) solo almacena el estado actual',
        dataStructures: ['Variable de estado actual', 'Función de temperatura', 'Generador de números aleatorios']
      }
    }
  },

  // Búsqueda Adversaria
  {
    id: 'minimax',
    title: 'Minimax',
    description: 'Algoritmo para toma de decisiones en juegos de suma cero con información perfecta.',
    category: 'adversaria',
    complexity: {
      time: 'O(b^m)',
      space: 'O(bm)'
    },
    optimal: true,
    complete: true,
    content: {
      explanation: `
        Minimax es un algoritmo de teoría de juegos usado para encontrar la estrategia óptima en juegos de suma cero con información perfecta.

        **Características principales:**
        - Asume que el oponente juega de manera óptima
        - Maximiza la ganancia del jugador actual
        - Minimiza la ganancia del oponente
        - Explora todo el árbol de juego hasta una profundidad dada

        **Cuándo usarlo:**
        - Juegos de mesa como ajedrez, damas, tic-tac-toe
        - Problemas de toma de decisiones con adversarios
        - Situaciones donde se conocen todas las posibles jugadas
      `,
      pseudocode: `
function MINIMAX(estado, profundidad, jugador_maximizador):
    si profundidad = 0 o es_terminal(estado):
        return evaluar(estado)

    si jugador_maximizador:
        mejor_valor ← -∞
        para cada hijo en generar_hijos(estado):
            valor ← MINIMAX(hijo, profundidad - 1, falso)
            mejor_valor ← max(mejor_valor, valor)
        return mejor_valor
    sino:
        mejor_valor ← +∞
        para cada hijo en generar_hijos(estado):
            valor ← MINIMAX(hijo, profundidad - 1, verdadero)
            mejor_valor ← min(mejor_valor, valor)
        return mejor_valor

function decidir_jugada(estado, profundidad):
    mejor_jugada ← nulo
    mejor_valor ← -∞

    para cada jugada en jugadas_legales(estado):
        nuevo_estado ← aplicar_jugada(estado, jugada)
        valor ← MINIMAX(nuevo_estado, profundidad - 1, falso)

        si valor > mejor_valor:
            mejor_valor ← valor
            mejor_jugada ← jugada

    return mejor_jugada
      `,
      analysis: {
        optimality: 'Óptimo si se explora todo el árbol',
        completeness: 'Completo para árboles finitos',
        timeComplexity: 'O(b^m) donde b es el factor de ramificación y m la profundidad',
        spaceComplexity: 'O(bm) para la pila de recursión',
        dataStructures: ['Árbol de juego', 'Función de evaluación', 'Pila de recursión']
      }
    }
  },
  {
    id: 'alpha-beta',
    title: 'Poda Alfa-Beta',
    description: 'Optimización del algoritmo Minimax que elimina ramas que no pueden influir en la decisión final.',
    category: 'adversaria',
    complexity: {
      time: 'O(b^(m/2))',
      space: 'O(bm)'
    },
    optimal: true,
    complete: true,
    content: {
      explanation: `
        La Poda Alfa-Beta es una optimización del algoritmo Minimax que elimina ramas del árbol de búsqueda que no pueden influir en la decisión final.

        **Características principales:**
        - Mantiene dos valores: alfa (mejor para MAX) y beta (mejor para MIN)
        - Poda ramas cuando alfa ≥ beta
        - Produce el mismo resultado que Minimax pero más eficientemente
        - La eficiencia depende del orden de exploración de nodos

        **Cuándo usarlo:**
        - Cuando Minimax es demasiado lento
        - En juegos con factores de ramificación altos
        - Cuando puedes ordenar los movimientos por calidad
      `,
      pseudocode: `
function ALPHA_BETA(estado, profundidad, alfa, beta, jugador_maximizador):
    si profundidad = 0 o es_terminal(estado):
        return evaluar(estado)

    si jugador_maximizador:
        mejor_valor ← -∞
        para cada hijo en generar_hijos(estado):
            valor ← ALPHA_BETA(hijo, profundidad - 1, alfa, beta, falso)
            mejor_valor ← max(mejor_valor, valor)
            alfa ← max(alfa, mejor_valor)

            si beta ≤ alfa:
                break  // Poda beta

        return mejor_valor
    sino:
        mejor_valor ← +∞
        para cada hijo en generar_hijos(estado):
            valor ← ALPHA_BETA(hijo, profundidad - 1, alfa, beta, verdadero)
            mejor_valor ← min(mejor_valor, valor)
            beta ← min(beta, mejor_valor)

            si beta ≤ alfa:
                break  // Poda alfa

        return mejor_valor

function decidir_jugada_con_poda(estado, profundidad):
    mejor_jugada ← nulo
    alfa ← -∞
    beta ← +∞

    para cada jugada en jugadas_legales(estado):
        nuevo_estado ← aplicar_jugada(estado, jugada)
        valor ← ALPHA_BETA(nuevo_estado, profundidad - 1, alfa, beta, falso)

        si valor > alfa:
            alfa ← valor
            mejor_jugada ← jugada

    return mejor_jugada
      `,
      analysis: {
        optimality: 'Óptimo - mismo resultado que Minimax',
        completeness: 'Completo para árboles finitos',
        timeComplexity: 'O(b^(m/2)) en el mejor caso con ordenamiento perfecto',
        spaceComplexity: 'O(bm) para la pila de recursión',
        dataStructures: ['Árbol de juego', 'Variables alfa y beta', 'Función de evaluación']
      }
    }
  }
];

export const categories = {
  'introduccion': {
    title: 'Introducción a los Problemas de Búsqueda',
    subtitle: 'Fundamentos y Conceptos Básicos',
    description: 'Comprende los elementos fundamentales de los problemas de búsqueda: estados, acciones, objetivos y criterios de evaluación.'
  },
  'no-informadas': {
    title: 'Estrategias de Búsqueda No Informadas',
    subtitle: 'Algoritmos Ciegos',
    description: 'Algoritmos que no utilizan información adicional sobre el problema más allá de su definición formal.'
  },
  'informadas': {
    title: 'Estrategias de Búsqueda Informadas',
    subtitle: 'Algoritmos Heurísticos',
    description: 'Algoritmos que utilizan heurísticas para guiar la búsqueda hacia soluciones más prometedoras.'
  },
  'local': {
    title: 'Búsqueda Local',
    subtitle: 'Algoritmos de Optimización',
    description: 'Técnicas que operan sobre una solución única, mejorándola iterativamente mediante movimientos locales.'
  },
  'adversaria': {
    title: 'Búsqueda Adversaria',
    subtitle: 'Teoría de Juegos',
    description: 'Algoritmos para toma de decisiones en entornos competitivos donde hay oponentes inteligentes.'
  }
};

export function getAlgorithmsByCategory(category: string): Algorithm[] {
  return algorithms.filter(algo => algo.category === category);
}

export function getAlgorithmById(id: string): Algorithm | undefined {
  return algorithms.find(algo => algo.id === id);
}