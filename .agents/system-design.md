# System Design

## 1. Objetivo

Definir a linguagem visual, experiência, interação e engenharia front-end da landing page, inspirada nos princípios estéticos do Gentle Monster, no qual irá se chamar de Gentle Beast, sem copiar literalmente sua identidade, textos, imagens ou componentes proprietários.

**Objetivo visual:** criar uma experiência premium, minimalista, editorial, cinematográfica, experimental e tecnológica.

> A interface deve desaparecer e deixar a experiência da marca assumir o protagonismo.

---

## 2. Direção de Arte

A estética deve combinar:

- Luxury Minimalism
- Editorial Design
- Contemporary Fashion
- Surrealism
- Digital Art
- Cinematic Experience
- Technology

A página deve parecer uma **experiência de marca**, não um dashboard, SaaS, template genérico ou e-commerce convencional.

### Princípio visual

A hierarquia deve seguir:

```text
IMAGEM / EXPERIÊNCIA
        ↓
PRODUTO / CONCEITO
        ↓
NARRATIVA
        ↓
INTERAÇÃO
        ↓
INTERFACE
```

---

## 3. Minimalismo

Minimalismo significa usar espaço, contraste e hierarquia de forma intencional.

- Usar bastante espaço negativo.
- Não preencher áreas vazias sem necessidade.
- Manter poucos elementos competindo pelo foco.
- Criar um ponto visual dominante por viewport.
- Evitar excesso de cards, botões e informações.

**Minimalismo deve gerar impacto, não sensação de vazio.**

---

## 4. Cores

Utilizar uma paleta extremamente controlada:

- Preto
- Branco
- Off-white
- Cinza

As imagens e campanhas podem introduzir outras cores.

A interface não deve competir com a fotografia.

Evitar:

- Gradientes excessivos.
- Cores neon sem propósito.
- Sombras coloridas.
- Muitos elementos de destaque.

---

## 5. Tipografia

A tipografia deve ser:

- limpa;
- moderna;
- neutra;
- minimalista;
- legível.

Utilizar poucas famílias e definir níveis consistentes:

```text
Display
Heading
Body
Caption
Label
```

Escala inicial:

```text
Display: 64–96px
Heading: 32–48px
Body: 14–16px
Caption: 11–13px
Label: 10–12px
```

Usar `clamp()` para responsividade quando apropriado.

Evitar fontes decorativas e excesso de pesos.

---

## 6. Espaçamento e Grid

Utilizar um sistema consistente de espaçamento:

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 32px;
--space-xl: 64px;
--space-2xl: 128px;
```

O grid deve permitir:

- alinhamento;
- assimetria controlada;
- sobreposição;
- imagens grandes;
- composição editorial.

A assimetria deve parecer proposital.

---

## 7. Imagens e Vídeos

Imagens são elementos centrais da interface.

Podem funcionar como:

- Hero;
- Background;
- Campanha;
- Produto;
- Narrativa;
- Transição;
- Elemento interativo.

Priorizar imagens grandes e impactantes.

Seções importantes podem utilizar a viewport inteira:

```css
min-height: 100svh;
```

Vídeos devem ser utilizados como parte da direção de arte, preferencialmente com:

- autoplay;
- muted;
- loop;
- playsinline;
- poster;
- fonte específica para mobile quando necessário.

Vídeos não devem bloquear o carregamento inicial.

---

## 8. Hero

O Hero deve ser o elemento de maior impacto da página.

Hierarquia:

```text
IMAGEM / VÍDEO
      ↓
TÍTULO
      ↓
DESCRIÇÃO
      ↓
