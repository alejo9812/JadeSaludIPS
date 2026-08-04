import { referenceImageSize } from "../config.js";

const panelHotspotRoutes = new Set([
  "2_cmr",
  "3_seguimiento",
  "3_2_seguimiento",
  "3_3_seguimiento",
  "3_4_seguimiento",
  "3_5_seguimiento",
  "3_6_seguimiento",
  "4_citas",
  "5_1_seguimiento",
  "5_2_seguimiento",
  "5_3_seguimiento",
  "5_4_seguimiento",
  "5_5_seguimiento",
  "5_6_seguimiento",
  "5_resultados",
  "5_1_resultados",
  "5_2_resultados",
  "5_3_resultados",
  "5_4_resultados",
  "5_5_resultados",
  "5_6_resultados",
]);

const agendaHotspotRoutes = new Set([
  "2_cmr",
  "3_seguimiento",
  "3_2_seguimiento",
  "3_3_seguimiento",
  "3_4_seguimiento",
  "3_5_seguimiento",
  "3_6_seguimiento",
  "4_citas",
  "5_1_seguimiento",
  "5_2_seguimiento",
  "5_3_seguimiento",
  "5_4_seguimiento",
  "5_5_seguimiento",
  "5_6_seguimiento",
  "5_resultados",
  "5_1_resultados",
  "5_2_resultados",
  "5_3_resultados",
  "5_4_resultados",
  "5_5_resultados",
  "5_6_resultados",
]);

const consultantHotspotRoutes = new Set([
  "2_cmr",
  "3_seguimiento",
  "3_2_seguimiento",
  "3_3_seguimiento",
  "3_4_seguimiento",
  "3_5_seguimiento",
  "3_6_seguimiento",
  "4_citas",
  "5_1_seguimiento",
  "5_2_seguimiento",
  "5_3_seguimiento",
  "5_4_seguimiento",
  "5_5_seguimiento",
  "5_6_seguimiento",
  "5_resultados",
  "5_1_resultados",
  "5_2_resultados",
  "5_3_resultados",
  "5_4_resultados",
  "5_5_resultados",
  "5_6_resultados",
]);

const whatsappHotspotRoutes = new Set([
  "3_seguimiento",
  "3_2_seguimiento",
  "3_3_seguimiento",
  "3_4_seguimiento",
  "3_5_seguimiento",
  "3_6_seguimiento",
]);

const whatsappProfessionalDisplayName = "Dra. Carolina Reyes";

const whatsappConversationSources = {
  "3_seguimiento": "./assets/conversations/01_ana_maria_velez.md",
  "3_2_seguimiento": "./assets/conversations/02_juan_felipe_ramirez.md",
  "3_3_seguimiento": "./assets/conversations/03_laura_gomez.md",
  "3_4_seguimiento": "./assets/conversations/04_camilo_vargas.md",
  "3_5_seguimiento": "./assets/conversations/05_sofia_martinez.md",
  "3_6_seguimiento": "./assets/conversations/06_valentina_rojas.md",
};

const followUpNavigationRoutes = {
  "3_seguimiento": { prev: "2_cmr", next: "3_2_seguimiento" },
  "3_2_seguimiento": { prev: "3_seguimiento", next: "3_3_seguimiento" },
  "3_3_seguimiento": { prev: "3_2_seguimiento", next: "3_4_seguimiento" },
  "3_4_seguimiento": { prev: "3_3_seguimiento", next: "3_5_seguimiento" },
  "3_5_seguimiento": { prev: "3_4_seguimiento", next: "3_6_seguimiento" },
  "3_6_seguimiento": { prev: "3_5_seguimiento", next: "4_citas" },
};

const fiveFollowUpNavigationRoutes = {
  "5_1_seguimiento": { next: "5_2_seguimiento" },
  "5_2_seguimiento": { prev: "5_1_seguimiento", next: "5_3_seguimiento" },
  "5_3_seguimiento": { prev: "5_2_seguimiento", next: "5_4_seguimiento" },
  "5_4_seguimiento": { prev: "5_3_seguimiento", next: "5_5_seguimiento" },
  "5_5_seguimiento": { prev: "5_4_seguimiento", next: "5_6_seguimiento" },
  "5_6_seguimiento": { prev: "5_5_seguimiento" },
};

