import { defaultRoute, navigation, site } from "./src/config.js";
import { inicioView } from "./src/views/1_inicio.js";
import { cmrView } from "./src/views/2_cmr.js";
import { seguimientoView } from "./src/views/3_1_seguimiento.js";
import { seguimientoView as seguimiento2View } from "./src/views/3_2_seguimiento.js";
import { seguimientoView as seguimiento3View } from "./src/views/3_3_seguimiento.js";
import { seguimientoView as seguimiento4View } from "./src/views/3_4_seguimiento.js";
import { seguimientoView as seguimiento5View } from "./src/views/3_5_seguimiento.js";
import { seguimientoView as seguimiento6View } from "./src/views/3_6_seguimiento.js";
import { citasView } from "./src/views/4_citas.js";
import { resultadosView } from "./src/views/5_resultados.js";
import { resultadosView as resultados1View } from "./src/views/5_1_resultados.js";
import { resultadosView as resultados2View } from "./src/views/5_2_resultados.js";
import { resultadosView as resultados3View } from "./src/views/5_3_resultados.js";
import { resultadosView as resultados4View } from "./src/views/5_4_resultados.js";
import { resultadosView as resultados5View } from "./src/views/5_5_resultados.js";
import { resultadosView as resultados6View } from "./src/views/5_6_resultados.js";
import { seguimientoView as seguimiento5_1View } from "./src/views/5_1_seguimiento.js";
import { seguimientoView as seguimiento5_2View } from "./src/views/5_2_seguimiento.js";
import { seguimientoView as seguimiento5_3View } from "./src/views/5_3_seguimiento.js";
import { seguimientoView as seguimiento5_4View } from "./src/views/5_4_seguimiento.js";
import { seguimientoView as seguimiento5_5View } from "./src/views/5_5_seguimiento.js";
import { seguimientoView as seguimiento5_6View } from "./src/views/5_6_seguimiento.js";

document.documentElement.classList.add("js");

const views = {
  [inicioView.slug]: inicioView,
  [cmrView.slug]: cmrView,
  [seguimientoView.slug]: seguimientoView,
  [seguimiento2View.slug]: seguimiento2View,
  [seguimiento3View.slug]: seguimiento3View,
  [seguimiento4View.slug]: seguimiento4View,
  [seguimiento5View.slug]: seguimiento5View,
  [seguimiento6View.slug]: seguimiento6View,
  [citasView.slug]: citasView,
  [resultadosView.slug]: resultadosView,
  [resultados1View.slug]: resultados1View,
  [resultados2View.slug]: resultados2View,
  [resultados3View.slug]: resultados3View,
  [resultados4View.slug]: resultados4View,
  [resultados5View.slug]: resultados5View,
  [resultados6View.slug]: resultados6View,
  [seguimiento5_1View.slug]: seguimiento5_1View,
  [seguimiento5_2View.slug]: seguimiento5_2View,
  [seguimiento5_3View.slug]: seguimiento5_3View,
  [seguimiento5_4View.slug]: seguimiento5_4View,
  [seguimiento5_5View.slug]: seguimiento5_5View,
  [seguimiento5_6View.slug]: seguimiento5_6View,
};

const fullscreenSeguimientoRoutes = new Set([
  seguimientoView.slug,
  seguimiento2View.slug,
  seguimiento3View.slug,
  seguimiento4View.slug,
  seguimiento5View.slug,
  seguimiento6View.slug,
]);

const fullscreenCitasRoute = citasView.slug;
const fullscreenResultsRoutes = new Set([
  resultadosView.slug,
  resultados1View.slug,
  resultados2View.slug,
  resultados3View.slug,
  resultados4View.slug,
  resultados5View.slug,
  resultados6View.slug,
  seguimiento5_1View.slug,
  seguimiento5_2View.slug,
  seguimiento5_3View.slug,
  seguimiento5_4View.slug,
  seguimiento5_5View.slug,
  seguimiento5_6View.slug,
]);

const formMessages = {
  appointment:
    "Solicitud de cita preparada. Conecta este formulario con tu agenda o backend para activarlo.",
  login:
    "Ventana de acceso lista. Aquí puedes conectar tu autenticación real cuando la tengas.",
};

const app = document.querySelector("#app");

if (!app) {
  throw new Error("No se encontro el contenedor #app");
}

app.innerHTML = `
  <div class="site-shell" data-shell>
    <header class="topbar" data-topbar>
      <a class="brand" href="#${defaultRoute}" aria-label="${site.name}">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 48 48" role="presentation" aria-hidden="true">
            <circle cx="24" cy="24" r="18"></circle>
            <path d="M24 13v22M13 24h22"></path>
          </svg>
        </span>
        <span class="brand-text">
          <strong>${site.name}</strong>
          <small>${site.tagline}</small>
        </span>
      </a>

      <button
        class="menu-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="main-nav"
        data-menu-button
      >
        <span></span>
        <span></span>
        <span></span>
        <span class="sr-only">Abrir menu</span>
      </button>

      <nav id="main-nav" class="main-nav" data-nav aria-label="Ventanas principales"></nav>

      <a class="button button--secondary topbar__panel" href="#2_cmr">
        Panel clínico
      </a>

      <a class="button button--primary topbar__cta" href="#4_citas">
        Agendar cita
      </a>
    </header>

    <main id="view-root" class="view-root" tabindex="-1"></main>

    <footer class="footer">
      <p>${site.name}. Base de front preparada para ventanas navegables.</p>
      <a href="#${defaultRoute}">Volver arriba</a>
    </footer>

    <dialog
      id="login-modal"
      class="login-modal"
      data-login-modal
      aria-labelledby="login-modal-title"
      aria-describedby="login-modal-description"
    >
      <form class="login-modal__panel" method="dialog" data-form="login">
        <button
          class="login-modal__close"
          type="button"
          data-login-close
          aria-label="Cerrar ventana"
        >
          &times;
        </button>

        <div class="login-modal__brand" aria-hidden="true">
          <img class="login-modal__brand-image" src="./assets/logo.png" alt="" />
        </div>

        <h2 id="login-modal-title" class="login-modal__title">Inicio de sesión</h2>
        <p id="login-modal-description" class="login-modal__copy">
          Ingresa tu correo y contraseña.
        </p>

        <label class="login-modal__field">
          <span>Correo</span>
          <input
            type="email"
            name="email"
            autocomplete="username"
            value="admin@jadesaludips.com"
            autofocus
          />
        </label>

        <label class="login-modal__field">
          <span>Contraseña</span>
          <input
            type="password"
            name="password"
            autocomplete="current-password"
            value="••••"
          />
        </label>

        <button class="button login-modal__submit" type="submit">Entrar</button>
      </form>
    </dialog>
  </div>
`;

