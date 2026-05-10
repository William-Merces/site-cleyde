import './style.css'

type LetterId = 'tiffany' | 'william'

type Photo = {
  src: string
  alt: string
}

type LetterStep = {
  eyebrow: string
  text: string[]
  photo: number
}

type Letter = {
  id: LetterId
  from: string
  title: string
  subtitle: string
  signature: string
  tone: 'rose' | 'green'
  steps: LetterStep[]
}

const assetBase = import.meta.env.BASE_URL

const photos: Photo[] = [
  {
    src: `${assetBase}photos/familia-cleyde-tiffany-rick-ravi-levi.jpg`,
    alt: 'Cleide com Tiffany, Rick, Ravi e Levi juntos',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-03.jpg`,
    alt: 'Cleide e Tiffany sorrindo juntas',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-04.jpg`,
    alt: 'Cleide e Tiffany em um momento carinhoso',
  },
  {
    src: `${assetBase}photos/tiffany-cleyde-02.jpg`,
    alt: 'Tiffany e Cleide em uma foto vertical',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-ravi-levi-02.jpg`,
    alt: 'Cleide, Tiffany, Ravi e Levi reunidos',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-ravi-levi-01.jpg`,
    alt: 'Cleide com Tiffany, Ravi e Levi',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-rick-01.jpg`,
    alt: 'Cleide, Tiffany e Rick juntos',
  },
  {
    src: `${assetBase}photos/tiffany-cleyde-01.jpg`,
    alt: 'Tiffany e Cleide juntas',
  },
  {
    src: `${assetBase}photos/tiffany-ravi-levi-01.jpg`,
    alt: 'Tiffany com Ravi e Levi',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-05.jpg`,
    alt: 'Cleide e Tiffany em uma lembrança antiga',
  },
  {
    src: `${assetBase}photos/tiffany-ravi-levi-02.jpg`,
    alt: 'Tiffany, Ravi e Levi em família',
  },
]

