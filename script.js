// Seleciona os elementos do DOM necessários para o menu mobile
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("navMenu")

// Adiciona evento de clique no botão hamburguer
hamburger.addEventListener("click", () => {
  // Alterna a classe 'active' para mostrar/esconder o menu
  navMenu.classList.toggle("active")
})

// Fecha o menu quando clicar em um link (melhora a experiência mobile)
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// ===================================
// QUIZ INTERATIVO
// ===================================

// Array com as perguntas do quiz
const quizQuestions = [
  {
    question: "O que significa a sigla IA?",
    answers: ["Inteligência Artificial", "Internet Avançada", "Informação Automática", "Interface Adaptativa"],
    correct: 0, // Índice da resposta correta (começa em 0)
  },
  {
    question: "Quem propôs o famoso Teste de Turing?",
    answers: ["Steve Jobs", "Bill Gates", "Alan Turing", "Mark Zuckerberg"],
    correct: 2,
  },
  {
    question: "Qual destes é um exemplo de IA no dia a dia?",
    answers: ["Calculadora simples", "Assistente virtual (Siri, Alexa)", "Relógio digital", "Controle remoto"],
    correct: 1,
  },
  {
    question: "O que é Machine Learning?",
    answers: [
      "Um tipo de computador",
      "Uma linguagem de programação",
      "Aprendizado de máquina através de dados",
      "Um sistema operacional",
    ],
    correct: 2,
  },
  {
    question: "Em que ano o termo 'Inteligência Artificial' foi criado?",
    answers: ["1956", "1980", "2000", "1920"],
    correct: 0,
  },
]

// Variáveis globais do quiz
let currentQuestionIndex = 0 // Índice da pergunta atual
let score = 0 // Pontuação do usuário

// Função que inicia o quiz
function startQuiz() {
  currentQuestionIndex = 0
  score = 0
  showQuestion()
}

// Função que exibe a pergunta atual
function showQuestion() {
  // Seleciona os elementos do DOM
  const questionText = document.getElementById("questionText")
  const answersContainer = document.getElementById("answersContainer")
  const currentQuestionSpan = document.getElementById("currentQuestion")
  const totalQuestionsSpan = document.getElementById("totalQuestions")

  // Pega a pergunta atual do array
  const currentQuestion = quizQuestions[currentQuestionIndex]

  // Atualiza o texto da pergunta
  questionText.textContent = currentQuestion.question

  // Limpa as respostas anteriores
  answersContainer.innerHTML = ""

  // Cria um botão para cada resposta
  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button")
    button.textContent = answer
    button.className = "answer-btn"
    // Adiciona evento de clique que chama a função checkAnswer
    button.addEventListener("click", () => checkAnswer(index))
    answersContainer.appendChild(button)
  })

  // Atualiza o contador de perguntas
  currentQuestionSpan.textContent = currentQuestionIndex + 1
  totalQuestionsSpan.textContent = quizQuestions.length
}

// Função que verifica se a resposta está correta
function checkAnswer(selectedIndex) {
  const currentQuestion = quizQuestions[currentQuestionIndex]
  const buttons = document.querySelectorAll(".answer-btn")

  // Desabilita todos os botões após a resposta
  buttons.forEach((btn) => (btn.disabled = true))

  // Verifica se a resposta está correta
  if (selectedIndex === currentQuestion.correct) {
    // Resposta correta
    buttons[selectedIndex].classList.add("correct")
    score++ // Incrementa a pontuação
    updateScore()
  } else {
    // Resposta incorreta
    buttons[selectedIndex].classList.add("incorrect")
    // Mostra a resposta correta
    buttons[currentQuestion.correct].classList.add("correct")
  }

  // Aguarda 1.5 segundos antes de ir para a próxima pergunta
  setTimeout(() => {
    currentQuestionIndex++

    // Verifica se ainda há perguntas
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion() // Mostra próxima pergunta
    } else {
      showResult() // Mostra resultado final
    }
  }, 1500)
}

// Função que atualiza a pontuação na tela
function updateScore() {
  const scoreSpan = document.getElementById("score")
  scoreSpan.textContent = score
}

// Função que mostra o resultado final do quiz
function showResult() {
  const quizArea = document.getElementById("quizArea")
  const resultArea = document.getElementById("resultArea")
  const resultTitle = document.getElementById("resultTitle")
  const resultMessage = document.getElementById("resultMessage")

  // Esconde a área de perguntas
  quizArea.style.display = "none"
  // Mostra a área de resultado
  resultArea.style.display = "block"

  // Calcula a porcentagem de acertos
  const percentage = (score / quizQuestions.length) * 100

  // Define mensagem baseada na pontuação
  if (percentage === 100) {
    resultTitle.textContent = "🎉 Perfeito!"
    resultMessage.textContent = `Você acertou todas as ${score} perguntas! Você é um expert em IA!`
  } else if (percentage >= 60) {
    resultTitle.textContent = "👏 Muito Bem!"
    resultMessage.textContent = `Você acertou ${score} de ${quizQuestions.length} perguntas. Continue estudando!`
  } else {
    resultTitle.textContent = "📚 Continue Aprendendo!"
    resultMessage.textContent = `Você acertou ${score} de ${quizQuestions.length} perguntas. Não desista, a prática leva à perfeição!`
  }
}

