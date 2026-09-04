# AUDAZ × Colares & Estácio — Galeria Corporativa

Galeria fotográfica responsiva para entrega ao cliente, construída como site estático leve para GitHub Pages.

## Estrutura

- `index.html` — interface da entrega
- `styles.css` — identidade, responsividade e motion/UI animation
- `app.js` — galeria, lightbox, seleção e downloads
- `robots.txt` — impede indexação por buscadores
- `.github/workflows/publish.yml` — publica o site e gera o ZIP dos originais

## Fotos

As imagens de navegação são carregadas em versões otimizadas a partir da pasta oficial pública no Google Drive. Os originais permanecem no Drive.

O workflow `Publicar galeria` baixa os originais, cria `Colares-Estacio_Fotos-Corporativas_AUDAZ.zip` e mantém o arquivo disponível como release do GitHub para o botão **Baixar galeria**.

## Atualizar a entrega

Quando novas fotos forem adicionadas à pasta do Drive:

1. Atualize a lista `photos` em `app.js` caso existam novos IDs.
2. Faça push na `main`.
3. O GitHub Actions republica o site e regenera o pacote completo.

## Direção visual

A interface segue a direção aprovada para o AUDAZ Delivery: fotografia como protagonista, pouco texto, mosaico contínuo, tipografia forte, grafite/off-white/vermelho e movimento discreto.