const letters: Record<LetterId, Letter> = {
  tiffany: {
    id: 'tiffany',
    from: 'Tiffany',
    title: 'Carta da Tiffany',
    subtitle: 'da sua filha, com tudo que aprendeu sendo amada por você',
    signature: 'com muito amor, Tiffany Cunha',
    tone: 'rose',
    steps: [
      {
        eyebrow: 'Mãe,',
        photo: 1,
        text: [
          'Com você aprendi a lavar a louça, fazer arroz, ovo, a varrer o chão, dobrar cobertor...',
          'Com você também aprendi que pimenta arde kkkk.',
        ],
      },
      {
        eyebrow: 'As coisas pequenas',
        photo: 7,
        text: [
          'Aprendi a registrar momentos através de fotos, a ser gentil, educada, mostrar gratidão com gestos e palavras.',
          'Aprendi, mesmo não gostando, a lavar a louça nas casas em que eu comer. E assim também descobri a alegria de servir ao próximo.',
        ],
      },
      {
        eyebrow: 'As coisas grandes',
        photo: 2,
        text: [
          'Ao seu lado também aprendi a me arrepender, pedir perdão, perdoar, ampliar minha visão e me colocar no lugar do próximo.',
          'Você me ensinou muitas coisas: desde lições pequenas de sobrevivência até as maiores, de caráter.',
        ],
      },
      {
        eyebrow: 'O que me enraíza',
        photo: 3,
        text: [
          'O que me enraíza mais do que tudo é o seu amor.',
          'Esse amor puro de mãe que, mesmo às vezes sem nada, oferta tudo e não deixa faltar comida, atenção, amor e disciplina.',
          'Com você aprendi a ser mulher, mas, principalmente, a ser filha de Deus.',
        ],
      },
      {
        eyebrow: 'O plano de Deus',
        photo: 0,
        text: [
          'Hoje eu sei que ser mãe é mais do que um título. É uma dádiva e um dever divino que, com o poder de Deus, transforma nossas almas.',
          'Eu poderia vir ao mundo mesmo se você não fosse minha mãe, o Senhor daria um jeito. Mas o que seria da Tiffany Adriany sem Cleide Silva como sua mãe?',
        ],
      },
      {
        eyebrow: 'Tudo que sou',
        photo: 5,
        text: [
          'Tudo o que sou devo a Deus, a você e a meu pai.',
          'Dou graças ao Senhor por planejar tão perfeitamente nossa família, com tudo o que foi necessário, e consagrar coisas não tão boas para o nosso bem.',
        ],
      },
      {
        eyebrow: 'Você me prepara',
        photo: 4,
        text: [
          'Mesmo que você não tenha focado especificamente nisso, você me preparou para meu batismo, para entrar na casa do Senhor e para servir ao Senhor diariamente por 1 ano e meio.',
          'Tem me preparado para ser uma esposa, mãe, profissional, avó...',
        ],
      },
      {
        eyebrow: 'Para sempre',
        photo: 10,
        text: [
          'Mãe, você me prepara para voltar à presença de Deus.',
          'Vamos estar juntos um dia em gloriosa felicidade, assim como aquele desenho que fiz para você no Dia das Mães. Tenho fé nisso.',
          'Eu te amo inefavelmente, mãe. Serei eternamente grata por sua existência ao meu lado e todos os seus esforços para me fazer verdadeira filha de Deus.',
        ],
      },
    ],
  },
  william: {
    id: 'william',
    from: 'William',
    title: 'Carta do William',
    subtitle: 'do seu genro, com gratidão por ser recebido como família',
    signature: 'com muito carinho, William Mercês',
    tone: 'green',
    steps: [
      {
        eyebrow: 'Cleide,',
        photo: 0,
        text: [
          'Quero expressar minha profunda gratidão por tudo o que você tem feito.',
          'Mas principalmente por ter abençoado este mundo com a nossa querida Tiffany hahaha.',
        ],
      },
      {
        eyebrow: 'O amor dela por você',
        photo: 3,
        text: [
          'O amor e o carinho que ela tem por você me comovem muito.',
          'Consigo ver claramente o quanto ela valoriza a presença e o apoio que recebeu ao longo de toda a vida.',
        ],
      },
      {
        eyebrow: 'Duas famílias',
        photo: 6,
        text: [
          'Minha mãe sempre me ensinou a olhar para a mãe da minha esposa como minha própria mãe.',
          'Ela diz que o casamento não é apenas a união de duas pessoas, mas o encontro de duas famílias.',
        ],
      },
      {
        eyebrow: 'De coração aberto',
        photo: 1,
        text: [
          'Por isso, me sinto muito animado e de coração aberto para construir esse tipo de laço com você.',
          'Minha mãe costuma falar que, em vez de perder um filho, deseja ganhar uma filha a cada casamento, e espera que nós sejamos verdadeiros filhos para as nossas sogras.',
          'Ela até corrige meu pai quando ele faz piadas de sogra hahaha.',
        ],
      },
      {
        eyebrow: 'O amor de mãe',
        photo: 2,
        text: [
          'Algo que me chama muita atenção na maternidade é que ela é o que temos de mais próximo do amor de Cristo.',
          'Ele nunca para de cuidar de nós. E, de uma forma muito bonita, uma mãe também cuida antes mesmo de a gente nascer e continua se doando diariamente.',
        ],
      },
      {
        eyebrow: 'Dar à luz',
        photo: 4,
        text: [
          'Como você mesma disse: "Ela sempre vai ser minha princesinha".',
          'A dedicação de uma mãe exemplar é algo que sempre me impressiona profundamente.',
          'A expressão "dar à luz" ganha um significado muito maior do que apenas o momento do parto: é iluminar a vida dos filhos constantemente. Eu vejo essa luz em você.',
        ],
      },
      {
        eyebrow: 'Saudade de casa',
        photo: 7,
        text: [
          'A Tiffany sempre comenta sobre as coisas que aprendeu com você e sobre o imenso amor que sente.',
          'Ela fala tanto da saudade do seu perfume, que eu tô quase mais ansioso para descobrir que cheiro é esse do que ela está para voltar a sentir hahahahaha.',
        ],
      },
      {
        eyebrow: 'Obrigado',
        photo: 5,
        text: [
          'Muito obrigado por ser uma mãe tão incrível para a Tiffany e por ser uma sogra tão maravilhosa para mim.',
          'Que Deus continue abençoando você e a nossa família.',
        ],
      },
    ],
  },
}

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Elemento #app não encontrado.')
}

let screen: 'closed' | 'blessing' | 'choose' | 'letter' | 'closing' = 'closed'
let activeLetter: LetterId | null = null
let activeStep = 0
const readLetters = new Set<LetterId>()

const photo = (index: number) => photos[index]

const iconMarkup = (kind: 'daughter' | 'william') => {
  if (kind === 'daughter') {
    return `
      <span class="letter-icon daughter-icon" aria-hidden="true">
        <span class="heart heart-one"></span>
        <span class="heart heart-two"></span>
        <span class="spark spark-one"></span>
        <span class="spark spark-two"></span>
      </span>
    `
  }

  return `
    <span class="letter-icon william-icon" aria-hidden="true">
      <span class="envelope">
        <span class="flap"></span>
        <span class="seal"></span>
      </span>
      <span class="spark spark-one"></span>
      <span class="spark spark-two"></span>
    </span>
  `
}

