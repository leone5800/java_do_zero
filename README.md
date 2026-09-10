# Java do Zero — site da aula + roteiro completo

Este projeto é um site **100% HTML, CSS e JavaScript puro** (sem frameworks,
sem build) para você apresentar em uma aula introdutória de Java de
**150 minutos**. Tem duas páginas:

- `index.html` — o conteúdo da aula, organizado por tópicos no menu lateral,
  com explicações curtas e "consoles de código" para os alunos acompanharem.
- `quiz.html` — um quiz de 12 perguntas (com trechos de código) para fechar a
  aula testando o que os alunos aprenderam.

Como abrir: basta abrir o arquivo `index.html` no navegador, ou rodar
`npm run dev` (ou `pnpm dev`) que sobe um servidor local na porta 3000.

Abaixo está o **roteiro completo da aula**, escrito para você ler/parafrasear
mesmo sem dominar o assunto ainda. Ele traz exatamente o que falar, o que
perguntar para a turma e uma "cola" explicando o conceito por trás de cada
parte, para você se sentir seguro(a) na frente da sala.

> Dica: leia o roteiro inteiro uma vez antes da aula. Você não precisa decorar
> as falas — use-as como guia e fale com suas próprias palavras.

---

## Visão geral do tempo (150 minutos)

| Bloco | Assunto                     | Tempo  |
| ----- | ---------------------------- | ------ |
| 1     | Abertura                     | 5 min  |
| 2     | O que é Java                 | 15 min |
| 3     | Estrutura de um programa     | 10 min |
| 4     | Variáveis e tipos de dados   | 15 min |
| 5     | Operadores                   | 10 min |
| 6     | Estruturas condicionais      | 15 min |
| 7     | Laços de repetição           | 15 min |
| 8     | Vetores (arrays)             | 10 min |
| 9     | Métodos                      | 15 min |
| 10    | Classes e objetos            | 15 min |
| 11    | Quiz no site                 | 20 min |
| 12    | Encerramento                 | 5 min  |

---

## Bloco 1 — Abertura (5 min)

**O que falar:**

> "Bom dia, gente! Hoje a gente vai começar do absoluto zero em Java — se
> vocês nunca escreveram uma linha de código, tranquilo, é exatamente pra
> isso que essa aula existe. A ideia é que, no final dessas duas horas e meia,
> vocês consigam ler um programa em Java e entender o que ele faz.
>
> A gente vai ver: o que é Java, como um programa é organizado, variáveis,
> operadores, decisões (if/else), repetições (loops), vetores, métodos e uma
> pitada de orientação a objetos — que é o jeito como o Java organiza o
> código. No final, tem um quiz rapidinho pra gente ver o que ficou."

**Pergunta para abrir a turma:**

- "Levanta a mão quem já ouviu falar de Java antes — de programação mesmo,
  não a ilha ou o café." *(Vai gerar risada e quebra o gelo.)*
- "E quem já programou em qualquer linguagem, mesmo que só um pouquinho?"

---

## Bloco 2 — O que é Java (15 min)

**Cola pra você entender antes de explicar:**

Java não roda "direto" no computador como alguns outros programas. O código
que a gente escreve (arquivo `.java`) passa por um **compilador** (o `javac`)
que transforma esse texto em algo chamado **bytecode** (arquivo `.class`).
Esse bytecode é executado por uma "máquina virtual", a **JVM** — que existe
para Windows, Linux, Mac etc. Por isso existe a frase clássica do Java:
"escreva uma vez, rode em qualquer lugar".

Três siglas que sempre confundem, explique assim:

- **JDK** = o kit completo pra *desenvolver* (tem o compilador dentro).
- **JRE** = o ambiente só pra *executar* programas já prontos.
- **JVM** = a "máquina" que de fato lê e roda o bytecode.

**O que falar:**

> "Java é uma linguagem criada nos anos 90, hoje mantida pela Oracle, e é
> usada em banco, em sistema de empresa, em app de Android, em quase tudo que
> não vemos mas que sustenta sistemas grandes.
>
> Agora, uma coisa importante: quando a gente escreve um arquivo `.java`,
> o computador não entende esse texto direto. Existe uma etapa no meio: o
> compilador do Java (chamado `javac`) transforma esse texto em um arquivo
> `.class`, que é o chamado bytecode. Depois, uma 'máquina virtual' — a JVM —
> lê esse bytecode e executa ele no seu sistema, seja Windows, Linux ou Mac.
>
> É por isso que existe aquela frase famosa: 'escreve uma vez, roda em
> qualquer lugar'. Você compila seu código uma vez, e ele roda em qualquer
> computador que tenha a JVM instalada."

**Perguntas para fazer à turma:**

- "Por que vocês acham que faz sentido ter essa etapa de compilação, em vez
  do computador simplesmente ler o texto do jeito que a gente escreveu?"
