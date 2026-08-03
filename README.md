# Jadesalud IPS Front

Base modular de front preparada para 5 ventanas navegables.

## Ventanas incluidas

1. `1_inicio`
2. `2_cmr`
3. `3_seguimiento`
4. `4_citas`
5. `5_resultados`

Las ventanas de referencia usan una base de `2560 x 1107 px` para que el front
se vea nítido en pantallas retina.

Convencion de imagenes:

- `assets/referencias/1.png`
- `assets/referencias/2.png`
- futuras referencias: `3.png`, `4.png`, `5.png`

La estructura de referencia se monta desde `src/views/reference-window.js`, para que
las proximas pantallas puedan reutilizar la misma configuracion sin rehacer el layout.

## Estructura

- `index.html`: shell principal
- `app.js`: bootstrap, router y eventos
- `styles.css`: estilos globales
- `src/config.js`: navegacion y datos base
- `src/views/reference-window.js`: helper para ventanas de referencia a pantalla completa
- `src/views/*.js`: contenido de cada ventana
- `server.js`: servidor local sin dependencias

## Ejecutar

```bash
npm run dev
```

Luego abre `http://localhost:3000`.

## Para agregar otra ventana

1. Crea un archivo nuevo en `src/views/`.
2. Exporta un objeto con `slug`, `title` y `content`.
3. Agregalo en `app.js` y en `src/config.js`.

Si la nueva ventana es una referencia de imagen, reutiliza
`createReferenceWindow()` y exporta la captura en `2560 x 1107 px`.

## Generar referencias

Cuando tengas nuevas capturas como `3.png`, `4.png` o `5.png`, puedes generar sus
versiones base y `@2x` con:

```bash
python scripts/generate_reference_assets.py 3.png 4.png 5.png
```

El script toma los archivos desde `assets/referencias/` por defecto, crea la version
normal en `2560 x 1107 px` y la version `@2x` en `5120 x 2214 px`, aplicando un
enfoque suave para ayudar con la nitidez del texto.
