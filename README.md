
# Roteiro da Aula — LGPD & Segurança na Nuvem (150 minutos)

> Este arquivo é o seu **roteiro de fala**. Ele foi escrito para quem não domina o assunto:
> tem o que **falar** (em linguagem simples), o que **perguntar** para a turma e a **resposta**
> de cada pergunta para você não ser pego de surpresa. Leia com calma, no seu ritmo.
>
> **Como usar o site durante a aula:** abra a página inicial e vá descendo conforme o roteiro.
> Os menus no topo (LGPD, Nuvem, Console, Quiz) levam direto a cada parte.

## Resumo do tempo

| Bloco | Tempo | O que acontece |
|------|-------|----------------|
| 1. Abertura e boas-vindas | 0–10 min | Apresentar o tema e por que ele importa |
| 2. Módulo LGPD | 10–65 min | Titular, dado pessoal, dado sensível, base legal |
| 3. Intervalo | 65–75 min | Pausa |
| 4. Módulo Segurança na Nuvem | 75–120 min | Responsabilidade compartilhada, IAM, criptografia |
| 5. Console de código | 120–135 min | Rodar exemplos ao vivo |
| 6. Quiz final | 135–150 min | Avaliar e fechar a aula |

---

## Bloco 1 — Abertura (0–10 min)

**Fale (pode ler quase como está):**

> "Bom dia, pessoal! Tudo certo com vocês? Hoje a nossa aula é sobre dois assuntos que estão em
> **todo** aplicativo que vocês usam: a **proteção dos dados das pessoas** e a **segurança na nuvem**.
> Sabe quando você faz um cadastro num site e ele pede seu nome, e-mail, CPF? Alguém precisa cuidar
> disso direito. Hoje a gente vai entender **quem cuida**, **como** cuida e **o que a lei exige**."

**Pergunte para a turma (para quebrar o gelo):**

- "Quem aqui já recebeu aquele aviso de *'este site usa cookies'* ou de *'política de privacidade'*?"
- "Vocês já pararam para pensar **onde** ficam guardadas as fotos e mensagens do celular de vocês?"

> Não precisa de resposta certa aqui. É só para engajar. Deixe 2 ou 3 alunos falarem.

**Feche o bloco dizendo:**

> "Então é isso que a gente vai destrinchar hoje. Vou mostrar um site que eu preparei, a gente vai
> ver os conceitos, testar um pouco de código e no fim tem um quiz para ver se pegamos a ideia."

👉 *No site: mostre a tela inicial (Hero) e leia os 4 blocos numerados: LGPD, Nuvem, Console e Quiz.*

---

## Bloco 2 — Módulo LGPD (10–65 min)

👉 *No site: clique em "LGPD" no menu ou no botão "Começar a aula".*

### 2.1 — O que é a LGPD (10–18 min)

**Fale:**

> "LGPD quer dizer **Lei Geral de Proteção de Dados**. É a Lei número 13.709, de 2018. De um jeito
> simples: ela é o **conjunto de regras** que diz como empresas e sistemas podem **coletar** e **usar**
> as informações das pessoas. A ideia central é: o dado é da **pessoa**, não da empresa. A empresa só
> está usando aquilo com autorização e com responsabilidade."

**Pergunte:**

- "Na opinião de vocês, uma empresa pode fazer **qualquer coisa** com os nossos dados?"

> **Resposta para você:** Não. Ela só pode usar os dados com uma justificativa prevista na lei
> (chamamos de *base legal*) e sempre respeitando a pessoa. Vamos ver isso já já.

### 2.2 — Titular dos dados (18–26 min)

👉 *No site: mostre o card "Titular dos dados".*

**Fale:**

> "O primeiro termo importante é **titular dos dados**. O titular é a **pessoa** de quem são aqueles
> dados. Se o sistema guarda o **meu** nome e o **meu** CPF, então **eu** sou o titular. Guardem essa
> palavra: titular = a pessoa dona da informação."

**Pergunte:**

- "Se um site tem o cadastro do João, quem é o titular dos dados: o site ou o João?"

> **Resposta:** O **João**. O site apenas trata os dados dele. A LGPD existe justamente para proteger
> o titular (o João), não a empresa.

### 2.3 — Dado pessoal (26–36 min)

👉 *No site: mostre o card "Dado pessoal".*

**Fale:**

