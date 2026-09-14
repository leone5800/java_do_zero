# Java do Zero — Site da Aula

Site estático (HTML + CSS + JS puro, sem framework) para apresentar em sala uma aula introdutória de Java. Tem:

- Uma página com o passo a passo de como um programa Java é montado (classe → main → `System.out.println` → variáveis → operadores → `if/else` → laços → comentários), cada tópico com um exemplo de código estilo "console".
- Um quiz de 9 perguntas no final, com pontuação, feedback na hora e tela de resultado.

## Como abrir

```bash
pnpm install
pnpm dev
```

Abre em `http://localhost:5173` (ou a porta que o Vite mostrar no terminal). É só isso — não tem backend, não tem banco de dados, é tudo estático.

Estrutura de arquivos:

```
index.html        → estrutura da página
css/style.css      → todo o visual
js/main.js         → conteúdo dos tópicos + navegação
js/quiz.js         → perguntas, respostas e pontuação do quiz
```

Se quiser trocar algum texto da aula, os tópicos estão no array `topics` dentro de `js/main.js`. Se quiser trocar as perguntas do quiz, elas estão no array `questions` dentro de `js/quiz.js`.

---

# 🎤 Roteiro da aula (150 minutos)

Esse roteiro é o seu "cola" para a aula. Ele foi escrito pensando que você vai projetar o site na frente da turma e ir seguindo a página de cima para baixo, tópico por tópico. Fale com suas palavras, use isso como guia — não precisa ler igualzinho.

**Dica geral:** antes de virar o slide/tópico, sempre pergunte alguma coisa pra turma primeiro. Isso segura a atenção e você descobre quem já entendeu.

## Visão geral do tempo

| Bloco | Assunto | Duração | Acumulado |
|---|---|---|---|
| 1 | Abertura e contexto | 10 min | 10 min |
| 2 | O que é Java e a JVM | 15 min | 25 min |
| 3 | A classe (`class`) | 15 min | 40 min |
| 4 | O método `main` | 15 min | 55 min |
| 5 | `System.out.println` | 20 min | 75 min |
| 6 | Pausa rápida | 5 min | 80 min |
| 7 | Variáveis e tipos | 15 min | 95 min |
| 8 | Operadores | 10 min | 105 min |
| 9 | Condicionais (`if`/`else`) | 15 min | 120 min |
| 10 | Laços (`for`) | 15 min | 135 min |
| 11 | Comentários | 5 min | 140 min |
| 12 | Quiz + encerramento | 10 min | 150 min |

---

## Bloco 1 — Abertura (0 a 10 min)

Fale algo parecido com:

> "Bom dia, turma! Hoje a gente vai começar a falar de Java — uma das linguagens de programação mais usadas no mundo. A ideia da aula de hoje não é decorar nada, é entender a **lógica** de como um programa é montado, pedacinho por pedacinho. No final, vocês vão fazer um quiz aqui no site pra testar o que aprenderam."

Pergunte pra turma (não precisa cobrar resposta certa, é só pra quebrar o gelo):

- "Alguém aqui já ouviu falar de Java antes? Onde?"
- "Vocês sabem me dizer um app ou site que provavelmente foi feito em alguma linguagem de programação?"

Abra o site e mostre a tela inicial (seção **Início**). Deixe a turma olhar o exemplo de código que aparece lá — não explique ainda, só diga:

> "Esse bloco de código aqui é um programa Java completo, de verdade. No final da aula vocês vão entender cada linha dele."

---

## Bloco 2 — O que é Java e a JVM (10 a 25 min)

Role a página até o primeiro card: **"O que é Java, afinal?"**

Explique com suas palavras algo como:

> "Java é uma linguagem de programação. A gente escreve o código em um arquivo com final `.java`. Só que o computador não entende `.java` direto — existe uma peça no meio chamada **JVM**, a Java Virtual Machine, que traduz esse código e faz ele funcionar. E o legal é que essa JVM existe pra Windows, Linux, Mac... então o **mesmo código** roda em qualquer lugar."