const shell = app.querySelector("[data-shell]");
const nav = app.querySelector("[data-nav]");
const viewRoot = app.querySelector("#view-root");
const menuButton = app.querySelector("[data-menu-button]");
const loginModal = app.querySelector("[data-login-modal]");
const loginCloseButton = app.querySelector("[data-login-close]");
const loginForm = app.querySelector('[data-form="login"]');
let lastLoginTrigger = null;
let restoreLoginFocusOnClose = true;
let lastCmrTrigger = null;
let restoreCmrFocusOnClose = true;
let lastWhatsAppTrigger = null;
let restoreWhatsAppFocusOnClose = true;
const whatsappConversationDefaultSource = "./assets/conversations/06_valentina_rojas.md";
const whatsappAssistantDisplayName = "ElenIA";
const whatsappProfessionalDisplayName = "Dra. Carolina Reyes";
const whatsappConversationCache = new Map();
const whatsappConversationLoadPromises = new Map();
let whatsappConversationLoadedSource = "";
let whatsappConversationLoadedData = null;

if (!(shell && nav && viewRoot && menuButton && loginModal && loginCloseButton && loginForm)) {
  throw new Error("No se pudo montar la estructura principal");
}

nav.innerHTML = navigation
  .map(
    (item) => `
      <a class="main-nav__link" href="#${item.slug}" data-route="${item.slug}">
        ${item.label}
      </a>
    `,
  )
  .join("");