const resultsNavigationRoutes = {
  "5_resultados": { next: "5_1_resultados" },
  "5_1_resultados": { prev: "5_resultados", next: "5_2_resultados" },
  "5_2_resultados": { prev: "5_1_resultados", next: "5_3_resultados" },
  "5_3_resultados": { prev: "5_2_resultados", next: "5_4_resultados" },
  "5_4_resultados": { prev: "5_3_resultados", next: "5_5_resultados" },
  "5_5_resultados": { prev: "5_4_resultados", next: "5_6_resultados" },
  "5_6_resultados": { prev: "5_5_resultados" },
};

function renderPanelHotspot() {
  return `
    <button
      class="fullscreen-hero__hotspot fullscreen-hero__hotspot--panel"
      type="button"
      data-cmr-target="2_cmr"
      aria-label="Abrir panel clinico"
      title="Abrir panel clinico"
      style="
        --hotspot-left: 0.55%;
        --hotspot-top: 11.9%;
        --hotspot-width: 16.7%;
        --hotspot-height: 4.9%;
      "
    ></button>
  `;
}

function renderAgendaHotspot() {
  return `
    <button
      class="fullscreen-hero__hotspot fullscreen-hero__hotspot--agenda"
      type="button"
      data-cmr-target="4_citas"
      aria-label="Abrir agenda clinica"
      title="Abrir agenda clinica"
      style="
        --hotspot-left: 0.55%;
        --hotspot-top: 48.0%;
        --hotspot-width: 16.7%;
        --hotspot-height: 5.0%;
      "
    ></button>
  `;
}

function renderConsultantHotspot() {
  return `
    <button
      class="fullscreen-hero__hotspot fullscreen-hero__hotspot--consultant"
      type="button"
      data-cmr-target="3_seguimiento"
      aria-label="Abrir ficha del consultante"
      title="Abrir ficha del consultante"
      style="
        --hotspot-left: 0.55%;
        --hotspot-top: 18.4%;
        --hotspot-width: 16.7%;
        --hotspot-height: 5.0%;
      "
    ></button>
  `;
}

function renderWhatsAppHotspot() {
  return `
    <button
      class="fullscreen-hero__hotspot fullscreen-hero__hotspot--whatsapp"
      type="button"
      data-whatsapp-open
      aria-haspopup="dialog"
      aria-controls="whatsapp-modal"
      aria-expanded="false"
      aria-label="Abrir seguimiento WhatsApp"
      title="Abrir seguimiento WhatsApp"
      style="
        --hotspot-left: 0.55%;
        --hotspot-top: 24.9%;
        --hotspot-width: 16.7%;
        --hotspot-height: 5.0%;
      "
    ></button>
  `;
}

