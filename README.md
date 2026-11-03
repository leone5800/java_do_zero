# Semana 22 · Infraestrutura como Código com Terraform

Site de apoio para uma aula de **150 minutos** sobre Terraform. O site é o que os alunos veem no projetor. **Este README é só seu**: aqui está o roteiro do que falar, o que perguntar e o que responder. Nada do que você vai dizer está escrito no site.

> Como usar: deixe o site aberto no projetor e este README no seu notebook ou celular. Cada bloco abaixo diz **o que mostrar** (no site) e **o que falar** (aqui).

---

## Antes da aula (5 minutos)

- Abra o site e confira se os três consoles respondem (clique em `terraform init`).
- Teste o quiz: responda a primeira pergunta para ver se a explicação aparece.
- Respire. Você não precisa saber tudo. O site tem simuladores, então nada pode dar errado de verdade, e a frase mais poderosa de um professor é: **"boa pergunta, vamos testar no console e ver juntos"**.

### O "mini dicionário" para você

Se travar, volte aqui. São as 8 ideias que seguram a aula inteira:

| Termo | Explicação em uma frase |
|---|---|
| **IaC** | Em vez de clicar no painel da nuvem, você escreve a infraestrutura em um arquivo de texto. |
| **Terraform** | A ferramenta que lê esses arquivos e cria a infraestrutura na nuvem. |
| **HCL** | A "língua" dos arquivos `.tf`. Parece um JSON mais amigável. |
| **Provider** | Um plugin que ensina o Terraform a falar com uma nuvem (AWS, Azure, Google...). |
| **Resource** | Uma peça de infraestrutura: uma VPC, um servidor, um banco. |
| **State** | A "memória" do Terraform: o arquivo que diz o que ele já criou. |
| **Módulo** | Uma pasta de código reaproveitável. Funciona como uma função. |
| **Workspace** | Mesmo código, mas com states separados (dev, prod...). |

**Analogia que funciona sempre:** o Terraform é um arquiteto com uma planta. Você entrega a planta (código), ele compara com a obra (nuvem) e só faz o que está faltando. O state é o caderninho dele, onde anota o que já construiu.

---

## Linha do tempo

| Minutos | Bloco | Onde estar no site |
|---|---|---|
| 000–005 | Abertura | Topo da página |
| 005–040 | **Aula 1** · Sintaxe HCL e providers | `#aula-1` |
| 040–075 | **Aula 2** · Módulos e workspaces | `#aula-2` |
| 075–085 | Intervalo | Deixe a Agenda aberta |
| 085–120 | **Aula 3** · Laboratório 2-tier | `#aula-3` |
| 120–145 | Quiz | `#quiz` |
| 145–150 | Encerramento | Topo da página |

---

## 000–005 · Abertura

**Mostre:** o topo do site (título e a tela preta do terminal).

**Fale (do seu jeito):**

> "Bom dia, pessoal! Tudo bem com vocês? Hoje a aula é diferente: vocês vão **mexer** em vez de só ouvir. Eu vou usar este site, que tem uns consoles simulados onde vocês vão digitar comandos de Terraform sem risco nenhum de estragar nada.
>
> Eu quero começar com uma pergunta. Quem aqui já criou uma máquina virtual ou um servidor clicando num painel, tipo AWS, Azure ou até um servidor de Minecraft? ... Ótimo. Agora imagina que você precisa criar **dez** iguais. E depois mais dez em outro país. E se alguém clicar errado? Pois é, isso aqui resolve esse problema: a gente **escreve** a infraestrutura em vez de clicar.
>
> Hoje a gente vai em três passos: primeiro a sintaxe e como o Terraform conversa com a nuvem, depois como organizar e reaproveitar código com módulos e workspaces, e por fim a gente monta uma stack completa, aplicação e banco de dados. No final tem um quiz valendo orgulho."

**Pergunte (rápido, só para aquecer):**

- *"Quem já ouviu falar de Terraform?"* (levantar a mão basta, não precisa de resposta certa).

**Mostre:** role até a **Agenda** e passe os olhos pelos blocos. Diga que haverá um intervalo de 10 minutos.

---