const renderClosed = () => `
  <main class="experience closed-screen">
    <canvas id="soft-petals" aria-hidden="true"></canvas>
    <section class="opening" aria-labelledby="opening-title">
      <div class="opening-photos" aria-hidden="true">
        <img class="photo-tile tile-one" src="${photo(1).src}" alt="" />
        <img class="photo-tile tile-two" src="${photo(0).src}" alt="" />
        <img class="photo-tile tile-three" src="${photo(3).src}" alt="" />
      </div>
      <div class="opening-card">
        <p class="tiny">Tiffany e William prepararam isso para você</p>
        <h1 id="opening-title">Para Cleide</h1>
        <button class="open-gift" type="button" data-action="open">
          <span class="gift-icon" aria-hidden="true">
            <span class="gift-lid"></span>
            <span class="gift-box"></span>
            <span class="gift-ribbon"></span>
          </span>
          Abrir homenagem
        </button>
      </div>
    </section>
  </main>
`

const renderBlessing = () => `
  <main class="experience blessing-screen">
    <canvas id="soft-petals" aria-hidden="true"></canvas>
    <section class="blessing" aria-live="polite">
      <div class="halo-photo">
        <img src="${photo(0).src}" alt="${photo(0).alt}" />
      </div>
      <p class="tiny">Hoje é sobre você</p>
      <h1>Feliz Dia das Mães, Cleide</h1>
      <p>Nós te amamos. Obrigado por ser casa, colo, luz e família.</p>
      <button type="button" data-action="choose">Ler nossas cartas</button>
    </section>
  </main>
`

const renderChoice = () => `
  <main class="experience choice-screen">
    <canvas id="soft-petals" aria-hidden="true"></canvas>
    <section class="choice" aria-labelledby="choice-title">
      <div class="choice-header">
        <p class="tiny">Escolha uma carta</p>
        <h1 id="choice-title">Tem duas mensagens esperando por você.</h1>
      </div>
      <div class="letter-choice-grid">
        ${renderLetterChoice(letters.tiffany, 'daughter')}
        ${renderLetterChoice(letters.william, 'william')}
      </div>
      ${readLetters.size > 0 ? '<button class="soft-link" type="button" data-action="closing">ver nosso abraço final</button>' : ''}
    </section>
  </main>
`

const renderLetterChoice = (letter: Letter, icon: 'daughter' | 'william') => `
  <button class="letter-choice ${letter.tone}" type="button" data-action="start-letter" data-letter="${letter.id}">
    ${iconMarkup(icon)}
    <span class="choice-copy">
      <strong>${letter.title}</strong>
      <small>${letter.subtitle}</small>
    </span>
    ${readLetters.has(letter.id) ? '<span class="read-badge">lida</span>' : ''}
  </button>
`

const renderReader = (letter: Letter, stepIndex: number) => {
  const step = letter.steps[stepIndex]
  const currentPhoto = photo(step.photo)
  const isLast = stepIndex === letter.steps.length - 1

  return `
    <main class="experience reader-screen ${letter.tone}">
      <canvas id="soft-petals" aria-hidden="true"></canvas>
      <section class="reader" aria-labelledby="reader-title">
        <button class="back-button" type="button" data-action="choose">← cartas</button>
        <div class="reader-photo" aria-hidden="true">
          <img src="${currentPhoto.src}" alt="" />
        </div>
        <article class="paper" aria-live="polite">
          <div class="paper-top">
            <p class="tiny">${letter.from}</p>
            <span>${stepIndex + 1} / ${letter.steps.length}</span>
          </div>
          <h1 id="reader-title">${step.eyebrow}</h1>
          <div class="message-lines">
            ${step.text.map((line, index) => `<p style="--line-index: ${index}">${line}</p>`).join('')}
          </div>
          <div class="paper-signature ${isLast ? 'is-visible' : ''}">
            ${isLast ? letter.signature : ''}
          </div>
          <div class="reader-controls">
            <button type="button" data-action="previous" ${stepIndex === 0 ? 'disabled' : ''}>voltar</button>
            <div class="progress-dots" aria-hidden="true">
              ${letter.steps
                .map((_, index) => `<span class="${index === stepIndex ? 'active' : ''}"></span>`)
                .join('')}
            </div>
            <button type="button" data-action="${isLast ? 'finish-letter' : 'next'}">
              ${isLast ? 'guardar carta' : 'continuar'}
            </button>
          </div>
        </article>
      </section>
    </main>
  `
}

