# Java em sala — roteiro completo da aula

Este material foi pensado para uma aula de **150 minutos**, começando do zero e avançando até uma primeira visão de orientação a objetos. O site é o apoio visual. O texto abaixo é a fala sugerida: você pode ler, adaptar e fazer pausas para ouvir a turma.

## Antes de começar

Abra o site no navegador e deixe a primeira etapa selecionada. Combine com a turma que ninguém precisa acertar tudo de primeira: o objetivo é entender como pensar e testar.

## 0–10 min — Acolhida e objetivo

**Fale:**

> Bom dia, pessoal. Hoje nós vamos começar a estudar Java do começo. Não quero que vocês apenas copiem códigos: quero que entendam o que cada parte está dizendo para o computador. No final da aula, vocês vão conseguir ler um programa pequeno, criar variáveis, tomar decisões e organizar uma tarefa em um método.
>
> Se alguém nunca programou, está tudo bem. Programar é dar instruções em uma ordem que a máquina consiga seguir. Nós vamos errar de propósito algumas vezes, porque testar e corrigir faz parte do trabalho.

**Pergunte:** “Quando vocês usam um aplicativo, o que imaginam que acontece por trás de um botão?” Escute duas ou três respostas e conecte com a ideia de instruções.

## 10–30 min — Etapa 1: primeiros passos

Selecione **Primeiros passos** no site e mostre o console.

**Fale:**

> Java é uma linguagem de programação. Ela permite escrever instruções que podem rodar em diferentes computadores. O computador não entende nossa intenção; ele precisa de uma ordem clara.
>
> Nesta primeira linha, `public class Main`, estamos criando uma classe chamada Main. Por enquanto, pensem nela como uma caixa que guarda o nosso programa.
>
> O método `main` é o ponto de partida. Quando o programa começa, é por ali que o Java procura a primeira instrução. Já `System.out.println` significa: mostre uma mensagem e pule para a próxima linha.

Clique em **Executar código**.

**Pergunte:** “Se eu trocar o texto dentro das aspas, qual parte do resultado muda?” Depois peça que alguém sugira uma mensagem e altere no console.

**Reforce:** chaves agrupam um bloco; parênteses ajudam a chamar um método; ponto e vírgula encerra muitas instruções.

## 30–55 min — Etapa 2: variáveis e tipos

Selecione **Variáveis e tipos**.

**Fale:**

> Agora o programa vai precisar lembrar de informações. Uma variável é um nome que aponta para um valor. Podemos imaginar uma caixa etiquetada: a etiqueta é o nome e o conteúdo é o valor.
>
> `String` guarda texto, `int` guarda números inteiros, `double` guarda números com casas decimais e `boolean` guarda verdadeiro ou falso. O tipo ajuda o Java a saber que operações fazem sentido.
>
> Leiam esta linha: `int idade = 16`. Primeiro vem o tipo, depois o nome, depois o sinal de igual e o valor. O igual aqui significa “guardar”, não “perguntar se é igual”.

**Faça junto:** troque `Ana` pelo nome de alguém da turma e `16` por outra idade. Execute e observe.

**Pergunte:** “Para guardar o preço de um produto, vocês usariam `String`, `int` ou `double`? Por quê?” Aceite `double` como resposta mais adequada quando houver centavos.

## 55–65 min — Pausa curta e revisão

**Fale:**

> Vamos fazer uma pausa rápida. Antes dela, cada pessoa vai explicar para quem está ao lado a diferença entre texto e número. Não precisa usar palavras difíceis: explique como você explicaria para alguém que nunca programou.

Depois da pausa, peça duas explicações. Corrija com calma qualquer confusão entre aspas e números.

## 65–95 min — Etapa 3: decisões e repetição

Selecione **Decisões e repetição**.

**Fale:**

> Um programa útil não faz sempre a mesma coisa. Ele verifica uma condição e escolhe um caminho. É isso que o `if` faz. Se a condição for verdadeira, o bloco entre chaves é executado; caso contrário, o `else` apresenta outra possibilidade.
>
> Aqui `nota >= 6` é uma pergunta: a nota é maior ou igual a seis? O resultado dessa pergunta é verdadeiro ou falso. O programa usa esse resultado para decidir.

Altere a nota para `5` e execute. Depois volte para `8`.

