import { createReferenceWindow } from "./reference-window.js";

const professionalHotspots = [
  {
    name: "Ps. Natalia Torres",
    role: "Psicologa clinica",
    target: "5_1_seguimiento",
    top: "39.8%",
  },
  {
    name: "Ps. Elena Jaramillo",
    role: "Psicologa clinica",
    target: "5_2_seguimiento",
    top: "47.5%",
  },
  {
    name: "Dr. Andres Pineda",
    role: "Psiquiatra",
    target: "5_3_seguimiento",
    top: "55.2%",
  },
  {
    name: "Lic. Mariana Rios",
    role: "Terapeuta ocupacional",
    target: "5_4_seguimiento",
    top: "62.9%",
  },
  {
    name: "TS. Paula Mendoza",
    role: "Trabajadora social",
    target: "5_5_seguimiento",
    top: "70.6%",
  },
  {
    name: "Lic. Valeria Ruiz",
    role: "Terapeuta artistica",
    target: "5_6_seguimiento",
    top: "78.3%",
  },
];

const renderProfessionalHotspots = () =>
  professionalHotspots
    .map(
      (item) => `
        <button
          class="fullscreen-hero__hotspot fullscreen-hero__hotspot--ficha"
          type="button"
          data-cmr-target="${item.target}"
          aria-label="Abrir agenda de ${item.name}"
          title="Abrir agenda de ${item.name}"
          style="
            --hotspot-left: 14.9%;
            --hotspot-top: ${item.top};
            --hotspot-width: 11.2%;
            --hotspot-height: 6.4%;
          "
        ></button>
      `,
    )
    .join("");

export const citasView = createReferenceWindow({
  slug: "4_citas",
  title: "4 Citas",
  ariaLabel: "Agenda clinica de Jadesalud IPS",
  imagePath: "./assets/referencias/4.png",
  imageAlt: "Agenda clinica de Jadesalud IPS",
  imageFit: "contain",
  imageWidth: 1907,
  imageHeight: 825,
  actionMarkup: `
    ${renderProfessionalHotspots()}
  `,
});