## 005–040 · Aula 1: Sintaxe HCL e providers (35 min)

**Mostre:** vá para `#aula-1`.

### 005–012 · O que é IaC (7 min)

**Mostre:** os quatro cards (IaC, Declarativo, HCL, Provider).

**Fale:**

> "Vamos começar pelo nome: **Infraestrutura como Código**. A ideia é simples: tudo o que você faria clicando no painel da nuvem, você escreve num arquivo. E por que isso é bom? Porque arquivo dá pra guardar no Git, dá pra revisar, dá pra copiar e dá pra refazer igualzinho daqui a seis meses.
>
> O Terraform é **declarativo**. Isso é a palavra mais importante da aula. Declarativo quer dizer que eu **não** falo 'crie isso, depois crie aquilo'. Eu falo 'eu quero que exista uma VPC com este endereço'. O *como* chegar lá é problema do Terraform.
>
> Pensa num pedido de pizza: você diz 'quero uma de calabresa', não explica como abrir a massa."

**Pergunte:**

- *"Se eu rodar o mesmo código duas vezes, vocês acham que vai criar duas VPCs?"*
  - **Resposta esperada:** vai haver palpite dos dois lados. Não confirme agora. Diga: **"guardem essa dúvida, a gente testa no console daqui a pouco."** (Ela volta na pergunta 6 do quiz.)

### 012–020 · Anatomia de um bloco HCL (8 min)

**Mostre:** a seção "Anatomia de um bloco" (o código à esquerda e os cards à direita).

**Fale:**

> "Olhem esse bloco. Todo bloco em HCL tem a mesma cara: uma **palavra-chave** (aqui `resource`), dois **rótulos** entre aspas e um corpo entre chaves.
>
> O primeiro rótulo, `aws_vpc`, é o **tipo**. Ele vem do provider e diz *o que* eu quero criar. Reparem que começa com `aws_`: é assim que a gente sabe de qual provider vem.
>
> O segundo rótulo, `main`, é o **nome local**. Esse nome eu invento. Ele **só existe dentro do código**, a AWS nunca vai saber que existe um 'main'. Serve para eu apontar para esse recurso mais tarde.
>
> Lá dentro, as linhas com `=` são os **argumentos**: a configuração do recurso."

**Pergunte:**

- *"Se eu quiser usar o ID dessa VPC em outro recurso, como eu escrevo?"*
  - **Resposta:** `aws_vpc.main.id`. Explique o padrão: **tipo . nome . atributo**.
- *"Esse 'main' pode ser qualquer palavra?"*
  - **Resposta:** pode. `principal`, `minha_vpc`, `banana`. É só um apelido local (sem espaços e sem começar com número).

> Dica para você: o exemplo da pergunta 2 do quiz é exatamente este. Se eles entenderem agora, acertam depois.

### 020–026 · O projeto em arquivos e os providers (6 min)

**Mostre:** as abas `main.tf`, `variables.tf` e `outputs.tf` na seção "Nosso primeiro projeto".

**Fale:**

> "Agora o projeto inteiro. Notem que eu dividi em arquivos, mas isso é só organização: o Terraform lê **todos** os `.tf` da pasta como se fossem um só.
>
> No `main.tf`, o primeiro bloco, `terraform`, diz qual versão eu uso e quais providers preciso. O **provider** é como um tradutor: o Terraform fala 'Terraformês', a AWS fala 'API da AWS', e o provider traduz. Se amanhã eu quiser usar Azure, só troco o tradutor.
>
> Depois vem o bloco `provider "aws"` com a região, e só então o meu recurso.
>
> No `variables.tf` ficam as **entradas**, como parâmetros de uma função. No `outputs.tf` ficam as **saídas**: o que eu quero que o Terraform me mostre no final, tipo o ID da VPC."

**Pergunte:**

- *"Pra que serve o bloco `provider`?"*
  - **Resposta:** dizer com qual nuvem e região o Terraform vai conversar. (Pergunta 4 do quiz.)
- *"Por que separar em variables e main, em vez de escrever o valor direto?"*
  - **Resposta:** para reutilizar. Mudar a região ou o CIDR sem mexer na lógica.

