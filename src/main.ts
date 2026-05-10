import './style.css'

type Photo = {
  src: string
  alt: string
  caption: string
  orientation: 'portrait' | 'landscape' | 'square'
}

const assetBase = import.meta.env.BASE_URL

const photos: Photo[] = [
  {
    src: `${assetBase}photos/familia-cleyde-tiffany-rick-ravi-levi.jpg`,
    alt: 'Cleyde com Tiffany, Rick, Ravi e Levi juntos',
    caption: 'O amor que junta a família inteira',
    orientation: 'portrait',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-03.jpg`,
    alt: 'Cleyde e Tiffany sorrindo juntas',
    caption: 'Mãe e filha, raiz e flor',
    orientation: 'portrait',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-04.jpg`,
    alt: 'Cleyde e Tiffany em um momento carinhoso',
    caption: 'Um colo que também ensina coragem',
    orientation: 'portrait',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-ravi-levi-02.jpg`,
    alt: 'Cleyde, Tiffany, Ravi e Levi reunidos',
    caption: 'Memórias que continuam crescendo',
    orientation: 'landscape',
  },
  {
    src: `${assetBase}photos/tiffany-cleyde-02.jpg`,
    alt: 'Tiffany e Cleyde em uma foto vertical',
    caption: 'Saudade com cheiro de casa',
    orientation: 'portrait',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-ravi-levi-01.jpg`,
    alt: 'Cleyde com Tiffany, Ravi e Levi',
    caption: 'Presença que faz todo mundo caber',
    orientation: 'square',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-rick-01.jpg`,
    alt: 'Cleyde, Tiffany e Rick juntos',
    caption: 'Família como promessa diária',
    orientation: 'square',
  },
  {
    src: `${assetBase}photos/tiffany-cleyde-01.jpg`,
    alt: 'Tiffany e Cleyde juntas',
    caption: 'Amor guardado nos detalhes',
    orientation: 'portrait',
  },
  {
    src: `${assetBase}photos/tiffany-ravi-levi-01.jpg`,
    alt: 'Tiffany com Ravi e Levi',
    caption: 'Os frutos de uma história bem cuidada',
    orientation: 'landscape',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-05.jpg`,
    alt: 'Cleyde e Tiffany em uma lembrança antiga',
    caption: 'O tempo passa, o vínculo fica',
    orientation: 'portrait',
  },
  {
    src: `${assetBase}photos/tiffany-ravi-levi-02.jpg`,
    alt: 'Tiffany, Ravi e Levi em família',
    caption: 'Quatro filhos, um amor multiplicado',
    orientation: 'portrait',
  },
]

const tiffanyMessage = [
  'Mãe,',
  'Com você aprendi a lavar a louça, fazer arroz, ovo, a varrer o chão, dobrar cobertor... Com você também aprendi que pimenta arde kkkk. Aprendi a registrar momentos através de fotos, a ser gentil, educada, mostrar gratidão com gestos e palavras. Aprendi, mesmo não gostando, a lavar a louça nas casas em que eu comer, mas assim também pude descobrir a alegria de servir ao próximo! Ao seu lado também aprendi a me arrepender, pedir perdão, perdoar, ampliar minha visão e me colocar no lugar do próximo.',
  'Você me ensinou muitas coisas, desde lições pequenas de sobrevivência até as maiores, de caráter. O que me enraíza mais do que tudo é o seu amor. Esse amor puro de mãe que, mesmo às vezes sem nada, oferta tudo e não deixa faltar comida, atenção, amor, disciplina. Com você aprendi a ser mulher, mas, principalmente, a ser filha de Deus.',
  'Agora, com maior idade, sei que ser mãe é mais do que um título, é mais do que ser filha de alguém ao nascer. Sei que é uma dádiva e um dever divino que, com o poder de Deus, transforma nossas almas! Estou compreendendo o quanto é necessário ter e ser mãe para os propósitos sagrados de Deus. Acredito que eu poderia vir ao mundo mesmo se você não fosse minha mãe, o Senhor daria um jeito! Mas o que seria da Tiffany Adriany sem Cleide Silva como sua mãe? Tudo o que sou devo a Deus, a você e a meu pai! Eu não desenvolveria tão bem os atributos e características físicas específicos que hoje tenho se não viessem da genética, criação e exemplo que vocês me proporcionam. Por isso dou graças ao Senhor por planejar tão perfeitamente nossa família, com tudo o que foi necessário, e consagrar coisas não tão boas para o nosso bem!',
  'Mesmo que você não tenha focado especificamente nisso, você me preparou para meu batismo, para entrar na casa do Senhor e para estar aqui servindo ao Senhor diariamente por 1 ano e meio. Tem me preparado para ser uma esposa, mãe, profissional, avó...',
  'Mãe, você me prepara para voltar à presença de Deus! Mas não só a mim, como também aos meus irmãos, seu namorado e, principalmente: você! Vamos estar juntos um dia em gloriosa felicidade, assim como aquele desenho que fiz para você no Dia das Mães! Tenho fé nisso!',
  'Eu te amo inefavelmente, mãe! Serei eternamente grata por sua existência ao meu lado e todos os seus esforços para me fazer verdadeira filha de Deus.',
]