- "Alguém sabe me dizer uma linguagem que NÃO precisa desse passo de
  compilação, que roda o código linha por linha?" *(Se ninguém souber, cite
  Python ou JavaScript como exemplos de linguagens interpretadas.)*

**Ação no site:** abra o tópico **"01 · O que é Java"** e mostre o console
com os comandos `javac` e `java`.

---

## Bloco 3 — Estrutura de um programa (10 min)

**Cola pra você entender antes de explicar:**

Todo programa Java precisa de uma classe, e dentro dela, de um método
`main` — é o "ponto de partida" que a JVM procura para começar a rodar o
programa. Sem esse método, o programa simplesmente não roda.

**O que falar:**

> "Todo programa em Java começa dentro de uma classe. Não se preocupem agora
> com o que é 'classe' de verdade, isso a gente vê mais pra frente — por
> enquanto, pensem nela como uma caixa que guarda o nosso código.
>
> Dentro dessa caixa, tem uma linha muito específica que sempre aparece:
> `public static void main(String[] args)`. É dentro dela que o programa
> começa a rodar de fato. Se essa linha não existir, o Java nem sabe por onde
> começar.
>
> E toda instrução em Java termina com ponto e vírgula — é a forma da
> linguagem saber onde uma frase de código termina e a outra começa."

**Perguntas para fazer à turma:**

- "Olhando esse código no console, alguém consegue adivinhar o que a linha
  `System.out.println(...)` faz, só pelo nome?"
- "O que vocês acham que aconteceria se eu esquecesse o ponto e vírgula no
  final de uma linha?"

**Ação no site:** abra o tópico **"02 · Estrutura do programa"**, mostre o
console com o "Ola, mundo!" e a saída embaixo dele.

---

## Bloco 4 — Variáveis e tipos de dados (15 min)

**Cola pra você entender antes de explicar:**

Uma variável é uma "gaveta" com nome, que guarda um valor. Em Java, antes de
guardar qualquer coisa nessa gaveta, você precisa dizer que TIPO de coisa vai
guardar ali — número inteiro, número decimal, texto, verdadeiro/falso etc.
Isso é diferente de linguagens como Python, que não exigem dizer o tipo antes.

**O que falar:**

> "Pensem numa variável como uma gaveta com etiqueta. Antes de guardar algo
> nela, em Java a gente precisa dizer o que vai guardar: um número inteiro,
> um número com casas decimais, um texto, ou um verdadeiro/falso.
>
> Os tipos mais comuns são: `int` para números inteiros, `double` para
> números com casas decimais, `boolean` para verdadeiro ou falso, `char`
> para um único caractere, e `String` para texto.
>
> Uma pegadinha que confunde muita gente no início: aspas simples, como
> `'A'`, é um `char`. Aspas duplas, como `\"A\"`, é uma `String`. Parece
> bobagem, mas o compilador é bem rígido com isso."

**Perguntas para fazer à turma:**

- "Se eu quiser guardar a idade de uma pessoa, qual tipo eu deveria usar:
  `int` ou `double`? E se eu quiser guardar a altura dela?"
- "Por que vocês acham que o Java 'obriga' a gente a dizer o tipo antes,
  ao invés de simplesmente deixar guardar qualquer coisa?"

**Ação no site:** abra o tópico **"03 · Variáveis e tipos"** e passe pelas
5 variáveis do console junto com a turma, perguntando o tipo de cada uma
antes de revelar.

---

## Bloco 5 — Operadores (10 min)

**Cola pra você entender antes de explicar:**

Operadores fazem contas e comparações. Os alunos costumam travar no operador
`%` (módulo), que devolve o RESTO de uma divisão, não o resultado da divisão.
Por exemplo, `10 % 3` é `1`, porque 10 dividido por 3 dá 3 com resto 1.

**O que falar:**

> "Operadores são os símbolos que fazem contas e comparações no código. A
> gente tem os aritméticos, que são a soma, subtração, multiplicação, divisão
> e um que costuma confundir: o `%`, chamado de módulo, que devolve o RESTO
> de uma divisão.
>
> Depois temos os operadores relacionais, que comparam dois valores e sempre
> devolvem verdadeiro ou falso: maior que, menor que, igual, diferente. E
> por fim os lógicos, que combinam condições: `&&` significa 'e', `||`
> significa 'ou', e `!` inverte um valor."

**Perguntas para fazer à turma:**

- "Se eu fizer `10 % 3` no código, alguém arrisca qual número aparece?"
  *(Deixe alguns tentarem antes de confirmar que é `1`.)*
- "Qual a diferença entre usar um único `=` e um duplo `==` no código, na
  opinião de vocês?" *(Gancho: `=` atribui um valor, `==` compara.)*

**Ação no site:** abra o tópico **"04 · Operadores"** e rode mentalmente o
console linha por linha com a turma antes de revelar a explicação.