function normalizeRoute(hash) {
  const slug = hash.replace(/^#\/?/, "").trim();
  return views[slug] ? slug : defaultRoute;
}

function setMenuOpen(isOpen) {
  shell.dataset.menuOpen = String(isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
}

function setLoginTriggerExpanded(isExpanded) {
  viewRoot.querySelectorAll("[data-login-open]").forEach((trigger) => {
    trigger.setAttribute("aria-expanded", String(isExpanded));
  });
}

function restoreLoginTriggerFocus() {
  if (lastLoginTrigger instanceof HTMLElement && lastLoginTrigger.isConnected) {
    lastLoginTrigger.focus({ preventScroll: true });
  }

  lastLoginTrigger = null;
}

function closeLoginModal({ restoreFocus = true } = {}) {
  const shouldClose = loginModal.open;
  restoreLoginFocusOnClose = restoreFocus;

  if (shouldClose) {
    loginModal.close();
  }

  setLoginTriggerExpanded(false);

  if (!shouldClose && restoreFocus) {
    restoreLoginTriggerFocus();
  }

  if (!shouldClose) {
    restoreLoginFocusOnClose = true;
  }
}

function openLoginModal(trigger) {
  if (!(loginModal instanceof HTMLDialogElement)) {
    return;
  }

  if (typeof loginModal.showModal !== "function") {
    return;
  }

  lastLoginTrigger = trigger instanceof HTMLElement ? trigger : null;

  if (!loginModal.open) {
    loginModal.showModal();
  }

  if (trigger instanceof HTMLElement) {
    trigger.setAttribute("aria-expanded", "true");
  }
}

function goToRoute(route) {
  const nextRoute = views[route] ? route : defaultRoute;

  closeLoginModal({ restoreFocus: false });
  closeCmrModal({ restoreFocus: false });
  closeWhatsAppModal({ restoreFocus: false });

  if (window.location.hash !== `#${nextRoute}`) {
    window.location.hash = `#${nextRoute}`;
    return;
  }

  renderRoute(nextRoute);
}

function goToCmrFromLogin() {
  goToRoute(cmrView.slug);
}

function getCmrModal() {
  const modal = viewRoot.querySelector("[data-cmr-modal]");

  if (modal instanceof HTMLDialogElement) {
    return modal;
  }

  return null;
}

function restoreCmrTriggerFocus() {
  if (lastCmrTrigger instanceof HTMLElement && lastCmrTrigger.isConnected) {
    lastCmrTrigger.focus({ preventScroll: true });
  }

  lastCmrTrigger = null;
}

function closeCmrModal({ restoreFocus = true } = {}) {
  const modal = getCmrModal();
  restoreCmrFocusOnClose = restoreFocus;

  if (modal?.open) {
    modal.close();
  }

  if (!modal && restoreFocus) {
    restoreCmrTriggerFocus();
  }

  if (!modal) {
    restoreCmrFocusOnClose = true;
  }
}

function getWhatsAppModal() {
  const modal = viewRoot.querySelector("[data-whatsapp-modal]");

  if (modal instanceof HTMLDialogElement) {
    return modal;
  }

  return null;
}

function getWhatsAppThread() {
  const thread = viewRoot.querySelector("[data-whatsapp-thread]");

  if (thread instanceof HTMLElement) {
    return thread;
  }

  return null;
}

function getWhatsAppInput() {
  const input = viewRoot.querySelector("[data-whatsapp-input]");

  if (input instanceof HTMLInputElement) {
    return input;
  }

  return null;
}

function getWhatsAppSelectionToolbar() {
  const toolbar = viewRoot.querySelector("[data-whatsapp-selection-toolbar]");

  if (toolbar instanceof HTMLElement) {
    return toolbar;
  }

  return null;
}

function getWhatsAppMessageNodes() {
  return Array.from(viewRoot.querySelectorAll("[data-whatsapp-message]"));
}

function getWhatsAppSelectedMessageNodes() {
  return getWhatsAppMessageNodes().filter((node) => node.getAttribute("aria-selected") === "true");
}

function updateWhatsAppSelectionToolbar() {
  const toolbar = getWhatsAppSelectionToolbar();
  const selectedMessages = getWhatsAppSelectedMessageNodes();
  const count = selectedMessages.length;
  const countNode = toolbar?.querySelector("[data-whatsapp-selected-count]");
  const deleteButton = toolbar?.querySelector("[data-whatsapp-delete-selected]");

  if (countNode) {
    countNode.textContent = count === 1 ? "1 mensaje seleccionado" : `${count} mensajes seleccionados`;
  }

  if (deleteButton instanceof HTMLButtonElement) {
    deleteButton.disabled = count === 0;
  }

  if (toolbar) {
    toolbar.hidden = count === 0;
  }
}

function clearWhatsAppMessageSelection() {
  getWhatsAppMessageNodes().forEach((node) => {
    node.setAttribute("aria-selected", "false");
    node.classList.remove("is-selected");
  });

  updateWhatsAppSelectionToolbar();
}

function setWhatsAppMessageSelection(node, isSelected) {
  if (!(node instanceof HTMLElement)) {
    return;
  }

  node.setAttribute("aria-selected", String(isSelected));
  node.classList.toggle("is-selected", isSelected);
  updateWhatsAppSelectionToolbar();
}

function toggleWhatsAppMessageSelection(node) {
  if (!(node instanceof HTMLElement)) {
    return;
  }

  const nextSelected = node.getAttribute("aria-selected") !== "true";
  setWhatsAppMessageSelection(node, nextSelected);
}

function getAdjacentWhatsAppMessageNode(node, direction = 1, excluded = new Set()) {
  if (!(node instanceof HTMLElement)) {
    return null;
  }

  let cursor = direction > 0 ? node.nextElementSibling : node.previousElementSibling;

  while (cursor instanceof HTMLElement) {
    if (cursor.matches("[data-whatsapp-message]") && !excluded.has(cursor)) {
      return cursor;
    }

    cursor = direction > 0 ? cursor.nextElementSibling : cursor.previousElementSibling;
  }

  return null;
}

function focusWhatsAppMessageNode(node) {
  if (node instanceof HTMLElement) {
    node.focus({ preventScroll: true });
    node.scrollIntoView({ block: "nearest", behavior: "smooth" });
    return;
  }

  const thread = getWhatsAppThread();

  if (thread) {
    thread.focus({ preventScroll: true });
  }
}

function deleteWhatsAppMessageNode(node) {
  if (!(node instanceof HTMLElement) || !node.matches("[data-whatsapp-message]")) {
    return;
  }

  const thread = getWhatsAppThread();
  const nextFocus = getAdjacentWhatsAppMessageNode(node, 1) || getAdjacentWhatsAppMessageNode(node, -1);

  node.remove();
  clearWhatsAppMessageSelection();

  if (nextFocus) {
    focusWhatsAppMessageNode(nextFocus);
  } else if (thread) {
    thread.focus({ preventScroll: true });
  }
}

function deleteSelectedWhatsAppMessages() {
  const selectedMessages = getWhatsAppSelectedMessageNodes();

  if (!selectedMessages.length) {
    updateWhatsAppSelectionToolbar();
    return;
  }

  const selectionSet = new Set(selectedMessages);
  const anchor = selectedMessages[0];
  const nextFocus =
    getAdjacentWhatsAppMessageNode(anchor, 1, selectionSet) ||
    getAdjacentWhatsAppMessageNode(anchor, -1, selectionSet);

  selectedMessages.forEach((node) => node.remove());
  clearWhatsAppMessageSelection();

  if (nextFocus) {
    focusWhatsAppMessageNode(nextFocus);
  } else {
    const thread = getWhatsAppThread();
    thread?.focus({ preventScroll: true });
  }
}

function isTypingElement(element) {
  if (!(element instanceof HTMLElement)) {
    return false;
  }

  return (
    element.matches("input, textarea, select, [contenteditable='true']") ||
    element.closest("[data-whatsapp-input]") instanceof HTMLElement
  );
}

function scrollWhatsAppThreadToBottom(behavior = "auto") {
  const thread = getWhatsAppThread();

  if (!thread) {
    return;
  }

  thread.scrollTo({
    top: thread.scrollHeight,
    behavior,
  });
}

function scrollWhatsAppThreadBy(deltaY, behavior = "auto") {
  const thread = getWhatsAppThread();

  if (!thread) {
    return;
  }

  thread.scrollBy({
    top: deltaY,
    behavior,
  });
}

function appendWhatsAppMessage(message) {
  const thread = getWhatsAppThread();
  const cleanMessage = message.trim();

  if (!thread || !cleanMessage) {
    return;
  }

  const messageNode = document.createElement("article");
  messageNode.className = "whatsapp-chat__message whatsapp-chat__message--incoming";
  messageNode.dataset.whatsappMessage = "true";
  messageNode.dataset.whatsappMessageDirection = "incoming";
  messageNode.setAttribute("aria-selected", "false");
  messageNode.setAttribute("tabindex", "0");
  messageNode.setAttribute("role", "group");
  messageNode.setAttribute("aria-label", "Seleccionar mensaje de la Dra. Carolina Reyes");
  messageNode.title = "Seleccionar mensaje de la Dra. Carolina Reyes";

  const bubble = document.createElement("div");
  bubble.className = "whatsapp-chat__bubble";

  const header = document.createElement("header");
  header.className = "whatsapp-chat__bubble-header";

  const sender = document.createElement("p");
  sender.className = "whatsapp-chat__sender";
  sender.textContent = whatsappProfessionalDisplayName;

  const role = document.createElement("span");
  role.className = "whatsapp-chat__role";
  role.textContent = "Profesional";

  const text = document.createElement("p");
  text.className = "whatsapp-chat__text";
  text.textContent = cleanMessage;

  const meta = document.createElement("footer");
  meta.className = "whatsapp-chat__meta";

  const time = document.createElement("span");
  time.className = "whatsapp-chat__time";
  time.textContent = new Intl.DateTimeFormat("es-CO", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());

  const deleteButton = document.createElement("button");
  deleteButton.className = "whatsapp-chat__delete-message";
  deleteButton.type = "button";
  deleteButton.dataset.whatsappDeleteMessage = "true";
  deleteButton.setAttribute("aria-label", `Eliminar mensaje de ${whatsappProfessionalDisplayName}`);
  deleteButton.title = `Eliminar mensaje de ${whatsappProfessionalDisplayName}`;
  deleteButton.innerHTML = '<span aria-hidden="true">&times;</span>';

  header.append(sender, role);
  meta.append(time, deleteButton);
  bubble.append(header, text, meta);
  messageNode.append(bubble);
  thread.append(messageNode);
  updateWhatsAppSelectionToolbar();
  scrollWhatsAppThreadToBottom("smooth");
}

function restoreWhatsAppTriggerFocus() {
  if (lastWhatsAppTrigger instanceof HTMLElement && lastWhatsAppTrigger.isConnected) {
    lastWhatsAppTrigger.focus({ preventScroll: true });
  }

  lastWhatsAppTrigger = null;
}

function closeWhatsAppModal({ restoreFocus = true } = {}) {
  const modal = getWhatsAppModal();
  restoreWhatsAppFocusOnClose = restoreFocus;

  if (modal?.open) {
    modal.close();
  }

  if (!modal && restoreFocus) {
    restoreWhatsAppTriggerFocus();
  }

  if (!modal) {
    restoreWhatsAppFocusOnClose = true;
  }

  clearWhatsAppMessageSelection();
  viewRoot.querySelectorAll("[data-whatsapp-open]").forEach((trigger) => {
    trigger.setAttribute("aria-expanded", "false");
  });
}

function escapeHtml(value) {
  return String(value ?? "")
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

function normalizeConversationKey(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const whatsappProfessionalTonePhrases = [
  "supervision",
  "coordinacion",
  "equipo",
  "continuidad",
  "cierre",
  "plan de 90 dias",
  "revision",
  "protocolo",
  "no voy a",
  "no vamos a",
  "no corresponde",
  "instrumentos autorizados",
  "resumen",
  "evaluacion final",
  "contacto clinico",
  "contacto profesional",
  "mantiene supervision",
  "registrar",
  "yo registr",
  "apoyo clinico",
  "seguimiento clinico",
];

function isWhatsAppProfessionalTone(value) {
  const normalized = normalizeConversationKey(value);
  return whatsappProfessionalTonePhrases.some((phrase) => normalized.includes(phrase));
}

function resolveWhatsAppMessageIdentity(item, meta = {}) {
  const isOutgoing = item.kind === "outgoing" || item.direction === "outgoing";
  const patientName = meta.consultante || meta.paciente || "Consultante";

  if (isOutgoing) {
    return {
      senderLabel: patientName,
      roleLabel: "Consultante",
      ariaLabel: "Seleccionar mensaje del consultante",
    };
  }

  const senderKey = normalizeConversationKey(item.sender);
  const messageBody = String(item.body ?? item.text ?? "");

  if (senderKey.includes("carolina") || senderKey.includes("reyes")) {
    return {
      senderLabel: whatsappProfessionalDisplayName,
      roleLabel: "Profesional",
      ariaLabel: "Seleccionar mensaje de la Dra. Carolina Reyes",
    };
  }

  if (senderKey.includes("elenia")) {
    if (isWhatsAppProfessionalTone(messageBody)) {
      return {
        senderLabel: whatsappProfessionalDisplayName,
        roleLabel: "Profesional",
        ariaLabel: "Seleccionar mensaje de la Dra. Carolina Reyes",
      };
    }

    return {
      senderLabel: whatsappAssistantDisplayName,
      roleLabel: "IA",
      ariaLabel: "Seleccionar mensaje de ElenIA",
    };
  }

  if (isWhatsAppProfessionalTone(messageBody)) {
    return {
      senderLabel: whatsappProfessionalDisplayName,
      roleLabel: "Profesional",
      ariaLabel: "Seleccionar mensaje de la Dra. Carolina Reyes",
    };
  }

  return {
    senderLabel: whatsappAssistantDisplayName,
    roleLabel: "IA",
    ariaLabel: "Seleccionar mensaje de ElenIA",
  };
}

function renderInlineMarkdown(value) {
  return escapeHtml(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function renderMarkdownText(value) {
  const lines = String(value ?? "")
    .replace(/\r\n/g, "\n")
    .split("\n");
  const fragments = [];
  let paragraph = [];
  let listItems = [];
  let quoteLines = [];

  const flushParagraph = () => {
    if (!paragraph.length) {
      return;
    }

    fragments.push(`<p>${paragraph.map(renderInlineMarkdown).join("<br>")}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length) {
      return;
    }

    fragments.push(`<ul>${listItems.map((item) => `<li>${renderInlineMarkdown(item)}</li>`).join("")}</ul>`);
    listItems = [];
  };

  const flushQuote = () => {
    if (!quoteLines.length) {
      return;
    }

    fragments.push(`<blockquote>${quoteLines.map(renderInlineMarkdown).join("<br>")}</blockquote>`);
    quoteLines = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      flushQuote();
      continue;
    }

    if (/^>\s?/.test(line)) {
      flushParagraph();
      flushList();
      quoteLines.push(line.replace(/^>\s?/, ""));
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      flushParagraph();
      flushQuote();
      listItems.push(line.replace(/^[-*]\s+/, ""));
      continue;
    }

    flushList();
    flushQuote();
    paragraph.push(rawLine.trim());
  }

  flushParagraph();
  flushList();
  flushQuote();

  return fragments.join("");
}

function splitSpeakerHeader(value) {
  const cleaned = String(value ?? "")
    .trim()
    .replace(/^\*\*/, "")
    .replace(/\*\*$/, "")
    .replace(/Â·/g, "\u00B7");
  const separatorIndex = cleaned.lastIndexOf("\u00B7");

  if (separatorIndex === -1) {
    return {
      speaker: cleaned.trim(),
      time: "",
    };
  }

  return {
    speaker: cleaned.slice(0, separatorIndex).trim(),
    time: cleaned.slice(separatorIndex + 1).trim(),
  };
}

function inferConversationDirection(sender, meta = {}) {
  const senderKey = normalizeConversationKey(sender);
  const patientKey = normalizeConversationKey(meta.consultante || meta.paciente);

  if (senderKey.includes("valentina") || senderKey.includes("paciente")) {
    return "outgoing";
  }

  if (
    patientKey &&
    senderKey &&
    (senderKey === patientKey || senderKey.includes(patientKey) || patientKey.includes(senderKey))
  ) {
    return "outgoing";
  }

  return "incoming";
}

function parseWhatsAppConversationMarkdown(markdown) {
  const lines = String(markdown ?? "")
    .replace(/\r\n/g, "\n")
    .split("\n");
  const meta = {};
  const items = [];
  let index = 0;

  for (; index < lines.length; index += 1) {
    const rawLine = lines[index].trim();

    if (!rawLine) {
      continue;
    }

    if (rawLine === "---") {
      index += 1;
      break;
    }

    const metaMatch = rawLine.match(/^\*\*(.+?):\*\*\s*(.*)$/);

    if (metaMatch) {
      const key = normalizeConversationKey(metaMatch[1]);
      const value = metaMatch[2].trim();

      if (key) {
        meta[key] = value;
      }
    }
  }

  let currentMessage = null;
  let currentNote = null;

  const flushMessage = () => {
    if (!currentMessage) {
      return;
    }

    const body = currentMessage.lines.join("\n").trim();

    if (body) {
      const direction = inferConversationDirection(currentMessage.sender, meta);

      items.push({
        kind: "message",
        sender: currentMessage.sender,
        time: currentMessage.time,
        direction,
        read: direction === "outgoing",
        body,
      });
    }

    currentMessage = null;
  };

  const flushNote = () => {
    if (!currentNote) {
      return;
    }

    const body = currentNote.lines.join("\n").trim();

    if (body) {
      items.push({
        kind: "note",
        title: currentNote.title,
        body,
      });
    }

    currentNote = null;
  };

  for (; index < lines.length; index += 1) {
    const rawLine = lines[index];
    const trimmedLine = rawLine.trim();

    if (!trimmedLine) {
      if (currentMessage) {
        currentMessage.lines.push("");
      } else if (currentNote) {
        currentNote.lines.push("");
      }

      continue;
    }

    if (trimmedLine === "---") {
      flushMessage();
      flushNote();
      continue;
    }

    const headingMatch = trimmedLine.match(/^##\s+(.+)$/);

    if (headingMatch) {
      flushMessage();
      flushNote();
      items.push({
        kind: "separator",
        text: headingMatch[1].trim(),
      });
      continue;
    }

    const speakerMatch = trimmedLine.replace(/Â·/g, "\u00B7").match(/^\*\*(.+?)\s*\u00B7\s*(.+?)\*\*$/);

    if (speakerMatch) {
      flushMessage();
      flushNote();
      currentMessage = {
        sender: speakerMatch[1].trim(),
        time: speakerMatch[2].trim(),
        lines: [],
      };
      continue;
    }

    if (!currentMessage) {
      if (!currentNote) {
        currentNote = {
          title: "",
          lines: [],
        };
      }

      currentNote.lines.push(rawLine);
      continue;
    }

    currentMessage.lines.push(rawLine);
  }

  flushMessage();
  flushNote();

  return {
    meta,
    items,
  };
}

function getWhatsAppContextNodes() {
  const thread = getWhatsAppThread();

  if (!thread) {
    return null;
  }

  const context = thread.querySelector("[data-whatsapp-context]");

  if (!(context instanceof HTMLElement)) {
    return null;
  }

  const patient = context.querySelector("[data-whatsapp-context-patient]");
  const professional = context.querySelector("[data-whatsapp-context-professional]");
  const status = context.querySelector("[data-whatsapp-context-status]");

  return {
    patient: patient instanceof HTMLElement ? patient : null,
    professional: professional instanceof HTMLElement ? professional : null,
    status: status instanceof HTMLElement ? status : null,
  };
}

function updateWhatsAppContext(meta = {}) {
  const nodes = getWhatsAppContextNodes();

  if (!nodes) {
    return;
  }

  const patientText = meta.consultante || meta.paciente || "Valentina Rojas";
  const professionalText = meta["profesional lider"] || "Ps. Natalia Torres";
  const statusText = meta["estado del caso"] || meta["momento del proceso"] || "Historial con scroll";

  if (nodes.patient) {
    nodes.patient.textContent = `Consultante: ${patientText}`;
  }

  if (nodes.professional) {
    nodes.professional.textContent = `Profesional: ${professionalText}`;
  }

  if (nodes.status) {
    nodes.status.textContent = `Estado: ${statusText}`;
  }
}

function getWhatsAppConversationSource(thread = getWhatsAppThread()) {
  if (thread instanceof HTMLElement) {
    return thread.dataset.whatsappSource?.trim() || whatsappConversationDefaultSource;
  }

  return whatsappConversationDefaultSource;
}

function renderWhatsAppConversationItems(items = [], meta = {}) {
  return items.map((item) => renderWhatsAppConversationItem(item, meta)).join("");
}

function renderWhatsAppConversationItem(item, meta = {}) {
  if (item.kind === "separator") {
    return `
      <div class="whatsapp-chat__separator">
        <span>${escapeHtml(item.text)}</span>
      </div>
    `;
  }

  if (item.kind === "note") {
    return `
      <article class="whatsapp-chat__note">
        ${item.title ? `<p class="whatsapp-chat__note-title">${escapeHtml(item.title)}</p>` : ""}
        <div class="whatsapp-chat__note-body">${renderMarkdownText(item.body)}</div>
      </article>
    `;
  }

  if (item.kind === "typing") {
    return `
      <div class="whatsapp-chat__message whatsapp-chat__message--incoming">
        <div class="whatsapp-chat__bubble whatsapp-chat__bubble--typing" aria-label="Escribiendo">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `;
  }

  if (item.kind === "replies") {
    return `
      <div class="whatsapp-chat__reply-group" role="group" aria-label="${escapeHtml(item.title || "Respuestas rápidas")}">
        ${item.options
          .map(
            (option) => `
              <button class="whatsapp-chat__reply" type="button" data-whatsapp-quick-reply="${escapeHtml(option)}">
                ${escapeHtml(option)}
              </button>
            `,
          )
          .join("")}
      </div>
    `;
  }

  const messageBody = item.body ?? item.text ?? "";
  const identity = resolveWhatsAppMessageIdentity(item, meta);
  const isOutgoing = identity.roleLabel === "Consultante";
  const deleteLabel =
    identity.roleLabel === "Consultante"
      ? "Eliminar mensaje del consultante"
      : `Eliminar mensaje de ${identity.senderLabel}`;

  return `
    <article
      class="whatsapp-chat__message ${isOutgoing ? "whatsapp-chat__message--outgoing" : "whatsapp-chat__message--incoming"}"
      data-whatsapp-message
      data-whatsapp-message-direction="${isOutgoing ? "outgoing" : "incoming"}"
      aria-selected="false"
      tabindex="0"
      role="group"
      aria-label="${escapeHtml(identity.ariaLabel)}"
      title="${escapeHtml(identity.ariaLabel)}"
    >
      <div class="whatsapp-chat__bubble">
        <header class="whatsapp-chat__bubble-header">
          <p class="whatsapp-chat__sender">${escapeHtml(identity.senderLabel)}</p>
          <span class="whatsapp-chat__role">${escapeHtml(identity.roleLabel)}</span>
        </header>
        <div class="whatsapp-chat__text">${renderMarkdownText(messageBody)}</div>
        <footer class="whatsapp-chat__meta">
          <span class="whatsapp-chat__time">${escapeHtml(item.time || "")}</span>
          ${renderWhatsAppDeleteButton(deleteLabel)}
        </footer>
      </div>
    </article>
  `;
}

function applyWhatsAppConversation(data, { scrollToTop = true } = {}) {
  const thread = getWhatsAppThread();

  if (!thread || !data) {
    return;
  }

  thread.innerHTML = renderWhatsAppConversationItems(data.items || [], data.meta || {});
  updateWhatsAppContext(data.meta || {});
  clearWhatsAppMessageSelection();

  if (scrollToTop) {
    thread.scrollTo({ top: 0, behavior: "auto" });
  }
}

function ensureWhatsAppConversationLoaded({ scrollToTop = false, force = false } = {}) {
  const thread = getWhatsAppThread();

  if (!thread) {
    return Promise.resolve(null);
  }

  const source = getWhatsAppConversationSource(thread);
  const cachedData = whatsappConversationCache.get(source) || null;

  if (!force && cachedData) {
    whatsappConversationLoadedSource = source;
    whatsappConversationLoadedData = cachedData;
    applyWhatsAppConversation(cachedData, { scrollToTop });
    return Promise.resolve(cachedData);
  }

  const existingLoad = whatsappConversationLoadPromises.get(source);

  if (!force && existingLoad) {
    return existingLoad.then((data) => {
      if (data) {
        whatsappConversationLoadedSource = source;
        whatsappConversationLoadedData = data;
        applyWhatsAppConversation(data, { scrollToTop });
      }

      return data;
    });
  }

  const loadPromise = fetch(source)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`No se pudo cargar la conversación ${source}`);
      }

      return response.text();
    })
    .then((markdown) => parseWhatsAppConversationMarkdown(markdown))
    .then((data) => {
      whatsappConversationCache.set(source, data);
      whatsappConversationLoadedSource = source;
      whatsappConversationLoadedData = data;
      applyWhatsAppConversation(data, { scrollToTop });
      return data;
    })
    .catch((error) => {
      console.warn(error);
      return null;
    })
    .finally(() => {
      whatsappConversationLoadPromises.delete(source);
    });

  whatsappConversationLoadPromises.set(source, loadPromise);

  return loadPromise;
}

function openWhatsAppModal(trigger) {
  const modal = getWhatsAppModal();

  if (!modal || typeof modal.showModal !== "function") {
    return;
  }

  lastWhatsAppTrigger = trigger instanceof HTMLElement ? trigger : null;

  if (!modal.open) {
    modal.showModal();
  }

  if (trigger instanceof HTMLElement) {
    trigger.setAttribute("aria-expanded", "true");
  }

  clearWhatsAppMessageSelection();
  void ensureWhatsAppConversationLoaded({ scrollToTop: true });

  requestAnimationFrame(() => {
    const thread = getWhatsAppThread();

    if (thread) {
      thread.scrollTo({ top: 0, behavior: "auto" });
    }

    getWhatsAppInput()?.focus({ preventScroll: true });
  });
}

function openCmrModal(trigger) {
  const modal = getCmrModal();

  if (!modal || typeof modal.showModal !== "function") {
    return;
  }

  lastCmrTrigger = trigger instanceof HTMLElement ? trigger : null;

  const name = trigger instanceof HTMLElement ? trigger.dataset.consultantName || "Consultante" : "Consultante";
  const age = trigger instanceof HTMLElement ? trigger.dataset.consultantAge || "-" : "-";
  const mode = trigger instanceof HTMLElement ? trigger.dataset.consultantMode || "-" : "-";
  const title = modal.querySelector("[data-cmr-modal-title]");
  const copy = modal.querySelector("[data-cmr-modal-copy]");
  const meta = modal.querySelector("[data-cmr-modal-meta]");

  if (title instanceof HTMLElement) {
    title.textContent = `Ficha de ${name}`;
  }

  if (copy instanceof HTMLElement) {
    copy.textContent = "Esta ficha está lista para conectar un detalle real del consultante.";
  }

  if (meta instanceof HTMLElement) {
    meta.innerHTML = `
      <div class="cmr-modal__meta-item">
        <span class="cmr-modal__meta-label">Edad</span>
        <strong class="cmr-modal__meta-value">${age}</strong>
      </div>
      <div class="cmr-modal__meta-item">
        <span class="cmr-modal__meta-label">Modalidad</span>
        <strong class="cmr-modal__meta-value">${mode}</strong>
      </div>
    `;
  }

  if (!modal.open) {
    modal.showModal();
  }
}

function updateActiveNav(route) {
  nav.querySelectorAll("[data-route]").forEach((link) => {
    const active = link.dataset.route === route;
    link.classList.toggle("is-active", active);

    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function renderRoute(route, { scroll = true } = {}) {
  const view = views[route] ?? views[defaultRoute];
  const isFullscreenHome = route === defaultRoute;
  const isFullscreenCmr = route === cmrView.slug;
  const isFullscreenSeguimiento = fullscreenSeguimientoRoutes.has(route);
  const isFullscreenCitas = route === fullscreenCitasRoute;
  const isFullscreenResults = fullscreenResultsRoutes.has(route);
  const shouldPreviewLogin = isFullscreenHome && new URLSearchParams(window.location.search).get("preview") === "login";

  closeLoginModal({ restoreFocus: false });
  closeCmrModal({ restoreFocus: false });
  closeWhatsAppModal({ restoreFocus: false });
  viewRoot.innerHTML = view.content;
  shell.classList.toggle("is-fullscreen-home", isFullscreenHome);
  shell.classList.toggle("is-fullscreen-cmr", isFullscreenCmr);
  shell.classList.toggle("is-fullscreen-seguimiento", isFullscreenSeguimiento);
  shell.classList.toggle("is-fullscreen-citas", isFullscreenCitas);
  shell.classList.toggle("is-fullscreen-results", isFullscreenResults);
  document.title = `${site.name} | ${view.title}`;
  updateActiveNav(view.slug);

  if (scroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  viewRoot.focus({ preventScroll: true });
  setMenuOpen(false);

  if (isFullscreenCmr) {
    const cmrModal = getCmrModal();

    if (cmrModal) {
      cmrModal.addEventListener("close", () => {
        if (restoreCmrFocusOnClose) {
          restoreCmrTriggerFocus();
        }

        restoreCmrFocusOnClose = true;
      });
    }
  }

  if (isFullscreenSeguimiento) {
    const whatsappModal = getWhatsAppModal();

    if (whatsappModal) {
      whatsappModal.addEventListener("close", () => {
        if (restoreWhatsAppFocusOnClose) {
          restoreWhatsAppTriggerFocus();
        }

        restoreWhatsAppFocusOnClose = true;
      });
    }

    void ensureWhatsAppConversationLoaded({ scrollToTop: true });
  }

  if (shouldPreviewLogin) {
    requestAnimationFrame(() => {
      const trigger = viewRoot.querySelector("[data-login-open]");

      if (trigger instanceof HTMLElement) {
        openLoginModal(trigger);
      }
    });
  }
}

function renderCurrentRoute() {
  const current = normalizeRoute(window.location.hash);
  const rawSlug = window.location.hash.replace(/^#\/?/, "").trim();

  if (rawSlug !== current) {
    history.replaceState(null, "", `#${current}`);
  }

  renderRoute(current);
}

menuButton.addEventListener("click", () => {
  const isOpen = shell.dataset.menuOpen === "true";
  setMenuOpen(!isOpen);
});

nav.addEventListener("click", () => {
  setMenuOpen(false);
});

viewRoot.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof Element)) {
    return;
  }

  const cmrRouteTrigger = target.closest("[data-cmr-target]");

  if (cmrRouteTrigger instanceof HTMLElement) {
    event.preventDefault();
    goToRoute(cmrRouteTrigger.dataset.cmrTarget || defaultRoute);
    return;
  }

  const whatsappQuickReply = target.closest("[data-whatsapp-quick-reply]");

  if (whatsappQuickReply instanceof HTMLElement) {
    event.preventDefault();
    appendWhatsAppMessage(whatsappQuickReply.dataset.whatsappQuickReply || "");
    getWhatsAppInput()?.focus({ preventScroll: true });
    return;
  }

  const whatsappDeleteMessage = target.closest("[data-whatsapp-delete-message]");

  if (whatsappDeleteMessage instanceof HTMLElement) {
    event.preventDefault();
    const message = whatsappDeleteMessage.closest("[data-whatsapp-message]");

    if (message instanceof HTMLElement) {
      deleteWhatsAppMessageNode(message);
    }

    return;
  }

  const whatsappDeleteSelected = target.closest("[data-whatsapp-delete-selected]");

  if (whatsappDeleteSelected instanceof HTMLElement) {
    event.preventDefault();
    deleteSelectedWhatsAppMessages();
    return;
  }

  const whatsappClearSelection = target.closest("[data-whatsapp-clear-selection]");

  if (whatsappClearSelection instanceof HTMLElement) {
    event.preventDefault();
    clearWhatsAppMessageSelection();
    return;
  }

  const whatsappMessage = target.closest("[data-whatsapp-message]");

  if (whatsappMessage instanceof HTMLElement) {
    event.preventDefault();
    toggleWhatsAppMessageSelection(whatsappMessage);
    return;
  }

  const whatsappCloseTrigger = target.closest("[data-whatsapp-close]");

  if (whatsappCloseTrigger instanceof HTMLElement) {
    event.preventDefault();
    closeWhatsAppModal();
    return;
  }

  const whatsappTrigger = target.closest("[data-whatsapp-open]");

  if (whatsappTrigger instanceof HTMLElement) {
    event.preventDefault();
    openWhatsAppModal(whatsappTrigger);
    return;
  }

  const trigger = target.closest("[data-login-open]");

  if (!trigger) {
    const cmrTrigger = target.closest("[data-cmr-ficha-open]");

    if (!cmrTrigger) {
      const whatsappModal = target.closest("[data-whatsapp-modal]");

      if (whatsappModal && target === whatsappModal) {
        closeWhatsAppModal();
      }

      const cmrModal = target.closest("[data-cmr-modal]");

      if (cmrModal && target === cmrModal) {
        closeCmrModal();
      }

      return;
    }

    event.preventDefault();
    openCmrModal(cmrTrigger);
    return;
  }

  event.preventDefault();
  openLoginModal(trigger);
});

viewRoot.addEventListener("submit", (event) => {
  const form = event.target;

  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  if (form.matches("[data-whatsapp-form]")) {
    event.preventDefault();

    const input = form.querySelector("[data-whatsapp-input]");
    const message = input instanceof HTMLInputElement ? input.value.trim() : "";

    if (!message) {
      input?.focus({ preventScroll: true });
      return;
    }

    appendWhatsAppMessage(message);
    form.reset();
    getWhatsAppInput()?.focus({ preventScroll: true });
    return;
  }

  if (!form.matches("[data-form]")) {
    return;
  }

  event.preventDefault();

  const status = form.querySelector("[data-status]");
  const message = formMessages[form.dataset.form] || "Solicitud preparada.";

  if (status) {
    status.textContent = message;
    status.classList.add("is-success");
  }

  form.reset();
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  goToCmrFromLogin();
});

loginCloseButton.addEventListener("click", closeLoginModal);

loginModal.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    closeLoginModal();
  }
});

