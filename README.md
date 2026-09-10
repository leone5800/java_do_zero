# Python do Zero — Roteiro da Aula (150 minutos)

Este arquivo é o seu **roteiro de professor**. Ele foi escrito para quem ainda não domina o conteúdo: está tudo mastigado, com as **falas prontas** (o que dizer), o que **mostrar na tela** e o que **perguntar** para a turma.

> Leia como se estivesse conversando. As falas em _itálico entre aspas_ são sugestões do que você pode dizer — adapte com suas palavras, fique à vontade.

---

## Antes de começar (checklist rápido)

- [ ] Abra o site (`index.html`) no navegador e deixe no telão.
- [ ] Teste o menu lateral: clicar em cada item rola a página até o tópico.
- [ ] Deixe o **Quiz final** para o fim da aula.
- [ ] Tenha água por perto: 150 minutos é bastante tempo de fala. 🙂
- [ ] Lembre-se: **você não precisa ser um expert**. Basta ir junto com os alunos, lendo o código e a saída do console na tela.

### Como o site te ajuda
Cada tópico tem um **console preto** mostrando o código Python e, logo abaixo, a **saída** que ele produz. A dinâmica da aula toda é a mesma:
1. Você lê o código em voz alta.
2. Pergunta para a turma: _"o que vocês acham que vai aparecer?"_
3. Só depois mostra a saída no console.

Isso mantém a turma pensando junto e não só ouvindo.

---

## Mapa do tempo (150 min)

| Bloco | Tópico | Tempo |
|------:|--------|:-----:|
| 0 | Abertura e boas-vindas | 5 min |
| 1 | O que é Python | 8 min |
| 2 | print e comentários | 10 min |
| 3 | Variáveis e tipos | 12 min |
| 4 | Entrada de dados (input) | 10 min |
| 5 | Operadores | 12 min |
| — | **Pausa curta** | 5 min |
| 6 | Condições (if / elif / else) | 13 min |
| 7 | Laços (for / while) | 15 min |
| 8 | Listas | 12 min |
| 9 | Matrizes bidimensionais (S16) | 15 min |
| 10 | Funções (S17) | 14 min |
| 11 | Documentação, testes e depuração (S18) | 10 min |
| ? | Quiz final | 14 min |
| — | Fechamento | 5 min |

Se o tempo apertar, os blocos que dá para encurtar são o **5 (Operadores)** e o **8 (Listas)**. Os blocos de **matrizes, funções e testes** são o coração da aula (é para onde a matéria estava indo), então proteja o tempo deles.

---

## Bloco 0 — Abertura (5 min)

> _"Bom dia, pessoal! Tudo certo com vocês? Hoje a nossa aula vai ser um pouquinho diferente: a gente vai começar do absoluto zero em Python e, no fim, vocês vão ver que já conseguem entender coisas que pareciam complicadas, como matrizes, funções e até testes de código."_

> _"A ideia não é decorar nada. É a gente ler código junto, pensar no que vai acontecer e conferir na tela. Programar é muito mais sobre pensar do que sobre decorar."_

> _"Ah, e no final tem um quiz. Não vale nota de castigo, viu? É só pra gente ver o quanto pegou. E eu já aviso: as respostas são parecidas de propósito, então vão ter que LER o código com atenção."_

**Mostre na tela:** a página inicial do site, com os números "11 tópicos, 16 perguntas, 150 minutos".

**Pergunte:** _"Alguém aqui já programou alguma coisa antes? Nem que seja mexer numa fórmula de planilha?"_ — isso ajuda a medir a turma.

---

## Bloco 1 — O que é Python (8 min)

**Mostre:** tópico **"01 · O que é Python"**.

> _"Python é uma linguagem de programação. Traduzindo: é um jeito de dar ordens para o computador usando um texto que a gente consegue ler quase como português."_

> _"O computador lê o nosso código de cima para baixo, uma linha de cada vez, e faz exatamente o que está escrito — nem mais, nem menos. Ele é obediente e burro ao mesmo tempo: faz certinho o que você mandou, mesmo que você tenha mandado errado."_

