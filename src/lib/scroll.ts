'use client';

/**
 * High-performance smooth scrolling utility that coordinates with Lenis.
 * Avoids browser native smooth scroll fighting with Lenis.
 */
export function scrollToId(id: string, offset: number = -85) {
  if (typeof window === 'undefined') return;

  const lenis = (window as any).__lenis;

  if (lenis && typeof lenis.scrollTo === 'function') {
    lenis.scrollTo(`#${id}`, {
      offset,
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      immediate: false
    });
  } else {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  }
}

export function scrollToTop() {
  if (typeof window === 'undefined') return;

  const lenis = (window as any).__lenis;

  if (lenis && typeof lenis.scrollTo === 'function') {
    lenis.scrollTo(0, {
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      immediate: false
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