function renderExitButton() {
  return `
    <button
      class="fullscreen-hero__exit-button"
      type="button"
      data-cmr-target="1_inicio"
      aria-label="Salir"
      title="Salir"
      style="
        --exit-left: 0.8%;
        --exit-top: 57.9%;
        --exit-width: 10.9%;
        --exit-height: 4.7%;
      "
    >
      <span class="fullscreen-hero__exit-button-text">Salir</span>
    </button>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderWhatsAppDeleteButton(label) {
  const safeLabel = escapeHtml(label);

  return `
    <button
      class="whatsapp-chat__delete-message"
      type="button"
      data-whatsapp-delete-message
      aria-label="${safeLabel}"
      title="${safeLabel}"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  `;
}

const whatsappConversation = [
  { kind: "system", text: "Hoy" },
  {
    kind: "incoming",
    sender: "Dra. Camila",
    text: "Hola Mariana. Antes de cerrar el día, ¿cómo calificarías tu ansiedad hoy del 1 al 10?",
    time: "7:42 p. m.",
  },
  {
    kind: "outgoing",
    text: "Como un 7, estuve inquieta casi todo el día.",
    time: "7:44 p. m.",
    read: true,
  },
  {
    kind: "incoming",
    sender: "Dra. Camila",
    text: "Gracias por contarlo. ¿Y cómo describirías tu sueño de anoche?",
    time: "7:44 p. m.",
  },
  {
    kind: "replies",
    title: "Respuestas rápidas",
    options: ["Muy malo", "Regular", "Bueno"],
  },
  {
    kind: "outgoing",
    text: "Muy malo, me desperté 3 veces.",
    time: "7:45 p. m.",
    read: true,
  },
  {
    kind: "incoming",
    sender: "Dra. Camila",
    text: "Entiendo. Voy a dejar una observación breve para la siguiente revisión.",
    time: "7:46 p. m.",
  },
  {
    kind: "outgoing",
    text: "Anoche me costó volver a dormir y amanecí cansada.",
    time: "7:47 p. m.",
    read: true,
  },
  {
    kind: "incoming",
    sender: "Dra. Camila",
    text: "Gracias. Hoy vamos a priorizar descanso, respiración y registro breve.",
    time: "7:48 p. m.",
  },
  {
    kind: "typing",
    text: "Escribiendo",
  },
  {
    kind: "outgoing",
    text: "Perfecto, lo haré.",
    time: "7:49 p. m.",
    read: true,
  },
  { kind: "system", text: "Ayer" },
  {
    kind: "incoming",
    sender: "Dra. Camila",
    text: "Buen día, Mariana. ¿Tomaste la medicación a la hora indicada?",
    time: "8:12 a. m.",
  },
  {
    kind: "outgoing",
    text: "Sí, a las 9:00 a. m. sin problema.",
    time: "8:14 a. m.",
    read: true,
  },
  {
    kind: "incoming",
    sender: "Dra. Camila",
    text: "Perfecto. Mantengamos la misma rutina y observemos cómo evoluciona tu ansiedad.",
    time: "8:16 a. m.",
  },
  {
    kind: "outgoing",
    text: "Me sentí un poco más tranquila hoy.",
    time: "8:17 a. m.",
    read: true,
  },
  {
    kind: "incoming",
    sender: "Dra. Camila",
    text: "Eso es una buena señal. Te escribiré nuevamente al cierre del día para seguimiento.",
    time: "8:18 a. m.",
  },
];

function renderWhatsAppMessage(item) {
  if (item.kind === "system") {
    return `
      <div class="whatsapp-chat__separator" aria-hidden="true">
        <span>${escapeHtml(item.text)}</span>
      </div>
    `;
  }

  if (item.kind === "replies") {
    return `
      <div class="whatsapp-chat__reply-group" aria-label="${escapeHtml(item.title || "Respuestas r?pidas")}">
        ${item.options
          .map(
            (option) => `
              <button
                class="whatsapp-chat__reply"
                type="button"
                data-whatsapp-quick-reply="${escapeHtml(option)}"
              >
                ${escapeHtml(option)}
              </button>
            `,
          )
          .join("")}
      </div>
    `;
  }

  if (item.kind === "typing") {
    return `
      <div class="whatsapp-chat__message whatsapp-chat__message--incoming whatsapp-chat__message--typing" aria-label="Indicador de escritura">
        <div class="whatsapp-chat__bubble whatsapp-chat__bubble--typing">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `;
  }

  const isOutgoing = item.kind === "outgoing";
  const senderLabel = isOutgoing ? "Consultante" : whatsappProfessionalDisplayName;
  const roleLabel = isOutgoing ? "Consultante" : "Profesional";
  const deleteLabel = isOutgoing
    ? "Eliminar mensaje del consultante"
    : `Eliminar mensaje de ${senderLabel}`;

  return `
    <article
      class="whatsapp-chat__message ${isOutgoing ? "whatsapp-chat__message--outgoing" : "whatsapp-chat__message--incoming"}"
      data-whatsapp-message
      data-whatsapp-message-direction="${isOutgoing ? "outgoing" : "incoming"}"
      aria-selected="false"
      tabindex="0"
      role="group"
      aria-label="${isOutgoing ? "Seleccionar mensaje del consultante" : "Seleccionar mensaje del profesional"}"
      title="${isOutgoing ? "Seleccionar mensaje del consultante" : "Seleccionar mensaje del profesional"}"
    >
      <div class="whatsapp-chat__bubble">
        <header class="whatsapp-chat__bubble-header">
          <p class="whatsapp-chat__sender">${escapeHtml(senderLabel)}</p>
          <span class="whatsapp-chat__role">${escapeHtml(roleLabel)}</span>
        </header>
        <p class="whatsapp-chat__text">${escapeHtml(item.text).replace(/\n/g, "<br>")}</p>
        <footer class="whatsapp-chat__meta">
          <span class="whatsapp-chat__time">${escapeHtml(item.time || "")}</span>
          ${renderWhatsAppDeleteButton(deleteLabel)}
        </footer>
      </div>
    </article>
  `;
}

function renderWhatsAppConversation() {
  return whatsappConversation.map(renderWhatsAppMessage).join("");
}

function renderChevron(direction) {
  const path =
    direction === "prev"
      ? "M14.5 6.5L9 12l5.5 5.5"
      : "M9.5 6.5L15 12l-5.5 5.5";

  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="${path}" />
    </svg>
  `;
}