> "Agora, o que é um **dado pessoal**? É qualquer informação que **identifica** uma pessoa, ou que
> pode identificar. Exemplos fáceis: nome, CPF, e-mail, telefone, endereço. Um detalhe importante:
> às vezes um dado sozinho não diz muito, mas **junto** com outros identifica a pessoa. Até o número
> de IP do computador pode ser dado pessoal."

**Pergunte:**

- "O e-mail de uma pessoa é dado pessoal? E a cidade onde ela mora?"

> **Resposta:** O e-mail **sim**, porque geralmente identifica a pessoa. A cidade sozinha normalmente
> não identifica ninguém (tem milhões de pessoas na mesma cidade), mas **combinada** com outros dados
> pode ajudar a identificar. O segredo é sempre perguntar: "isso aponta para alguém?".

### 2.4 — Dado pessoal sensível (36–48 min)

👉 *No site: mostre o card destacado "Dado pessoal sensível".*

**Fale:**

> "Existe um tipo especial, que a lei protege ainda mais: o **dado sensível**. São informações que,
> se usadas de forma errada, podem gerar **discriminação** contra a pessoa. Entram aqui: dados de
> **saúde**, **religião**, **origem racial ou étnica**, **opinião política**, **filiação a sindicato**,
> **vida sexual** e dados **biométricos** (como digital e reconhecimento facial)."

**Pergunte:**

- "Por que vocês acham que dado de **saúde** precisa de proteção maior que um simples nome?"

> **Resposta:** Porque essa informação pode ser usada para **prejudicar** a pessoa — por exemplo, um
> plano de saúde ou um emprego negado por causa de uma doença. Por isso a lei é mais rígida com dados
> sensíveis.

**Dinâmica rápida (classificar em conjunto):** diga um dado e peça para a turma responder "pessoal",
"sensível" ou "nem é dado pessoal":

- CPF → **pessoal**
- Religião → **sensível**
- Nome da rua onde mora → **pessoal**
- Digital do dedo (biometria) → **sensível**
- Cor favorita → **normalmente nem é dado pessoal**

### 2.5 — Base legal e conformidade (48–65 min)

👉 *No site: mostre o card "Base legal", o quadro "Papéis importantes" e a caixa "Verificando conformidade".*

**Fale:**

> "A empresa não pode usar os dados **só porque quer**. Ela precisa de uma **base legal**: um motivo
> que a lei aceita. Os mais comuns são: o **consentimento** (a pessoa autorizou), o **cumprimento de
> um contrato** (ex.: preciso do seu endereço para entregar sua compra) e o **cumprimento de uma
> obrigação legal** (ex.: guardar nota fiscal). Sem uma dessas justificativas, o uso do dado é irregular."

**Fale sobre os papéis (leia o quadro do site):**

> "Rapidinho, três papéis: o **Controlador** decide o que fazer com os dados; o **Operador** executa
> em nome dele; e o **Encarregado**, também chamado de **DPO**, é a pessoa de contato entre a empresa,
> os titulares e a **ANPD**, que é o órgão do governo que fiscaliza a lei."

**Pergunte:**

- "Uma loja precisa do seu endereço para entregar um produto. Isso é permitido pela LGPD?"

> **Resposta:** **Sim.** A base legal aqui é a **execução do contrato** — sem o endereço, não dá para
> entregar. O que a loja **não** pode é usar esse endereço para outra coisa não combinada.

**Feche o módulo com as 3 perguntas de conformidade (estão na tela):**

> "Antes de coletar qualquer dado, um time responsável deveria conseguir responder: **1)** qual dado
> e ele é mesmo necessário? **2)** qual a base legal? **3)** por quanto tempo vou guardar e como vou
> proteger? Se travar em alguma dessas, tem algo errado."

---

## Bloco 3 — Intervalo (65–75 min)

> "Vamos fazer uma pausa de 10 minutinhos. Quando voltarmos, saímos da parte da **lei** e vamos para
> a parte mais **técnica**: como os dados ficam seguros na nuvem."

---

## Bloco 4 — Segurança na Nuvem (75–120 min)

👉 *No site: clique em "Nuvem" no menu.*

### 4.1 — O que é "nuvem" (75–82 min)

**Fale:**

> "Quando a gente fala em **nuvem**, é basicamente usar computadores e servidores de outra empresa,
> pela internet, em vez de ter tudo na nossa própria máquina. Netflix, Instagram, Google Drive — tudo
> roda na nuvem. A pergunta é: se os dados estão no computador dos outros, **quem** cuida da segurança?"