### 026–031 · init, plan, apply (5 min)

**Mostre:** os quatro cards "passo 1 ao 4".

**Fale:**

> "O ciclo de vida do Terraform são três comandos que vocês vão digitar mil vezes.
>
> **init**: 'prepara a casa'. Baixa o provider. Só precisa rodar na primeira vez, ou quando muda de provider.
>
> **plan**: 'me mostra o que você ia fazer'. É um ensaio. Não mexe em nada, só lê e compara.
>
> **apply**: 'pode fazer'. Aí sim cria de verdade.
>
> E o **destroy** é o botão de desligar tudo, importantíssimo para não gastar dinheiro à toa."

**Pergunte:**

- *"Qual dos três é o único que realmente altera a nuvem?"*
  - **Resposta:** o `apply` (e o `destroy`). O plan é só leitura.
- *"Qual é o primeiro comando que rodo num projeto novo?"*
  - **Resposta:** `terraform init`.

### 031–040 · Console: seu primeiro recurso (9 min)

**Mostre:** o console da Aula 1 (o simulador).

**Fale:**

> "Agora é a vez de vocês. Eu vou digitar e vocês me dizem o que acham que vai acontecer. Quem acertar ganha o direito de apertar o botão."

**Roteiro do console (siga nesta ordem):**

1. Clique em **`terraform apply`** *sem rodar o init antes*.
   - **Pergunte:** *"Deu certo? Por quê?"* → **Resposta:** deu erro porque falta o `init`: o provider ainda não foi baixado.
2. Rode **`terraform init`**. Aponte a linha *Installing hashicorp/aws*: "vejam, ele baixou o tradutor da AWS".
3. Rode **`terraform plan`**. Mostre as linhas verdes com `+` e o resumo `Plan: 1 to add`.
   - **Pergunte:** *"Isso criou alguma coisa na AWS?"* → **Resposta:** não, é só o ensaio.
4. Rode **`terraform apply`**. Mostre o ID gerado (`vpc-0a1b...`) e o `Apply complete!`.
5. Rode **`terraform apply`** de novo, sem mudar nada.
   - **Pergunte:** *"Lembram da minha dúvida lá do começo? O que vai acontecer?"* → **Resposta:** `No changes`. Nada é criado de novo. Isso se chama **idempotência** (explique como "rodar 10 vezes dá o mesmo resultado que rodar 1").
6. Rode **`terraform state list`**. Fale: "esse é o caderninho do Terraform, ele sabe que existe o `aws_vpc.main`".
7. Rode **`terraform destroy`** e feche o ciclo.

**Fechamento da Aula 1 (fale):**

> "Resumindo: escrevo o código, o `init` prepara, o `plan` mostra, o `apply` executa, e o Terraform guarda tudo no **state**. Se vocês entenderam isso, já entenderam 70% do Terraform."

---

## 040–075 · Aula 2: Módulos e workspaces (35 min)

**Mostre:** vá para `#aula-2`.

### 040–045 · Ponte com a aula anterior (5 min)

**Fale:**

> "Agora imagina que o seu chefe pede: 'cria uma VPC para a equipe de dev, outra para homologação e outra para produção'. Vocês copiariam e colariam o código três vezes? Funciona... até alguém mudar uma das cópias e esquecer das outras. Existem **duas** soluções para isso, e cada uma resolve um problema diferente:
>
> **Módulos** resolvem *'não quero repetir código'*.
> **Workspaces** resolvem *'quero o mesmo código em ambientes separados'*."

**Pergunte:**

- *"Na programação normal, quando vocês têm um trecho repetido, o que fazem?"*
  - **Resposta:** criam uma **função**. Diga: **"o módulo é a função do Terraform"**.

### 045–060 · Módulos (15 min)

**Mostre:** os três cards (`variable`, `resource`, `output`), a árvore de pastas e as abas do módulo.

**Fale:**