function renderWhatsAppModal(source) {
  return renderWhatsAppModalChat(source);
}

function renderWhatsAppModalChat(source = "./assets/conversations/06_valentina_rojas.md") {
  return `
    <dialog
      id="whatsapp-modal"
      class="cmr-modal whatsapp-modal"
      data-whatsapp-modal
      aria-labelledby="whatsapp-modal-title"
      aria-describedby="whatsapp-modal-description"
      aria-modal="true"
    >
      <div class="whatsapp-modal__panel">
        <button class="cmr-modal__close whatsapp-modal__close" type="button" data-whatsapp-close aria-label="Cerrar ventana">
          &times;
        </button>

        <header class="whatsapp-chat__header">
          <div class="whatsapp-chat__brand">
            <div class="whatsapp-chat__avatar" aria-hidden="true">
              <img src="./assets/logoWA.jpeg" alt="" />
            </div>
            <div class="whatsapp-chat__brand-copy">
              <strong>ElenIA</strong>
              <span>Chat supervisado por la Dra. Carolina Reyes</span>
            </div>
          </div>
          <div class="whatsapp-chat__status">
            <span class="whatsapp-chat__status-dot" aria-hidden="true"></span>
            En seguimiento
          </div>
        </header>

        <h2 id="whatsapp-modal-title" class="sr-only">ElenIA</h2>
        <p id="whatsapp-modal-description" class="sr-only">
          Chat de seguimiento tipo WhatsApp con historial scrollable y campo para enviar mensajes.
        </p>

        <section
          class="whatsapp-chat__thread"
          data-whatsapp-thread
          data-whatsapp-source="${escapeHtml(source)}"
          tabindex="0"
          aria-live="polite"
          aria-label="Conversaci?n de seguimiento"
        >
          <div class="whatsapp-chat__note whatsapp-chat__loading">
            Preparando la conversaci?n real...
          </div>
        </section>

        <div class="whatsapp-chat__selection-toolbar" data-whatsapp-selection-toolbar hidden>
          <span class="whatsapp-chat__selection-count" data-whatsapp-selected-count>0 mensajes seleccionados</span>
          <div class="whatsapp-chat__selection-actions">
            <button class="whatsapp-chat__selection-action whatsapp-chat__selection-action--delete" type="button" data-whatsapp-delete-selected>
              Eliminar
            </button>
            <button class="whatsapp-chat__selection-action" type="button" data-whatsapp-clear-selection>
              Limpiar
            </button>
          </div>
        </div>

        <form class="whatsapp-chat__composer" data-whatsapp-form>
          <label class="sr-only" for="whatsapp-input">Escribe un mensaje</label>
          <input
            id="whatsapp-input"
            class="whatsapp-chat__input"
            name="message"
            data-whatsapp-input
            type="text"
            autocomplete="off"
            placeholder="Mensaje..."
          />
          <button class="whatsapp-chat__send" type="submit" aria-label="Enviar mensaje">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 12l14-8-4 8 4 8-14-8z"></path>
            </svg>
          </button>
        </form>
      </div>
    </dialog>
  `;
}

function renderNavigationCluster(item, { className, ariaLabel, showPrev, showNext }) {
  if (!item) {
    return "";
  }

  const shouldShowPrev = typeof showPrev === "boolean" ? showPrev : Boolean(item.prev);
  const shouldShowNext = typeof showNext === "boolean" ? showNext : Boolean(item.next);

  return `
    <div class="${className}" aria-label="${ariaLabel}">
      ${shouldShowPrev ? `
        <button
          class="fullscreen-hero__followup-button fullscreen-hero__followup-button--prev"
          type="button"
          data-cmr-target="${item.prev}"
          aria-label="Ir a la pantalla anterior"
          title="Ir a la pantalla anterior"
        >
          ${renderChevron("prev")}
        </button>
      ` : ""}

      ${shouldShowNext ? `
        <button
          class="fullscreen-hero__followup-button fullscreen-hero__followup-button--next"
          type="button"
          data-cmr-target="${item.next}"
          aria-label="Ir a la pantalla siguiente"
          title="Ir a la pantalla siguiente"
        >
          ${renderChevron("next")}
        </button>
      ` : ""}
    </div>
  `;
}