**Pergunte:** “O que mudaria se usássemos `>` no lugar de `>=`?” Espere que percebam que a nota exatamente 6 deixaria de passar.

**Explique laços brevemente:**

> Quando queremos repetir uma tarefa, usamos estruturas como `for` e `while`. O `for` é útil quando sabemos quantas vezes queremos repetir. Por exemplo, mostrar os números de 1 até 3.

Se houver tempo, escreva no quadro:

```java
for (int i = 1; i <= 3; i++) {
  System.out.println(i);
}
```

Peça para a turma prever a saída antes de executar.

## 95–120 min — Etapa 4: métodos e organização

Selecione **Métodos e organização**.

**Fale:**

> Até aqui, colocamos as instruções em sequência. Agora vamos dar nomes para tarefas. Um método é um bloco de código que pode ser chamado quando necessário. Isso evita repetição e deixa o programa mais fácil de ler.
>
> O método `somar` recebe dois valores, chamados parâmetros, e devolve um resultado com `return`. Pensem nele como uma pequena máquina: entram dois números, acontece uma operação e sai uma resposta.

**Pergunte:** “O que aconteceria se chamássemos `somar(10, 4)`?” Deixe a turma responder `14` antes de trocar no site.

**Reforce:** parâmetros são entradas; `return` é a saída; o tipo `int` antes do nome indica que o método devolve um inteiro.

## 120–140 min — Etapa 5: objetos e classes

Selecione **Objetos e classes**.

**Fale:**

> Agora vamos conhecer uma ideia importante do Java: orientação a objetos. Uma classe é um modelo. Por exemplo, podemos ter um modelo chamado Aluno com um nome e um comportamento chamado apresentar.
>
> Um objeto é uma instância concreta desse modelo. A classe diz o que um aluno pode ter e fazer; um objeto representa um aluno específico. Não precisamos dominar tudo hoje. O mais importante é perceber que podemos organizar dados e comportamentos juntos.

**Pergunte:** “Se criássemos uma classe `Livro`, qual característica e qual ação ela poderia ter?” Espere ideias como título, autor, abrir ou emprestar.

## 140–150 min — Desafio, quiz e fechamento

Abra **Desafio final** e depois o **Quiz rápido**.

**Fale:**

> Agora vamos juntar as ideias. Temos uma variável, uma condição e uma mudança de valor. Antes de executar, tentem prever o resultado. Programadores fazem muito isso: imaginam a saída, executam e comparam.
>
> No quiz, não quero somente a letra. Quem responder deve explicar por que escolheu. Uma resposta errada também ajuda, porque mostra qual parte precisamos revisar.

Use o quiz uma pergunta por vez. Depois de cada resposta, peça que um aluno explique com suas palavras. Não revele a resposta imediatamente: primeiro pergunte “o que no código fez você pensar isso?”.

**Feche dizendo:**

> Hoje vocês deram os primeiros passos em Java: entenderam o ponto de entrada, variáveis, tipos, decisões, repetições, métodos e a ideia de classes e objetos. Isso já é uma base importante. Na próxima aula, podemos praticar mais exercícios e começar a construir um programa pequeno do início ao fim.
>
> Para estudar, tentem alterar os exemplos: troquem valores, mudem condições e prevejam a saída antes de executar. A prática de explicar o que o código faz é tão importante quanto escrever.

## Gabarito do quiz

1. **Iniciar a execução** — o `main` é o ponto de entrada do programa.
2. **String** — nomes são textos.
3. **O bloco é executado** — isso acontece quando a condição é verdadeira.
4. **Repetir ou organizar uma tarefa** — métodos evitam repetição.
5. **Um modelo para criar objetos** — a classe descreve dados e comportamentos.

## Observações para quem está ensinando

- Se a turma estiver com dificuldade, fique mais tempo em variáveis e `if`; não é preciso correr até objetos.
- Se a turma avançar rápido, peça para criarem uma variável `boolean` chamada `temNota` ou um método `maiorDeIdade`.
- Evite explicar detalhes de instalação, JVM e sintaxe avançada nesta primeira aula. O objetivo é construir uma primeira imagem mental clara.
- Sempre peça previsão antes de clicar em **Executar código**. Esse pequeno hábito transforma o site em uma atividade de raciocínio, não apenas em uma demonstração.