const renderClosing = () => `
  <main class="experience closing-screen">
    <canvas id="soft-petals" aria-hidden="true"></canvas>
    <section class="closing">
      <div class="closing-stack" aria-hidden="true">
        <img src="${photo(2).src}" alt="" />
        <img src="${photo(4).src}" alt="" />
        <img src="${photo(10).src}" alt="" />
      </div>
      <div class="closing-message">
        <p class="tiny">Com amor</p>
        <h1>Feliz Dia das Mães, Cleide.</h1>
        <p>Essa homenagem é pequena perto do que sentimos, mas foi feita para você abrir e sentir um pouco do nosso carinho.</p>
        <blockquote>
          "Deus me presenteou com quatro anjos: Rick, Tiffany, Ravi e Levi, e eu sou imensamente grata por ser a mãe de cada um deles."
        </blockquote>
        <button type="button" data-action="choose">ler de novo</button>
      </div>
    </section>
  </main>
`

const render = () => {
  if (screen === 'closed') {
    app.innerHTML = renderClosed()
  }

  if (screen === 'blessing') {
    app.innerHTML = renderBlessing()
  }

  if (screen === 'choose') {
    app.innerHTML = renderChoice()
  }

  if (screen === 'letter' && activeLetter) {
    app.innerHTML = renderReader(letters[activeLetter], activeStep)
  }

  if (screen === 'closing') {
    app.innerHTML = renderClosing()
  }

  setupPetals()
}

const startLetter = (letter: LetterId) => {
  activeLetter = letter
  activeStep = 0
  screen = 'letter'
  render()
}

app.addEventListener('click', (event) => {
  const target = event.target

  if (!(target instanceof HTMLElement)) return

  const actionButton = target.closest<HTMLButtonElement>('[data-action]')
  if (!actionButton) return

  const action = actionButton.dataset.action

  if (action === 'open') {
    screen = 'blessing'
    render()
    window.setTimeout(() => {
      if (screen !== 'blessing') return
      screen = 'choose'
      render()
    }, 4300)
    return
  }

  if (action === 'choose') {
    screen = 'choose'
    render()
    return
  }

  if (action === 'start-letter') {
    const letter = actionButton.dataset.letter as LetterId | undefined
    if (letter) startLetter(letter)
    return
  }

  if (action === 'next' && activeLetter) {
    activeStep = Math.min(activeStep + 1, letters[activeLetter].steps.length - 1)
    render()
    return
  }

  if (action === 'previous' && activeLetter) {
    activeStep = Math.max(activeStep - 1, 0)
    render()
    return
  }

  if (action === 'finish-letter' && activeLetter) {
    readLetters.add(activeLetter)
    if (readLetters.size === Object.keys(letters).length) {
      screen = 'closing'
    } else {
      screen = 'choose'
    }
    render()
    return
  }

  if (action === 'closing') {
    screen = 'closing'
    render()
  }
})

type Petal = {
  x: number
  y: number
  size: number
  speed: number
  drift: number
  rotate: number
  alpha: number
}

const setupPetals = () => {
  const canvas = document.querySelector<HTMLCanvasElement>('#soft-petals')
  const context = canvas?.getContext('2d')

  if (!canvas || !context || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  let width = 0
  let height = 0
  let petals: Petal[] = []

  const createPetal = (visible: boolean): Petal => ({
    x: Math.random() * width,
    y: visible ? Math.random() * height : -40 - Math.random() * 140,
    size: 6 + Math.random() * 9,
    speed: 0.45 + Math.random() * 0.95,
    drift: -0.5 + Math.random(),
    rotate: Math.random() * Math.PI,
    alpha: 0.28 + Math.random() * 0.4,
  })

  const resize = () => {
    const rect = canvas.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    width = rect.width
    height = rect.height
    canvas.width = Math.max(1, Math.round(width * dpr))
    canvas.height = Math.max(1, Math.round(height * dpr))
    context.setTransform(dpr, 0, 0, dpr, 0, 0)
    petals = Array.from({ length: Math.min(42, Math.max(20, Math.floor(width / 12))) }, () =>
      createPetal(true),
    )
  }

  const draw = () => {
    context.clearRect(0, 0, width, height)

    petals.forEach((petal, index) => {
      petal.y += petal.speed
      petal.x += petal.drift + Math.sin((petal.y + index * 12) * 0.02) * 0.45
      petal.rotate += 0.01

      if (petal.y > height + 40 || petal.x < -50 || petal.x > width + 50) {
        petals[index] = createPetal(false)
      }

      context.save()
      context.translate(petal.x, petal.y)
      context.rotate(petal.rotate)
      context.fillStyle = `rgba(255, 218, 210, ${petal.alpha})`
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

render()