---

## Bloco 6 — Estruturas condicionais (15 min)

**Cola pra você entender antes de explicar:**

`if/else` deixa o programa "escolher" um caminho baseado numa condição.
`switch` é uma alternativa ao `if/else` quando existem várias opções fixas
para comparar com o mesmo valor (tipo os dias da semana).

**O que falar:**

> "Até agora nosso código só faz uma coisa atrás da outra, sem tomar
> decisão nenhuma. É aqui que entra o `if`: ele testa uma condição, e se ela
> for verdadeira, executa um bloco de código; senão, executa outro bloco no
> `else`.
>
> Existe também o `switch`, que é útil quando você tem uma variável e quer
> comparar ela com várias opções fixas — por exemplo, o dia da semana. Cada
> `case` é uma opção, e o `break` diz 'pode parar aqui, já achei o que
> precisava'."

**Perguntas para fazer à turma:**

- "Olhando o código no console, se a variável `idade` fosse `15` em vez de
  `20`, qual mensagem apareceria?"
- "Por que vocês acham que existe o comando `break` dentro de cada `case`
  do switch? O que aconteceria se a gente tirasse ele?"

**Ação no site:** abra o tópico **"05 · Condicionais"**, mude mentalmente o
valor de `idade` com a turma antes de revelar a saída, depois mostre o
exemplo de `switch`.

---

## Bloco 7 — Laços de repetição (15 min)

**Cola pra você entender antes de explicar:**

Loops evitam repetir código manualmente. `for` é melhor quando já se sabe
quantas vezes repetir. `while` testa a condição ANTES de rodar o bloco.
`do-while` testa a condição DEPOIS, então o bloco sempre roda pelo menos uma
vez, mesmo que a condição já comece falsa.

**O que falar:**

> "Imagina que eu precisasse escrever `System.out.println` cinco vezes
> seguidas pra imprimir os números de 0 a 4. Dá pra fazer, mas é chato e não
> escala se eu quiser 1000 números. Pra isso existem os laços de repetição.
>
> O `for` é o mais usado quando a gente já sabe quantas vezes quer repetir —
> ele tem três partes: onde a variável começa, até quando ela vai, e como
> ela muda a cada volta.
>
> O `while` repete enquanto uma condição for verdadeira, testada sempre
> antes de rodar o bloco. Já o `do-while` é parecido, mas testa a condição
> DEPOIS — então o bloco roda pelo menos uma vez, não importa o quê."

**Perguntas para fazer à turma:**

- "No exemplo do `for` no console, quantas vezes o `println` vai rodar, e
  quais números vão aparecer? Pensem antes de eu revelar."
- "Em que situação vocês acham que um `do-while` seria mais útil que um
  `while` normal?" *(Gancho: quando o bloco precisa rodar ao menos uma vez,
  como pedir uma senha até acertar.)*

**Ação no site:** abra o tópico **"06 · Laços de repetição"** e peça para a
turma "rodar" o `for` de cabeça antes de mostrar a explicação.

---

## Bloco 8 — Vetores / arrays (10 min)

**Cola pra você entender antes de explicar:**

Um array guarda várias posições do MESMO tipo, uma atrás da outra na
memória. O detalhe que mais gera erro em quem está começando: a contagem
começa em **zero**, não em um.

**O que falar:**

> "Até agora cada variável guardava só um valor. Mas e se eu precisasse
> guardar as notas de 4 provas de um aluno? Eu poderia criar 4 variáveis
> separadas, mas isso não escala. Pra isso existe o array (ou vetor): ele
> guarda várias posições do mesmo tipo dentro de uma única variável.
>
> O detalhe mais importante, que confunde todo mundo no início: a contagem
> das posições começa no zero, não no um. Então, num array de 4 números, as
> posições vão de 0 até 3."

**Perguntas para fazer à turma:**

- "Se eu tenho um array com 4 notas e quero pegar a última posição, qual
  número eu uso: `4` ou `3`?"
- "O que vocês acham que a propriedade `.length` devolve, olhando o nome
  dela?"

**Ação no site:** abra o tópico **"07 · Vetores (arrays)"** e mostre o
console junto com o laço `for` percorrendo o array.

---

## Bloco 9 — Métodos (15 min)

**Cola pra você entender antes de explicar:**

Um método é um "mini programa" com nome, que recebe entradas (parâmetros) e
pode devolver uma saída (`return`). Serve para não repetir código e para
organizar o programa em partes menores.

**O que falar:**

> "Reparem que, até agora, todo nosso código estava dentro do `main`. Só que,
> em programas maiores, isso vira uma bagunça gigante. Pra resolver isso,
> existem os métodos: blocos de código com nome, que a gente pode chamar
> quantas vezes quiser.
>
> Um método pode receber informações — os parâmetros — e pode devolver um
> resultado com o `return`. No nosso exemplo, o método `somar` recebe dois
> números e devolve a soma deles. Quando eu chamo `somar(2, 3)` no `main`,
> o Java executa o método e substitui essa chamada pelo valor que ele
> devolveu."