// Função que reinicia o quiz
function restartQuiz() {
  const quizArea = document.getElementById("quizArea")
  const resultArea = document.getElementById("resultArea")

  // Mostra a área de perguntas
  quizArea.style.display = "block"
  // Esconde a área de resultado
  resultArea.style.display = "none"

  // Reinicia o quiz
  startQuiz()
}

// ===================================
// CURIOSIDADES SOBRE IA
// ===================================

// Array com curiosidades sobre IA
const curiosities = [
  "🤖 O termo 'Inteligência Artificial' foi usado pela primeira vez em 1956 na Conferência de Dartmouth.",
  "🎮 A IA já consegue vencer campeões mundiais em jogos complexos como xadrez, Go e até videogames.",
  "🎨 Existem IAs capazes de criar obras de arte, música e até escrever poesias que parecem feitas por humanos.",
  "🚗 Carros autônomos usam IA para processar milhões de dados por segundo e tomar decisões em tempo real.",
  "🏥 A IA pode detectar certos tipos de câncer com mais precisão que médicos humanos em alguns casos.",
  "📱 Seu smartphone usa IA para reconhecimento facial, sugestões de texto e otimização de bateria.",
  "🌍 A IA está ajudando a combater mudanças climáticas através da análise de grandes volumes de dados ambientais.",
  "🔮 Especialistas preveem que a IA terá um impacto maior na sociedade do que a invenção da internet.",
  "🧠 Redes neurais artificiais são inspiradas no funcionamento do cérebro humano.",
  "💬 Chatbots modernos podem manter conversas tão naturais que às vezes é difícil saber que não são humanos.",
]

// Variável para controlar qual curiosidade foi mostrada por último
let lastCuriosityIndex = -1

// Função que mostra uma curiosidade aleatória
function showCuriosity() {
  const curiosityText = document.getElementById("curiosityText")

  // Seleciona uma curiosidade aleatória diferente da última
  let randomIndex
  do {
    randomIndex = Math.floor(Math.random() * curiosities.length)
  } while (randomIndex === lastCuriosityIndex && curiosities.length > 1)

  // Atualiza a última curiosidade mostrada
  lastCuriosityIndex = randomIndex

  // Adiciona animação de fade
  curiosityText.style.opacity = "0"

  setTimeout(() => {
    curiosityText.textContent = curiosities[randomIndex]
    curiosityText.style.opacity = "1"
  }, 300)
}

// ===================================
// SCROLL SUAVE PARA ÂNCORAS
// ===================================

// Adiciona comportamento de scroll suave para todos os links âncora
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault() // Previne o comportamento padrão

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      // Faz scroll suave até o elemento
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// ===================================
// INICIALIZAÇÃO
// ===================================

// Inicia o quiz quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
  startQuiz()

  // Adiciona transição suave para o texto da curiosidade
  const curiosityText = document.getElementById("curiosityText")
  curiosityText.style.transition = "opacity 0.3s ease"

  // Configura os elementos para animação inicial
  const elements = document.querySelectorAll(".card, .application-item, .timeline-item, .resource-card")

  elements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  })

  // Chama a função na primeira vez
  revealOnScroll()
})

// ===================================
// ANIMAÇÃO DE SCROLL (ELEMENTOS APARECEM)
// ===================================

// Função que adiciona animação quando elementos entram na viewport
function revealOnScroll() {
  const elements = document.querySelectorAll(".card, .application-item, .timeline-item, .resource-card")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    // Se o elemento está visível na tela
    if (elementTop < windowHeight - 100) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Adiciona listener para scroll
window.addEventListener("scroll", revealOnScroll)

// ===================================
// CONSOLE LOG (MENSAGEM PARA DESENVOLVEDORES)
// ===================================

console.log("%c🤖 Bem-vindo ao IA para Iniciantes!", "color: #6366f1; font-size: 20px; font-weight: bold;")
console.log("%cEste site foi criado para fins educacionais.", "color: #64748b; font-size: 14px;")
console.log("%cCurioso sobre o código? Explore os arquivos HTML, CSS e JavaScript!", "color: #8b5cf6; font-size: 14px;")
