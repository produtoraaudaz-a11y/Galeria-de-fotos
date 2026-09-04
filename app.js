const RELEASE_ZIP = 'https://github.com/produtoraaudaz-a11y/Galeria-de-fotos/releases/latest/download/Colares-Estacio_Fotos-Corporativas_AUDAZ.zip';

const photos = [
  { id: '1F3Wpj7thsGskdyIBfwR3IvYjs4MpPYO8', name: 'DSC05830.jpg' },
  { id: '10pDhLiu7fAQenErQA8UWhKkDunU5rU9v', name: 'DSC05833.jpg' },
  { id: '1xIVCOa8D9006Ru8t6-058OVR-_RU4tbX', name: 'DSC05840.jpg' },
  { id: '1icdi2tvGePM15tscuNVDc06xVyIYv7gd', name: 'DSC05844.jpg' },
  { id: '1SeDS0JRbgmZddofEWJ3vbpOA9y2Fdfx_', name: 'DSC05854.jpg' },
  { id: '1bnJx-XBKaJbXGoCx_ykSYY8RGrQpLYv5', name: 'DSC05857.jpg' },
  { id: '1ijeY4sEfA_kgyOmvL--bDrSC94SH2uf_', name: 'DSC05868.jpg' },
  { id: '1XA1xqKzHEofA0entGjiCDhZMfrrRK3SJ', name: 'DSC05872.jpg' },
  { id: '1WB3xDlJlKwi-uh5_6kmUbEyudfM6x11I', name: 'DSC05878.jpg' },
  { id: '18ux5Sblpbh0HD7snA5tBo9HsUfSIzTgQ', name: 'DSC05885.jpg' },
  { id: '1_0RHrkmgoD0zM8BGi2ErFLcjAWUIWh_l', name: 'DSC05892.jpg' },
  { id: '1btsVbqGJm31I_GuijAd_ltKX2Kt5k-K8', name: 'DSC05899.jpg' },
  { id: '1l-LdZ5ySIfLjZyfYHbzt-_NdJKWv2rHu', name: 'DSC05902.jpg' },
  { id: '1xWiYBafRAEFV-WAiFePmE626IimsQe2v', name: 'DSC05908.jpg' },
  { id: '18ZZRdZ5SFiy4Kt5Vwn_qTrFtpyJyYo1w', name: 'DSC05914.jpg' },
  { id: '1ykEdTx-eeA3Q1wjKjlsTNyJ2RiHAYgmf', name: 'DSC05919.jpg' },
  { id: '1_2Z0MPPyWOaM0koK94mQbagUjwnQACMl', name: 'DSC05922.jpg' },
  { id: '1OW6AhcuZwkwhKZ2PRt8cjqd_wNKpl9_O', name: 'DSC05937.jpg' },
  { id: '1BGMzmvIrxZLaLsUCq6CIZdYnbOzM5lta', name: 'DSC05953.jpg' },
  { id: '1YIG7heoS_N5u3oRpdAtrMyEGa7VRDMU7', name: 'DSC05960.jpg' },
  { id: '19IDrJvhfMLZaDqtaPqUcWPSmbDJbOWpt', name: 'DSC05963.jpg' },
  { id: '19DwYki8OwDH950RuQMUYOkDlnTcA9tmx', name: 'DSC05969.jpg' },
  { id: '1fDBlbNEHkhSJA5lGHxF9ZpPyvNs0vHtW', name: 'DSC05973.jpg' },
  { id: '1r9c_mUCOq9CgI7IywOuREJJsvAzoNo3D', name: 'DSC05974.jpg' },
  { id: '1hawfw0zfJTT8T6hZTyHj6_cNu-xtL12O', name: 'DSC05985.jpg' },
  { id: '1-BLuMlZ_xMXspK-pvPxZ_oOQNGBrcdBm', name: 'DSC05990.jpg' },
  { id: '1IBOZBhE3V7gNxgaeRSMDPLhi2UpLrzcb', name: 'DSC05995-Editar.jpg' },
  { id: '1UYAVzi5U1Y-L4iUILhQTxX6-3pWMH-rk', name: 'DSC05999-Editar.jpg' },
  { id: '1Qzzthe7kf7EwKJW9gO47wEOaMYcm-woW', name: 'DSC06005-Editar.jpg' },
  { id: '17b7Cfwi9eZJyMW4UbATa_d3oR3j3BkSI', name: 'DSC06015.jpg' },
  { id: '1sLvfq88PrwX4KLFCOWs7qC4OK-Ajs8bR', name: 'DSC06022.jpg' },
  { id: '1pcw5a-oecE2axB2BTMAWv2EAhEu21Bpi', name: 'DSC06025-Editar.jpg' },
  { id: '1yaSNTRzYZ_69RKnPE-uigoQbAvfbGMPZ', name: 'DSC06028-Editar.jpg' },
  { id: '12_MNkxttZpXvYfPCmLJ8jxpcdQ7ZYGCC', name: 'DSC06029-Editar.jpg' },
  { id: '194-RWc-DjjPIovRaeSh48boX3sNKcFVK', name: 'DSC06033-Editar.jpg' },
  { id: '1v1TWZWi3iKWWKfI6SdT3_ckFs2lstqXz', name: 'DSC06037-Editar.jpg' },
  { id: '1yw3wfJvQtCoSJqv6x-sgfvfM2exaCRfn', name: 'DSC06044.jpg' },
  { id: '1vtHQZHb5DfiTL6Sk8f4EsRKIxySVMy9D', name: 'DSC06050-Editar.jpg' },
  { id: '1dKso2kvNgNmh0Mf7PuHXDbSnkzaiv3jI', name: 'DSC06056-Editar.jpg' },
  { id: '1Z6detQgtWCU6X0AWXHX4kP-G39KzvCqM', name: 'DSC06078.jpg' },
  { id: '16BPDKrL_xg5ZK3SNV7DKHl1ewmHxtsX9', name: 'DSC06105-Editar.jpg' }
];