Pergunte:

- "Por que vocês acham que é útil um código rodar em qualquer sistema, sem precisar reescrever?"
- Resposta esperada (ajude se ninguém chegar lá): porque quem programa não precisa fazer uma versão pra cada tipo de computador.

Comente rapidamente onde Java aparece no dia a dia (aplicativos Android, sistemas de banco, sistemas de empresas grandes) — isso ajuda a dar contexto de "pra que serve estudar isso".

---

## Bloco 3 — A classe (25 a 40 min)

Role até o card **"A classe: a caixa que guarda tudo"**.

> "Todo programa em Java precisa estar dentro de uma **classe**. Pensem na classe como uma caixa: tudo que o programa vai fazer, fica escrito dentro das chaves dessa caixa, o `{` e o `}`."

Aponte para o código na tela e vá mostrando cada parte com o dedo/mouse:

- `public class` — "isso aqui é fixo, é como a gente sempre começa"
- `Escola` — "esse é o nome que a gente escolheu pra essa caixa"
- `{` e `}` — "tudo que a caixa guarda fica entre essas duas chaves"

Ponto importante pra reforçar (é pegadinha clássica de prova):

> "O nome do arquivo `.java` **precisa ser igual** ao nome da classe. Se a classe se chama `Escola`, o arquivo tem que se chamar `Escola.java`, com letra maiúscula igualzinho."

Pergunte:

- "Se eu criar uma classe chamada `Banco`, como deveria se chamar o arquivo?" (resposta: `Banco.java`)
- "O que vocês acham que acontece se eu abrir uma chave `{` e esquecer de fechar com `}`?" (resposta: dá erro, o Java não entende onde a caixa termina)

---

## Bloco 4 — O método `main` (40 a 55 min)

Role até o card **"O método main: a porta de entrada"**.

> "Dentro da classe, o Java procura por uma coisa chamada `main`. É o `main` que diz **onde o programa começa**. Se não tiver um `main`, o programa simplesmente não roda — nem dá pra executar."

Mostre a linha completa e explique que ela é praticamente sempre igual:

```java
public static void main(String[] args) {
}
```

> "Vocês não precisam entender cada palavrinha disso agora. Por enquanto, decorem que é assim que todo programa Java começa. Depois, conforme a gente for vendo mais coisas, cada parte vai fazer mais sentido."

Pergunte:

- "Onde, dentro da classe, o `main` deve ficar — por dentro ou por fora das chaves da classe?" (resposta: por dentro)
- "O que vocês acham que acontece se eu tirar o `main` do código?" (resposta: dá erro, o programa não sabe por onde começar)

---

## Bloco 5 — `System.out.println` (55 a 75 min)

Esse é o coração da aula de hoje. Role até o card **"System.out.println: fazendo o programa falar"**.

> "Até agora a gente só montou a estrutura, mas o programa não mostrava nada na tela. Pra mostrar alguma coisa, a gente usa `System.out.println()`. Tudo que a gente escrever **entre aspas**, dentro dos parênteses, aparece exatamente daquele jeito na tela."

Mostre o exemplo no site:

```java
System.out.println("Bom dia, turma!");
```

Vá explicando pedaço por pedaço, bem devagar:

- `System.out` — "é o 'caminho' até a tela do computador, decorem como um bloco só"
- `.println(...)` — "é o comando que manda escrever"
- `"Bom dia, turma!"` — "isso entre aspas é exatamente o que aparece escrito"
- `;` — "todo comando em Java termina com ponto e vírgula. Esquecer o `;` é o erro mais comum de quem tá começando"

Mostre a diferença entre `println` e `print`:

> "`println` escreve e **pula pra próxima linha**. `print` escreve e **continua na mesma linha**. É só essa a diferença."

Atividade rápida (uns 5 minutos): peça pra alguns alunos, em voz alta, dizerem o que apareceria na tela se você mudasse o texto entre aspas. Escreva no quadro/tela algumas variações e pergunte o resultado, por exemplo:

