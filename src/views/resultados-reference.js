import { createReferenceWindow } from "./reference-window.js";

export function createResultadosReferenceView({ slug, title, imageFile }) {
  return createReferenceWindow({
    slug,
    title,
    ariaLabel: "Indicadores y resultados de Jadesalud IPS",
    imagePath: `./assets/referencias/${imageFile}`,
    imageAlt: "Indicadores y resultados de Jadesalud IPS",
    imageFit: "contain",
    imageWidth: 5120,
    imageHeight: 2214,
  });
}