const galleryOrder = [0,19,30,8,25,4,34,12,22,39,6,28,16,36,10,32,2,24,14,40,18,7,27,1,31,11,35,5,29,15,37,9,33,20,3,26,13,38,21,17,23];
const displayPhotos = galleryOrder.map(index => photos[index]);

const heroPhotoIds = [
  '1YIG7heoS_N5u3oRpdAtrMyEGa7VRDMU7',
  '1Z6detQgtWCU6X0AWXHX4kP-G39KzvCqM',
  '1sLvfq88PrwX4KLFCOWs7qC4OK-Ajs8bR'
];

const state = { selectionMode: false, selected: new Set(), currentIndex: 0, lastFocused: null };
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const gallery = $('#gallery');
const heroMosaic = $('#heroMosaic');
const selectionToggle = $('#selectionToggle');
const selectionBar = $('#selectionBar');
const selectionCount = $('#selectionCount');
const selectionClear = $('#selectionClear');
const selectionDownload = $('#selectionDownload');
const siteHeader = $('#siteHeader');
const toast = $('#toast');
const lightbox = $('#lightbox');
const lightboxImage = $('#lightboxImage');
const lightboxName = $('#lightboxName');
const lightboxDownload = $('#lightboxDownload');
const lightboxClose = $('#lightboxClose');
const lightboxPrev = $('#lightboxPrev');
const lightboxNext = $('#lightboxNext');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function thumbUrl(id, size = 1800) { return `https://drive.google.com/thumbnail?id=${encodeURIComponent(id)}&sz=w${size}`; }
function downloadUrl(id) { return `https://drive.google.com/uc?export=download&id=${encodeURIComponent(id)}`; }
function photoById(id) { return photos.find(photo => photo.id === id); }
function displayIndexById(id) { return displayPhotos.findIndex(photo => photo.id === id); }

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('is-visible'), 2400);
}