**Perguntas para fazer à turma:**

- "Se eu chamar `somar(4, 6)`, qual valor esse método devolve?"
- "Por que vocês acham que é melhor usar um método `somar` ao invés de
  escrever a soma direto sempre que eu precisar dela no código?"

**Ação no site:** abra o tópico **"08 · Métodos"** e destaque o tipo de
retorno, os parâmetros e o `return` separadamente no console.

---

## Bloco 10 — Classes e objetos (15 min)

**Cola pra você entender antes de explicar:**

Essa é a parte mais abstrata, então vá com calma. Uma **classe** é um
molde/planta — como a planta de uma casa. Um **objeto** é a casa construída
de verdade a partir dessa planta. Os **atributos** são as características
do objeto (cor, tamanho); os **métodos** são o que o objeto sabe fazer.

**O que falar:**

> "Agora vem o conceito mais importante do Java: ele é uma linguagem
> orientada a objetos. Isso quer dizer que o código é organizado em torno de
> 'objetos' que representam coisas do mundo real.
>
> Pensem numa classe como a planta de uma casa: ela descreve o que a casa
> vai ter — quantos quartos, qual cor — mas não é a casa em si. O objeto é
> a casa construída de verdade, seguindo essa planta.
>
> No nosso exemplo, `Carro` é a classe: ela descreve que todo carro tem um
> `modelo` e um `ano` — esses são os atributos, as características. E o
> `buzinar()` é um método: uma coisa que o carro sabe fazer.
>
> Pra criar um carro de verdade, um objeto, a gente usa a palavra `new`.
> Isso 'constrói a casa' seguindo a planta da classe."

**Perguntas para fazer à turma:**

- "Se eu criasse uma classe `Aluno`, quais atributos vocês colocariam nela?
  E quais métodos, ou seja, o que um aluno 'sabe fazer' no sistema da
  escola?"
- "Qual a diferença entre a classe `Carro` e um objeto `meuCarro` criado a
  partir dela?"

**Ação no site:** abra o tópico **"09 · Classes e objetos"**, mostre a
classe `Carro` primeiro, depois o `main` criando o objeto com `new`.

---

## Bloco 11 — Quiz no site (20 min)

**O que falar:**

> "Agora vamos testar o que ficou! Abram o site que eu passei e cliquem em
> 'Quiz' no menu do topo. São 12 perguntas, algumas com trechos de código
> pra vocês analisarem antes de responder. Não se preocupem em acertar
> tudo — o objetivo é ver onde a gente precisa reforçar."

**Como conduzir:**

- Projete o quiz na tela e vá resolvendo pergunta por pergunta junto com a
  turma, pedindo que respondam em voz alta ou por votação de mãos antes de
  clicar na alternativa.
- Depois de cada resposta, peça para alguém explicar com as próprias
  palavras por que aquela alternativa está certa — isso reforça mais do que
  só ouvir de você.
- No final, mostre a tela de resultado e revise juntos as perguntas que a
  maioria errou.

**Perguntas extras se sobrar tempo:**

- "Qual dessas 12 perguntas vocês acharam mais difícil, e por quê?"
- "Tem algum tópico de hoje que ficou confuso e vocês querem que eu retome
  rapidinho antes de a gente encerrar?"

---

## Bloco 12 — Encerramento (5 min)

**O que falar:**

> "Muito bem, pessoal! Hoje a gente saiu do zero e já consegue ler um
> programa em Java inteiro: entender como ele é organizado, guardar dados em
> variáveis, tomar decisões, repetir tarefas, guardar várias informações num
> array, organizar código em métodos e, o mais importante, entender a ideia
> de classes e objetos.
>
> Isso é a base de praticamente tudo que vem depois em Java. Na próxima aula
> a gente aprofunda [complete com o próximo assunto do seu curso]. Guardem o
> site com o conteúdo, ele continua disponível pra vocês revisarem em casa."

**Pergunta final para fechar com engajamento:**

- "Numa escala de 0 a 10, o quão confiantes vocês se sentem agora pra ler um
  código simples em Java? Pode responder só com os dedos."

---

## Estrutura de arquivos do projeto

```
index.html        → página com o conteúdo da aula (menu lateral + consoles)
quiz.html         → página do quiz com 12 perguntas
css/style.css     → estilos do site (tema escuro, inspirado em editor de código)
js/highlight.js   → destaque de sintaxe Java usado nos dois arquivos
js/main.js        → navegação entre tópicos no index.html
js/quiz.js        → perguntas, pontuação e revisão do quiz.html
```