const williamMessage = [
  'Cleide,',
  'Quero expressar minha profunda gratidão por tudo o que você tem feito, mas principalmente por ter abençoado este mundo com a nossa querida Tiffany hahaha.',
  'O amor e o carinho que ela tem por você me comovem muito. Consigo ver claramente o quanto ela valoriza a presença e o apoio que recebeu ao longo de toda a vida.',
  'Minha mãe sempre me ensinou a olhar para a mãe da minha esposa como minha própria mãe. Ela diz que o casamento não é apenas a união de duas pessoas, mas o encontro de duas famílias. Por isso, me sinto muito animado e de coração aberto para construir esse tipo de laço com você. Minha mãe costuma falar que, em vez de perder um filho, deseja ganhar uma filha a cada casamento, e espera que nós, seus filhos, sejamos verdadeiros filhos para as nossas sogras. Ela até corrige meu pai quando ele faz piadas de sogra hahaha.',
  'Algo que me chama muita atenção na maternidade é que ela é o que temos de mais próximo do amor de Cristo: antes de nascer, Ele, como Jeová, criou o ambiente para nós; quando desceu como Jesus, Ele se sacrificou por nós; quando morreu, foi ao mundo espiritual pregar aos espíritos; e depois que ressuscitou, continuou ajudando as pessoas lá em Jerusalém por quarenta dias, chegando até a aparecer entre os indígenas para pregar e organizar Sua igreja entre eles. E hoje Ele governa a Sua igreja, ou seja, Ele nunca para de cuidar de nós.',
  'Da mesma forma, uma mãe já cuida de nós antes mesmo de a gente nascer. Quando chegamos, ela se sacrifica no parto, e continua se doando diariamente por seus filhos, mesmo depois de adultos, como você mesma disse: "Ela sempre vai ser minha princesinha". A dedicação de uma mãe exemplar é algo que sempre me impressiona profundamente. A expressão "dar à luz" ganha um significado muito maior do que apenas o momento do parto; é iluminar a vida dos filhos constantemente. Eu vejo essa luz em você e admiro muito isso.',
  'A Tiffany sempre comenta sobre as coisas que aprendeu com você e sobre o imenso amor que sente. Ela fala tanto da saudade do seu perfume, que eu tô quase mais ansioso para descobrir que cheiro é esse do que ela está para voltar a sentir hahahahaha.',
  'Muito obrigado por ser uma mãe tão incrível para a Tiffany e por ser uma sogra tão maravilhosa para mim. Que Deus continue abençoando você e a nossa família!',
]

