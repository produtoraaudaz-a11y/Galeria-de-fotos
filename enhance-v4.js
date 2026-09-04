(() => {
  const gallery = document.querySelector('#gallery');
  const lightbox = document.querySelector('#lightbox');
  const heroMosaic = document.querySelector('#heroMosaic');
  if (!gallery || !lightbox) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const cards = () => [...gallery.querySelectorAll('.photo-card')];

  function prepareMotion() {
    cards().forEach((card, index) => {
      card.style.setProperty('--stagger', `${(index % 8) * 52}ms`);
    });
  }

  function targetContainRect(img) {
    const naturalW = img.naturalWidth || img.getBoundingClientRect().width || 1;
    const naturalH = img.naturalHeight || img.getBoundingClientRect().height || 1;
    const ratio = naturalW / naturalH;
    const desktop = window.innerWidth > 640;
    const maxW = Math.max(1, window.innerWidth - (desktop ? 180 : 28));
    const maxH = Math.max(1, window.innerHeight - (desktop ? 112 : 96));

    let width = maxW;
    let height = width / ratio;
    if (height > maxH) {
      height = maxH;
      width = height * ratio;
    }

    return {
      left: (window.innerWidth - width) / 2,
      top: Math.max(14, (window.innerHeight - height) / 2 - (desktop ? 8 : 0)),
      width,
      height
    };
  }

  function morphIntoLightbox(sourceImg) {
    if (!sourceImg || prefersReducedMotion.matches || typeof sourceImg.animate !== 'function') return;

    const source = sourceImg.getBoundingClientRect();
    if (source.width < 2 || source.height < 2) return;

    const clone = sourceImg.cloneNode(true);
    const target = targetContainRect(sourceImg);
    const sourceStyle = getComputedStyle(sourceImg);

    clone.className = 'audaz-lightbox-morph';
    Object.assign(clone.style, {
      left: `${source.left}px`,
      top: `${source.top}px`,
      width: `${source.width}px`,
      height: `${source.height}px`,
      borderRadius: sourceStyle.borderRadius || '8px',
      objectPosition: sourceStyle.objectPosition || 'center center'
    });

    document.body.appendChild(clone);
    lightbox.classList.add('is-morphing');

    const animation = clone.animate([
      {
        left: `${source.left}px`,
        top: `${source.top}px`,
        width: `${source.width}px`,
        height: `${source.height}px`,
        borderRadius: sourceStyle.borderRadius || '8px'
      },
      {
        left: `${target.left}px`,
        top: `${target.top}px`,
        width: `${target.width}px`,
        height: `${target.height}px`,
        borderRadius: '2px'
      }
    ], {
      duration: 560,
      easing: 'cubic-bezier(.16,1,.3,1)',
      fill: 'forwards'
    });

    const finish = () => {
      clone.remove();
      lightbox.classList.remove('is-morphing');
    };

    animation.addEventListener('finish', finish, { once: true });
    animation.addEventListener('cancel', finish, { once: true });
    window.setTimeout(finish, 760);
  }

  function bindMorph(container) {
    if (!container) return;

    container.addEventListener('click', event => {
      if (event.target.closest('.photo-action')) return;
      if (document.body.classList.contains('selection-mode')) return;

      const source = event.target.closest('.photo-card, .hero-card');
      const img = source?.querySelector('img');
      if (!source || !img) return;

      requestAnimationFrame(() => morphIntoLightbox(img));
    });
  }

  prepareMotion();
  bindMorph(gallery);
  bindMorph(heroMosaic);
})();