- `System.out.println("Aula de Java");` → o que aparece?
- Dois `System.out.println` seguidos, com textos diferentes → aparecem em quantas linhas?

---

## Bloco 6 — Pausa rápida (75 a 80 min)

Dê 5 minutos de respiro pra turma. Pode falar:

> "Vamos dar uma pausa rapidinha de 5 minutos. Quando voltar, a gente vai aprender a guardar informações dentro do programa."

---

## Bloco 7 — Variáveis e tipos primitivos (80 a 95 min)

Role até o card **"Variáveis e tipos primitivos"**.

> "Uma variável é um espacinho de memória que guarda um valor. Em Java, diferente de outras linguagens, a gente sempre tem que avisar **qual o tipo** daquele valor antes de dar um nome pra ele."

Mostre o exemplo e explique cada tipo, um por um:

- `int` — números inteiros, sem casa decimal. Exemplo: idade, quantidade.
- `double` — números com casa decimal. Exemplo: altura, preço.
- `String` — texto, sempre entre aspas duplas. Exemplo: nome, endereço.
- `boolean` — só existem dois valores possíveis: `true` ou `false`.

> "Percebam o padrão: **tipo, depois nome, depois igual, depois o valor, e termina com ponto e vírgula.** Isso se repete sempre."

Pergunte (sem mostrar a resposta antes):

- "Se eu quiser guardar o preço de um produto, tipo 19.90, que tipo eu devo usar?" (resposta: `double`)
- "E se eu quiser guardar se um aluno está matriculado ou não?" (resposta: `boolean`)
- "E o nome de uma pessoa?" (resposta: `String`)

Reforce: "Java é bem rígido com isso — se você disser que é `int` e tentar colocar um texto, dá erro."

---

## Bloco 8 — Operadores (95 a 105 min)

Role até o card **"Operadores: fazendo contas e comparações"**.

> "Java usa os operadores de matemática que a gente já conhece: `+`, `-`, `*`, `/`. Só tem um novo, que é o `%`, chamado de **resto da divisão**."

Mostre o exemplo:

```java
int a = 10;
int b = 3;
System.out.println(a % b);
```

> "10 dividido por 3 dá 3, e sobra 1. O `%` devolve exatamente esse resto: **1**."

Pergunte, fazendo a conta junto com eles no quadro:

- "Quanto é 10 % 2?" (resposta: 0, porque a divisão é exata)
- "Quanto é 7 % 2?" (resposta: 1)

Cite rapidamente os operadores de comparação (`==` igual, `>` maior, `<` menor) — sem se aprofundar ainda, só avisando:

> "Esses aqui a gente vai usar já já, no próximo assunto: as condições."

---

## Bloco 9 — Condicionais: `if` / `else` (105 a 120 min)

Role até o card **"Condicionais: if / else"**.

> "Agora que a gente sabe comparar valores, dá pra fazer o programa **tomar decisões**. O `if` testa uma condição: se ela for verdadeira, executa o bloco de dentro dele. Se for falsa, ele pode pular pro `else`, quando existir."

Mostre o exemplo:

```java
int nota = 6;

if (nota >= 7) {
    System.out.println("Aprovado");
} else {
    System.out.println("Reprovado");
}
```

Vá explicando com uma "leitura em português":

> "Isso aqui lê-se assim: **se** a nota for maior ou igual a 7, imprime Aprovado. **Se não** (senão), imprime Reprovado."

Pergunte, mudando os números no quadro pra fixar:

- "Nesse código, com nota = 6, o que vai aparecer na tela?" (resposta: Reprovado)
- "E se eu mudar a nota pra 8, o que aparece?" (resposta: Aprovado)
- "O `else` é obrigatório?" (resposta: não, pode ter só o `if`)

---

## Bloco 10 — Laços de repetição: `for` (120 a 135 min)

Role até o card **"Laços de repetição: for e while"**.

> "Às vezes a gente precisa repetir uma ação várias vezes — imagina imprimir os números de 1 a 100, um por um, escrevendo `println` cem vezes. Pra isso existe o laço `for`."