> "Um módulo, no fundo, é só uma **pasta com arquivos .tf**. Só isso. Nada de mágica. Na verdade, a pasta onde vocês já estavam trabalhando já é um módulo, o chamado *root module*.
>
> Vejam a árvore de pastas: dentro de `modules/vpc` tem o código do módulo. Pensem nele como uma função com três partes:
>
> - **variable** é o que a função **recebe** (os parâmetros);
> - **resource** é o que ela **faz** (o corpo);
> - **output** é o que ela **devolve** (o return).
>
> Agora olhem na aba `main.tf (root)`. Aqui eu **chamo** o módulo com um bloco `module`. Reparem: `source` diz onde está a pasta, e `cidr` e `name` são os argumentos que eu passo. Cada um desses argumentos precisa existir como `variable` dentro do módulo.
>
> E aqui o ponto onde todo mundo escorrega: de **fora**, eu não enxergo o que tem dentro do módulo. É uma caixa fechada. Se eu quiser o ID da VPC, o módulo precisa **devolver** com um `output`, e eu leio com `module.rede.vpc_id`."

**Pergunte:**

- *"O módulo cria uma VPC e eu preciso do ID dela no código principal. Como eu pego?"*
  - **Resposta:** o módulo precisa ter um `output`, e eu uso `module.NOME.OUTPUT`. (Pergunta 9 do quiz.)
- *"No bloco `module`, os argumentos como `cidr` são o quê, lá dentro do módulo?"*
  - **Resposta:** `variable`. (Pergunta 8 do quiz.)
- *"Posso usar o mesmo módulo duas vezes, com valores diferentes?"*
  - **Resposta:** sim, e é exatamente essa a vantagem. Chame o bloco `module` duas vezes com nomes diferentes.

**Se alguém perguntar "e módulos prontos?":** existem milhares no *Terraform Registry* (registry.terraform.io). A comunidade já fez módulo de VPC, EKS, RDS etc. Mas só use depois de entender o básico.

### 060–075 · Workspaces (15 min)

**Mostre:** a seção "Workspaces" (comandos à esquerda e cards à direita), e depois o console.

**Fale:**

> "Beleza, o módulo resolveu a repetição. Mas ainda tenho um problema: se eu rodar `apply` na pasta de novo, ele diz que nada mudou, porque o **state** já tem a VPC. Como eu faço para ter uma VPC de dev **e** uma de prod usando exatamente o mesmo código?
>
> Com **workspaces**. Um workspace é um **state separado**. O código é um só, mas cada workspace tem o seu próprio caderninho. Então o Terraform de dev não sabe o que existe em prod e vice-versa.
>
> Todo projeto já nasce com um workspace chamado `default`. Daí eu crio outros com `workspace new`.
>
> E tem um truque bonito: dentro do código eu posso usar `terraform.workspace`, que devolve o nome do workspace atual. Assim eu nomeio os recursos como `app-dev` e `app-prod` sem mudar uma linha."

**Pergunte (antes de abrir o console):**

- *"Quando eu criar um workspace novo, ele vem com a infraestrutura do anterior?"*
  - **Resposta:** não! Vem **vazio**. Esse é o ponto central, vamos provar no console.

**Roteiro do console de workspaces:**

1. **`terraform init`** primeiro (o init vale para a pasta toda, não precisa repetir em cada workspace).
2. **`terraform workspace show`** → mostra `default`.
   - **Pergunte:** *"Eu nunca criei nada e já tem um workspace?"* → **Resposta:** sim, o `default` é automático.
3. **`terraform apply`** no default. Aponte a tag `Name = app-default`.
4. **`terraform workspace new dev`** → leia a mensagem: *"You're now on a new, empty workspace"*.
5. **`terraform plan`** → ele quer criar tudo de novo (`Plan: 1 to add`) com `Name = app-dev`.
   - **Pergunte:** *"Por que ele quer criar de novo, se já existe no default?"* → **Resposta:** porque o state do `dev` está vazio: ele não conhece a VPC do `default`.
6. **`terraform apply`** → cria a VPC do dev (outro ID).
7. **`terraform workspace list`** → mostra o `*` no atual.
8. **`terraform workspace select default`** e depois **`terraform plan`** → "No changes". O default continua intacto.

**Aviso importante (fale com calma):**