loginModal.addEventListener("close", () => {
  setLoginTriggerExpanded(false);

  if (restoreLoginFocusOnClose) {
    restoreLoginTriggerFocus();
  }

  restoreLoginFocusOnClose = true;
});

window.addEventListener("hashchange", renderCurrentRoute);

window.addEventListener("resize", () => {
  if (window.innerWidth > 960) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  const modal = getWhatsAppModal();

  if (!modal?.open) {
    return;
  }

  if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) {
    return;
  }

  const activeElement = document.activeElement;
  const selectedMessages = getWhatsAppSelectedMessageNodes();

  if (selectedMessages.length && (event.key === "Delete" || event.key === "Backspace")) {
    if (activeElement instanceof HTMLElement && isTypingElement(activeElement)) {
      return;
    }

    event.preventDefault();
    deleteSelectedWhatsAppMessages();
    return;
  }

  if (activeElement instanceof HTMLElement && activeElement.matches("[data-whatsapp-message]")) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleWhatsAppMessageSelection(activeElement);
      return;
    }

    if ((event.key === "Delete" || event.key === "Backspace") && !selectedMessages.length) {
      event.preventDefault();
      deleteWhatsAppMessageNode(activeElement);
      return;
    }
  }

  if (event.key !== "ArrowUp" && event.key !== "ArrowDown") {
    return;
  }

  const thread = getWhatsAppThread();

  if (!thread) {
    return;
  }

  if (activeElement instanceof HTMLElement) {
    if (isTypingElement(activeElement) || thread.contains(activeElement)) {
      return;
    }
  }

  event.preventDefault();

  const step = Math.max(72, Math.round(thread.clientHeight * 0.18));
  scrollWhatsAppThreadBy(event.key === "ArrowUp" ? -step : step);
});

document.addEventListener("click", (event) => {
  if (window.innerWidth > 960 || shell.dataset.menuOpen !== "true") {
    return;
  }

  const target = event.target;

  if (!(target instanceof Node)) {
    return;
  }

  if (!nav.contains(target) && !menuButton.contains(target)) {
    setMenuOpen(false);
  }
});

if (!window.location.hash) {
  history.replaceState(null, "", `#${defaultRoute}`);
}

renderCurrentRoute();
