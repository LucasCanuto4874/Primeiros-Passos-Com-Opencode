# Gentle Beast

## Integrantes

- Lucas Pereira Canuto


## Sobre o produto

**Gentle Beast** é uma loja virtual de óculos de grau e sol com identidade visual forte e sofisticada. O público-alvo são pessoas que buscam acessórios com personalidade, estilo ousado e qualidade. A proposta é transmitir atitude e elegância através de uma experiência visual imersiva, com vídeos de alto impacto, carrosséis interativos e um layout minimalista em preto e branco.


## Jornada de construção

### Ideia inicial

A ideia surgiu da necessidade de criar um e-commerce de óculos com foco em experiência visual, diferenciando-se de lojas convencionais. As alternativas consideradas foram:

- Loja tradicional com catálogo estático
- Plataforma com foco em storytelling visual (escolhida)
- Site com vitrine interativa em 3D

A decisão foi por uma abordagem cinematográfica, utilizando vídeos de alta resolução no hero section para criar impacto emocional desde o primeiro contato.


### Pesquisa e referências

Foram pesquisados sites de marcas de moda e acessórios com forte identidade visual:

- **Gentle Monster** (referência principal de identidade visual e experiência imersiva)
- **Ray-Ban** (organização de catálogo e filtros)
- **Gucci Eyewear** (luxo e sofisticação visual)
- **Oliver Peoples** (fotografia de produto e lookbooks)

Os estilos que influenciaram o design foram:

- Minimalismo com paleta preto/branco/cinza
- Tipografia fina e com espaçamento generoso
- Uso de vídeo como elemento central de navegação
- Carrosséis arrastáveis com GSAP para interatividade


### Ferramentas utilizadas

- React
- TypeScript
- Vite
- GSAP (Draggable + Inertia)
- React Router
- VS Code / OpenCode
- Pexels Videos 4k
- Unsplash


### Uso de IA

- **MiMo V2.5 Free (Opencode)**: Utilizado como assistente de código integrado ao VS Code para geração de código, refatoração de componentes, criação de animações CSS e solução de bugs

O modelo foi utilizado durante todo o desenvolvimento, desde a estruturação inicial até as implementações mais complexas como o carrosel infinito com GSAP, dropdown customizado com animações e ajustes de design. Nas situações em que o resultado não foi satisfatório, foram feitas solicitações de ajuste até atingir o comportamento desejado.


### Evolução da solução

O que mudou entre a primeira ideia e a versão final:

- **Hero Section**: Evoluiu de slide estático com imagens para carrosel infinito com vídeos em loop contínuo
- **Navegação**: De botões de seta para drag carrosel com GSAP + swipe
- **Carrinho**: Quantidade de botões +/- para dropdown customizado com animação
- **Cards de produto**: Botão "Add to cart" no hover para link de texto com underline discreto
- **Tipografia**: Negrito nos nomes para font-weight 400 (leve)
- **Preços**: Cor preta para cinza (#666) para hierarquia visual
- **Dropdown produto**: Select nativo para componente customizado com hover e animação
- **Botão remove**: De fundo cinza para estilo discreto com hover suave

Decisões em que optou por **não seguir** a sugestão da IA:

- Manter o select nativo no carrinho (a IA sugeriu, mas optamos por dropdown customizado para manter consistência visual)


### Resultado final

O resultado é um e-commerce visualmente impactante com:

- **Hero section** com carossel infinito de vídeos e transições suaves
- **Carrosséis de produtos e modelos** com drag interativo
- **Carrinho** com dropdown customizado e animações discretas
- **Design minimalista** com paleta preto/branco e hierarquia visual clara
- **Responsividade** e performance otimizada

Se tivéssemos mais tempo, faríamos:

- Implementar filtros por categoria/preço no catálogo
- Adicionar página de detalhes do produto mais completa
- Implementar busca com sugestões
- Adicionar animações de page transition
- Testes automatizados