> "Workspace **separa o state**, mas **não separa permissão nem conta**. Se alguém tem acesso ao projeto, tem acesso a todos os workspaces. Para ambientes que precisam de isolamento de verdade, as empresas costumam usar contas da AWS diferentes. Workspace é ótimo para ambientes parecidos e equipes pequenas."

**Pergunte para fechar:**

- *"Se eu estiver no workspace `prod`, qual vai ser o valor de `app-${terraform.workspace}`?"* → **Resposta:** `app-prod`. (Pergunta 12.)

---

## 075–085 · Intervalo (10 min)

**Fale:**

> "Gente, 10 minutos de descanso. Quando voltarmos é a parte divertida: vamos montar um sistema de verdade, com site e banco de dados. Quem quiser, pode ficar brincando nos consoles, eles continuam abertos."

(Deixe o console da Aula 1 e 2 na tela, ou a Agenda.)

---

## 085–120 · Aula 3: Laboratório, stack 2-tier (35 min)

**Mostre:** vá para `#aula-3`.

### 085–095 · A arquitetura (10 min)

**Mostre:** o diagrama (Internet → VPC → subnet pública com EC2 / subnets privadas com RDS).

**Fale:**

> "Bem-vindos de volta! Agora vamos montar algo parecido com o que existe em empresas de verdade. Uma stack **2-tier**: *tier* quer dizer camada. Duas camadas:
>
> 1. A camada de **aplicação**: um servidor (EC2) que recebe os acessos da internet.
> 2. A camada de **dados**: um banco de dados (RDS) onde a aplicação guarda as informações.
>
> Olhem o desenho. A internet só consegue chegar no servidor, pela porta 80. O banco fica escondido em **subnets privadas**, ou seja, não tem caminho vindo da internet até ele. A única porta que se abre para ele é a 5432 (PostgreSQL), e **só para o servidor**.
>
> Pensem num restaurante: o garçom (servidor) atende o cliente, e a cozinha (banco) só conversa com o garçom. O cliente nunca entra na cozinha."

**Pergunte:**

- *"Por que não deixar o banco aberto para a internet, para facilitar o acesso?"*
  - **Resposta:** segurança. Banco exposto é alvo de ataque. Menor privilégio: só quem precisa, acessa.
- *"Quais são as duas camadas?"*
  - **Resposta:** aplicação (EC2) e dados (RDS). (Cuidado: **não** é dev e prod. Pergunta 13.)

**Explique rapidinho os termos novos** (sem se aprofundar):

| Termo | Frase curta |
|---|---|
| **VPC** | Sua rede privada dentro da nuvem. |
| **Subnet** | Uma fatia dessa rede. Pode ser pública ou privada. |
| **Security Group** | O "porteiro": define quem pode entrar e por qual porta. |
| **EC2** | Servidor virtual. |
| **RDS** | Banco de dados gerenciado pela AWS. |

### 095–105 · O código (10 min)

**Mostre:** as abas `network.tf`, `security.tf`, `compute.tf`, `outputs.tf`.

**Fale:**

> "Não precisa decorar nada. Eu quero que vocês olhem para **uma coisa só** neste código: as **referências**.
>
> Olhem a subnet, na aba `network.tf`: ela tem `vpc_id = aws_vpc.main.id`. Essa linha é o que liga uma coisa à outra.
>
> E agora a pergunta que vale um café: o Terraform precisa criar a VPC **antes** da subnet, certo? Ninguém falou isso para ele em lugar nenhum. Então como ele sabe?"

**Pergunte (dê 20 segundos para pensarem):**

- *"Como o Terraform sabe a ordem de criação?"*
  - **Respostas comuns erradas:** "pela ordem do arquivo", "alfabética". Não corrija ainda.
  - **Resposta certa:** **pelas referências**. Cada vez que um recurso usa o `.id` de outro, o Terraform entende "este depende daquele" e monta um **grafo de dependências**. A ordem das linhas e dos arquivos **não importa**. (Pergunta 15.)

**Depois mostre a aba `security.tf`:**

> "O `sg-db` (o porteiro do banco) tem uma regra muito especial: `security_groups = [aws_security_group.web.id]`. Isso significa 'aceite conexões da porta 5432, mas **só de quem for do grupo sg-web**'. Não é um IP, é um grupo. É assim que o banco só aceita o servidor."