> _"A gente usa Python pra um monte de coisa: analisar dados, criar sites, automatizar tarefas chatas e até inteligência artificial."_

**Aponte para o console** com o `print("Olá! Bem-vindos ao Python")`.

> _"Olha esse primeiro programa. Ele tem uma linha só que faz alguma coisa. O que vocês acham que ele vai mostrar na tela?"_

Espere respostas, e então mostre a saída.

> _"Isso! Ele mostra o texto. Guardem essa palavra: `print`. É o comando de 'mostrar na tela'. A gente vai usar ela o tempo todo."_

---

## Bloco 2 — print e comentários (10 min)

**Mostre:** tópico **"02 · print e comentários"**.

> _"O `print` mostra na tela o que estiver dentro dos parênteses. Se estiver entre aspas, é um TEXTO — sai exatamente do jeito que está escrito."_

Leia o exemplo linha por linha:

> _"Repara que cada `print` pula pra linha de baixo sozinho. Não precisa mandar 'pular linha', ele já faz."_

> _"Agora essa terceira linha é interessante: `print("Soma:", 2 + 3)`. Antes de mostrar, o Python faz a conta. O que ele vai mostrar?"_

**Pergunte e espere.** A resposta é `Soma: 5`.

> _"Perfeito. O texto 'Soma:' sai como texto, mas o `2 + 3` vira 5, porque não está entre aspas. Essa é a diferença: aspas = texto literal; sem aspas = o Python calcula."_

Agora os comentários:

> _"Viram aquele `#`? Tudo que vem depois dele o Python IGNORA. Serve pra gente deixar recadinho pra outro humano ler, tipo uma anotação na margem do caderno. Não muda em nada o que o programa faz."_

**Pergunte:** _"Pra que vocês acham que serve escrever uma anotação que o computador ignora?"_ (Resposta que você quer ouvir: pra lembrar depois o que o código faz, ou pra outra pessoa entender.)

---

## Bloco 3 — Variáveis e tipos (12 min)

**Mostre:** tópico **"03 · Variáveis e tipos"**.

> _"Agora um dos conceitos mais importantes de todos: variável. Pensem numa caixa com etiqueta. A etiqueta é o nome, e dentro da caixa tem um valor."_

Escreva no ar ou aponte: `nome = "Ana"`.

> _"Esse sinal de igual aqui NÃO é 'igual' da matemática. Ele quer dizer 'guarde'. Leia assim: 'guarde o texto Ana dentro da caixa chamada nome'."_

> _"Depois, toda vez que eu escrever `nome`, o Python vai lá na caixa e pega o valor de volta."_

Agora os tipos:

> _"Cada valor tem um tipo. Os quatro que mais aparecem são:"_
> - _"**str** — texto, sempre entre aspas, tipo `"Ana"`."_
> - _"**int** — número inteiro, sem vírgula, tipo `18`."_
> - _"**float** — número com casas decimais. Detalhe: em programação a gente usa PONTO, não vírgula. Então é `1.75`."_
> - _"**bool** — só dois valores possíveis: `True` (verdadeiro) ou `False` (falso)."_

**Pergunte, um por um** (ótimo pra fixar):
- _"A idade `18` é que tipo?"_ → int
- _"A altura `1.75`?"_ → float
- _"O nome `"Ana"`?"_ → str (texto)

> _"No console eu uso um comando chamado `type()` só pra provar pra vocês qual é o tipo de cada coisa. Olhem a saída."_

---

## Bloco 4 — Entrada de dados / input (10 min)

**Mostre:** tópico **"04 · Entrada de dados"**.

> _"Até agora o programa só falava sozinho. Agora ele vai PERGUNTAR pra pessoa. Isso é o `input`."_

> _"Quando o Python chega num `input`, ele para tudo e espera a pessoa digitar e apertar Enter. Só depois continua."_

Aponte a **pegadinha mais importante do dia**:

> _"Aqui tem um detalhe que pega MUITA gente, prestem atenção: o `input` SEMPRE devolve texto. Sempre. Mesmo que a pessoa digite um número, pro Python aquilo é texto."_

> _"Por isso, quando eu quero mesmo um número, eu envolvo com `int(...)`, que converte o texto pra número inteiro. Olhem: `idade = int(input("Sua idade: "))`."_

**Pergunte:** _"Se eu ESQUECER o `int` e tentar fazer `idade + 1`, o que vocês acham que acontece?"_

> _"Dá erro! Porque não dá pra somar texto com número. É como tentar somar a palavra 'vinte' com o número 1. O Python trava."_

Guarde essa ideia — ela volta no **quiz (pergunta do `x + x`)**.

---

## Bloco 5 — Operadores (12 min)

**Mostre:** tópico **"05 · Operadores"**.

> _"Operadores são os símbolos de fazer conta e de comparar. Soma, subtração, multiplicação vocês já conhecem. Vou focar em dois que confundem todo mundo no começo."_

Aponte no console:

> _"O `/` sozinho é a divisão normal: `7 / 2` dá `3.5`."_

> _"Agora o `//` com duas barras é a **divisão inteira**: ele joga fora a parte decimal e fica só com a parte inteira. Então `7 // 2` dá `3`, não `3.5`."_

> _"E o `%`, que a gente chama de 'módulo', dá o **resto** da divisão. `7 % 2`: 2 cabe 3 vezes no 7 (dá 6) e sobra 1. Então `7 % 2` é `1`."_

**Pergunte (rápido, no ritmo):**
- _"Quanto é `10 // 3`?"_ → 3
- _"E o resto, `10 % 3`?"_ → 1
- _"`10 % 2`?"_ → 0 (e aproveite: _"quando o resto por 2 dá zero, o número é PAR. Guardem isso, é um truque clássico.")_

Depois as comparações:

> _"Essas aqui sempre respondem com `True` ou `False`: `==` é 'é igual?', `!=` é 'é diferente?', e aí tem maior, menor, etc. Isso vai ser a base das decisões, que é o próximo assunto."_

> ⚠️ _"Detalhe que confunde: um `=` é 'guardar valor'. Dois `==` é 'perguntar se é igual'. Não são a mesma coisa!"_

---

## ☕ Pausa curta (5 min)

> _"Vamos respirar 5 minutinhos. Bebam uma água, estiquem as pernas. Quando voltar, a gente começa a fazer o programa TOMAR DECISÕES sozinho."_

---

## Bloco 6 — Condições: if / elif / else (13 min)

**Mostre:** tópico **"06 · Condições (if / elif / else)"**.

> _"Agora o programa vai escolher o que fazer dependendo de uma situação. É o `if`, que quer dizer 'se'."_

Leia o exemplo da nota:

> _"Leiam comigo: SE a nota for maior ou igual a 7, imprime 'Aprovado'. SENÃO, SE for maior ou igual a 5, imprime 'Recuperação'. SENÃO (todo o resto), imprime 'Reprovado'."_

> _"`if` é 'se', `elif` é 'senão se' e `else` é 'senão'. Só UM desses blocos roda — o primeiro cuja condição for verdadeira."_

**Ponto que você NÃO pode deixar passar — a indentação:**

> _"Reparem no espaço em branco antes do `print`. Esse recuo se chama indentação, e em Python ele é OBRIGATÓRIO. É ele que diz 'essa linha está dentro do if'. Em outras linguagens é opcional; em Python, se errar o espaço, dá erro."_

**Pergunte:** _"Se a nota fosse 4, o que ia aparecer?"_ → Reprovado. _"E se fosse 6?"_ → Recuperação.

> Dica de professor: peça pra turma **mudar o valor da nota na cabeça** e prever a saída. É o melhor exercício de `if`.

---

## Bloco 7 — Laços: for e while (15 min)

**Mostre:** tópico **"07 · Laços (for e while)"**.