function renderFollowUpNavigation(slug) {
  const item = followUpNavigationRoutes[slug];

  if (!item) {
    return "";
  }

  return renderNavigationCluster(item, {
    className: "fullscreen-hero__followup-nav",
    ariaLabel: "Navegacion de seguimiento",
    showPrev: slug !== "3_seguimiento",
    showNext: slug !== "3_6_seguimiento",
  });
}

function renderFiveFollowUpNavigation(slug) {
  const item = fiveFollowUpNavigationRoutes[slug];

  if (!item) {
    return "";
  }

  return renderNavigationCluster(item, {
    className: "fullscreen-hero__followup-nav fullscreen-hero__results-nav",
    ariaLabel: "Navegacion de seguimiento",
  });
}

function renderResultsNavigation(slug) {
  const item = resultsNavigationRoutes[slug];

  if (!item) {
    return "";
  }

  return renderNavigationCluster(item, {
    className: "fullscreen-hero__followup-nav fullscreen-hero__results-nav",
    ariaLabel: "Navegacion de resultados",
  });
}

function buildSrcSet(srcSet) {
  return srcSet ? `\n        srcset="${srcSet}"` : "";
}

export function createReferenceWindow({
  slug,
  title,
  ariaLabel,
  imagePath,
  imageAlt,
  actionMarkup = "",
  imageSrcSet = "",
  imageFit = "cover",
  imagePosition = "center center",
  imageWidth = referenceImageSize.width,
  imageHeight = referenceImageSize.height,
}) {
  const panelHotspot = panelHotspotRoutes.has(slug) ? renderPanelHotspot() : "";
  const consultantHotspot = consultantHotspotRoutes.has(slug) ? renderConsultantHotspot() : "";
  const whatsappHotspot = whatsappHotspotRoutes.has(slug) ? renderWhatsAppHotspot() : "";
  const agendaHotspot = agendaHotspotRoutes.has(slug) ? renderAgendaHotspot() : "";
  const followUpNavigation = renderFollowUpNavigation(slug);
  const fiveFollowUpNavigation = renderFiveFollowUpNavigation(slug);
  const resultsNavigation = renderResultsNavigation(slug);
  const exitButton = slug !== "1_inicio" ? renderExitButton() : "";
  const whatsappModal = whatsappHotspotRoutes.has(slug)
    ? renderWhatsAppModalChat(whatsappConversationSources[slug])
    : "";
  const useStage = slug !== "1_inicio";

  const mediaMarkup = useStage
    ? `
        <div
          class="fullscreen-hero__stage"
          style="aspect-ratio: ${imageWidth} / ${imageHeight};"
        >
          <img
            class="fullscreen-hero__image"
            data-image-fit="${imageFit}"
            src="${imagePath}"${buildSrcSet(imageSrcSet)}
            width="${imageWidth}"
            height="${imageHeight}"
            alt="${imageAlt}"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            style="object-position: ${imagePosition};"
          />
          ${panelHotspot}
          ${consultantHotspot}
          ${whatsappHotspot}
          ${agendaHotspot}
          ${followUpNavigation}
          ${fiveFollowUpNavigation}
          ${resultsNavigation}
          ${exitButton}
          ${actionMarkup}
          ${whatsappModal}
        </div>
      `
    : `
        <img
          class="fullscreen-hero__image"
          data-image-fit="${imageFit}"
          src="${imagePath}"${buildSrcSet(imageSrcSet)}
          width="${imageWidth}"
          height="${imageHeight}"
          alt="${imageAlt}"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          style="object-position: ${imagePosition};"
        />
        ${panelHotspot}
        ${consultantHotspot}
        ${whatsappHotspot}
        ${agendaHotspot}
        ${followUpNavigation}
        ${fiveFollowUpNavigation}
        ${resultsNavigation}
        ${exitButton}
        ${actionMarkup}
        ${whatsappModal}
      `;

  return {
    slug,
    title,
    content: `
      <section class="fullscreen-hero ${useStage ? "fullscreen-hero--staged" : "fullscreen-hero--plain"}" aria-label="${ariaLabel}">
        ${mediaMarkup}
      </section>
    `,
  };
}
