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
    alt: 'Cleidy com Tiffany, Rick, Ravi e Levi juntos',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-03.jpg`,
    alt: 'Cleidy e Tiffany sorrindo juntas',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-04.jpg`,
    alt: 'Cleidy e Tiffany em um momento carinhoso',
  },
  {
    src: `${assetBase}photos/tiffany-cleyde-02.jpg`,
    alt: 'Tiffany e Cleidy em uma foto vertical',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-ravi-levi-02.jpg`,
    alt: 'Cleidy, Tiffany, Ravi e Levi reunidos',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-ravi-levi-01.jpg`,
    alt: 'Cleidy com Tiffany, Ravi e Levi',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-rick-01.jpg`,
    alt: 'Cleidy, Tiffany e Rick juntos',
  },
  {
    src: `${assetBase}photos/tiffany-cleyde-01.jpg`,
    alt: 'Tiffany e Cleidy juntas',
  },
  {
    src: `${assetBase}photos/tiffany-ravi-levi-01.jpg`,
    alt: 'Tiffany com Ravi e Levi',
  },
  {
    src: `${assetBase}photos/cleyde-tiffany-05.jpg`,
    alt: 'Cleidy e Tiffany em uma lembrança antiga',
  },
  {
    src: `${assetBase}photos/tiffany-ravi-levi-02.jpg`,
    alt: 'Tiffany, Ravi e Levi em família',
  },
  {
    src: `${assetBase}photos/william-e-mae.jpg`,
    alt: 'William com sua mãe',
  },
  {
    src: `${assetBase}photos/william-irmaos-mae-vo.jpg`,
    alt: 'William com seus irmãos, sua mãe e sua vó',
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
        eyebrow: 'O cuidado do dia a dia',
        photo: 7,
        text: [
          'Aprendi a registrar momentos através de fotos, a ser gentil, educada, mostrar gratidão com gestos e palavras.',
          'Aprendi, mesmo não gostando, a lavar a louça nas casas em que eu comer. E assim também descobri a alegria de servir ao próximo.',
        ],
      },
      {
        eyebrow: 'A alegria de servir',
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
        eyebrow: 'Ser sua filha',
        photo: 0,
        text: [
          'Hoje eu sei que ser mãe é mais do que um título. É uma dádiva e um dever divino que, com o poder de Deus, transforma nossas almas.',
          'Eu poderia vir ao mundo mesmo se você não fosse minha mãe, o Senhor daria um jeito. Mas o que seria da Tiffany Adriany sem Cleidy Silva como sua mãe?',
        ],
      },
      {
        eyebrow: 'Nossa família',
        photo: 5,
        text: [
          'Tudo o que sou devo a Deus, a você e a meu pai.',
          'Dou graças ao Senhor por planejar tão perfeitamente nossa família, com tudo o que foi necessário, e consagrar coisas não tão boas para o nosso bem.',
        ],
      },
      {
        eyebrow: 'Preparada por você',
        photo: 4,
        text: [
          'Mesmo que você não tenha focado especificamente nisso, você me preparou para meu batismo, para entrar na casa do Senhor e para servir ao Senhor diariamente por 1 ano e meio.',
          'Tem me preparado para ser uma esposa, mãe, profissional, avó...',
        ],
      },
      {
        eyebrow: 'Eu te amo inefavelmente',
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
        eyebrow: 'Cleidy,',
        photo: 0,
        text: [
          'Quero expressar minha profunda gratidão por tudo o que você tem feito.',
          'Mas principalmente por ter abençoado este mundo com a nossa querida Tiffany hahaha.',
        ],
      },
      {
        eyebrow: 'O amor da Tiffany por você',
        photo: 3,
        text: [
          'O amor e o carinho que ela tem por você me comovem muito.',
          'Consigo ver claramente o quanto ela valoriza a presença e o apoio que recebeu ao longo de toda a vida.',
        ],
      },
      {
        eyebrow: 'Quando duas famílias se encontram',
        photo: 12,
        text: [
          'Minha mãe sempre me ensinou a olhar para a mãe da minha esposa como minha própria mãe.',
          'Ela diz que o casamento não é apenas a união de duas pessoas, mas o encontro de duas famílias.',
        ],
      },
      {
        eyebrow: 'De coração aberto para você',
        photo: 11,
        text: [
          'Por isso, me sinto muito animado e de coração aberto para construir esse tipo de laço com você.',
          'Minha mãe costuma falar que, em vez de perder um filho, deseja ganhar uma filha a cada casamento, e espera que nós sejamos verdadeiros filhos para as nossas sogras.',
          'Ela até corrige meu pai quando ele faz piadas de sogra hahaha.',
        ],
      },
      {
        eyebrow: 'Um amor que não para',
        photo: 2,
        text: [
          'Algo que me chama muita atenção na maternidade é que ela é o que temos de mais próximo do amor de Cristo.',
          'Ele nunca para de cuidar de nós. E, de uma forma muito bonita, uma mãe também cuida antes mesmo de a gente nascer e continua se doando diariamente.',
        ],
      },
      {
        eyebrow: 'A luz de uma mãe',
        photo: 4,
        text: [
          'Como você mesma disse: "Ela sempre vai ser minha princesinha".',
          'A dedicação de uma mãe exemplar é algo que sempre me impressiona profundamente.',
          'A expressão "dar à luz" ganha um significado muito maior do que apenas o momento do parto: é iluminar a vida dos filhos constantemente. Eu vejo essa luz em você.',
        ],
      },
      {
        eyebrow: 'Saudade do seu perfume',
        photo: 7,
        text: [
          'A Tiffany sempre comenta sobre as coisas que aprendeu com você e sobre o imenso amor que sente.',
          'Ela fala tanto da saudade do seu perfume, que eu tô quase mais ansioso para descobrir que cheiro é esse do que ela está para voltar a sentir hahahahaha.',
        ],
      },
      {
        eyebrow: 'Muito obrigado',
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

let screen: 'closed' | 'reveal' | 'blessing' | 'choose' | 'letter' | 'closing' = 'closed'
let activeLetter: LetterId | null = null
let activeStep = 0
let musicEnabled = false
const readLetters = new Set<LetterId>()
let tributeAudio: TributeAudio | null = null
let revealTimer: number | null = null

const photo = (index: number) => photos[index]

class TributeAudio {
  private context: AudioContext
  private master: GainNode
  private musicTimer: number | null = null
  private musicBar = 0

  constructor() {
    const AudioContextConstructor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext

    if (!AudioContextConstructor) {
      throw new Error('AudioContext indisponível.')
    }

    this.context = new AudioContextConstructor()
    this.master = this.context.createGain()
    this.master.gain.value = 0.22
    this.master.connect(this.context.destination)
  }

  async resume() {
    if (this.context.state === 'suspended') {
      await this.context.resume()
    }
  }

  startMusic() {
    if (this.musicTimer !== null) return

    this.playMusicBar()
    this.musicTimer = window.setInterval(() => this.playMusicBar(), 4200)
  }

  stopMusic() {
    if (this.musicTimer === null) return

    window.clearInterval(this.musicTimer)
    this.musicTimer = null
  }

  playGiftReveal() {
    for (let index = 0; index < 30; index += 1) {
      const delay = index * 0.055
      const volume = 0.018 + index * 0.0015
      this.playNoise(0.036, delay, volume, 900)
      if (index % 4 === 0) {
        this.playTone(95, 0.08, delay, 0.038, 'triangle')
      }
    }

    this.playTone(130.81, 0.18, 1.78, 0.06, 'triangle')
    this.playTone(261.63, 0.48, 1.92, 0.048)
    this.playTone(329.63, 0.55, 2.05, 0.042)
    this.playTone(392, 0.66, 2.18, 0.04)
    this.playTone(523.25, 0.86, 2.42, 0.034)
    this.playTone(1046.5, 0.32, 2.58, 0.018, 'triangle')
  }

  playGiftChime() {
    this.playTone(523.25, 0.34, 0, 0.032)
    this.playTone(659.25, 0.42, 0.08, 0.026)
    this.playTone(783.99, 0.52, 0.16, 0.024)
    this.playTone(1046.5, 0.3, 0.28, 0.014, 'triangle')
  }

  playPaperTurn() {
    this.playNoise(0.08, 0, 0.018, 2600)
    this.playTone(392, 0.16, 0.02, 0.018, 'triangle')
    this.playTone(587.33, 0.2, 0.09, 0.016, 'sine')
  }

  playFinish() {
    this.playTone(440, 0.24, 0, 0.034)
    this.playTone(554.37, 0.32, 0.14, 0.03)
    this.playTone(659.25, 0.56, 0.3, 0.028)
  }

  private playMusicBar() {
    const progression = [
      [261.63, 329.63, 392],
      [220, 329.63, 440],
      [196, 293.66, 392],
      [246.94, 329.63, 493.88],
    ]
    const chord = progression[this.musicBar % progression.length]
    this.musicBar += 1

    chord.forEach((frequency, index) => {
      this.playTone(frequency, 3.7, index * 0.04, 0.006, 'sine')
      this.playTone(frequency * 2, 2.4, 0.35 + index * 0.08, 0.0035, 'triangle')
    })

    const melody = [chord[1] * 2, chord[2] * 2, chord[1] * 2, chord[0] * 2, chord[2] * 1.5]
    melody.forEach((frequency, index) => {
      this.playTone(frequency, 0.7, 0.28 + index * 0.56, 0.011, 'triangle')
    })
  }

  private playTone(
    frequency: number,
    duration: number,
    delay = 0,
    volume = 0.03,
    type: OscillatorType = 'sine',
  ) {
    const start = this.context.currentTime + delay
    const oscillator = this.context.createOscillator()
    const gain = this.context.createGain()

    oscillator.type = type
    oscillator.frequency.setValueAtTime(frequency, start)
    gain.gain.setValueAtTime(0.0001, start)
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.05)
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration)
    oscillator.connect(gain)
    gain.connect(this.master)
    oscillator.start(start)
    oscillator.stop(start + duration + 0.04)
  }

  private playNoise(duration: number, delay = 0, volume = 0.02, filterFrequency = 1200) {
    const start = this.context.currentTime + delay
    const bufferSize = Math.max(1, Math.floor(this.context.sampleRate * duration))
    const buffer = this.context.createBuffer(1, bufferSize, this.context.sampleRate)
    const data = buffer.getChannelData(0)

    for (let index = 0; index < bufferSize; index += 1) {
      data[index] = (Math.random() * 2 - 1) * (1 - index / bufferSize)
    }

    const source = this.context.createBufferSource()
    const filter = this.context.createBiquadFilter()
    const gain = this.context.createGain()

    source.buffer = buffer
    filter.type = 'bandpass'
    filter.frequency.setValueAtTime(filterFrequency, start)
    filter.Q.setValueAtTime(1.6, start)
    gain.gain.setValueAtTime(0.0001, start)
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.01)
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration)
    source.connect(filter)
    filter.connect(gain)
    gain.connect(this.master)
    source.start(start)
  }
}

const preloadPhotos = () => {
  photos.forEach(({ src }) => {
    const image = new Image()
    image.src = src
  })
}

const vibrate = (pattern: VibratePattern) => {
  if ('vibrate' in navigator) {
    navigator.vibrate(pattern)
  }
}

const getAudio = async () => {
  if (!tributeAudio) {
    tributeAudio = new TributeAudio()
  }

  await tributeAudio.resume()
  return tributeAudio
}

const playEffect = (sound: 'reveal' | 'chime' | 'page' | 'finish') => {
  getAudio()
    .then((audio) => {
      if (sound === 'reveal') audio.playGiftReveal()
      if (sound === 'chime') audio.playGiftChime()
      if (sound === 'page') audio.playPaperTurn()
      if (sound === 'finish') audio.playFinish()
    })
    .catch(() => undefined)
}

const renderMusicToggle = () => `
  <button
    class="music-toggle ${musicEnabled ? 'is-on' : ''}"
    type="button"
    data-action="toggle-music"
    aria-pressed="${musicEnabled}"
    aria-label="${musicEnabled ? 'Desligar música' : 'Ligar música'}"
  >
    <span aria-hidden="true">${musicEnabled ? '♪' : '♫'}</span>
    <span>${musicEnabled ? 'música ligada' : 'música'}</span>
  </button>
`

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
    ${renderMusicToggle()}
    <section class="opening" aria-labelledby="opening-title">
      <div class="opening-photos" aria-hidden="true">
        <img class="photo-tile tile-one" src="${photo(1).src}" alt="" />
        <img class="photo-tile tile-two" src="${photo(0).src}" alt="" />
        <img class="photo-tile tile-three" src="${photo(3).src}" alt="" />
      </div>
      <div class="opening-card">
        <p class="tiny">Tiffany e William prepararam isso para você</p>
        <h1 id="opening-title">Para Cleidy</h1>
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

const renderReveal = () => `
  <main class="experience gift-reveal-screen">
    <canvas id="soft-petals" aria-hidden="true"></canvas>
    ${renderMusicToggle()}
    <section class="gift-reveal" aria-live="polite">
      <p class="tiny">rufem os tambores...</p>
      <div class="big-gift" aria-hidden="true">
        <span class="big-gift-lid"></span>
        <span class="big-gift-box"></span>
        <span class="big-gift-ribbon"></span>
        <span class="burst-heart burst-one"></span>
        <span class="burst-heart burst-two"></span>
        <span class="burst-heart burst-three"></span>
        <span class="burst-heart burst-four"></span>
      </div>
      <h1>Um presente feito com amor</h1>
    </section>
  </main>
`

const renderBlessing = () => `
  <main class="experience blessing-screen">
    <canvas id="soft-petals" aria-hidden="true"></canvas>
    ${renderMusicToggle()}
    <section class="blessing" aria-live="polite">
      <div class="halo-photo">
        <img src="${photo(0).src}" alt="${photo(0).alt}" />
      </div>
      <p class="tiny">Hoje é sobre você</p>
      <h1>Feliz Dia das Mães, Cleidy</h1>
      <p>Nós te amamos. Obrigado por ser casa, colo, luz e família.</p>
      <button type="button" data-action="choose">Ler nossas cartas</button>
    </section>
  </main>
`

const renderChoice = () => `
  <main class="experience choice-screen">
    <canvas id="soft-petals" aria-hidden="true"></canvas>
    ${renderMusicToggle()}
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
      ${renderMusicToggle()}
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
    ${renderMusicToggle()}
    <section class="closing">
      <div class="closing-stack" aria-hidden="true">
        <img src="${photo(2).src}" alt="" />
        <img src="${photo(4).src}" alt="" />
        <img src="${photo(10).src}" alt="" />
      </div>
      <div class="closing-message">
        <p class="tiny">Com amor</p>
        <h1>Feliz Dia das Mães, Cleidy.</h1>
        <p>Essa homenagem é pequena perto do que sentimos, mas foi feita para você abrir e sentir um pouco do nosso carinho.</p>
        <blockquote>
          "Deus me presenteou com quatro anjos: Rick, Tiffany, Ravi e Levi, e eu sou imensamente grata por ser a mãe de cada um deles."
        </blockquote>
        <p class="closing-signature">Tiffany e William</p>
        <button type="button" data-action="choose">ler de novo</button>
      </div>
    </section>
  </main>
`

const render = () => {
  if (screen === 'closed') {
    app.innerHTML = renderClosed()
  }

  if (screen === 'reveal') {
    app.innerHTML = renderReveal()
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

  if (action === 'toggle-music') {
    musicEnabled = !musicEnabled
    getAudio()
      .then((audio) => {
        if (musicEnabled) {
          audio.startMusic()
          audio.playGiftChime()
        } else {
          audio.stopMusic()
        }
        render()
      })
      .catch(() => {
        musicEnabled = false
        render()
      })
    return
  }

  if (action === 'open') {
    if (revealTimer !== null) {
      window.clearTimeout(revealTimer)
    }
    playEffect('reveal')
    vibrate([20, 30, 20, 30, 40])
    screen = 'reveal'
    render()
    revealTimer = window.setTimeout(() => {
      if (screen !== 'reveal') return
      screen = 'blessing'
      revealTimer = null
      render()
    }, 3550)
    return
  }

  if (action === 'choose') {
    if (revealTimer !== null) {
      window.clearTimeout(revealTimer)
      revealTimer = null
    }
    playEffect('page')
    screen = 'choose'
    render()
    return
  }

  if (action === 'start-letter') {
    const letter = actionButton.dataset.letter as LetterId | undefined
    playEffect('chime')
    vibrate(18)
    if (letter) startLetter(letter)
    return
  }

  if (action === 'next' && activeLetter) {
    playEffect('page')
    vibrate(10)
    activeStep = Math.min(activeStep + 1, letters[activeLetter].steps.length - 1)
    render()
    return
  }

  if (action === 'previous' && activeLetter) {
    playEffect('page')
    activeStep = Math.max(activeStep - 1, 0)
    render()
    return
  }

  if (action === 'finish-letter' && activeLetter) {
    playEffect('finish')
    vibrate([20, 34, 20])
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
    playEffect('finish')
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

preloadPhotos()
render()