const lessons = [
  {
    title: 'Casa',
    text: 'Você ensinou cuidado nas tarefas simples, na mesa posta, na louça lavada e na alegria de servir.',
  },
  {
    title: 'Carater',
    text: 'Você ensinou perdão, gratidão, gentileza e a coragem de se colocar no lugar do próximo.',
  },
  {
    title: 'Fe',
    text: 'Você preparou seus filhos para buscar a presença de Deus e para reconhecer o amor como caminho.',
  },
  {
    title: 'Luz',
    text: 'Você dá à luz todos os dias quando ilumina, sustenta, corrige e protege quem ama.',
  },
]

const letterMarkup = (paragraphs: string[], signature: string) =>
  paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('') +
  `<p class="signature">${signature}</p>`

const photoMarkup = photos
  .map(
    (photo, index) => `
      <figure class="memory-card ${photo.orientation}">
        <button class="memory-button" type="button" data-photo-index="${index}" aria-label="Abrir foto: ${photo.caption}">
          <img src="${photo.src}" alt="${photo.alt}" loading="${index < 3 ? 'eager' : 'lazy'}" />
        </button>
        <figcaption>${photo.caption}</figcaption>
      </figure>
    `,
  )
  .join('')

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Elemento #app não encontrado.')
}

app.innerHTML = `
  <main>
    <section class="hero-section" aria-labelledby="hero-title">
      <img class="hero-image" src="${photos[0].src}" alt="${photos[0].alt}" />
      <canvas id="petal-field" aria-hidden="true"></canvas>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="eyebrow">Dia das Mães 2026</p>
        <h1 id="hero-title">Cleyde, sua luz mora em cada detalhe desta família.</h1>
        <p class="hero-copy">
          Uma homenagem de Tiffany e William para lembrar, com fotos e palavras,
          o quanto o seu amor ensinou, sustentou e iluminou.
        </p>
        <div class="hero-actions" aria-label="Navegar pela homenagem">
          <button type="button" data-scroll-target="#cartas">Ler as cartas</button>
          <button type="button" data-scroll-target="#galeria">Ver as memórias</button>
        </div>
      </div>
      <a class="scroll-cue" href="#inicio" aria-label="Continuar para a homenagem">Continuar</a>
    </section>

    <nav class="page-nav" aria-label="Seções da homenagem">
      <a href="#inicio">Inicio</a>
      <a href="#cartas">Cartas</a>
      <a href="#galeria">Fotos</a>
      <a href="#voz">Cleyde</a>
    </nav>

    <section class="intro-section" id="inicio" aria-labelledby="intro-title">
      <div class="section-label reveal">Para guardar no coração</div>
      <h2 id="intro-title" class="reveal">Antes de qualquer palavra, existe uma vida inteira de cuidado.</h2>
      <p class="intro-copy reveal">
        Esta página junta aquilo que o tempo não apaga: a mãe que ensinou Tiffany
        a servir, a perdoar, a ter fé, a fotografar os momentos e a reconhecer
        Deus dentro da própria história.
      </p>
      <div class="lesson-grid" aria-label="Lições que Cleyde deixou">
        ${lessons
          .map(
            (lesson) => `
              <article class="lesson-card reveal">
                <span>${lesson.title}</span>
                <p>${lesson.text}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="quote-band reveal" aria-label="Resumo da homenagem">
      <p>
        "O que me enraíza mais do que tudo é o seu amor."
      </p>
      <span>Tiffany</span>
    </section>

    <section class="letters-section" id="cartas" aria-labelledby="letters-title">
      <div class="section-label reveal">Cartas</div>
      <h2 id="letters-title" class="reveal">Duas vozes, a mesma gratidão.</h2>
      <div class="letters-grid">
        <details class="letter-card reveal">
          <summary>
            <span>
              <strong>De Tiffany</strong>
              <small>Para a mãe que a preparou para a vida e para Deus</small>
            </span>
            <span class="summary-action">Abrir</span>
          </summary>
          <div class="letter-body">
            ${letterMarkup(tiffanyMessage, 'com muito amor, Tiffany Cunha')}
          </div>
        </details>

        <details class="letter-card reveal">
          <summary>
            <span>
              <strong>De William</strong>
              <small>Para a sogra que se tornou família antes mesmo de tudo começar</small>
            </span>
            <span class="summary-action">Abrir</span>
          </summary>
          <div class="letter-body">
            ${letterMarkup(williamMessage, 'com muito carinho, William Mercês')}
          </div>
        </details>
      </div>
    </section>

    <section class="gallery-section" id="galeria" aria-labelledby="gallery-title">
      <div class="section-label reveal">Memórias</div>
      <h2 id="gallery-title" class="reveal">Uma galeria para tocar nas lembranças.</h2>
      <p class="gallery-copy reveal">
        Cada foto abre em tela cheia. No celular, a galeria desliza; no computador,
        ela vira um mural de família.
      </p>
      <div class="memory-grid">
        ${photoMarkup}
      </div>
    </section>

    <section class="voice-section" id="voz" aria-labelledby="voice-title">
      <div class="voice-photo reveal">
        <img src="${photos[5].src}" alt="${photos[5].alt}" loading="lazy" />
      </div>
      <div class="voice-copy reveal">
        <div class="section-label">Palavras da Cleyde</div>
        <h2 id="voice-title">O amor dela também fala pelos filhos.</h2>
        <blockquote>
          <p>
            "Deus me presenteou com quatro anjos: Rick, Tiffany, Ravi e Levi,
            e eu sou imensamente grata por ser a mãe de cada um deles. Vocês
            sao o meu orgulho, a minha vida e o meu amor eterno."
          </p>
          <p>
            "Tudo o que sou e tudo o que faço é por vocês, meus amores.
            Obrigada por me ensinarem o verdadeiro sentido do amor em dose
            dupla, tripla e quádrupla."
          </p>
        </blockquote>
      </div>
    </section>

    <section class="final-section" aria-labelledby="final-title">
      <img src="${photos[1].src}" alt="${photos[1].alt}" loading="lazy" />
      <div class="final-overlay"></div>
      <div class="final-content reveal">
        <p class="eyebrow">Com amor</p>
        <h2 id="final-title">Feliz Dia das Mães, Cleyde.</h2>
        <p>
          Que esta pequena página fique como lembrança de que o seu amor
          continua dando raiz, direção e luz a todos nós.
        </p>
      </div>
    </section>
  </main>

  <dialog class="photo-dialog" id="photo-dialog" aria-label="Foto ampliada">
    <div class="dialog-frame">
      <button class="dialog-close" type="button" aria-label="Fechar foto">x</button>
      <button class="dialog-nav dialog-prev" type="button" aria-label="Foto anterior">‹</button>
      <figure>
        <img id="dialog-image" alt="" />
        <figcaption id="dialog-caption"></figcaption>
      </figure>
      <button class="dialog-nav dialog-next" type="button" aria-label="Próxima foto">›</button>
    </div>
  </dialog>