CTA
```

Evitar:

- excesso de texto;
- múltiplos CTAs;
- badges;
- cards;
- elementos promocionais.

---

## 9. Navegação

A navegação deve ser discreta e não competir com o conteúdo.

Características:

- tipografia pequena;
- espaçamento generoso;
- poucos elementos;
- ícones simples;
- alto contraste quando necessário.

O menu deve transmitir uma sensação editorial, não de mega-menu corporativo.

---

## 10. Storytelling

A página deve contar uma história visual.

Evitar:

```text
Hero
↓
Cards
↓
Cards
↓
Cards
↓
Footer
```

Preferir:

```text
Hero
↓
Introdução
↓
Visual Statement
↓
Conceito
↓
Produto / Feature
↓
Story
↓
Interação
↓
Declaração Final
↓
CTA
```

Cada seção deve ter uma função narrativa.

---

## 11. Collections e Conteúdo

Coleções ou conceitos importantes devem funcionar como **mundos visuais**.

Estrutura:

```text
Collection
├── Hero
├── Concept
├── Campaign
├── Story
├── Products
└── CTA
```

Não reduzir uma coleção apenas a um grid de produtos.

Conteúdo e apresentação devem ser separados.

Exemplo:

```js
const collection = {
    title: "Collection Name",
    description: "Collection description",
    hero: "/images/hero.webp",
    campaign: "/images/campaign.webp",
    products: []
};
```

---

## 12. Experiência de Produto

Produtos devem ser apresentados como objetos de design.

Evitar cards tradicionais com excesso de informação.

Preferir:

```text
┌───────────────────────────────┐
│                               │
│          PRODUCT IMAGE        │
│                               │
│                               │
│ PRODUCT NAME             →    │
│ PRICE                         │
└───────────────────────────────┘
```

Informações secundárias podem ser reveladas progressivamente.

Cards devem ser utilizados somente quando realmente necessários.

---

## 13. Motion Design

Motion deve ser:

- suave;
- lento;
- preciso;
- discreto;
- intencional.

> Motion should communicate, not decorate.

Usar animações para:

- Reveal;
- Transition;
- Discover;
- Navigate;
- Focus.

Evitar animações apenas decorativas.

### Animações preferenciais

Priorizar:

```css
transform
opacity
```

Evitar animar frequentemente:

```css
width
height
top
left
margin
```

### Hover

Usar interações sutis, por exemplo:

```text
scale 1.00 → 1.03
```

Também podem ser usados:

- mudança de cursor;
- pequena alteração de posição;
- revelação de informações;
- mudança de opacidade.

Evitar bounce, glow exagerado e rotações desnecessárias.

---

## 14. Scroll e Transições

O scroll pode funcionar como uma timeline narrativa:

```text
0%   Hero
20%  Visual Statement
40%  Product
60%  Story
80%  Collection
100% CTA
```

Utilizar:

- fade;
- crossfade;
- image reveal;
- slide;
- parallax moderado.

As transições devem ser suaves e preservar continuidade.

---

## 15. Responsividade

Mobile não deve ser apenas uma versão reduzida do desktop.

Desktop pode utilizar:

```text
Imagem
+
Texto lateral
+
Composição assimétrica
```

Mobile pode utilizar:

```text
Imagem
↓
Texto
↓
Produto
↓
Imagem
```

A composição deve ser reorganizada para preservar a experiência.

---

## 16. Engenharia Front-end

Estrutura conceitual:

```text
Application
├── Layout
│   ├── Header
│   ├── Navigation
│   └── Footer
│
├── Pages
│   ├── Home
│   ├── Collection
│   ├── Product
│   ├── Stories
│   └── Story
│
├── Components
│   ├── Hero
│   ├── Campaign
│   ├── Product
│   ├── Collection
│   ├── Story
│   └── Media
│
├── Motion
│   ├── PageTransition
│   ├── ScrollReveal
│   ├── ImageReveal
│   └── HoverInteraction
│
└── Data
    ├── products
    ├── collections
    └── stories
```

### Regras

- Criar componentes reutilizáveis.
- Não duplicar componentes semelhantes.
- Separar dados da apresentação.
- Evitar conteúdo hardcoded espalhado.
- Manter responsabilidades bem definidas.

---

## 17. Performance

A experiência visual não deve comprometer a performance.

Priorizar:

- imagens responsivas;
- WebP/AVIF;
- lazy loading;
- carregamento progressivo;
- code splitting;
- dynamic imports;
- otimização de fontes;
- vídeos sob demanda;
- redução de JavaScript desnecessário;
- prevenção de layout shift.

Metas desejáveis:

```text
LCP < 2.5s
CLS < 0.1
INP < 200ms
```

### Imagens

Fluxo:

```text
Original
↓
Optimization
↓
Responsive sizes
↓
WebP / AVIF
↓
Lazy Loading
↓
Viewport
```

---

## 18. Acessibilidade

A estética experimental não deve comprometer acessibilidade.

Garantir:

- HTML semântico;
- contraste adequado;
- navegação por teclado;
- `alt` em imagens relevantes;
- foco visível;
- botões corretamente identificados;
- suporte a `prefers-reduced-motion`.

---

## 19. Interatividade

Toda interação deve possuir uma finalidade.

Categorias permitidas:

```text
Reveal
Discover
Explore
Transition
Purchase
```

Não adicionar animações ou interações apenas porque parecem visualmente interessantes.

---

## 20. Regras de UI

### Fazer

- Usar espaço negativo.
- Usar imagens grandes.
- Manter a interface discreta.
- Criar hierarquia visual.
- Utilizar motion sutil.
- Utilizar tipografia limpa.
- Criar composição editorial.
- Criar narrativa visual.
- Tratar produtos como objetos visuais.

### Evitar

- Excesso de cards.
- Excesso de botões.
- Excesso de cores.
- Sombras pesadas.
- Gradientes desnecessários.
- Glassmorphism.
- Bordas arredondadas exageradas.
- Animações agressivas.
- Texto excessivo.
- Aparência de dashboard.
- Aparência de template genérico.

---

## 21. Regra de Ouro

Antes de adicionar qualquer elemento:

> **Isso melhora a experiência ou apenas adiciona informação visual?**

Se não melhorar a experiência, remover.

Antes de adicionar uma animação:

> **A animação comunica alguma coisa?**

Se não comunicar, remover.

Antes de adicionar uma seção:

> **Essa seção possui uma função narrativa?**

Se não possuir, remover.

---

## 22. Prioridade de Implementação

Como o projeto é uma landing page acadêmica, não reproduzir a complexidade de um grande e-commerce.

Priorizar:

```text
1. Direção visual
2. Hero
3. Tipografia
4. Espaçamento
5. Imagens
6. Navegação
7. Storytelling
8. Motion
9. Responsividade
10. Performance
```

O objetivo é reproduzir **a sensação, linguagem visual e experiência**, e não a complexidade técnica de um site comercial de grande escala.

---

## 23. Resultado Esperado

A experiência final deve transmitir:

```text
Minimalista
     +
Editorial
     +
Cinematográfico
     +
Experimental
     +
Premium
     +
Tecnológico
```

O resultado deve parecer uma **digital brand experience**, e não uma landing page convencional.

A interface deve conduzir o usuário, enquanto imagens, conteúdo, produto e narrativa permanecem como protagonistas.
