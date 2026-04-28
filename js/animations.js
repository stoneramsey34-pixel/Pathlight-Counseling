/* ============================================================
   PATHLIGHT COUNSELING — Animation System
   ============================================================ */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* ── 1. Page load sequence ──────────────────────────────
       Add body.loaded after 100ms. CSS handles the transitions:
       nav 0.7s, h1 0.9s delay 0.2s, sub delay 0.4s, cta 0.6s
    ──────────────────────────────────────────────────────── */
    setTimeout(function () {
      document.body.classList.add('loaded');
    }, 100);

    // Tag the first h1 in main content
    var h1 = document.querySelector(
      'main h1, #main-content h1, .specialty-hero h1, [role="main"] h1'
    );
    if (h1) h1.classList.add('page-load-h1');

    // Tag the subhead — first p that follows h1, or known subhead classes
    var sub = (
      document.querySelector('.hero-sub') ||
      document.querySelector('.specialty-hero p') ||
      (h1 && h1.nextElementSibling && h1.nextElementSibling.tagName === 'P'
        ? h1.nextElementSibling
        : null)
    );
    if (sub) sub.classList.add('page-load-sub');

    // Tag the first CTA button in the hero or main area
    var cta = (
      document.querySelector('.hero-cta-group a') ||
      document.querySelector('.specialty-hero a.btn') ||
      document.querySelector('main .btn-primary')
    );
    if (cta) cta.classList.add('page-load-cta');


    /* ── 2. Scroll reveals ──────────────────────────────────
       IntersectionObserver at threshold 0.1.
       Adds .vis to elements with .rv when they enter viewport.
       One-way: once visible, stays visible.
    ──────────────────────────────────────────────────────── */
    var revealTargets = [
      'main h2',
      'main h3',
      'main p',
      '.card',
      '.service-card',
      '.service-item',
      '.faq-item',
      '.staff-card',
      '.team-member',
      '.why-item',
      '.symptom-item',
      '.testimonial-card',
      '.about-text',
      '.contact-info-row',
      '.stat-item',
      'section > .container > *',
      '.section-inner > *'
    ];

    var nav = document.querySelector('.site-header');

    document.querySelectorAll(revealTargets.join(', ')).forEach(function (el) {
      // Skip the h1, subhead, and cta already handled by load sequence
      var isLoadEl = (
        el.classList.contains('page-load-h1') ||
        el.classList.contains('page-load-sub') ||
        el.classList.contains('page-load-cta')
      );
      // Skip anything inside the nav
      var inNav = nav && nav.contains(el);

      if (!isLoadEl && !inNav) {
        el.classList.add('rv');
      }
    });

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis');
            observer.unobserve(entry.target); // one-way: stays visible
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.rv').forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show everything immediately
      document.querySelectorAll('.rv').forEach(function (el) {
        el.classList.add('vis');
      });
    }


    /* ── 3. Sticky nav ──────────────────────────────────────
       Add .scrolled to nav and header after 60px scroll.
       CSS handles the visual transition (0.4s ease).
    ──────────────────────────────────────────────────────── */
    var navEl = document.querySelector('nav') || document.querySelector('.nav-menu');
    var headerEl = document.querySelector('.site-header');
    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrolled = window.pageYOffset > 60;
          if (navEl) navEl.classList.toggle('scrolled', scrolled);
          if (headerEl) headerEl.classList.toggle('scrolled', scrolled);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

  });

})();
