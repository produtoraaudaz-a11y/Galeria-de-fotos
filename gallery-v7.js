(() => {
  const gallery = document.querySelector('#gallery');
  if (!gallery) return;

  const cards = () => [...gallery.querySelectorAll('.photo-card')];
  let resizeTimer = 0;

  function metrics() {
    const styles = getComputedStyle(gallery);
    return {
      row: parseFloat(styles.gridAutoRows) || 8,
      gap: parseFloat(styles.rowGap) || 20
    };
  }

  function classifyCard(card, index) {
    const img = card.querySelector('img');
    if (!img || !img.naturalWidth || !img.naturalHeight) return;

    const ratio = img.naturalWidth / img.naturalHeight;
    const canBeWide = window.innerWidth >= 920;
    const isLandscape = ratio >= 1.34;

    // Mantém o ritmo editorial sem transformar toda horizontal em banner.
    card.classList.toggle('is-wide', canBeWide && isLandscape && index % 3 !== 1);
  }

  function sizeCard(card) {
    const img = card.querySelector('img');
    if (!img) return;

    const { row, gap } = metrics();
    card.style.gridRowEnd = 'auto';

    const imageHeight = img.getBoundingClientRect().height;
    const span = Math.max(1, Math.ceil((imageHeight + gap) / (row + gap)));
    card.style.gridRowEnd = `span ${span}`;
  }

  function layoutCard(card, index) {
    classifyCard(card, index);
    requestAnimationFrame(() => sizeCard(card));
  }

  function layoutAll() {
    cards().forEach(layoutCard);
  }

  function prepare() {
    cards().forEach((card, index) => {
      card.style.setProperty('--stagger', `${(index % 8) * 45}ms`);
      const img = card.querySelector('img');
      if (!img) return;

      const update = () => layoutCard(card, index);
      if (img.complete && img.naturalWidth) update();
      else img.addEventListener('load', update, { once: true });
    });

    requestAnimationFrame(layoutAll);
    setTimeout(layoutAll, 250);
    setTimeout(layoutAll, 900);
  }

  const resizeObserver = 'ResizeObserver' in window
    ? new ResizeObserver(() => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(layoutAll, 80);
      })
    : null;

  if (resizeObserver) resizeObserver.observe(gallery);

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layoutAll, 120);
  }, { passive: true });

  prepare();
})();
