/* ============================================
   PATHLIGHT COUNSELING — Main JavaScript
   Guide: Therapy Website Conversion Guide v2026
   ============================================ */

(function () {
  'use strict';

  // ── Hamburger Menu ────────────────────────────────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const navMenu   = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      const open = navMenu.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on any nav link click
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── Sticky Header — hide on scroll down, show on scroll up ───────────────
  // Guide: sticky mobile header with phone number
  const header = document.querySelector('.site-header');
  let lastScroll = 0;
  let ticking    = false;

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > 120) {
          header && header.classList.add('hidden');
        } else {
          header && header.classList.remove('hidden');
        }
        if (currentScroll > 40) {
          header && header.classList.add('scrolled');
        } else {
          header && header.classList.remove('scrolled');
        }
        lastScroll = currentScroll <= 0 ? 0 : currentScroll;
        ticking = false;
      });
      ticking = true;
    }
  });

  // ── FAQ Accordion ─────────────────────────────────────────────────────────
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('is-open');

      // Close all open items
      document.querySelectorAll('.faq-item.is-open').forEach(function (open) {
        open.classList.remove('is-open');
        open.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Toggle the clicked item
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ── Contact Form — client-side validation ────────────────────────────────
  // Guide: max 4 fields; form submission triggers auto-reply via Formspree
  const forms = document.querySelectorAll('.contact-form');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      let valid = true;

      form.querySelectorAll('[required]').forEach(function (field) {
        const val = field.value.trim();
        if (!val) {
          field.style.borderColor = '#E74C3C';
          field.setAttribute('aria-invalid', 'true');
          valid = false;
        } else {
          field.style.borderColor = '';
          field.setAttribute('aria-invalid', 'false');
        }
      });

      if (!valid) {
        e.preventDefault();
        const firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Show loading state
      const submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Sending…';
        submitBtn.disabled = true;
      }
    });
  });

  // ── Smooth scroll for anchor links ───────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = (header ? header.offsetHeight : 0) + 16;
        const top    = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ── Lazy loading fallback (for browsers without native support) ───────────
  if ('loading' in HTMLImageElement.prototype === false) {
    const imgs = document.querySelectorAll('img[loading="lazy"]');
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    });
    imgs.forEach(function (img) { observer.observe(img); });
  }

})();
