import { createReferenceWindow } from "./reference-window.js";

export const inicioView = createReferenceWindow({
  slug: "1_inicio",
  title: "1 Inicio",
  ariaLabel: "Pantalla inicial de Jadesalud IPS",
  imagePath: "./assets/referencias/1.png",
  imageAlt: "Pantalla inicial de Jadesalud IPS",
  actionMarkup: `
      <button
        class="fullscreen-hero__button"
        type="button"
        data-login-open
        aria-haspopup="dialog"
        aria-controls="login-modal"
        aria-expanded="false"
        aria-label="Iniciar sesion"
      >
        Iniciar sesion
      </button>
  `,
});
