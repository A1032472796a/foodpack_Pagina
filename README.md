# FoodPack J.L. — Landing Page

Rediseño del home de [foodpackjl.com](https://foodpackjl.com/) con estilo *liquid-glass* oscuro (mismo lenguaje visual usado en el proyecto VEX), conservando el copy y la paleta de color de la marca original.

## Estructura

```
foodpack-site/
├── index.html          # Marcado principal
├── css/
│   └── style.css        # Estilos (paleta, liquid-glass, animaciones)
├── js/
│   └── main.js           # Heading animado, fade-ins, scroll reveals
├── images/
│   └── hero-bg.webp      # Fondo del hero (patrón original, optimizado a WebP ~107KB)
└── README.md
```

## Uso

Abre `index.html` directamente en el navegador, o sirve la carpeta con cualquier servidor estático:

```bash
npx serve .
```

## Publicar en GitHub Pages

1. Sube esta carpeta a un repo de GitHub.
2. Settings → Pages → Deploy from branch → `main` / `root`.
3. Listo, queda publicado en `https://<usuario>.github.io/<repo>/`.

## Pendiente

- El link **Blog** del nav todavía no tiene destino (línea marcada con `title="Pendiente..."` en `index.html`). Apúntalo a tu blog real de WordPress o pídeme que arme una sección/página para eso.
- Depende de Tailwind vía CDN (`cdn.tailwindcss.com`) y Google Fonts (`Inter`) — ambos requieren conexión a internet. Si necesitas que funcione 100% offline, se puede compilar Tailwind localmente.

## Paleta

| Token | Hex | Uso original |
|---|---|---|
| `--navy` | `#0D2952` | h2 / aside |
| `--teal` | `#1A4D5C` | gradiente del hero |
| `--olive` | `#3B6D11` | borde c3 / kicker compromiso |
| `--green-dark` | `#173404` | footer / texto sobre botones |
| `--green-mid` | `#639922` | kickers / stats |
| `--green` | `#97C459` | acento principal |
| `--green-pale` | `#C0DD97` | resaltados |
