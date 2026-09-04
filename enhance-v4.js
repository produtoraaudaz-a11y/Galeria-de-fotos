(() => {
  const gallery = document.querySelector('#gallery');
  const lightbox = document.querySelector('#lightbox');
  const heroMosaic = document.querySelector('#heroMosaic');
  if (!gallery || !lightbox) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const cards = () => [...gallery.querySelectorAll('.photo-card')];
  let resizeTimer = 0;

  function masonryMetrics() {
    const styles = getComputedStyle(gallery);
    const row = parseFloat(styles.gridAutoRows) || 8;
    const gap = parseFloat(styles.rowGap) || 0;
    return { row, gap };
  }

  function sizeCard(card) {
    const img = card.querySelector('img');
    if (!img) return;

    const { row, gap } = masonryMetrics();
    card.style.gridRowEnd = 'auto';

    const height = Math.max(img.getBoundingClientRect().height, card.scrollHeight, 1);
    const span = Math.max(1, Math.ceil((height + gap) / (row + gap)));
    const next = `span ${span}`;

    if (card.style.gridRowEnd !== next) card.style.gridRowEnd = next;
  }

  function layoutAll() {
    cards().forEach(sizeCard);
  }

  function prepareMasonry() {
    cards().forEach((card, index) => {
      card.style.setProperty('--stagger', `${(index % 7) * 48}ms`);
      const img = card.querySelector('img');
      if (!img) return;

      const update = () => requestAnimationFrame(() => sizeCard(card));
      if (img.complete && img.naturalWidth) update();
      else img.addEventListener('load', update, { once: true });
    });

    requestAnimationFrame(layoutAll);
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

      // O listener original abre o lightbox no mesmo clique. O clone fica acima
      // dele por alguns milissegundos e cria a continuidade visual grid → tela cheia.
      requestAnimationFrame(() => morphIntoLightbox(img));
    });
  }

  prepareMasonry();
  bindMorph(gallery);
  bindMorph(heroMosaic);

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(layoutAll, 120);
  }, { passive: true });

  window.addEventListener('load', () => {
    window.setTimeout(layoutAll, 80);
    window.setTimeout(layoutAll, 500);
  }, { once: true });
})();