> _"Imaginem que eu quero imprimir 'Oi' 100 vezes. Vou copiar e colar 100 prints? Claro que não. Pra isso existe o laço: repetir sem copiar."_

**Primeiro o `for`:**

> _"O `for` repete uma quantidade que a gente já sabe. Olhem o `range(1, 4)`: ele gera 1, 2 e 3. Prestem atenção: o último número NÃO entra. `range(1, 4)` vai até o 3."_

**Pergunte:** _"Então `range(1, 4)` gera quais números?"_ → 1, 2, 3. Reforce: _"o 4 fica de fora, sempre."_ (Isso cai no quiz.)

**Depois o `while`:**

> _"O `while` repete ENQUANTO uma condição for verdadeira. Olhem o contador: ele começa em 3 e, a cada volta, diminui 1. Quando chega em 0, a condição `contador > 0` vira falsa e o laço para."_

> ⚠️ _"Cuidado de vida com o `while`: se você esquecer de mudar a variável lá dentro, ele repete PARA SEMPRE e trava o programa. A gente chama isso de laço infinito."_

**Pergunte:** _"O que acontece se eu tirar a linha `contador = contador - 1`?"_ → nunca para (laço infinito).

---

## Bloco 8 — Listas (12 min)

**Mostre:** tópico **"08 · Listas"**.

> _"Até agora cada caixa guardava um valor só. A lista guarda VÁRIOS valores em ordem, dentro de colchetes `[ ]`, separados por vírgula."_

> _"Cada posição da lista tem um número, chamado índice. E aqui vem a coisa mais importante e mais esquecida: o índice **começa no ZERO**, não no 1."_

Aponte no console:

> _"Então na lista `["maçã", "uva", "pera"]`: a posição 0 é maçã, a posição 1 é uva, a posição 2 é pera."_

**Pergunte:** _"Qual é o `frutas[1]`?"_ → uva (não maçã!). Insista nisso, é o erro nº 1 de iniciante.

> _"Dá pra perguntar o tamanho com `len()`, e adicionar um item no fim com `.append()`. Olhem como a lista cresce na saída."_

---

## Bloco 9 — Matrizes bidimensionais (S16) (15 min)

**Mostre:** tópico **"09 · Matrizes bidimensionais"**.

> _"Agora a gente chega num dos assuntos que vocês vinham vendo: matrizes. Parece assustador, mas é simples: uma matriz é só uma **lista de listas**. É uma tabela, com linhas e colunas — igual uma planilha ou o tabuleiro de um jogo da velha."_

Aponte a matriz com 2 linhas e 3 colunas:

> _"Cada linha é uma lista. E a matriz inteira é uma lista que guarda essas linhas dentro dela."_

> _"Pra pegar um valor, eu uso DOIS índices: primeiro a linha, depois a coluna. `matriz[0][2]`: linha 0 (a primeira), coluna 2 (a terceira). E lembrando: os dois começam no zero."_

**Pergunte:** _"Quanto é `matriz[1][0]`?"_ → linha 1 (a segunda), coluna 0 (a primeira) = 4.

**Agora os laços aninhados (Aula 2 da S16):**

> _"Pra passar por TODOS os valores da matriz, a gente usa um `for` dentro do outro. O de fora anda pelas linhas; o de dentro, pelas casinhas de cada linha."_

> _"No exemplo, os dois laços vão somando cada valor. É exatamente assim que se faz o 'total de uma planilha'. Olhem a saída: soma 10."_

**Conecte com o miniprojeto deles:** _"Isso é a base da 'Planilha de vendas' que vocês viram: uma matriz com os números e laços aninhados pra somar tudo."_

---

## Bloco 10 — Funções (S17) (14 min)

**Mostre:** tópico **"10 · Funções e modularização"**.

> _"Função é um bloco de código com nome, que a gente escreve UMA vez e reaproveita quantas vezes quiser. É tipo uma receita: você escreve o passo a passo uma vez e depois é só dizer 'faz o bolo'."_

Aponte a estrutura:

> _"A gente cria com `def`, dá um nome, e entre parênteses colocam os PARÂMETROS — que são as entradas da função. O `return` é o que ela DEVOLVE de resultado."_

> _"Olhem a `saudar(nome)`: eu chamo com `saudar("Ana")` e ela me devolve 'Olá, Ana'. A mesma função serve pra qualquer nome. Essa é a mágica: reaproveitar."_

**Pergunte:** _"Quanto seria `dobro(5)`?"_ → 10. _"E `dobro(100)`?"_ → 200. _"Viram? Uma função só, mil usos."_

**Agora o escopo (Aula 2 da S17):**

> _"Um detalhe importante: uma variável que nasce DENTRO da função só existe lá dentro. Do lado de fora, o Python nem sabe que ela existe."_

> _"No exemplo do `escopo.py`, eu tento imprimir `resultado` fora da função e dá `NameError` — 'esse nome não existe'. É como uma anotação que você fez num papel e jogou fora: acabou a função, sumiu a variável."_

**Conecte:** _"Modularizar é isso: quebrar o programão num monte de funçõezinhas organizadas, cada uma fazendo uma coisa. Fica mais fácil de ler e de consertar."_

---

## Bloco 11 — Documentação, testes e depuração (S18) (10 min)

**Mostre:** tópico **"11 · Documentação, testes e depuração"**.

> _"Escrever o código é só metade do trabalho. A outra metade é garantir que ele funciona e continua funcionando depois que a gente mexe."_

**Docstring:**

> _"Docstring é um textinho entre três aspas, logo na primeira linha da função, explicando o que ela faz. Serve pra outra pessoa (ou você daqui a um mês) entender sem precisar ler o código todo."_

**assert (teste simples):**

> _"O `assert` é o nosso primeiro tipo de teste. Ele afirma 'isso TEM que ser verdade'. Se for, o programa segue quietinho. Se NÃO for, ele para na hora e acusa um `AssertionError`."_

> _"Olhem: `assert somar(2, 3) == 5` passa numa boa. Já `assert somar(2, 2) == 5` é mentira (2+2 é 4, não 5), então ali o programa trava. Por isso o 'Todos os testes passaram' nunca aparece."_

**Pergunte:** _"Pra que serve um teste que trava o programa quando dá errado?"_ (Resposta: pra descobrir o erro CEDO, antes do usuário descobrir.)

**Depuração (debug):**

> _"E quando algo dá errado e você não sabe por quê? A técnica mais simples do mundo, que todo programador usa até hoje: espalhar `print()` pelo código pra ver o valor das variáveis em cada ponto. Assim você descobre exatamente onde o problema aparece."_

> _"Isso conecta com o kata TDD da Calculadora que vocês viram: escrever o teste, ver falhar, e ir consertando até passar."_

---

## Quiz final (14 min)

**Mostre:** tópico **"? · Quiz final"** e clique em **"Começar o quiz"**.

> _"Chegou a hora da verdade! São 16 perguntas. Cada uma mostra um código Python e vocês vão dizer qual é a saída. Eu aviso de novo: as respostas são bem parecidas de propósito. Não adianta chutar a maior — tem que LER o código."_

**Como conduzir (escolha um jeito):**
- **Turma toda junto:** você lê o código no telão, deixa uns 20 segundos pra pensarem/votarem levantando a mão, e clica na resposta que a maioria escolheu. Aí aparece a explicação.
- **Cada um no seu ritmo:** se tiverem computadores, mande abrir o site e responder sozinhos; o placar no topo mostra acertos.

> Sempre que aparecer a explicação amarela, **leia em voz alta** — é ali que a fixação acontece.

### 🔑 Gabarito comentado (só para você, professor)

Guarde esta cola. A resposta certa é sempre a **primeira opção do código**, mas na tela ela aparece embaralhada, então oriente-se pelo texto:

| # | Tópico | Código | Resposta | Por quê (fale isso se errarem) |
|--:|--------|--------|:--------:|--------------------------------|
| 1 | print | `print("Olá", "mundo")` | `Olá mundo` | A vírgula no print coloca **um espaço** entre os itens. |
| 2 | comentário | `print("A")` / `# print("B")` / `print("C")` | `A` e `C` | A linha com `#` é ignorada, o 'B' nunca imprime. |
| 3 | tipos | `type(10)` | `<class 'int'>` | 10 é inteiro → tipo `int`. |
| 4 | input | `x = input()` (digita 5) / `x + x` | `55` | input devolve **texto**; '5' + '5' junta os textos. |
| 5 | operador | `9 // 2` | `4` | Divisão inteira joga fora a parte decimal (4.5 → 4). |
| 6 | operador | `10 % 3` | `1` | Resto da divisão de 10 por 3. |
| 7 | comparação | `5 != 5` | `False` | 5 é igual a 5, então "diferente" é falso. |
| 8 | if/elif | x=5, `>10` / `>3` | `B` | Não é >10, mas é >3 → entra no elif. Só um bloco roda. |
| 9 | for | `range(2, 5)` | `2 3 4` | O último número (5) **não** entra no range. |
| 10 | while | n=2, `while n<=2` | `2` | Imprime uma vez; n vira 3 e o laço para. |
| 11 | lista | `[10,20,30][1]` | `20` | Índice começa no 0, então posição 1 é o 20. |
| 12 | lista | `append(3)` + `len` | `3` | Após adicionar, a lista tem 3 itens. |
| 13 | matriz | `m[1][2]` | `6` | Segunda linha `[4,5,6]`, terceira coluna → 6. |
| 14 | laços aninhados | soma de `[[1,1],[1,1]]` | `4` | Quatro valores 1 somados. |
| 15 | função | `f(x)=x*3`, `f(2)+1` | `7` | f(2) dá 6, mais 1 = 7. |
| 16 | teste/assert | `assert dobro(3)==9` | `AssertionError` | dobro(3) é 6, não 9 → o assert falha e trava. |

> **Por que as respostas são curtas e parecidas?** Foi de propósito. Assim ninguém acerta só olhando qual alternativa é a maior — todos precisam realmente entender o código.

---

## Fechamento (5 min)

> _"Olhem quanta coisa a gente viu numa aula só: começamos escrevendo um `print` e terminamos entendendo matrizes, funções e testes. Isso é MUITA coisa, e vocês acompanharam."_

> _"Se tem uma frase pra levar pra casa é: programar não é decorar, é PENSAR o que o computador vai fazer, passo a passo. O resto vem com prática."_

**Pergunta final pra turma:** _"Me digam uma coisa que vocês acharam mais difícil hoje e uma que acharam mais fácil."_ — isso te ajuda a saber onde reforçar na próxima aula.

> _"Valeu, pessoal! Podem voltar aqui no site quando quiserem revisar. Até a próxima!"_

---

## Extra — perguntas que os alunos podem fazer (e respostas simples)

- **"Preciso decorar tudo isso?"** → Não. Programador consulta documentação o tempo todo. O importante é entender a lógica.
- **"Por que dá erro por causa de um espaço (indentação)?"** → Porque em Python o espaço define o que está "dentro" de um bloco. É a regra da linguagem.
- **"Qual a diferença de `=` e `==`?"** → Um `=` guarda um valor numa variável. Dois `==` perguntam se dois valores são iguais.
- **"O índice começa no 0 mesmo?"** → Sim, sempre. O primeiro item é a posição 0.
- **"`//` e `/` são a mesma coisa?"** → Não. `/` dá o resultado com decimais; `//` só a parte inteira.

---

## Como rodar o site

É um site **puro em HTML, CSS e JavaScript** — não precisa de nada instalado.

- **Jeito mais fácil:** dê dois cliques no arquivo `index.html` e ele abre no navegador.
- **Arquivos do projeto:**
  - `index.html` — todo o conteúdo da aula e o quiz.
  - `style.css` — a aparência (cores, layout).
  - `script.js` — a lógica do quiz (correção, explicações, placar).
  - `README.md` — este roteiro.