**Pergunte:**

- *"O que aconteceria se eu colocasse `0.0.0.0/0` na regra do banco?"*
  - **Resposta:** qualquer pessoa da internet poderia tentar conectar. Péssima ideia. (Pergunta 14.)

**Aba `outputs.tf`:** mostre o `sensitive = true` da senha e diga: "isso esconde a senha da tela, mas ela ainda vai parar no state, então nunca subam o state para o Git".

### 105–120 · Console: subindo a stack (15 min)

**Mostre:** o console da Aula 3.

**Fale:**

> "Vamos subir a stack inteira. Oito recursos. Olhem a ordem em que eles aparecem."

**Roteiro do console:**

1. **`terraform init`**.
2. **`terraform plan`** → role até o final: `Plan: 8 to add`.
   - **Pergunte:** *"Quantos recursos vão ser criados?"* → **Resposta:** 8.
3. **`terraform apply`** → pause e **leia a ordem em voz alta**:
   - primeiro `aws_vpc.main`;
   - depois subnets e `sg-web` (todos precisam só da VPC, então vão juntos);
   - depois `sg-db` (depende do `sg-web`);
   - por último a instância e o banco.
   - **Pergunte:** *"Por que a VPC veio primeiro e o banco por último?"* → **Resposta:** o banco depende de tudo (subnets e security group). É o grafo trabalhando.
4. **Aponte os tempos:** a instância demorou ~24s e o banco ~187s. "Banco é lento para criar, e isso é normal na vida real."
5. **`terraform output`** → mostre o IP público e o endereço do banco.
6. **`terraform destroy`** → **mostre a ordem inversa**: o banco some antes da VPC.
   - **Pergunte:** *"Por que a destruição é na ordem contrária?"* → **Resposta:** não dá para apagar a rede com o banco ainda dentro dela.

**Fechamento (fale com ênfase):**

> "Esse último comando é o mais importante da aula. Na vida real, **esqueceram o RDS ligado e chegou fatura na cobrança**. Sempre `terraform destroy` depois de um laboratório. É regra de ouro."

**Pergunta bônus:** *"Qual comando eu uso para derrubar tudo?"* → **`terraform destroy`** (não existe `delete` nem `remove`). (Pergunta 16.)

---

## 120–145 · Quiz (25 min)

**Mostre:** vá para `#quiz`.

**Como conduzir (16 perguntas, ~90 segundos cada):**

1. Leia a pergunta **em voz alta** (não deixe o aluno só clicar).
2. Dê 10 a 15 segundos para pensarem.
3. Pergunte *"Quem vai de A? Quem vai de B?"* e peça que uma pessoa defenda a escolha.
4. Só então clique em **Confirmar resposta**.
5. A explicação aparece. Leia e comente em uma frase.

> **Dica:** nas alternativas, a resposta certa **não é a maior** de propósito. Se alguém disser "fui na maior", brinque: *"essa estratégia não funciona aqui, hein"*.

### Gabarito (só para você)

| # | Aula | Resposta | Por quê, em uma frase |
|---|---|---|---|
| 1 | 1 | **B** · `terraform init` | Baixa os providers. Sem ele nada funciona. |
| 2 | 1 | **A** · `aws_vpc.main.id` | Padrão tipo.nome.atributo. |
| 3 | 1 | **D** · Nada: só calcula e mostra | O plan é só leitura. |
| 4 | 1 | **B** · Diz com qual API e região conversar | Provider = tradutor. |
| 5 | 1 | **D** · `terraform.tfstate` | É a memória do Terraform. |
| 6 | 1 | **C** · No changes | Idempotência. |
| 7 | 2 | **C** · Pasta com arquivos .tf reaproveitável | Módulo = função. |
| 8 | 2 | **B** · `variable` | Argumentos do `module` viram variáveis. |
| 9 | 2 | **D** · `module.rede.vpc_id` | De fora só se vê o que tem `output`. |
| 10 | 2 | **B** · Um state separado | Mesmo código, states diferentes. |
| 11 | 2 | **C** · `default` | Todo projeto nasce nele. |
| 12 | 2 | **B** · `app-prod` | `terraform.workspace` devolve o nome. |
| 13 | 3 | **C** · App web (EC2) e banco (RDS) | 2-tier = aplicação + dados. |
| 14 | 3 | **B** · Só do SG da aplicação | Menor privilégio. |
| 15 | 3 | **A** · Pelas referências | Grafo de dependências. |
| 16 | 3 | **D** · `terraform destroy` | Derruba tudo e evita cobrança. |

