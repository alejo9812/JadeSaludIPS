const buttons = Array.from(document.querySelectorAll("[data-mode]"));
const frameShell = document.querySelector("[data-frame-shell]");
const previewFrame = document.querySelector("[data-preview-frame]");

if (!(frameShell instanceof HTMLElement) || !(previewFrame instanceof HTMLIFrameElement)) {
  throw new Error("No se pudo montar el selector de vistas");
}

const modes = {
  desktop: {
    label: "Pantalla de computador",
  },
  "mobile-landscape": {
    label: "Celular horizontal",
  },
};

function setActiveMode(mode) {
  const currentMode = modes[mode] ? mode : "desktop";

  frameShell.dataset.mode = currentMode;
  buttons.forEach((button) => {
    const isActive = button.dataset.mode === currentMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const url = new URL("./index.html#1_inicio", window.location.href);
  previewFrame.src = url.toString();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveMode(button.dataset.mode || "desktop");
  });
});

setActiveMode(new URLSearchParams(window.location.search).get("mode") || "desktop");