`

const setupScrolling = () => {
  document.querySelectorAll<HTMLButtonElement>('[data-scroll-target]').forEach((button) => {
    button.addEventListener('click', () => {
      const selector = button.dataset.scrollTarget
      if (!selector) return

      document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
}

const setupReveal = () => {
  const items = document.querySelectorAll<HTMLElement>('.reveal')

  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.18 },
  )

  items.forEach((item) => observer.observe(item))
}

const setupLetters = () => {
  document.querySelectorAll<HTMLDetailsElement>('.letter-card').forEach((letter) => {
    const action = letter.querySelector<HTMLElement>('.summary-action')

    const syncText = () => {
      if (!action) return
      action.textContent = letter.open ? 'Fechar' : 'Abrir'
    }

    letter.addEventListener('toggle', syncText)
    syncText()
  })
}

const setupLightbox = () => {
  const dialog = document.querySelector<HTMLDialogElement>('#photo-dialog')
  const dialogImage = document.querySelector<HTMLImageElement>('#dialog-image')
  const dialogCaption = document.querySelector<HTMLElement>('#dialog-caption')
  const closeButton = document.querySelector<HTMLButtonElement>('.dialog-close')
  const previousButton = document.querySelector<HTMLButtonElement>('.dialog-prev')
  const nextButton = document.querySelector<HTMLButtonElement>('.dialog-next')
  let activePhoto = 0

  if (!dialog || !dialogImage || !dialogCaption || !closeButton || !previousButton || !nextButton) {
    return
  }

  const renderPhoto = () => {
    const photo = photos[activePhoto]
    dialogImage.src = photo.src
    dialogImage.alt = photo.alt
    dialogCaption.textContent = photo.caption
  }

  const openPhoto = (index: number) => {
    activePhoto = index
    renderPhoto()
    dialog.showModal()
    document.body.classList.add('dialog-open')
  }

  const closePhoto = () => {
    dialog.close()
    document.body.classList.remove('dialog-open')
  }

  const movePhoto = (step: number) => {
    activePhoto = (activePhoto + step + photos.length) % photos.length
    renderPhoto()
  }

  document.querySelectorAll<HTMLButtonElement>('[data-photo-index]').forEach((button) => {
    button.addEventListener('click', () => {
      openPhoto(Number(button.dataset.photoIndex ?? 0))
    })
  })

  closeButton.addEventListener('click', closePhoto)
  previousButton.addEventListener('click', () => movePhoto(-1))
  nextButton.addEventListener('click', () => movePhoto(1))
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      closePhoto()
    }
  })
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'))
  document.addEventListener('keydown', (event) => {
    if (!dialog.open) return
    if (event.key === 'ArrowLeft') movePhoto(-1)
    if (event.key === 'ArrowRight') movePhoto(1)
  })
}

type Petal = {
  x: number
  y: number
  size: number
  speed: number
  drift: number
  rotation: number
  spin: number
  alpha: number
}

const setupPetals = () => {
  const canvas = document.querySelector<HTMLCanvasElement>('#petal-field')
  const context = canvas?.getContext('2d')

  if (!canvas || !context || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  let width = 0
  let height = 0
  let petals: Petal[] = []

  const createPetal = (placeInView: boolean): Petal => ({
    x: Math.random() * width,
    y: placeInView ? Math.random() * height : -30 - Math.random() * 80,
    size: 5 + Math.random() * 8,
    speed: 0.3 + Math.random() * 0.8,
    drift: -0.35 + Math.random() * 0.7,
    rotation: Math.random() * Math.PI,
    spin: -0.012 + Math.random() * 0.024,
    alpha: 0.34 + Math.random() * 0.34,
  })

  const resize = () => {
    const rect = canvas.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    width = rect.width
    height = rect.height
    canvas.width = Math.max(1, Math.round(width * dpr))
    canvas.height = Math.max(1, Math.round(height * dpr))
    context.setTransform(dpr, 0, 0, dpr, 0, 0)
    const count = Math.min(34, Math.max(16, Math.floor(width / 18)))
    petals = Array.from({ length: count }, () => createPetal(true))
  }

  const draw = () => {
    context.clearRect(0, 0, width, height)
    petals.forEach((petal, index) => {
      petal.y += petal.speed
      petal.x += petal.drift + Math.sin(petal.y * 0.018) * 0.22
      petal.rotation += petal.spin

      if (petal.y > height + 40 || petal.x < -40 || petal.x > width + 40) {
        petals[index] = createPetal(false)
      }

      context.save()
      context.translate(petal.x, petal.y)
      context.rotate(petal.rotation)
      context.fillStyle = `rgba(255, 221, 214, ${petal.alpha})`
      context.beginPath()
      context.ellipse(0, 0, petal.size, petal.size * 0.42, 0, 0, Math.PI * 2)
      context.fill()
      context.restore()
    })

    window.requestAnimationFrame(draw)
  }

  resize()
  window.addEventListener('resize', resize, { passive: true })
  window.requestAnimationFrame(draw)
}

setupScrolling()
setupReveal()
setupLetters()
setupLightbox()
setupPetals()