### Perguntas onde mais gente costuma errar (prepare-se)

- **Pergunta 3** (plan): muita gente acha que o `plan` "cria com confirmação". Volte ao console e rode o plan de novo: "olhem, nada foi criado".
- **Pergunta 6** (segundo apply): se errarem, rode no console da Aula 1 e mostre o `No changes`.
- **Pergunta 9** (module output): a pegadinha é achar que os nomes de dentro do módulo são visíveis de fora. Reforce: **caixa fechada**.
- **Pergunta 11** (workspace default): muita gente chuta `main`. É a "pegadinha de Git".

### Se sobrar tempo

Peça para os alunos refazerem o quiz (botão **Refazer o quiz** na tela final) em duplas, e vença quem fizer mais pontos.

---

## 145–150 · Encerramento

**Mostre:** o topo do site.

**Fale:**

> "Pessoal, fechando. Hoje vocês saíram de zero e já sabem: **escrever** infraestrutura em HCL; usar **providers** para falar com a nuvem; seguir o ciclo **init, plan, apply**; **reaproveitar** código com módulos; **separar ambientes** com workspaces; e montar uma **stack 2-tier** com rede, servidor e banco.
>
> Se vocês guardarem só **uma** frase, que seja esta: *'Terraform é declarativo: eu descrevo o que quero, ele descobre como fazer.'*
>
> Para casa: peguem o código da Aula 3 e tentem **mudar o tamanho do servidor** de `t3.micro` para `t3.small`, rodem o `plan` e vejam o que ele diz que vai mudar. Se conseguirem explicar o resultado do plan, vocês entenderam de verdade.
>
> Obrigado pela participação de vocês. Bom descanso!"

---

## Plano B: "e se eu travar?"

| Situação | O que fazer |
|---|---|
| Um aluno pergunta algo que você não sabe | "Ótima pergunta. Eu não sei a resposta de cabeça. Vou pesquisar e trazer na próxima aula." Anote o nome da pergunta. Ninguém vai te julgar por isso. |
| Estou atrasado | Pule o roteiro 6 e 7 do console da Aula 1 (state list e destroy) e encurte o intervalo para 5 minutos. |
| Estou adiantado | Peça para os alunos tentarem **quebrar** o console: digitar comandos errados, criar workspaces repetidos, etc. |
| O site não abre | O conteúdo é estático. Recarregue a página. Se persistir, use o roteiro acima falando e desenhando no quadro. |
| Um aluno pergunta "isso funciona na AWS de verdade?" | Sim. O código das abas é código Terraform real. O simulador só imita a saída dos comandos. Para rodar de verdade é preciso uma conta AWS e as credenciais configuradas. |
| "Qual a diferença entre Terraform e CloudFormation?" | CloudFormation é só da AWS. Terraform funciona em várias nuvens com a mesma sintaxe. |
| "E o OpenTofu?" | É um *fork* de código aberto do Terraform, com comandos quase idênticos. Tudo o que vimos funciona nele. |

---

## Estrutura do projeto (para referência)

```
app/page.tsx            página única com todas as seções
components/aula-1.tsx   conteúdo da Aula 1
components/aula-2.tsx   conteúdo da Aula 2
components/aula-3.tsx   conteúdo da Aula 3
components/console-sim.tsx  simulador de terminal
components/quiz.tsx     quiz interativo
lib/scenarios.ts        lógica dos comandos simulados
lib/questions.ts        perguntas e respostas do quiz
```

Para trocar uma pergunta do quiz, edite `lib/questions.ts`. Para trocar o que um comando mostra no console, edite `lib/scenarios.ts`.