Mostre o exemplo:

```java
for (int i = 1; i <= 3; i++) {
    System.out.println(i);
}
```

Explique as três partes do `for`, apontando uma por vez:

- `int i = 1` — "de onde a contagem começa"
- `i <= 3` — "a condição: continua repetindo enquanto isso for verdade"
- `i++` — "o passo: soma 1 a cada volta"

> "Então esse laço aqui vai imprimir 1, depois 2, depois 3 — e para, porque quando `i` chega a 4, a condição `i <= 3` fica falsa."

Pergunte:

- "Quantas vezes esse laço vai repetir?" (resposta: 3 vezes)
- "Se eu mudar a condição pra `i <= 5`, quantas vezes vai repetir?" (resposta: 5 vezes)
- Desafio rápido: "O que eu preciso mudar no código pra ele imprimir de 1 até 10?" (resposta: trocar o `3` por `10`)

Se der tempo, comente rapidamente que existe também o `while`, que funciona parecido mas sem as três partes juntas — não precisa se aprofundar, é só citar.

---

## Bloco 11 — Comentários (135 a 140 min)

Role até o último card, **"Comentários: anotações que o Java ignora"**.

> "Pra fechar a parte de conteúdo: comentários são anotações que a gente escreve no meio do código só pra explicação humana. O Java **ignora completamente** essas linhas na hora de rodar o programa."

Mostre rapidinho os dois jeitos:

- `// comentário` — comenta só aquela linha.
- `/* comentário */` — comenta um bloco, pode ter várias linhas.

> "É uma boa prática comentar partes do código pra explicar o que elas fazem, principalmente quando o código começa a ficar grande."

---

## Bloco 12 — Quiz e encerramento (140 a 150 min)

Role até a seção **Quiz** e clique em "Começar quiz" com a turma acompanhando na tela.

> "Bom, chegou a hora de testar o que vocês aprenderam hoje. São 9 perguntas rápidas, sobre tudo que a gente viu. Leiam o código com atenção antes de responder — não é pra chutar a opção que parece mais completa, é pra realmente entender o que o código faz."

Sugestões de como conduzir:

- Se o site vai ser respondido em grupo (você projetando e a turma decidindo em voz alta), leia a pergunta e o código em voz alta antes de deixar a turma responder.
- Se cada aluno for acessar o site no próprio celular/computador, dê um tempo de leitura antes de perguntar "quem já respondeu essa?".
- Depois de cada pergunta, comente rapidamente por que a resposta certa é aquela — o site já mostra um feedback, mas reforçar com suas palavras ajuda a fixar.

Ao final, com o resultado na tela, encerre com algo como:

> "Muito bem, gente! Hoje vocês aprenderam a estrutura básica de um programa Java: a classe, o main, o `println`, variáveis, operadores, condições e laços. Na próxima aula, a gente vai construir programas um pouco maiores usando tudo isso junto."

---

## 📋 Gabarito do quiz (só pra sua referência)

| # | Pergunta (resumo) | Resposta certa |
|---|---|---|
| 1 | Pra que serve a JVM | B — Executar o programa em qualquer sistema operacional |
| 2 | Nome do arquivo pra classe `Escola` | B — `Escola.java` |
| 3 | Classe sem `main` | A — Mostra erro e não inicia |
| 4 | Diferença `println` x `print` | A — `println` pula linha, `print` não |
| 5 | Tipo errado em `int`/`double`/`String` | D — Estão todas certas |
| 6 | O que faz o operador `%` | C — Mostra o resto da divisão |
| 7 | Saída do `if/else` com nota = 6 | B — Vai imprimir Reprovado |
| 8 | Quantas vezes o `for` roda (`i=1` até `i<=3`) | B — Executa 3 vezes |
| 9 | O que o Java faz com comentários | B — Ignora completamente na hora de rodar |

Se quiser reforçar algum ponto com a turma depois do quiz, esse gabarito ajuda a explicar rapidinho o "porquê" de cada resposta.