### 4.2 — Modelo de Responsabilidade Compartilhada (82–95 min)

👉 *No site: mostre o quadro dividido "Provedor cuida" x "Cliente cuida".*

**Fale:**

> "A resposta é: a segurança é **dividida**. Isso se chama **Modelo de Responsabilidade Compartilhada**,
> ou *Shared Responsibility* em inglês. Funciona assim: o **provedor** (a empresa dona da nuvem, tipo
> Amazon, Google, Microsoft) cuida da segurança **DA** nuvem — o prédio, os servidores, a parte física.
> E o **cliente** (nós, que usamos a nuvem) cuidamos da segurança **NA** nuvem — os nossos dados, as
> senhas, quem tem acesso a quê."

> Dica de didática: enfatize a diferença entre **DA** nuvem (provedor) e **NA** nuvem (cliente). É a
> troca de uma letrinha, mas muda tudo.

**Pergunte:**

- "Se alguém rouba dados porque **a senha era fraca e foi compartilhada**, a culpa é do provedor da
  nuvem ou do cliente?"

> **Resposta:** Do **cliente**. Senha e controle de acesso são responsabilidade de quem usa a nuvem.
> O provedor garante que o servidor físico está seguro, mas não escolhe a sua senha.

### 4.3 — IAM: quem acessa o quê (95–107 min)

👉 *No site: mostre o card "IAM — Gestão de Identidade e Acesso".*

**Fale:**

> "Aqui entra o **IAM**, que significa **Gestão de Identidade e Acesso**. É o sistema que controla
> **quem** pode acessar **o quê**. Cada pessoa tem um usuário, faz parte de grupos e recebe permissões.
> A regra mais importante do IAM é o **princípio do menor privilégio**: cada pessoa recebe **só** o
> acesso que precisa para o trabalho dela. Nada de dar acesso a tudo 'por via das dúvidas'."

**Pergunte:**

- "Um estagiário que só precisa **ler** relatórios deveria ter permissão para **apagar** o banco de
  dados inteiro?"

> **Resposta:** **Não!** Isso viola o menor privilégio. Ele deve receber só a permissão de **leitura**.
> Assim, mesmo que a conta dele seja invadida, o estrago possível é muito menor.

> Mencione também o **MFA** (autenticação em dois fatores): além da senha, um segundo código. É uma
> camada extra que o cliente configura.

### 4.4 — Criptografia em trânsito (107–120 min)

👉 *No site: mostre o card "Criptografia em trânsito" e o quadro "Em trânsito x em repouso".*

**Fale:**

> "Última peça: **criptografia**. Criptografar é **embaralhar** a informação de um jeito que só quem
> tem a chave consegue ler. Existem dois momentos: os dados podem estar **parados** (salvos no disco)
> ou **em movimento** (viajando pela internet). A **criptografia em trânsito** protege os dados
> **enquanto eles viajam** pela rede — entre o navegador de vocês e o servidor."

> "Vocês já viram aquele **cadeado** na barra do navegador e o endereço começando com **HTTPS**? É
> exatamente isso: o HTTPS usa uma tecnologia chamada **TLS** para embaralhar os dados no caminho.
> Se fosse só HTTP, sem o 'S', alguém no meio do caminho poderia **ler** a sua senha."

**Pergunte:**

- "Vocês colocariam a senha do banco de vocês num site que começa com **http://**, sem o cadeado?"

> **Resposta:** **Não deveriam.** Sem HTTPS, os dados vão sem proteção pela rede e podem ser
> interceptados. Sempre confira o cadeado e o "https" antes de digitar dados importantes.

---

## Bloco 5 — Console de código ao vivo (120–135 min)

👉 *No site: clique em "Console" no menu.*

**Fale:**

> "Agora vamos **ver isso funcionando**. Aqui do lado tem alguns exemplos prontos. Eu clico num
> exemplo, a gente lê o código juntos e aperta **Executar** para ver o resultado."

**Faça na ordem (clique em cada exemplo, leia e execute):**

1. **"Isto é dado pessoal?"**
   > "Esse código verifica se um texto tem um CPF dentro. Aperta Executar... apareceu **true**. Ou seja:
   > o sistema reconheceu que ali tem um dado pessoal."

