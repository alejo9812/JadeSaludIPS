import { createReferenceWindow } from "./reference-window.js";

const fichaHotspots = [
  {
    name: "Ana LucÃ­a VÃ©lez",
    age: "28 aÃ±os",
    mode: "Presencial",
    top: "39.0%",
    target: "3_seguimiento",
  },
  {
    name: "Juan Felipe RamÃ­rez",
    age: "32 aÃ±os",
    mode: "Virtual",
    top: "45.8%",
    target: "3_2_seguimiento",
  },
  {
    name: "Laura GÃ³mez",
    age: "25 aÃ±os",
    mode: "Virtual",
    top: "52.6%",
    target: "3_3_seguimiento",
  },
  {
    name: "Camilo Vargas",
    age: "30 aÃ±os",
    mode: "Presencial",
    top: "59.4%",
    target: "3_4_seguimiento",
  },
  {
    name: "SofÃ­a MartÃ­nez",
    age: "27 aÃ±os",
    mode: "Virtual",
    top: "66.1%",
    target: "3_5_seguimiento",
  },
  {
    name: "Valentina Rojas",
    age: "22 aÃ±os",
    mode: "Virtual",
    top: "73.0%",
    target: "3_6_seguimiento",
  },
];

const resultsHotspots = [
  {
    label: "Terapeutas aliados",
    target: "5_resultados",
    left: "65.7%",
    top: "1.0%",
    width: "12.0%",
    height: "6.4%",
  },
  {
    label: "Dra. Carolina Reyes",
    target: "5_resultados",
    left: "84.4%",
    top: "1.0%",
    width: "15.0%",
    height: "6.4%",
  },
  {
    label: "Ps. Natalia Torres",
    target: "5_1_resultados",
    left: "75.7%",
    top: "26.9%",
    width: "23.0%",
    height: "5.3%",
  },
  {
    label: "TS. Paula Mendoza",
    target: "5_5_resultados",
    left: "75.7%",
    top: "32.8%",
    width: "23.0%",
    height: "5.3%",
  },
  {
    label: "Lic. Mariana Rios",
    target: "5_4_resultados",
    left: "75.7%",
    top: "38.7%",
    width: "23.0%",
    height: "5.3%",
  },
];

const renderFichaHotspots = () =>
  fichaHotspots
    .map(
      (item) => `
        <button
          class="fullscreen-hero__hotspot fullscreen-hero__hotspot--ficha"
          type="button"
          ${item.target ? `data-cmr-target="${item.target}"` : ""}
          data-cmr-ficha-open
          data-consultant-name="${item.name}"
          data-consultant-age="${item.age}"
          data-consultant-mode="${item.mode}"
          aria-label="Ver ficha de ${item.name}"
          title="Ver ficha de ${item.name}"
          style="
            --hotspot-left: 69.3%;
            --hotspot-top: ${item.top};
            --hotspot-width: 4.55%;
            --hotspot-height: 3.95%;
          "
        ></button>
      `,
    )
    .join("");

const renderResultsHotspots = () =>
  resultsHotspots
    .map(
      (item) => `
        <button
          class="fullscreen-hero__hotspot fullscreen-hero__hotspot--ficha"
          type="button"
          data-cmr-target="${item.target}"
          aria-label="Abrir resultados de ${item.label}"
          title="Abrir resultados de ${item.label}"
          style="
            --hotspot-left: ${item.left};
            --hotspot-top: ${item.top};
            --hotspot-width: ${item.width};
            --hotspot-height: ${item.height};
          "
        ></button>
      `,
    )
    .join("");

const cmrModalMarkup = `
  <dialog
    class="cmr-modal"
    data-cmr-modal
    aria-labelledby="cmr-modal-title"
    aria-describedby="cmr-modal-description"
  >
    <form class="cmr-modal__panel" method="dialog">
      <button class="cmr-modal__close" type="submit" aria-label="Cerrar ventana">
        Ã—
      </button>

      <p class="cmr-modal__eyebrow">Panel clÃ­nico</p>
      <h2 id="cmr-modal-title" class="cmr-modal__title" data-cmr-modal-title>
        Selecciona una ficha
      </h2>
      <p id="cmr-modal-description" class="cmr-modal__copy" data-cmr-modal-copy>
        Pulsa uno de los botones para abrir la ficha del consultante.
      </p>

      <div class="cmr-modal__meta" data-cmr-modal-meta>
        <div class="cmr-modal__meta-item">
          <span class="cmr-modal__meta-label">Edad</span>
          <strong class="cmr-modal__meta-value">-</strong>
        </div>
        <div class="cmr-modal__meta-item">
          <span class="cmr-modal__meta-label">Modalidad</span>
          <strong class="cmr-modal__meta-value">-</strong>
        </div>
      </div>

      <button class="button button--primary button--wide cmr-modal__action" type="submit">
        Cerrar
      </button>
    </form>
  </dialog>
`;

export const cmrView = createReferenceWindow({
  slug: "2_cmr",
  title: "2 CMR",
  ariaLabel: "Panel clÃ­nico de Jadesalud IPS",
  imagePath: "./assets/referencias/2.png",
  imageAlt: "Panel clÃ­nico de Jadesalud IPS",
  imageFit: "contain",
  actionMarkup: `
    ${renderResultsHotspots()}
    ${renderFichaHotspots()}
    ${cmrModalMarkup}
  `,
});
