/* ============================================================
   PATHLIGHT COUNSELING — Shared Animation System
   ============================================================ */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* ── Page load sequence ─────────────────────────────────
       Nav fades down, h1 up, subhead 0.3s later, CTA 0.5s later.
       All opacity 0→1, duration 0.9s, ease-out. No drama.
    ──────────────────────────────────────────────────────── */
    var header = document.querySelector('.site-header');
    if (header) header.classList.add('anim-nav');

    var h1 = document.querySelector('main h1, #main-content h1, .specialty-hero h1');
    if (h1) h1.classList.add('anim-h1');

    // Subhead: first meaningful p after h1, or known subhead classes
    var sub = (
      document.querySelector('.hero-sub') ||
      document.querySelector('.specialty-hero p') ||
      (h1 && (h1.nextElementSibling && h1.nextElementSibling.matches('p')
        ? h1.nextElementSibling : null))
    );
    if (sub) sub.classList.add('anim-sub');

    // CTA: first btn in hero area
    var cta = (
      document.querySelector('.hero-cta-group a') ||
      document.querySelector('.specialty-hero .btn') ||
      document.querySelector('.hero .btn')
    );
    if (cta) cta.classList.add('anim-cta');

    /* ── Scroll reveal ──────────────────────────────────────
       IntersectionObserver at threshold 0.1.
       opacity 0→1, translateY(16px)→0, 0.9s ease-out.
       One-way: once visible, stays visible. No reversing.
    ──────────────────────────────────────────────────────── */
    var revealSelectors = [
      'h2', 'h3',
      'main p',
      '.card', '.service-card', '.service-item',
      '.faq-item',
      '.staff-card', '.team-member',
      '.why-item',
      '.symptom-item',
      '.testimonial-card',
      '.about-text',
      '.contact-info-row',
      '.stat-item',
      'section > .container > *',
      '.section-inner > *'
    ].join(', ');

    var alreadyAnimated = ['.anim-h1', '.anim-sub', '.anim-cta', '.anim-nav'];

    document.querySelectorAll(revealSelectors).forEach(function (el) {
      // Skip elements already handling their own load animation
      var skip = alreadyAnimated.some(function (cls) {
        return el.classList.contains(cls.replace('.', ''));
      });
      // Skip elements inside the nav
      if (!skip && !header.contains(el)) {
        el.classList.add('reveal');
      }
    });

    // Mark grid/list parents so children stagger
    var groupSelectors = [
      '.services-grid', '.staff-grid', '.why-list',
      '.testimonials-grid', '.symptom-list', '.stats-bar-inner',
      '.footer-grid', '.values-grid', '.programs-grid'
    ].join(', ');

    document.querySelectorAll(groupSelectors).forEach(function (g) {
      g.classList.add('reveal-group');
    });

    // Observe all reveal elements
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // stays visible — no reversal
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal').forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback for old browsers: show everything immediately
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('visible');
      });
    }

  });

})();