2. **"Classificar dado"**
   > "Aqui a gente classifica: 'saude' aparece como **sensível**, 'nome' como **pessoal** e 'cidade'
   > como **não pessoal**. É exatamente o que a gente falou na parte da LGPD."

3. **"Permissão IAM"**
   > "Essa política libera **só** a ação de **ler** o relatório. Vejam: quando pedimos 'ler', dá
   > **acesso permitido**. Quando pedimos 'apagar', dá **acesso negado**. Isso é o menor privilégio na
   > prática."

4. **"Em trânsito?"**
   > "Por último: o endereço com **https** dá **true** (protegido) e o **http** dá **false**. É o
   > cadeado que a gente comentou."

**Pergunte:**

- "Alguém quer tentar mudar um valor no código e ver o que acontece?" (Deixe um aluno trocar, por
  exemplo, "saude" por "email" e executar de novo.)

> **Resposta esperada:** ao trocar "saude" por "email", a classificação muda de **sensível** para
> **pessoal**. Ótimo momento para reforçar a diferença entre os dois.

---

## Bloco 6 — Quiz final (135–150 min)

👉 *No site: clique em "Quiz" no menu.*

**Fale:**

> "Chegou a hora de testar! São 12 perguntas. Um aviso importante: as respostas foram feitas de
> propósito com **tamanho parecido**. Então **não adianta** só escolher a alternativa mais comprida —
> tem que **entender** o conceito. Leiam com calma."

**Como conduzir:**

- Faça pergunta por pergunta **em conjunto**, projetando na tela. Peça a turma votar (levantar a mão)
  antes de clicar na resposta.
- Ao clicar, o site já mostra **se acertou** e uma **explicação curta**. Aproveite para comentar.
- No fim, clique em **"Ver meu resultado"** para mostrar a pontuação.

**Gabarito rápido (para você se guiar):**

1. Titular = **a pessoa dona dos dados**.
2. Sensível = **saúde / religião**.
3. Dado pessoal = **informação que identifica uma pessoa**.
4. Empresa precisa de = **uma base legal**.
5. `ehDadoPessoal` com CPF = **true**.
6. Provedor cuida = **da infraestrutura física**.
7. Cliente cuida = **acessos e dados**.
8. IAM serve para = **controlar quem acessa o quê**.
9. Menor privilégio = **só o acesso necessário**.
10. Em trânsito = **enquanto os dados viajam pela rede**.
11. Protegido em trânsito = **HTTPS com TLS**.
12. A política = **o usuário pode ler o relatório**.

**Encerramento (fale para fechar):**

> "É isso, pessoal! Hoje a gente viu que a **LGPD** protege os dados das pessoas — sabendo o que é
> titular, dado pessoal e dado sensível — e que a **segurança na nuvem** depende de todo mundo fazer
> a sua parte: o provedor cuida da estrutura, e nós cuidamos dos acessos com **IAM** e da proteção dos
> dados com **criptografia**. Qualquer dúvida, podem me chamar. Valeu pela participação de vocês!"

---

## Cola de termos (para consulta rápida durante a aula)

- **LGPD** — Lei Geral de Proteção de Dados (Lei 13.709/2018).
- **Titular** — a pessoa dona dos dados.
- **Dado pessoal** — informação que identifica alguém (nome, CPF, e-mail...).
- **Dado sensível** — categoria especial: saúde, religião, raça, política, biometria...
- **Base legal** — a justificativa que a lei aceita para usar um dado.
- **Controlador / Operador / Encarregado (DPO)** — os papéis de quem trata dados.
- **ANPD** — órgão do governo que fiscaliza a LGPD.
- **Nuvem** — usar servidores de outra empresa pela internet.
- **Responsabilidade Compartilhada** — provedor cuida DA nuvem; cliente cuida NA nuvem.
- **IAM** — Gestão de Identidade e Acesso: quem pode acessar o quê.
- **Menor privilégio** — dar só o acesso necessário a cada pessoa.
- **MFA** — autenticação em dois fatores (senha + segundo código).
- **Criptografia** — embaralhar dados; só quem tem a chave lê.
- **Em trânsito** — dado viajando pela rede (protegido por HTTPS/TLS).
- **Em repouso** — dado parado, salvo em disco ou banco.

## Como abrir o site

- **Mais fácil:** dê dois cliques no arquivo `index.html` — ele abre no navegador.
- **Com servidor local** (opcional): na pasta do projeto, rode `python3 -m http.server 3000` e acesse
  `http://localhost:3000`.
