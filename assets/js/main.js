/* Bürki Umzüge und Transporte — shared layout + interactions */
(function () {
  const PHONE = "033 654 04 89";
  const PHONE_HREF = "tel:+41336540489";
  const MOBILE = "079 311 00 65";
  const MOBILE_HREF = "tel:+41793110065";
  const EMAIL = "buerki.umzuege@hispeed.ch";
  const WHATSAPP_HREF = "https://wa.me/41793110065?text=" + encodeURIComponent("Grüezi, ich interessiere mich für einen Umzug.");

  const icons = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.19-.31a8.19 8.19 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.24-8.24M8.53 6.98c-.16 0-.43.06-.66.31s-.87.86-.87 2.07.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.26 3.73.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.36-.78-1.86-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.47-.01Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    chevron: '<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>'
  };

  const nav = [
    { href: "index.html", label: "Start", key: "start" },
    { href: "ueber-uns.html", label: "Über uns", key: "ueber-uns" },
    {
      href: "angebot.html", label: "Angebot", key: "angebot",
      children: [
        { href: "privatumzuege.html", label: "Privatumzüge" },
        { href: "moebeltransportlogistik.html", label: "Umzugs- und Möbeltransportlogistik" },
        { href: "geschaeftsumzuege.html", label: "Geschäftsumzüge" },
        { href: "moebellagerungen.html", label: "Möbellagerungen" },
        { href: "umzugs-checkliste.html", label: "Umzugs-Checkliste" }
      ]
    },
    { href: "preise.html", label: "Preise", key: "preise" },
    { href: "jobangebot.html", label: "Jobangebot", key: "jobangebot" },
    { href: "kontakt.html", label: "Kontakt", key: "kontakt" }
  ];

  function renderHeader(active) {
    const navItems = nav.map(item => {
      const isActive = item.key === active;
      if (item.children) {
        return `<li class="has-dropdown${isActive ? " active" : ""}">
          <a href="${item.href}" class="nav-link">${item.label} ${icons.chevron}</a>
          <div class="dropdown">
            ${item.children.map(c => `<a href="${c.href}">${c.label}</a>`).join("")}
          </div>
        </li>`;
      }
      return `<li${isActive ? ' class="active"' : ""}><a href="${item.href}" class="nav-link">${item.label}</a></li>`;
    }).join("");

    return `
    <div class="top-bar">
      <div class="container">
        <div class="top-links">
          <a href="${PHONE_HREF}">${icons.phone} ${PHONE}</a>
          <a href="mailto:${EMAIL}">${icons.mail} ${EMAIL}</a>
          <span>${icons.pin} Fischerweg 5, CH-3700 Spiez</span>
        </div>
        <span>${icons.clock} Anrufszeiten: täglich ab 16:00 Uhr</span>
      </div>
    </div>
    <header class="site-header">
      <div class="container nav-wrap">
        <a href="index.html" class="brand">
          <img src="assets/img/logo.png" alt="Bürki Umzüge und Transporte">
        </a>
        <nav class="main-nav" id="mainNav">
          <ul>${navItems}</ul>
        </nav>
        <div class="header-cta">
          <a href="${WHATSAPP_HREF}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm" aria-label="Auf WhatsApp schreiben"><span class="long">${icons.whatsapp} WhatsApp</span></a>
          <a href="${PHONE_HREF}" class="btn btn-ghost btn-sm"><span class="long">${icons.phone} Jetzt anrufen</span></a>
          <a href="kontakt.html" class="btn btn-primary btn-sm">Offerte anfragen</a>
          <button class="nav-toggle" id="navToggle" aria-label="Menü öffnen"><span></span><span></span><span></span></button>
        </div>
      </div>
    </header>`;
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="assets/img/logo.png" alt="Bürki Umzüge und Transporte">
            <p>Ihre Umzugsfirma in Thun, Spiez und Interlaken. Seit 1995 zuverlässig unterwegs in der ganzen Schweiz und Europa.</p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>
              <li><a href="index.html">Start</a></li>
              <li><a href="ueber-uns.html">Über uns</a></li>
              <li><a href="angebot.html">Angebot</a></li>
              <li><a href="preise.html">Preise</a></li>
              <li><a href="jobangebot.html">Jobangebot</a></li>
              <li><a href="kontakt.html">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h4>Leistungen</h4>
            <ul>
              <li><a href="privatumzuege.html">Privatumzüge</a></li>
              <li><a href="geschaeftsumzuege.html">Geschäftsumzüge</a></li>
              <li><a href="moebeltransportlogistik.html">Möbeltransportlogistik</a></li>
              <li><a href="moebellagerungen.html">Möbellagerungen</a></li>
              <li><a href="umzugs-checkliste.html">Umzugs-Checkliste</a></li>
            </ul>
          </div>
          <div>
            <h4>Kontakt</h4>
            <ul class="footer-contact">
              <li>${icons.pin}<span>Fischerweg 5<br>CH-3700 Spiez</span></li>
              <li>${icons.phone}<a href="${PHONE_HREF}">${PHONE}</a></li>
              <li>${icons.phone}<a href="${MOBILE_HREF}">${MOBILE} (Mobile)</a></li>
              <li>${icons.whatsapp}<a href="${WHATSAPP_HREF}" target="_blank" rel="noopener">WhatsApp schreiben</a></li>
              <li>${icons.mail}<a href="mailto:${EMAIL}">${EMAIL}</a></li>
              <li>${icons.clock}<span>Anrufszeiten: täglich ab 16:00 Uhr</span></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${year} Bürki Umzüge und Transporte, Hansueli Bürki</span>
          <div class="footer-legal">
            <a href="impressum.html">Impressum</a>
            <a href="datenschutz.html">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
    <div class="floating-actions">
      <a href="${WHATSAPP_HREF}" target="_blank" rel="noopener" class="floating-btn floating-whatsapp" aria-label="Auf WhatsApp schreiben">${icons.whatsapp}</a>
      <a href="${PHONE_HREF}" class="floating-btn floating-call" aria-label="Anrufen">${icons.phone}</a>
    </div>`;
  }

  function init() {
    const active = document.body.getAttribute("data-active") || "";
    const headerMount = document.getElementById("site-header");
    const footerMount = document.getElementById("site-footer");
    if (headerMount) headerMount.outerHTML = renderHeader(active);
    if (footerMount) footerMount.outerHTML = renderFooter();

    const toggle = document.getElementById("navToggle");
    const mainNav = document.getElementById("mainNav");
    if (toggle && mainNav) {
      toggle.addEventListener("click", () => {
        toggle.classList.toggle("open");
        mainNav.classList.toggle("open");
      });
    }
    document.querySelectorAll(".has-dropdown > .nav-link").forEach(link => {
      link.addEventListener("click", (e) => {
        if (window.innerWidth <= 760) {
          e.preventDefault();
          link.parentElement.classList.toggle("open");
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