function heroButton(photo, index, modifier = '') {
  return `<button class="hero-card ${modifier}" style="--i:${index}" type="button" data-photo-id="${photo.id}" aria-label="Abrir ${photo.name}">
    <img src="${thumbUrl(photo.id, 1800)}" alt="Fotografia corporativa Colares & Estácio" decoding="async" />
  </button>`;
}

function renderHero() {
  const [lead, second, third] = heroPhotoIds.map(photoById);
  heroMosaic.innerHTML = `${heroButton(lead, 0, 'hero-card--lead')}<div class="hero-stack">${heroButton(second, 1)}${heroButton(third, 2)}</div>`;
  $$('.hero-card', heroMosaic).forEach(card => card.addEventListener('click', () => openLightbox(displayIndexById(card.dataset.photoId), card)));
}

function photoCardMarkup(photo, index) {
  return `<figure class="photo-card" data-index="${index}" data-id="${photo.id}" tabindex="0" aria-label="Abrir ${photo.name}" style="--stagger:${(index % 8) * 45}ms">
    <img src="${thumbUrl(photo.id)}" alt="Fotografia corporativa Colares & Estácio" loading="lazy" decoding="async" />
    <div class="photo-actions">
      <button class="photo-action photo-action--select" type="button" aria-label="Selecionar ${photo.name}" title="Selecionar"></button>
      <a class="photo-action photo-action--download" href="${downloadUrl(photo.id)}" aria-label="Baixar ${photo.name}" title="Baixar original" download="${photo.name}">↓</a>
    </div>
  </figure>`;
}

function renderGallery() {
  gallery.innerHTML = displayPhotos.map(photoCardMarkup).join('');
  $$('.photo-card', gallery).forEach(card => {
    const index = Number(card.dataset.index);
    const selectButton = $('.photo-action--select', card);
    const downloadButton = $('.photo-action--download', card);
    card.addEventListener('click', event => {
      if (event.target.closest('.photo-action')) return;
      state.selectionMode ? toggleSelection(index) : openLightbox(index, card);
    });
    card.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      state.selectionMode ? toggleSelection(index) : openLightbox(index, card);
    });
    selectButton.addEventListener('click', event => {
      event.stopPropagation();
      if (!state.selectionMode) setSelectionMode(true);
      toggleSelection(index);
    });
    downloadButton.addEventListener('click', event => event.stopPropagation());
  });
  observeReveals();
}

function setSelectionMode(enabled) {
  state.selectionMode = enabled;
  document.body.classList.toggle('selection-mode', enabled);
  selectionToggle.setAttribute('aria-pressed', String(enabled));
  selectionToggle.textContent = enabled ? 'Concluir seleção' : 'Selecionar fotos';
}

function toggleSelection(index) {
  const photo = displayPhotos[index];
  if (!photo) return;
  state.selected.has(photo.id) ? state.selected.delete(photo.id) : state.selected.add(photo.id);
  $(`.photo-card[data-id="${photo.id}"]`, gallery)?.classList.toggle('is-selected', state.selected.has(photo.id));
  updateSelectionBar();
}

function clearSelection() {
  state.selected.clear();
  $$('.photo-card.is-selected', gallery).forEach(card => card.classList.remove('is-selected'));
  updateSelectionBar();
}

function updateSelectionBar() {
  const count = state.selected.size;
  selectionCount.textContent = String(count);
  selectionBar.classList.toggle('is-visible', count > 0);
  selectionBar.setAttribute('aria-hidden', String(count === 0));
}

function downloadSelectedPhotos() {
  const selected = displayPhotos.filter(photo => state.selected.has(photo.id));
  if (!selected.length) return;
  showToast(selected.length > 1 ? 'O navegador pode pedir permissão para vários downloads.' : 'Preparando download original.');
  selected.forEach((photo, index) => {
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = downloadUrl(photo.id);
      link.download = photo.name;
      link.rel = 'noopener';
      document.body.appendChild(link);
      link.click();
      link.remove();
    }, index * 300);
  });
}

