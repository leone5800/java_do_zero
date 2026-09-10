// Banco de perguntas do quiz de Java.
// As opções foram escritas com tamanhos parecidos de propósito,
// para que a resposta certa não seja "a frase mais longa".
const QUESTIONS = [
  {
    question: "Qual é a extensão de um arquivo de código-fonte Java?",
    code: null,
    options: [".class", ".java", ".jar", ".jvm"],
    correct: 1,
    explanation: "O compilador javac lê o .java e gera o .class.",
  },
  {
    question: "O que este programa imprime no console?",
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Ola, mundo!");
    }
}`,
    consoleTitle: "Main.java",
    options: ["Main", "Ola, mundo!", "System.out", "mundo"],
    correct: 1,
    explanation: "println imprime exatamente o texto entre aspas.",
  },
  {
    question: "Qual tipo é usado para armazenar números inteiros?",
    code: null,
    options: ["int", "String", "boolean", "double"],
    correct: 0,
    explanation: "double é para números com casas decimais.",
  },
  {
    question: "Qual é a saída deste trecho?",
    code: `int idade = 20;
if (idade >= 18) {
    System.out.println("Maior de idade");
} else {
    System.out.println("Menor de idade");
}`,
    consoleTitle: "Condicional.java",
    options: ["Menor de idade", "20", "idade >= 18", "Maior de idade"],
    correct: 3,
    explanation: "20 é maior ou igual a 18, então o if é verdadeiro.",
  },
  {
    question: "Qual estrutura testa a condição só depois de executar o bloco?",
    code: null,
    options: ["for", "while", "do-while", "if"],
    correct: 2,
    explanation: "Por isso o do-while roda pelo menos uma vez.",
  },
  {
    question: "Quantas vezes o println é executado aqui?",
    code: `for (int i = 0; i < 3; i++) {
    System.out.println(i);
}`,
    consoleTitle: "For.java",
    options: ["2", "4", "0", "3"],
    correct: 3,
    explanation: "i assume os valores 0, 1 e 2 antes de parar.",
  },
  {
    question: "O que a JVM faz, na prática?",
    code: null,
    options: [
      "Executa o bytecode Java",
      "Compila o código-fonte",
      "Formata textos na tela",
      "Cria bancos de dados",
    ],
    correct: 0,
    explanation: "Quem compila o .java é o javac, não a JVM.",
  },
  {
    question: "Chamando somar(2, 3), qual valor esse método devolve?",
    code: `public static int somar(int a, int b) {
    return a + b;
}`,
    consoleTitle: "Metodos.java",
    options: ["23", "1", "6", "5"],
    correct: 3,
    explanation: "2 + 3 é uma soma, não uma junção de textos.",
  },
  {
    question: "O que modelo e ano representam nessa classe?",
    code: `public class Carro {
    String modelo;
    int ano;
}`,
    consoleTitle: "Carro.java",
    options: [
      "Métodos da classe",
      "Atributos do objeto",
      "Parâmetros do main",
      "Comentários do código",
    ],
    correct: 1,
    explanation: "Eles guardam o estado de cada objeto Carro.",
  },
  {
    question: "Qual palavra-chave cria um novo objeto a partir de uma classe?",
    code: null,
    options: ["class", "void", "new", "static"],
    correct: 2,
    explanation: "class serve para declarar o molde, não para instanciar.",
  },
  {
    question: "Qual é o resultado impresso por este trecho?",
    code: `int x = 10;
