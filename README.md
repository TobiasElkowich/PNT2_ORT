# Tetris Simple

Una implementación básica del clásico juego Tetris, construido completamente con HTML, CSS y JavaScript en un solo archivo `index.html`. Este proyecto es una forma divertida de demostrar conceptos fundamentales de desarrollo web y lógica de juego del lado del cliente.

## Características

*   **Jugabilidad Clásica:** Mueve, rota y deja caer los tetrominós para despejar líneas.
*   **Sistema de Puntuación:** Gana puntos por despejar líneas, con bonificaciones por despejar múltiples líneas a la vez.
*   **Progresión de Nivel:** El juego se acelera a medida que despejas más líneas.
*   **Visualización de Siguiente Pieza:** Ve qué tetrominó viene a continuación para planificar tus movimientos.
*   **Condición de Fin de Juego:** El juego termina cuando las piezas se apilan hasta la parte superior.
*   **Funcionalidad de Reinicio:** Reinicia fácilmente una nueva partida después de un "Game Over".
*   **Puro Lado del Cliente:** Sin backend ni dependencias complejas, se ejecuta directamente en tu navegador.

## Cómo Jugar

1.  **Clonar el Repositorio:**
    ```bash
    git clone https://github.com/TU_NOMBRE_DE_USUARIO/simple-tetris.git
    cd simple-tetris
    ```
2.  **Abrir en el Navegador:**
    Simplemente abre el archivo `index.html` en tu navegador web preferido. Puedes hacerlo haciendo doble clic en el archivo o arrastrándolo a una ventana del navegador.

## Controles

*   **Flecha Izquierda (`←`):** Mueve la pieza actual hacia la izquierda.
*   **Flecha Derecha (`→`):** Mueve la pieza actual hacia la derecha.
*   **Flecha Abajo (`↓`):** Caída suave (mueve la pieza actual hacia abajo más rápido).
*   **Flecha Arriba (`↑`):** Rota la pieza actual en sentido horario.
*   **`Z` (o `z`):** Rota la pieza actual en sentido antihorario.
*   **`R` (o `r`):** Reinicia el juego (disponible después de "Game Over").

## Tecnologías Utilizadas

*   **HTML5:** Para la estructura del juego y los elementos de lienzo (canvas).
*   **CSS3:** Para el estilo y el diseño básicos.
*   **JavaScript (ES6+):** Para toda la lógica del juego, el renderizado y la interacción.

## Mejoras Futuras (Ideas)

*   Funcionalidad de "hard drop" (caída instantánea).
*   Funcionalidad para mantener una pieza (hold).
*   Efectos de sonido y música de fondo.
*   Pantalla de fin de juego mejorada.
*   Funcionalidad de pausa.
*   Historial de puntuaciones/tabla de clasificación (usando almacenamiento local).
*   Diferentes niveles de dificultad.

## Contribuciones

No dudes en hacer un "fork" de este repositorio, realizar mejoras y enviar "pull requests". ¡Todas las contribuciones son bienvenidas!

## Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).
```