function targetRectFor(img) {
  const ratio = (img.naturalWidth || 1) / (img.naturalHeight || 1);
  const maxW = window.innerWidth - (window.innerWidth > 640 ? 180 : 28);
  const maxH = window.innerHeight - (window.innerWidth > 640 ? 110 : 88);
  let width = maxW;
  let height = width / ratio;
  if (height > maxH) { height = maxH; width = height * ratio; }
  return { left: (window.innerWidth - width) / 2, top: (window.innerHeight - height) / 2, width, height };
}

function morphFrom(trigger) {
  const sourceImg = trigger?.querySelector('img');
  if (!sourceImg || reducedMotion.matches || typeof sourceImg.animate !== 'function') return;
  const source = sourceImg.getBoundingClientRect();
  if (source.width < 2 || source.height < 2) return;
  const target = targetRectFor(sourceImg);
  const clone = sourceImg.cloneNode(true);
  clone.className = 'lightbox-morph';
  Object.assign(clone.style, { left: `${source.left}px`, top: `${source.top}px`, width: `${source.width}px`, height: `${source.height}px`, borderRadius: '12px' });
  document.body.appendChild(clone);
  const animation = clone.animate([
    { left: `${source.left}px`, top: `${source.top}px`, width: `${source.width}px`, height: `${source.height}px`, borderRadius: '12px' },
    { left: `${target.left}px`, top: `${target.top}px`, width: `${target.width}px`, height: `${target.height}px`, borderRadius: '2px' }
  ], { duration: 480, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'forwards' });
  const finish = () => clone.remove();
  animation.addEventListener('finish', finish, { once: true });
  animation.addEventListener('cancel', finish, { once: true });
  setTimeout(finish, 650);
}

function openLightbox(index, trigger) {
  const photo = displayPhotos[index];
  if (!photo) return;
  state.currentIndex = index;
  state.lastFocused = trigger || document.activeElement;
  lightboxImage.classList.remove('is-ready');
  lightboxImage.src = thumbUrl(photo.id, 2600);
  lightboxImage.alt = `Fotografia corporativa Colares & Estácio — ${photo.name}`;
  lightboxName.textContent = photo.name;
  lightboxDownload.href = downloadUrl(photo.id);
  lightboxDownload.setAttribute('download', photo.name);
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  morphFrom(trigger);
  requestAnimationFrame(() => lightboxClose.focus({ preventScroll: true }));
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lightboxImage.classList.remove('is-ready');
  state.lastFocused?.focus?.({ preventScroll: true });
}

function stepLightbox(direction) {
  const next = (state.currentIndex + direction + displayPhotos.length) % displayPhotos.length;
  openLightbox(next, state.lastFocused);
}

function observeReveals() {
  const targets = [...$$('.photo-card'), ...$$('.reveal')];
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '100px 0px', threshold: .04 });
  targets.forEach(el => observer.observe(el));
}

function bindEvents() {
  window.addEventListener('scroll', () => siteHeader.classList.toggle('is-scrolled', window.scrollY > 24), { passive: true });
  selectionToggle.addEventListener('click', () => setSelectionMode(!state.selectionMode));
  selectionClear.addEventListener('click', clearSelection);
  selectionDownload.addEventListener('click', downloadSelectedPhotos);
  lightboxImage.addEventListener('load', () => lightboxImage.classList.add('is-ready'));
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', () => stepLightbox(-1));
  lightboxNext.addEventListener('click', () => stepLightbox(1));
  lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', event => {
    if (!lightbox.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') stepLightbox(-1);
    if (event.key === 'ArrowRight') stepLightbox(1);
  });
  $$('.js-download-all').forEach(link => {
    link.href = RELEASE_ZIP;
    link.addEventListener('click', () => showToast('Abrindo o pacote completo em alta resolução.'));
  });
}

renderHero();
renderGallery();
bindEvents();