int y = 3;
System.out.println(x % y);`,
    consoleTitle: "Operadores.java",
    options: ["3", "30", "10", "1"],
    correct: 3,
    explanation: "% devolve o resto da divisão, não o quociente.",
  },
  {
    question: "Qual tipo representa apenas verdadeiro ou falso?",
    code: null,
    options: ["char", "float", "boolean", "long"],
    correct: 2,
    explanation: "char guarda um único caractere, não uma lógica binária.",
  },
];

let current = 0;
let score = 0;
const answers = [];

const elCard = document.getElementById("quiz-card");
const elResult = document.getElementById("quiz-result");
const elTag = document.getElementById("quiz-tag");
const elQuestion = document.getElementById("quiz-question");
const elConsole = document.getElementById("quiz-console");
const elConsoleTitle = document.getElementById("quiz-console-title");
const elCode = document.getElementById("quiz-code");
const elOptions = document.getElementById("quiz-options");
const elFeedback = document.getElementById("quiz-feedback");
const elNext = document.getElementById("btn-next");
const elProgressFill = document.getElementById("progress-fill");
const elProgressLabel = document.getElementById("progress-label");

function letterFor(index) {
  return String.fromCharCode(65 + index);
}

function renderQuestion() {
  const q = QUESTIONS[current];

  elTag.textContent = `Pergunta ${String(current + 1).padStart(2, "0")}`;
  elQuestion.textContent = q.question;
  elFeedback.className = "quiz-feedback";
  elFeedback.textContent = "";
  elNext.disabled = true;
  elNext.textContent = current === QUESTIONS.length - 1 ? "Ver resultado" : "Próxima pergunta";

  if (q.code) {
    elConsole.style.display = "block";
    elConsoleTitle.textContent = q.consoleTitle || "código";
    elCode.setAttribute("data-lang", "java");
    elCode.textContent = q.code;
    highlightAllConsoles(elConsole);
  } else {
    elConsole.style.display = "none";
  }

  elOptions.innerHTML = "";
  q.options.forEach((optionText, index) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.innerHTML = `<span class="letter">${letterFor(index)}</span><span>${optionText}</span>`;
    btn.addEventListener("click", () => selectAnswer(index));
    elOptions.appendChild(btn);
  });

  const progress = (current / QUESTIONS.length) * 100;
  elProgressFill.style.width = `${progress}%`;
  elProgressLabel.textContent = `Pergunta ${current + 1} de ${QUESTIONS.length}`;
}

function selectAnswer(index) {
  const q = QUESTIONS[current];
  const optionButtons = elOptions.querySelectorAll(".quiz-option");
  const isCorrect = index === q.correct;

  optionButtons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add("is-correct");
    if (i === index && !isCorrect) btn.classList.add("is-wrong");
  });

  elFeedback.textContent = isCorrect
    ? `Correto! ${q.explanation}`
    : `Quase. ${q.explanation}`;
  elFeedback.classList.add("is-visible", isCorrect ? "correct" : "wrong");

  if (isCorrect) score += 1;
  answers.push({ question: q.question, isCorrect, explanation: q.explanation });

  elNext.disabled = false;
}

function showResult() {
  elCard.style.display = "none";
  elResult.classList.add("is-visible");

  elProgressFill.style.width = "100%";
  elProgressLabel.textContent = `Pergunta ${QUESTIONS.length} de ${QUESTIONS.length}`;

  document.getElementById("final-score").textContent = `${score}/${QUESTIONS.length}`;

  const reviewList = document.getElementById("review-list");
  reviewList.innerHTML = "";
  answers.forEach((a, i) => {
    const item = document.createElement("div");
    item.className = `review-item ${a.isCorrect ? "ok" : "fail"}`;
    item.innerHTML = `
      <div class="q">${i + 1}. ${a.question}</div>
      <div class="a">${a.isCorrect ? "Acertou" : "Errou"} — ${a.explanation}</div>
    `;
    reviewList.appendChild(item);
  });
}

elNext.addEventListener("click", () => {
  if (current < QUESTIONS.length - 1) {
    current += 1;
    renderQuestion();
  } else {
    showResult();
  }
});

document.getElementById("btn-restart").addEventListener("click", () => {
  current = 0;
  score = 0;
  answers.length = 0;
  elCard.style.display = "block";
  elResult.classList.remove("is-visible");
  renderQuestion();
});

renderQuestion();
