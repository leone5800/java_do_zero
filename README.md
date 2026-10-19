# Java na Prática: site de aula + roteiro do professor

Este repositório tem duas coisas:

1. **O site da aula** (HTML, CSS e JavaScript puros, sem framework) que você projeta para os alunos. Ele tem explicações curtas, exemplos que rodam de verdade num console, dois quizzes e um laboratório livre.
2. **Este README**, que é o **seu roteiro**. Tudo o que você precisa *falar*, *perguntar* e *entender* está aqui. O site fica só com o conteúdo que os alunos acompanham na tela.

> Você não precisa dominar Java para dar esta aula. Leia o roteiro uma vez antes, rode o site, clique nos exemplos e use os blocos "Fale assim" quase palavra por palavra. Onde houver "Para você, professor", é a explicação que fica só com você.

---

## Sumário

- [Como abrir o site](#como-abrir-o-site)
- [Antes da aula (10 minutos de preparo)](#antes-da-aula-10-minutos-de-preparo)
- [Mapa dos 150 minutos](#mapa-dos-150-minutos)
- [Roteiro, parte por parte](#roteiro-parte-por-parte)
  - [Abertura (0 a 3 min)](#abertura-0-a-3-min)
  - [Parte 01: O que é Java? (10 min)](#parte-01-o-que-é-java-10-min)
  - [Parte 02: Como o Java funciona (10 min)](#parte-02-como-o-java-funciona-10-min)
  - [Parte 03: Primeiro programa (10 min)](#parte-03-primeiro-programa-10-min)
  - [Parte 04: Variáveis e operadores (15 min)](#parte-04-variáveis-e-operadores-15-min)
  - [Parte 05: Quiz relâmpago (5 min)](#parte-05-quiz-relâmpago-5-min)
  - [Parte 06: Condicionais (10 min)](#parte-06-condicionais-10-min)
  - [Parte 07: Intervalo (10 min)](#parte-07-intervalo-10-min)
  - [Parte 08: Laços de repetição (10 min)](#parte-08-laços-de-repetição-10-min)
  - [Parte 09: Arrays e coleções (10 min)](#parte-09-arrays-e-coleções-10-min)
  - [Parte 10: Métodos (10 min)](#parte-10-métodos-10-min)
  - [Parte 11: Orientação a objetos (20 min)](#parte-11-orientação-a-objetos-20-min)
  - [Parte 12: Exceções (10 min)](#parte-12-exceções-10-min)
  - [Parte 13: Quiz final (15 min)](#parte-13-quiz-final-15-min)
  - [Parte 14: Próximos passos (5 min)](#parte-14-próximos-passos-5-min)
- [Gabarito comentado dos quizzes](#gabarito-comentado-dos-quizzes)
- [Laboratório livre](#laboratório-livre)
- [Perguntas difíceis que os alunos fazem (e como responder)](#perguntas-difíceis-que-os-alunos-fazem-e-como-responder)
- [Plano B: se o tempo apertar ou sobrar](#plano-b-se-o-tempo-apertar-ou-sobrar)
- [Glossário rápido](#glossário-rápido)
- [Limites do console do site](#limites-do-console-do-site)
- [Estrutura do projeto](#estrutura-do-projeto)

---

## Como abrir o site

O site é só HTML, CSS e JS. Escolha **uma** das formas:

| Forma | Como |
|---|---|
| **Mais simples** | Dê dois cliques em `index.html`. Abre no navegador e funciona. |
| **Servidor local** | Na pasta do projeto, rode `pnpm dev` (ou `python3 -m http.server 3000`) e acesse `http://localhost:3000`. |
| **Publicar** | Suba a pasta para qualquer hospedagem de arquivos estáticos (Vercel, Netlify, GitHub Pages). |

**Recursos da tela que ajudam na aula**

- **Menu lateral** com todas as partes. Clique para pular. Em celular ele vira o botão "Menu".
- **Mapa da aula** (linha do tempo colorida no topo): cada bloco é proporcional ao tempo. Azul/neutro é explicação, destaque é quiz, outro tom é intervalo.
- **A− / A+**: aumenta e diminui o texto. **Use A+ no projetor**, a turma do fundo agradece.
- **Modo claro/escuro**: use o claro se a sala estiver bem iluminada.
- **Exemplos executáveis**: todo bloco de código tem botão para executar. O aluno (ou você) pode **editar o código e rodar de novo**.
- **Atalho**: `Ctrl + Enter` executa o código em que o cursor está.

---

## Antes da aula (10 minutos de preparo)

Faça isto no dia anterior ou antes de os alunos chegarem:

- [ ] Abra o site, aperte **F11** (tela cheia) e teste o projetor. Ajuste com **A+**.
- [ ] Execute os exemplos das partes 01 a 04 uma vez, para ver como a saída aparece.
- [ ] Faça o **Quiz relâmpago** sozinho. Você vai entender como as respostas aparecem e como o "Saída real no console" é exibido depois de responder.
- [ ] Leia o [Gabarito comentado](#gabarito-comentado-dos-quizzes). É a parte que mais ajuda quando alguém discorda da resposta.
- [ ] Tenha um **cronômetro** à vista (o site tem um no intervalo, mas você precisa de um relógio no resto da aula).
- [ ] Deixe água por perto. São 150 minutos de fala.

**Postura que funciona:** você não precisa ter todas as respostas. Se perguntarem algo que você não sabe, diga *"ótima pergunta, vamos descobrir juntos"* e **teste no laboratório** do site. Isso ensina mais do que qualquer resposta pronta, e mostra aos alunos como um programador de verdade trabalha.

---

## Mapa dos 150 minutos

| # | Parte | Tempo | Acumulado | Tipo |
|---|---|---|---|---|
| 01 | O que é Java? | 10 | 10 | Explicação |
| 02 | Como o Java funciona (JVM) | 10 | 20 | Explicação |
| 03 | Primeiro programa | 10 | 30 | Explicação |
| 04 | Variáveis, tipos e operadores | 15 | 45 | Explicação |
| 05 | Quiz relâmpago | 5 | 50 | Quiz |
| 06 | Condicionais | 10 | 60 | Explicação |
| 07 | Intervalo | 10 | 70 | Pausa |
| 08 | Laços de repetição | 10 | 80 | Explicação |
| 09 | Arrays e coleções | 10 | 90 | Explicação |
| 10 | Métodos | 10 | 100 | Explicação |
| 11 | Orientação a objetos | 20 | 120 | Explicação |
| 12 | Exceções | 10 | 130 | Explicação |
| 13 | Quiz final | 15 | 145 | Quiz |
| 14 | Próximos passos | 5 | 150 | Encerramento |

O **Laboratório** (seção "Lab" no menu) não tem tempo fixo: é a sua reserva para quando sobrar tempo ou a turma quiser testar algo.

> **Dica de ritmo:** cada explicação segue o mesmo desenho. Você **fala** 2 a 3 minutos, **executa** um exemplo, **pergunta** "o que vai aparecer?" *antes* de apertar o botão, e só depois mostra. Apostar antes de ver é o que faz os alunos prestarem atenção.

---

## Roteiro, parte por parte

Legenda dos blocos:

- **Fale assim:** texto sugerido, pode ler quase palavra por palavra.
- **Mostre no site:** o que clicar/executar naquele momento.
- **Pergunte à turma:** pergunta para fazer em voz alta, com a resposta esperada.
- **Para você, professor:** explicação extra só para você, não precisa dizer.
- **Se travar:** o que fazer se der branco ou a turma ficar quieta.

---

### Abertura (0 a 3 min)

> Esses 3 minutos estão dentro dos 10 da Parte 01. Não conte separado.

**Fale assim:**

> "Bom dia, pessoal! Tudo bem com vocês? Hoje a gente vai passar umas duas horas e meia mexendo com uma das linguagens mais usadas do mundo: o **Java**. Eu vou mostrar tudo aqui no telão, e o mais legal é que **cada exemplo roda de verdade**. Então não é só ouvir: vocês vão apostar o que vai acontecer, ver o resultado e, se quiserem, mudar o código e testar.
>
> Vou combinar uma coisa com vocês: **não existe pergunta boba**. Se algo não ficou claro, levantem a mão. Se eu não souber, a gente descobre junto, aqui na tela. Combinado?
>
> A aula tem uma pausa no meio e dois joguinhos de perguntas, um rapidinho e um no final. Vamos nessa?"

**Mostre no site:** a tela inicial. Aponte o **Mapa da aula** (a linha do tempo).

**Pergunte à turma:** *"Alguém aqui já programou alguma coisa? Qualquer coisa, até Scratch ou HTML."*
Isso ajuda você a medir o nível. Não precisa de resposta certa.

**Se travar:** execute o exemplo da capa (o `Olá, turma!`) e diga: *"Isso aqui já é um programa Java inteiro. Daqui a pouco vocês vão entender cada pedacinho."*

---

### Parte 01: O que é Java? (10 min)

**Objetivo:** que os alunos saiam sabendo *o que é* Java, *por que* ele é famoso e *onde* aparece no dia a dia.

**Fale assim:**

> "O Java nasceu em 1995, criado por um time liderado pelo James Gosling, numa empresa chamada Sun. Hoje ele pertence à Oracle. E ele nasceu com uma promessa ousada: *escreva uma vez, execute em qualquer lugar*.
>
> Pensem em um jogo que só roda no Windows. Se você tem Mac, azar. Com Java, o mesmo programa roda no Windows, no Mac e no Linux. Daqui a pouco eu mostro o truque que torna isso possível.
>
> Antes, uma definição bem simples: Java é uma linguagem **orientada a objetos**, o que significa que a gente organiza o programa em 'coisas' parecidas com o mundo real, tipo Aluno, Conta, Carro. É de **tipagem estática**, ou seja, toda variável tem um tipo, e o programa avisa se você misturar coisas que não combinam. E ela é **compilada**, mas vamos ver isso já já."

**Mostre no site:** a tabela **"O que o Java tem de bom"**. Não leia tudo. Escolha 4 e comente:

- **Multiplataforma**: *"É o 'escreva uma vez, rode em qualquer lugar'."*
- **Tipagem forte**: *"O compilador é tipo um corretor de prova: marca o erro antes de você entregar."*
- **Garbage Collector**: *"Em outras linguagens você precisa limpar a memória na mão. No Java existe um 'faxineiro' automático."*
- **Ecossistema gigante**: *"Tem biblioteca pronta pra quase tudo."*

Depois, os **cartões "Onde o Java é usado"**:

> "Android, sistemas de banco, servidores que atendem milhões de pessoas, o Minecraft de computador... Tudo isso é Java ou convive com Java. Quem aqui joga Minecraft? Então já usou Java sem saber."

**Pergunte à turma:**

- *"Se o Java roda em qualquer sistema, quem vocês acham que 'traduz' o programa para o Windows, para o Mac e para o Linux?"*
  **Resposta esperada:** ninguém precisa adivinhar. Responda: *"Uma peça chamada **JVM**. É o assunto da próxima parte."* (O site tem a caixa "Pense antes de continuar" exatamente para isso.)
- *"Quem já usou algum programa ou jogo feito em Java?"* Aceite qualquer resposta.

**Para você, professor:**

- **Java não é JavaScript.** Os nomes confundem, mas são linguagens diferentes, criadas para coisas diferentes. Um aluno vai perguntar. Resposta pronta: *"Java e JavaScript são tão parecidos quanto 'carro' e 'carpete'."*
- **LTS** significa *Long Term Support*, "suporte de longo prazo". São versões que a empresa mantém por muitos anos. Em empresas, quase todo mundo usa uma LTS (17, 21, 25).
- **OpenJDK** é a versão aberta e gratuita do Java. Dá para usar sem pagar nada.

**Se travar:** conte que o Android nasceu com Java. É a informação que mais prende atenção de quem tem celular.

---

### Parte 02: Como o Java funciona (10 min)

**Objetivo:** entender *compilador, bytecode e JVM*. É o conceito mais "abstrato" da aula e o mais importante. Vá devagar.

**Fale assim:**

> "Vou fazer uma analogia. Imaginem que eu escrevi uma receita em português e quero que ela seja entendida por um chinês, um francês e um alemão. Eu poderia traduzir a receita três vezes. Ou eu traduzo **uma vez** para uma língua universal, e cada pessoa tem um tradutor pessoal que lê essa língua universal.
>
> O Java faz a segunda opção. Eu escrevo o código num arquivo `.java`. Um programa chamado **javac**, o compilador, traduz esse arquivo para uma 'língua universal' chamada **bytecode**, que fica num arquivo `.class`. E em cada computador existe um tradutor pessoal, a **JVM**, que lê o bytecode e executa.
>
> Por isso o `.class` roda em qualquer lugar: o que muda de sistema para sistema é só a JVM, e não o meu programa."

**Mostre no site:** o desenho do **pipeline** e clique em **"Simular compilação e execução"**. Ele acende cada etapa em sequência. Narre enquanto acende:

1. *"Aqui está o meu código, `Main.java`."*
2. *"O `javac` compila."*
3. *"Saiu o `Main.class`, o bytecode."*
4. *"A JVM executa, e aparece o resultado no console."*

Depois mostre a pilha **JDK > JRE > JVM**:

> "Três siglas que confundem todo mundo, mas uma está dentro da outra, como bonecas russas. A **JVM** executa. A **JRE** é a JVM mais as bibliotecas, o suficiente para *rodar* programas. O **JDK** é a JRE mais as ferramentas, incluindo o compilador, e é o que a gente instala para *programar*."

**Pergunte à turma:**

- *"O arquivo `.class` roda em Windows e em Mac?"* → **Sim**, desde que cada um tenha sua JVM.
- *"Qual comando compila? E qual executa?"* → `javac` compila (o "c" é de *compiler*), `java` executa. Anote no quadro: `javac Main.java` e depois `java Main`.
- *"O que eu preciso instalar para **programar** em Java: JDK, JRE ou JVM?"* → **JDK**. (Pegadinha: muita gente diz JVM.)

**Para você, professor:**

- **Compilar** é traduzir o código que o humano escreve para algo que a máquina entende. Se houver erro de escrita, o compilador reclama *antes* de o programa rodar.
- **Bytecode** não é código de nenhum computador real: é um formato intermediário, pensado para a JVM.
- A JVM também tem o **Garbage Collector**, aquele faxineiro que você citou na Parte 01.
- Curiosidade para encher o tempo: Kotlin, Scala e Groovy também compilam para bytecode e rodam na mesma JVM.

**Se travar:** volte à analogia da receita. Ela funciona com qualquer idade.

---

### Parte 03: Primeiro programa (10 min)

**Objetivo:** reconhecer cada pedaço de um programa mínimo e saber escrever no console.

**Fale assim:**

> "Agora a gente vai ver o menor programa Java que existe. Parece estranho no começo, com um monte de palavras. Mas eu prometo: no fim dessa parte vocês vão saber o que cada uma faz. Passem o mouse em cada pedaço do código aqui no telão."

**Mostre no site:** a seção **Anatomia do programa**. Passe o mouse (ou clique) em cada parte e leia a nota ao lado:

| Pedaço | Como explicar em voz alta |
|---|---|
| `public class Main` | "Todo código Java mora dentro de uma **classe**. O nome dela tem de ser igual ao do arquivo: `Main.java`." |
| `public static void main(String[] args)` | "É a **porta de entrada**. A JVM sempre começa por aqui. Se não existir, o programa não inicia." |
| `System.out.println("Olá!")` | "Escreve na tela e pula uma linha." |
| `;` | "É o ponto final da frase em Java. Esqueceu, dá erro." |
| `{ }` | "Chaves abrem e fecham blocos. Toda `{` precisa de uma `}`." |

> "Eu não quero que vocês decorem `public static void main`. Por enquanto, é um 'feitiço' que sempre aparece. Ao longo da aula cada palavra vai fazer sentido."

Depois mostre a tabela `println` / `print` / `\n` / `\t` e **execute o exemplo "print"**.

**Pergunte à turma:**

- *"Qual a diferença entre `print` e `println`?"* → `println` pula a linha no fim, `print` continua na mesma linha.
- Antes de executar o exemplo: *"Quantas linhas vão aparecer no console?"* (Deixe apostarem, depois execute.)
- Peça para um aluno trocar o texto entre aspas e executar de novo.

**Mostre o erro de propósito** (exemplo "erro_ponto"):

> "Agora a parte mais importante da aula: **ler o erro**. Eu esqueci um ponto e vírgula. Olhem o que o Java diz: ele fala o arquivo, o número da linha e o que está faltando: `';' expected`. Isso é um presente! Ele está dizendo exatamente onde procurar."

**Para você, professor:**

- `String[] args` são argumentos que podem ser passados ao programa pela linha de comando. Por enquanto ignore.
- **Case sensitive**: `System` com S maiúsculo está certo. `system` dá erro. A mesma regra vale para nomes de variáveis (`nota` e `Nota` são coisas diferentes).
- `System.out.println` se lê: "classe System, saída padrão (out), método println".

**Se travar:** execute o programa, depois **apague uma chave `}` e execute de novo**. A mensagem de erro assusta menos quando foi você que provocou.

---

### Parte 04: Variáveis e operadores (15 min)

**Objetivo:** criar variáveis, conhecer os tipos principais e evitar as pegadinhas da divisão e do `+` com texto.

**Fale assim:**

> "Variável é uma **caixinha com etiqueta**. A etiqueta é o nome, o formato da caixa é o tipo, e dentro vai o valor. Uma caixa de sapato não serve para guardar um litro de leite. Com o Java é igual: se a variável é `int`, ela só guarda número inteiro."

Escreva no quadro ou mostre no site:

```java
int idade = 17;
String nome = "Camila";
```

**Mostre no site:** a tabela dos **tipos primitivos** e **execute o exemplo "tipos"**. Foque nos que mais aparecem:

| Tipo | Uma frase para falar |
|---|---|
| `int` | "O inteiro de todo dia. Guarda até uns 2 bilhões." |
| `double` | "Decimal de todo dia. **Ponto**, não vírgula: `3.14`." |
| `boolean` | "Só `true` ou `false`. Liga/desliga." |
| `char` | "**Uma** letra só, entre aspas **simples**: `'A'`." |
| `String` | "Texto, entre aspas **duplas**. Repare que começa com **S maiúsculo**, porque é uma classe." |
| `long`, `float`, `byte`, `short` | "Primos do `int` e do `double`. Existem para casos especiais; falo deles só se perguntarem." |

**Para você, professor:** a regra para memorizar é **"aspas duplas = texto, aspas simples = uma letra"**. É a causa de metade dos erros de iniciante, e é tema do Quiz 1.

**Nomes de variáveis** (fale rápido):

> "Comece com letra, sem espaço, sem acento, e use **camelCase**: `mediaFinal`, `nomeCompleto`. Parece as corcovas de um camelo: a primeira palavra minúscula e as outras começam com maiúscula. E se o valor **nunca muda**, usamos `final` e MAIÚSCULAS: `final double PI = 3.14;`."

**Operadores:** execute o exemplo **"operadores"** (`+ - * / %`).

> "O `%` é o **resto da divisão**. `10 % 3` dá 1, porque 3 cabe 3 vezes no 10 e sobra 1. O uso clássico: saber se um número é par. Se `n % 2 == 0`, é par."

**A pegadinha da divisão:** leia o aviso amarelo na tela e execute o exemplo **"divisão"**.

> "Atenção aqui, porque isso pega até programador experiente. **Inteiro dividido por inteiro dá inteiro**. A parte decimal é jogada fora. Não arredonda: **corta**. Então `7 / 2` dá 3, e não 3,5. Para ter decimais, pelo menos um dos lados precisa ser `double`: `7 / 2.0` dá 3.5."

**Pergunte à turma (antes de executar):**

- *"Quanto dá `7 / 2` em Java?"* Muita gente vai dizer 3,5. Resposta: **3**.
- *"E `7 % 2`?"* → **1**.
- *"E `7 / 2.0`?"* → **3.5**.

**Atalhos** (`x++`, `x += 5`): execute o exemplo **"incremento"**.

> "`x++` é o mesmo que `x = x + 1`. É o jeito preguiçoso, e o preferido dos programadores, de somar um."

**Strings:** execute o exemplo **"strings"** e mostre `length()`, `toUpperCase()`, `charAt()`, `substring()`.

> "Reparem no **ponto**: `texto.length()`. Esse ponto significa 'pegue esse texto e peça para ele fazer algo'. Vocês vão ver muito esse padrão quando chegarmos em objetos."

**Para você, professor:**

- `charAt(0)` devolve a **primeira** letra, porque a contagem em programação **começa no zero**. Prepare-se: isso vai reaparecer em arrays.
- Quando um dos lados do `+` é texto, o `+` vira **colar** (concatenar): `"Oi " + 1 + 2` vira `Oi 12`. Isso cai no quiz.

**Se travar:** use a analogia da caixinha. *"Se eu tenho uma caixa chamada `idade` e coloco 17 dentro, e depois faço `idade = 18`, o que aconteceu com o 17?"* (Foi substituído.)

---

### Parte 05: Quiz relâmpago (5 min)

**Objetivo:** fixar o que viu até aqui e deixar a turma animada. 7 perguntas em 5 minutos: **não discuta muito**.

**Fale assim:**

> "Hora do jogo! Vou mostrar uma pergunta, vocês pensam por 15 segundos e levantam a mão para a alternativa que acham certa. Depois eu clico e a gente vê o que o console responde. **Quem errar não paga nada**, mas quem acertar ganha o direito de me zoar. Valendo!"

**Como conduzir:**

1. Leia a pergunta em voz alta. Se tiver código, **leia o código linha por linha**.
2. Dê 15 a 20 segundos de silêncio.
3. Peça votação por mão levantada: "Quem vai de A? B? C? D?"
4. Clique na resposta. Leia a explicação (aparece na tela).
5. Quando a pergunta tiver código, o quadro **"Saída real no console"** aparece sozinho depois da resposta. Aponte para ele: é a prova de que o resultado é real. Depois clique em **"Próxima pergunta"**.

**Importante:** as alternativas são **embaralhadas** a cada vez. Então não decore "é a letra B". Decore o *conteúdo*.

**Pergunte à turma:** depois de cada pergunta que uma boa parte errar: *"Por que vocês acharam que era essa?"* Os erros mostram a dúvida real da turma.

**Gabarito e como comentar:** veja a seção [Quiz relâmpago no gabarito](#quiz-relâmpago-7-perguntas).

**Se travar:** se a turma ficar muito quieta, faça você de "advogado do diabo": *"Eu votaria na B. Alguém me convence do contrário?"*

---

### Parte 06: Condicionais (10 min)

**Objetivo:** fazer o programa escolher caminhos com `if`, `else`, `switch` e entender `==` versus `equals`.

**Fale assim:**

> "Até agora o nosso programa é uma estrada reta: faz tudo na ordem. Mas a vida tem bifurcações. *Se* estiver chovendo, levo guarda-chuva; *senão*, não levo. É isso que o `if` faz."

**Mostre no site:** execute o exemplo **"if_"**.

> "O Java testa de **cima para baixo** e executa só o **primeiro** bloco verdadeiro. Depois pula o resto. Se a nota é 6, ele vê que não é maior ou igual a 7, tenta o próximo, vê que é maior ou igual a 5, executa 'Recuperação' e ignora o que sobrou."

**Operadores:** mostre as duas tabelas (comparação e lógicos) e execute **"logicos"**.

> "`&&` é **E**: os dois lados precisam ser verdadeiros. Para dirigir, você precisa ter idade E ter carteira. `||` é **OU**: basta um. Para entrar na festa, basta ter convite OU ser da família. E o `!` **inverte**: o que era verdadeiro vira falso."

**O erro número um:** mostre o aviso amarelo.

> "**Um** igual atribui, **dois** iguais comparam. `x = 5` significa 'coloque 5 em x'. `x == 5` pergunta 'x vale 5?'. Confundir os dois é erro clássico de iniciante e de profissional também."

**Switch:** execute **"switch_"**.

> "Quando eu comparo **uma variável com vários valores fixos**, como dia da semana, o `switch` fica mais limpo que vários `else if`. E o `break` é essencial: sem ele, o Java 'escorrega' para o caso seguinte."

Mostre o **ternário** rapidamente (`"maior" : "menor"`): *"É um `if` compactado numa linha."*

**A pegadinha final, `==` com texto:** execute **"igualdade_string"**.

> "Com números, `==` compara o valor. Com texto, `==` pergunta se são **o mesmo objeto na memória**, e não se têm o mesmo conteúdo. Para comparar texto, **sempre `.equals()`**."

**Pergunte à turma:**

- *"Se a nota é 5, cai em qual ramo do exemplo?"* → "Recuperação" (porque 5 >= 5).
- *"O que acontece se eu esquecer o `break` no `switch`?"* → Ele executa o caso seguinte também. Teste no laboratório se quiser provar.
- *"Para comparar duas Strings, uso `==` ou `.equals()`?"* → **`.equals()`**.

**Para você, professor:** a razão de o `==` falhar com texto está em como o Java guarda objetos (a variável guarda uma "seta" para o objeto, e o `==` compara as setas). Não precisa aprofundar. A regra prática basta: **texto compara com `equals`**.

**Se travar:** use a analogia do semáforo (`if` verde, `else if` amarelo, `else` vermelho) ou a da catraca de balada: *"Maior de 18 E com ingresso?"*.

---

### Parte 07: Intervalo (10 min)

**Fale assim:**

> "Pessoal, a gente está há uma hora no ar. Cabeça fervendo, né? Vamos fazer **10 minutinhos de pausa**. Levantem, bebam água, olhem pro celular. Quando o relógio zerar, voltamos com laços, listas e objetos, que é a parte mais legal."

**Mostre no site:** aperte **Iniciar** no cronômetro grande. Use **+1 min** se a turma pedir e **Reiniciar** se errar.

**Enigma para deixar na tela durante a pausa:**

> "Enquanto vocês descansam, deixo uma aposta: o que vocês acham que `0.1 + 0.2` imprime em Java? Quem acertar sem executar ganha moral."

Quando voltarem, execute o exemplo **"floats"**:

> "Deu **0.30000000000000004**! O Java errou? Não. Quase **toda linguagem** faz isso. O computador pensa em **binário**, e o número 0,1 não cabe certinho em binário, do mesmo jeito que 1/3 não cabe certinho em decimal: `0,333333...` nunca termina. Por isso, para **dinheiro**, programadores não usam `double`: usam `BigDecimal` ou guardam os centavos em `int`."

**Para você, professor:** se alguém perguntar "então todo cálculo com decimal está errado?", responda: *"O erro é minúsculo, na 16ª casa. Para a maioria das coisas não importa, mas em dinheiro importa."*

**Se travar:** se a turma for dispersando, **comece pontualmente**. Isso ensina o hábito de voltar na hora.

---

### Parte 08: Laços de repetição (10 min)

**Objetivo:** repetir tarefas sem copiar e colar. Conhecer `for`, `while`, `do-while`, `break`, `continue`.

**Fale assim:**

> "Imaginem que eu peço para vocês escreverem 'Não vou conversar na aula' cem vezes no caderno. Vocês copiariam a frase cem vezes? Em programação a gente diz: **repita isso 100 vezes**. É o que os laços fazem. Três tipos para escolher conforme a situação."

**Mostre no site:** os 3 cartões e conte a ideia de cada:

| Laço | Quando usar | Frase |
|---|---|---|
| `for` | Sei quantas vezes | "Repita 10 vezes." |
| `while` | Não sei quantas, depende de uma condição | "Enquanto tiver fila, atenda." |
| `do-while` | Preciso rodar **ao menos uma vez** | "Peça a senha; se errar, peça de novo." |

**O `for`:** mostre as 3 partes comentadas e execute **"for_"**:

> "O `for` tem três pedaços separados por ponto e vírgula. Primeiro, **onde começa**: `int i = 1`. Segundo, **até quando continua**: `i <= 5`. Terceiro, **o que faz no fim de cada volta**: `i++`. Primeiro ele checa a condição; se verdadeira, executa o bloco; depois faz o passo; volta a checar."

Execute a **tabuada** e peça a um aluno um número para trocar.

**O `while`** (exemplo **"while_"**):

> "O `while` só tem a condição. Ele testa **antes** de cada volta e pode até nunca rodar. E atenção ao **loop infinito**: se nada dentro do laço muda a condição, o programa nunca acaba e trava o computador."

**`do-while`** (exemplo **"dowhile"**): *"Ele roda primeiro e testa depois. Por isso sempre executa pelo menos uma vez. Reparem no resultado: mesmo com a condição falsa desde o começo, imprimiu uma vez."*

**`break` e `continue`** (exemplo **"breakcont"**):

> "`break` é o **botão de emergência**: sai do laço agora. `continue` é o **pular faixa**: pula só esta volta e segue para a próxima."

**Laço dentro de laço**, execute a **pirâmide**: *"Para cada linha, um laço de dentro desenha os asteriscos. É assim que se desenham tabelas e grades."*

**Pergunte à turma:**

- *"Quantas vezes roda `for (int i = 0; i < 3; i++)`?"* → **3** (valores 0, 1, 2).
- *"E `for (int i = 1; i <= 3; i++)`?"* → **3** também (valores 1, 2, 3). Mostre que há dois jeitos de contar.
- *"Se eu esquecer o `i++` num `while`, o que acontece?"* → Loop infinito.

**Para você, professor:** o erro mais comum é trocar `<` por `<=`. Comente isso e diga que **vai acontecer**, que é normal, e que a solução é testar com valores pequenos.

**Se travar:** use o exemplo do caderno ("escreva 100 vezes") e mostre no laboratório um `for` até 100 imprimindo uma frase.

---

### Parte 09: Arrays e coleções (10 min)

**Objetivo:** guardar vários valores de uma vez. Entender que o índice começa em **0**.

**Fale assim:**

> "Imaginem que eu preciso guardar as notas de 30 alunos. Vou criar 30 variáveis, `nota1`, `nota2`...? Nunca! A gente usa uma **estante com gavetas numeradas**. Isso é o **array**: uma sequência de valores do mesmo tipo, cada um numa 'gaveta' com um número, o **índice**."

Mostre no site o array `{8, 6, 9, 5}` com os índices desenhados no comentário:

> "A primeira gaveta é a **zero**, não a um. Se tem 4 notas, as gavetas são 0, 1, 2 e 3. A última é sempre `tamanho - 1`. Quase todo erro de array vem de esquecer isso."

Execute **"arrays"**.

**O erro de índice:** execute **"erro_array"**:

> "Se eu pedir a gaveta 10 de um array de 4, o Java lança uma **exceção**. Olhem a mensagem: *Index 10 out of bounds for length 4*. Ele diz exatamente: 'pediu a posição 10, mas o tamanho é 4'. Tem tudo que eu preciso para consertar."

**ArrayList:** mostre a tabela Array × ArrayList e execute **"arraylist"**.

> "O array tem um defeito: o **tamanho é fixo**. Se eu criei 4 gavetas, não adiciono uma quinta. O **ArrayList** é uma lista que **cresce e encolhe sozinha**: `add` coloca, `remove` tira, `size()` conta, `get(i)` pega."

Chame atenção para a diferença de escrita: `v.length` (array, sem parênteses) e `lista.size()` (lista, com parênteses).

**HashMap:** execute **"hashmap"**:

> "Um **mapa** é uma agenda de contatos: busco pelo **nome** (a chave) e recebo o **telefone** (o valor). Cada chave é única. `put` guarda, `get` busca."

Aponte o aviso: **a ordem de um HashMap não é a da inserção**. *"Se precisar manter a ordem, existe o `LinkedHashMap`."*

**Pergunte à turma:**

- *"Num array de tamanho 5, qual o último índice?"* → **4**.
- *"Qual a diferença de um array para um ArrayList?"* → Array tem tamanho fixo; ArrayList cresce.
- *"Em uma agenda, o que faz papel de chave e o que faz papel de valor?"* → Nome é a chave, telefone é o valor.

**Para você, professor:** o `<String>` em `ArrayList<String>` diz "esta lista guarda textos". Isso se chama **generics**. Se alguém perguntar, diga só isso: *"É para o Java saber o que eu guardo na lista."*

**Se travar:** use a analogia do prédio: o térreo é o andar 0.

---

### Parte 10: Métodos (10 min)

**Objetivo:** organizar o código em blocos com nome, com parâmetros e retorno.

**Fale assim:**

> "Um método é uma **receita**. Eu escrevo uma vez e uso quantas vezes quiser. Ele recebe **ingredientes** (os parâmetros), faz o trabalho e entrega um **prato pronto** (o retorno). Vejam o `somar`: recebe dois números e devolve a soma."

Mostre a assinatura comentada na tela e **leia cada parte**:

> "`static`... deixa para lá por enquanto. `int` é o **tipo do que ele devolve**. `somar` é o **nome**. `(int a, int b)` são os **ingredientes**. E o `return` entrega o resultado e encerra o método."

**Mostre no site:** execute **"metodos"**. Se um método **não devolve nada**, ele é `void`: *"Só faz uma ação, como imprimir uma mensagem."*

**Recursão** (exemplo **"fatorial"**):

> "Um método pode chamar **a si mesmo**. Parece maluquice, mas é como as bonecas russas: para abrir a maior, você abre a menor que tem dentro, e assim por diante. Precisa de um **caso base**, o ponto onde para. Sem isso, nunca termina e o programa estoura."

O fatorial de 5 é `5 × 4 × 3 × 2 × 1 = 120`.

**Pergunte à turma:**

- *"Se `dobro(n)` devolve `n * 2`, quanto vale `dobro(dobro(3))`?"* → **12** (de dentro para fora: 6, depois 12).
- *"O que significa `void`?"* → Não devolve valor.
- *"Por que usar métodos?"* → Evitar repetição, organizar, reaproveitar, testar.

**Para você, professor:** **parâmetro** é o nome que aparece na definição (`int a`); **argumento** é o valor que você passa na chamada (`somar(3, 4)`). Se não souber diferenciar, não faz mal: todo mundo usa as palavras como sinônimos.

**Se travar:** use a analogia da liquidificadora: coloco frutas (parâmetros), aperto o botão (chamo o método) e sai suco (retorno).

---

### Parte 11: Orientação a objetos (20 min)

**Objetivo:** entender classe × objeto, construtor, `this`, encapsulamento, `static`, herança, polimorfismo e abstração. É o **coração do Java** e a parte mais longa: respire e vá por etapas.

**Fale assim:**

> "Chegamos no que faz o Java ser o Java. Até agora trabalhamos com números e textos soltos. Mas o mundo é feito de **coisas**: aluno, carro, conta de banco. Cada coisa tem **características** e **ações**. A orientação a objetos nos deixa organizar o programa assim."

#### 11.1 Classe × objeto (3 min)

> "A **classe** é o **molde**, a forma de bolo. Ela descreve como o bolo é: tem massa, tem cobertura. O **objeto** é cada **bolo de verdade** que sai da forma. Uma forma, vários bolos. Cada bolo pode ter um sabor diferente, mas todos seguem o mesmo molde."

- **Atributos**: as características (nome, idade). São variáveis dentro da classe.
- **Métodos**: as ações (falar, fazer aniversário).
- **Construtor**: um método especial, com o **mesmo nome da classe**, chamado quando eu uso `new`. Serve para já deixar o objeto pronto.
- **`this`**: significa "**este** objeto aqui". Usamos quando o parâmetro tem o mesmo nome do atributo: `this.nome = nome;` ("o nome *deste objeto* recebe o nome que chegou").

**Mostre no site:** execute **"oo_pessoa"**.

**Pergunte à turma:** *"Quantos objetos `Pessoa` foram criados nesse exemplo?"* (Conte os `new`.) *"Se eu mudar a idade de um, muda a do outro?"* → **Não**, cada objeto tem seus próprios valores.

#### 11.2 Encapsulamento (4 min)

> "Imaginem uma conta bancária. Eu quero que alguém consiga fazer `conta.saldo = 1000000` direto? Claro que não! O saldo precisa ser **protegido**. Por isso o atributo fica `private` (escondido), e quem quiser mexer usa métodos públicos como `depositar` e `sacar`, que **validam** a operação. É como o caixa do banco: você não entra no cofre, você pede ao caixa."

Mostre a tabela de modificadores:

| Modificador | Quem acessa |
|---|---|
| `public` | Qualquer classe |
| `protected` | Mesmo pacote e subclasses |
| (nenhum) | Só o mesmo pacote |
| `private` | Só a própria classe |

Execute **"encaps"**: note que o saque de 500 é **recusado** (a conta tinha 150).

> "Os métodos que só devolvem o valor, como `getSaldo`, são chamados de **getters**. Os que alteram são **setters**. É o padrão que vocês vão ver em qualquer projeto Java."

**Pergunte à turma:** *"Por que o atributo é `private` e o método é `public`?"* → Para controlar o que entra e proteger os dados.

#### 11.3 static (3 min)

> "Um atributo normal existe **uma vez por objeto**: cada aluno tem seu nome. Mas imaginem que eu queira contar **quantos alunos existem**. Esse número não pertence a nenhum aluno, ele pertence à **escola**. Para isso existe o `static`: ele existe **uma única vez**, na classe, e todos compartilham."

Execute **"static_"**: três alunos criados, e o contador chega a **3**. Mostre que acessamos com `Aluno.contador` (nome da **classe**).

> "E agora respondo uma dúvida que ficou lá do começo: por que o `main` é `static`? Porque a JVM precisa chamá-lo **antes** de existir qualquer objeto. Sem objeto, só método de classe."

**Para você, professor:** o quiz final tem uma pergunta exatamente sobre isso (`Pessoa.total`). Se você explicar bem aqui, a turma acerta.

#### 11.4 Herança (3 min)

> "Um `Cachorro` **é um** `Animal`. Um `Gato` também. Então por que escrever `nome` e `comer()` duas vezes? Eu escrevo uma vez na classe `Animal`, e `Cachorro` e `Gato` **herdam** tudo. A palavra mágica é `extends`: *'Cachorro estende Animal'*."

Execute **"heranca"**. Dica de teste mental: a frase *"X é um Y"* tem de fazer sentido. "Cachorro é um animal" faz; "Carro é um motor" não faz (carro *tem* um motor).

#### 11.5 Polimorfismo (3 min)

> "Polimorfismo significa 'muitas formas'. Um `Animal` tem o método `som()`. O `Cachorro` o sobrescreve para dizer 'Au', e o `Gato` para 'Miau'. Quando eu chamo `animal.som()`, o Java **olha qual é o objeto de verdade** e executa o método dele. É como pedir 'faça barulho!' para uma sala cheia de bichos: cada um faz o seu."

A palavra `@Override` indica que estamos **sobrescrevendo** o método da mãe. Execute **"polimorfismo"**.

**Pergunte à turma:** *"Se a variável é do tipo `Animal`, mas o objeto criado com `new` é um `Cachorro`, qual `som()` é chamado?"* → **O do Cachorro**. (É a pergunta do quiz final.)

#### 11.6 Abstrata e interface (2 min)

- **Classe abstrata** (`abstract`): um **modelo incompleto**, que não pode virar objeto direto. Exemplo: não existe um "animal genérico" no mundo, só cachorro, gato... A classe abstrata *obriga* as filhas a implementar certos métodos.
- **Interface**: um **contrato**. Diz *"quem assinar isto promete ter estes métodos"*. Uma classe pode assinar vários contratos (`implements`).

Execute **"abstrata"**. Mostre **"sobrecarga"** só para leitura: *"mesmo nome, parâmetros diferentes; o Java escolhe pelos argumentos."*

Feche com o quadro dos **4 pilares**: **abstração, encapsulamento, herança e polimorfismo**.

**Para você, professor:** diferença rápida entre as duas coisas:
- `extends` → herda de **uma** classe.
- `implements` → assina **uma ou várias** interfaces.
- **Sobrescrita (override)**: a filha reescreve um método da mãe. **Sobrecarga (overload)**: mesmo nome, parâmetros diferentes, na mesma classe. (Nomes parecidos, conceitos diferentes.)

**Se travar:** desenhe no quadro uma caixa `Animal` com setas para `Cachorro` e `Gato`. O visual resolve metade das dúvidas.

---

### Parte 12: Exceções (10 min)

**Objetivo:** entender que erros em execução podem ser tratados sem derrubar o programa.

**Fale assim:**

> "Mesmo programa bem escrito pode ter problema na hora de rodar: o usuário digita 'abc' onde era número, o arquivo não existe, divide por zero. Isso é uma **exceção**. Se eu não tratar, o programa **para na hora**, com aquela mensagem vermelha. Mas se eu **prever**, posso lidar com elegância."

Explique o trio, com a analogia da **rede de segurança do trapezista**:

- `try`: "**tente** fazer isto (o salto)."
- `catch`: "se **cair**, faça isto (a rede)."
- `finally`: "dê certo ou não, **sempre** faça isto no final (arrumar o circo)."

Execute **"exc1"** e **"exc2"**.

> "Reparem: quando acontece o erro no `try`, o resto do bloco **não executa**. O Java pula direto para o `catch`. E o `finally` roda de qualquer jeito."

**Tabela de exceções comuns:** passe os olhos e dê o exemplo mais fácil de cada:

| Exceção | Exemplo do dia a dia |
|---|---|
| `ArithmeticException` | `10 / 0` com inteiros |
| `ArrayIndexOutOfBoundsException` | Pedir a gaveta 10 de um array de 4 |
| `NullPointerException` | Usar um objeto que está vazio (`null`) |
| `NumberFormatException` | Converter `"abc"` em número |
| `IOException` | Arquivo que não existe |

**Checked × Unchecked** (callout verde na tela):

> "Tem dois tipos. As **unchecked** o compilador não obriga a tratar. As **checked**, como `IOException`, o compilador **exige** que eu trate com `try/catch` ou avise com `throws`. É o Java dizendo: 'esse risco é tão comum que você *precisa* pensar nele'."

**`throw` e exceção própria** (exemplo **"exc3"**): *"Eu também posso **lançar** uma exceção, com `throw`. Por exemplo: se a idade for negativa, lanço um erro. E posso criar o meu próprio tipo de exceção."*

**Pergunte à turma:**

- *"Se acontece um erro dentro do `try`, a linha seguinte dentro dele roda?"* → **Não**.
- *"O `finally` roda quando tudo dá certo?"* → **Sim, sempre**.
- *"Qual exceção acontece em `Integer.parseInt("abc")`?"* → `NumberFormatException`.

**Para você, professor:** não precisa explicar a hierarquia completa. Basta dizer que existe uma "família" de exceções e que `Exception` no `catch` pega quase todas. Em código de verdade, é boa prática capturar o tipo **mais específico** possível.

**Se travar:** use a analogia do cinto de segurança: você torce para nunca precisar dele, mas ele é essencial quando precisa.

---

### Parte 13: Quiz final (15 min)

**Objetivo:** revisão geral. São **12 perguntas** em 15 minutos, ou seja, cerca de **1 min por pergunta**. Para dar tempo, **fale pouco**.

**Fale assim:**

> "Agora o desafio final! São 12 perguntas, **todas de ler código e prever o que o console mostra**. Não vale executar antes. Quero que vocês **simulem o programa na cabeça**, linha por linha, como se fossem a JVM. Quem fizer isso direito, acerta tudo. Vamos formar dois times, ou cada um por si, vocês escolhem."

**Sugestão de dinâmica:** divida a turma em **dois times** e some os pontos no quadro. Quem acerta, pontua. Se um time errar, o outro pode "roubar" a pergunta.

**Dica de método para os alunos:** ensine a técnica da **tabelinha**. Em cada pergunta com variáveis, desenhe uma tabelinha com o valor de cada variável a cada passo:

| passo | i | soma |
|---|---|---|
| início | - | 0 |
| volta 1 | 1 | 1 |
| volta 2 | 2 | 3 |
| volta 3 | 3 | 6 |
| volta 4 | 4 | 10 |

**Sobre as alternativas:** de propósito, elas têm tamanho parecido e vêm **embaralhadas**. A resposta certa não é a maior, nem a do meio. Então só dá para acertar **entendendo o código**.

**Se travar (tempo):** se estourar o tempo, **pule** as perguntas de conceito curtas (Herança e Encapsulamento) e faça só as de código. Elas são as mais rápidas, então deixe-as para o final se sobrar.

**Gabarito comentado:** veja [Quiz final no gabarito](#quiz-final-12-perguntas).

---

### Parte 14: Próximos passos (5 min)

**Fale assim:**

> "Pessoal, olhem o que a gente fez em duas horas e meia: variáveis, decisões, repetições, listas, métodos, objetos e tratamento de erros. Isso é a **base de praticamente tudo** em Java.
>
> E agora, o que fazer? Eu deixei aqui um mapa de estudos: aprender a **ler o teclado** com `Scanner`, depois **coleções e streams**, **arquivos**, **banco de dados**, ferramentas como **Maven** e, mais pra frente, o **Spring Boot**, que é o que as empresas mais usam para criar sistemas.
>
> Mas o conselho mais importante é este, e está na tela: **programar se aprende programando**. Peguem os exemplos do site, **mudem, quebrem, consertem**. Cada erro que vocês entenderem vai deixar vocês mais rápidos."

**Mostre no site:** o **mapa de estudos**, os lugares para programar (IntelliJ IDEA Community, VS Code com Extension Pack for Java, Eclipse, NetBeans e compiladores online) e a **colinha rápida**.

**Pergunte à turma (fechamento):**

- *"Qual foi a coisa que mais surpreendeu vocês hoje?"* (Provavelmente `0.1 + 0.2` ou a divisão de inteiros.)
- *"Em qual parte vocês sentiram mais dificuldade?"* Anote para a próxima aula.

**Encerre:**

> "Muito obrigado pela atenção e pela participação de vocês! O site fica disponível para vocês revisarem em casa. Até a próxima!"

---

## Gabarito comentado dos quizzes

> As alternativas **mudam de ordem** a cada vez. Abaixo está o **conteúdo** da resposta certa, não a letra.

### Quiz relâmpago (7 perguntas)

| # | Tema | Resposta certa | Como explicar |
|---|---|---|---|
| 1 | JVM | **O bytecode dos arquivos `.class`** | O `javac` transforma o `.java` em `.class`. A JVM lê o bytecode. Quem escolhe "código-fonte" confundiu as etapas. |
| 2 | Compilação | **`javac Main.java`** | O "c" é de *compiler*. O comando `java` executa depois. |
| 3 | Divisão | **3** | `int / int` dá `int`: `7 / 2 = 3`. A parte decimal é cortada, não arredondada. |
| 4 | Tipos | **2.0** | A conta `10 / 4` acontece **antes**, entre inteiros, e dá 2. Só depois vira `double`: `2.0`. Para ter 2,5, seria `10 / 4.0`. |
| 5 | Strings | **Oi Ana12** | Depois do texto, o `+` vira colar. Então `"Oi Ana" + 1 + 2` cola um e depois o outro. Para somar, teria de ser `(1 + 2)`. |
| 6 | Strings | **105** | Da esquerda para a direita: `5 + 5 = 10` (números), depois `10 + "5"` vira texto `"105"`. |
| 7 | Tipos | **`char c = "A";`** (não compila) | `char` usa aspas **simples**. Aspas duplas criam `String`. As outras compilam: `char d = 66` vira `'B'`; `int` cabe em `float` e `long`. |

**Pontos para reforçar:**
- Perguntas 3 e 4 são a **mesma ideia** (divisão de inteiros). Se a turma errou a 3, a 4 é a revanche.
- Perguntas 5 e 6 são a **ordem de avaliação**. Mostre no console para provar.

### Quiz final (12 perguntas)

| # | Tema | Resposta certa | Como explicar |
|---|---|---|---|
| 1 | Condicionais | **Recuperação** | Nota 6: não é `>= 7`, mas é `>= 5`. O `else if` executa e o resto é ignorado. |
| 2 | Laços | **10** | `i` vale 1, 2, 3, 4 (o `<=` inclui o 4). `1 + 2 + 3 + 4 = 10`. |
| 3 | Laços | **1245** | O `continue` pula **só** o 3. O `break` encerraria tudo (saída `12`). |
| 4 | Arrays | **12** | `v[1]` é `8` (índice começa em 0) e `v.length` é `4`. São dois `int`, então **soma**: `8 + 4 = 12`. Não concatena. |
| 5 | ArrayList | **`[a, c]`** | `remove(1)` remove a **posição** 1, que é o `"b"`. Sobram `a` e `c`. |
| 6 | Métodos | **12** | `f(3)` devolve 6, e esse 6 entra em outro `f`, que devolve 12. De dentro para fora. |
| 7 | Polimorfismo | **Au** | A variável é `Animal`, mas o objeto é `Cao`. O Java chama o método do objeto **real**. |
| 8 | Static | **3** | O atributo `static` é **um só**, compartilhado. Cada `new` soma 1 nele. |
| 9 | Exceções | **B e C** (nessa ordem) | `a[2]` lança erro antes do "A" (o array só tem posições 0 e 1). O `catch` mostra B e o `finally` mostra C. |
| 10 | Herança | **`extends`** | `implements` é para interface; `super` acessa a classe mãe. |
| 11 | Encapsulamento | **Só a própria classe acessa direto** | `private` esconde. De fora, só por getters/setters. |
| 12 | Bônus (overflow) | **-2147483648** | O maior `int` é 2147483647. Somando 1 "dá a volta" e cai no menor. O Java **não avisa**! |

**Pontos para reforçar:**
- A pergunta 9 é a mais traiçoeira: muita gente marca "A, B, C" ou "A, C". Desenhe no quadro: *erro → pula direto pro catch → finally sempre*.
- A pergunta 12 é bônus pela curiosidade. Conte que esse tipo de bug já derrubou sistemas de verdade.
- A 4 e a 5 usam o **índice a partir de zero**. Se erraram, volte ao desenho da estante com gavetas.

---

## Laboratório livre

A seção **Lab** do menu é um **console em branco**: você escreve (ou carrega um exemplo) e executa com `Ctrl + Enter`.

**Quando usar:**
- Um aluno pergunta "e se eu fizer X?" → **teste ao vivo**. É o melhor momento de aprendizado.
- Sobrou tempo no fim.
- Você não sabe a resposta de uma pergunta.

**Desafios prontos para propor (do mais fácil ao mais difícil):**

1. Imprimir seu nome 5 vezes usando `for`.
2. Dizer se um número é par ou ímpar (`%` e `if`).
3. Somar os números de 1 a 100 com um laço. (Resposta: **5050**.)
4. Descobrir o maior valor de um array de 5 números.
5. Criar uma classe `Carro` com marca e velocidade, e um método `acelerar()`.
6. Dividir por zero de propósito e tratar o erro com `try/catch`.

---

## Perguntas difíceis que os alunos fazem (e como responder)

| Pergunta | Resposta curta |
|---|---|
| "Por que o Java é tão chato de escrever?" | "Ele é explícito de propósito: quanto mais ele sabe, mais erros pega *antes* de rodar. Em projeto grande, isso economiza dor de cabeça." |
| "Java e JavaScript são a mesma coisa?" | "Não. Só o nome é parecido. São linguagens diferentes, para fins diferentes." |
| "Por que `main` precisa de tanta palavra?" | "Cada palavra tem um motivo: `public` (qualquer um acessa), `static` (existe sem objeto), `void` (não devolve nada). A gente vai entendendo no caminho." |
| "Qual a diferença entre `==` e `equals`?" | "`==` com texto compara se é o **mesmo objeto**; `equals` compara o **conteúdo**. Para texto, use `equals`." |
| "Por que o índice começa em 0?" | "Porque o índice mede a **distância** do começo. O primeiro item está a zero passos do início." |
| "O que é `null`?" | "É 'nenhum objeto', a caixa vazia. Tentar usar algo que é `null` dá `NullPointerException`." |
| "Preciso decorar tudo isso?" | "Não. Decore as ideias e consulte o resto. Profissional pesquisa o tempo todo." |
| "Java ainda vale a pena?" | "Muito. Bancos, Android, grandes empresas e sistemas de backend usam Java há décadas e continuam contratando." |
| "Qual IDE eu uso?" | "IntelliJ IDEA Community é o mais usado e é gratuito. VS Code com a extensão de Java também funciona." |
| "Por que o `double` deu 0.30000000000000004?" | "Computador pensa em binário, e 0,1 não cabe exato nele. É igual a 1/3 em decimal." |

**Se você não souber responder:** *"Boa pergunta! Vamos testar aqui."* e vá para o Lab. Se mesmo assim não resolver: *"Essa eu vou pesquisar e trago a resposta na próxima aula."* Isso é totalmente aceitável e valorizado pelos alunos.

---

## Plano B: se o tempo apertar ou sobrar

**Se estiver atrasado:**

- Na Parte 04, pule o trecho de **nomes de variáveis** e o de **atalhos** (`+=`).
- Na Parte 09, pule o **HashMap** (deixe como "para casa").
- Na Parte 11, pule **abstrata/interface** e **sobrecarga**. Fique em classe, encapsulamento, `static`, herança e polimorfismo.
- No Quiz final, faça só as perguntas de **código** e pule as 2 de conceito.
- **Nunca corte o intervalo.** Cansaço atrapalha mais do que o conteúdo perdido.

**Se sobrar tempo:**

- Use o **Laboratório** com os desafios acima.
- Peça para os alunos **criarem um quiz** para o colega.
- Mostre a **colinha rápida** da Parte 14 e faça perguntas relâmpago.
- Reexecute a pegadinha `0.1 + 0.2` e discuta `BigDecimal`.

---

## Glossário rápido

| Termo | Em palavras simples |
|---|---|
| **Algoritmo** | Passo a passo para resolver um problema. |
| **Atributo** | Característica de um objeto (variável dentro da classe). |
| **Bytecode** | "Língua universal" gerada pelo compilador e lida pela JVM. |
| **Classe** | Molde que descreve como um objeto é. |
| **Compilar** | Traduzir o código escrito para algo que a máquina executa. |
| **Concatenar** | Colar textos, um depois do outro. |
| **Construtor** | Método especial que prepara o objeto quando usamos `new`. |
| **Exceção** | Erro que acontece durante a execução. |
| **Garbage Collector** | "Faxineiro" que libera a memória que não é mais usada. |
| **Herança** | Uma classe reaproveita atributos e métodos de outra (`extends`). |
| **Índice** | Número da posição em array/lista (começa em 0). |
| **Interface** | Contrato de métodos que uma classe promete ter. |
| **JDK** | Kit para **desenvolver** (inclui compilador). |
| **JRE** | Ambiente para **executar** (JVM + bibliotecas). |
| **JVM** | Máquina virtual que executa o bytecode. |
| **Método** | Bloco de código com nome que realiza uma ação. |
| **Objeto** | Coisa concreta criada a partir de uma classe com `new`. |
| **Parâmetro** | Valor que um método recebe para trabalhar. |
| **Polimorfismo** | Mesmo método, comportamentos diferentes conforme o objeto. |
| **Recursão** | Método que chama a si mesmo. |
| **Retorno** | Valor que o método devolve com `return`. |
| **static** | Pertence à classe, não ao objeto. |
| **Variável** | Caixinha com nome que guarda um valor. |

---

## Limites do console do site

O console da página **simula** Java no navegador: ele não é a JVM de verdade. Ele entende variáveis, operadores, `if`, `switch`, laços, arrays, `ArrayList`, `HashMap`, métodos, classes, herança, `static`, exceções e `String`.

**Não funciona:** `Scanner` (ler do teclado), threads, arquivos, `enum`, `record` e bibliotecas externas.

**O que dizer se perguntarem:** *"Este console é uma simulação para a aula. Para programar de verdade, vocês instalam o JDK e usam um IDE como o IntelliJ."*

Nos exemplos em que o resultado real do Java não poderia ser reproduzido fielmente, o site mostra uma saída fixa, que é a correta.

---

## Estrutura do projeto

```
.
├── index.html          # Página da aula: todo o conteúdo que os alunos veem
├── css/
│   └── style.css       # Visual (tema claro/escuro, responsivo)
├── js/
│   ├── java-sim.js     # Simulador de Java (traduz o código Java para JS e executa)
│   ├── examples.js     # Código de todos os exemplos executáveis
│   ├── quiz-data.js    # Perguntas, alternativas e explicações dos 2 quizzes
│   └── app.js          # Interações: menu, progresso, quiz, console, cronômetro
├── package.json        # Só o comando "dev" que sobe um servidor estático
└── README.md           # Este roteiro
```

**Para editar o conteúdo:**

- **Trocar texto da aula:** `index.html`.
- **Trocar ou criar perguntas:** `js/quiz-data.js`. Cada pergunta tem `q`, `options`, `answer` (índice da correta), `why` e, opcionalmente, `code` e `out`. Mantenha as alternativas com **tamanhos parecidos** para a resposta certa não ficar óbvia.
- **Criar um exemplo novo:** adicione em `js/examples.js` (`E.meu_exemplo = { file, hint, code }`) e use `<div class="example" data-ex="meu_exemplo"></div>` no HTML.
- **Mudar cores:** variáveis CSS no topo de `css/style.css`.
