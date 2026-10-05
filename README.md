# Roteiro de aula — Segurança, redes e continuidade

## Como usar este material

Este roteiro foi preparado para uma aula de **150 minutos**. Use o site como apoio visual e faça as perguntas antes de revelar as respostas no quiz. A ideia é conversar com a turma, não apenas ler os cartões.

> **Observação importante:** qualquer demonstração de SQL Injection deve ser feita somente em um ambiente local, controlado e criado para a aula. Nunca teste em sistemas reais ou sem autorização.

---

## Objetivos da aula

Ao final da aula, os alunos devem conseguir:

- reconhecer riscos comuns de aplicações web;
- entender sub-redes, IPv4 e CIDR em situações simples;
- diferenciar ameaça, vulnerabilidade, impacto e risco;
- explicar os princípios básicos da LGPD;
- compreender IAM e criptografia em trânsito na nuvem;
- explicar por que backup, recuperação e continuidade precisam ser planejados.

---

## Roteiro minuto a minuto

### 0–10 min — Abertura

**O que falar:**

> “Bom dia, pessoal. Hoje vamos conectar seis assuntos que parecem separados, mas fazem parte da mesma história: proteger informação. Vamos falar sobre aplicações web, redes, riscos, privacidade, nuvem e recuperação. Não quero que vocês apenas decorem siglas. Quero que consigam olhar para uma situação e perguntar: o que pode dar errado, qual seria o impacto e como podemos reduzir esse risco?”

**Pergunte à turma:**

- “Qual informação vocês consideram mais importante proteger?”
- “Segurança é responsabilidade apenas do setor de TI? Por quê?”

Explique que não existe segurança absoluta. O objetivo é reduzir probabilidade e impacto, além de preparar uma resposta.

### 10–40 min — Semana 15: Segurança de aplicações web e OWASP Top 10

**O que falar:**

> “Uma aplicação web recebe dados de pessoas, processa regras e conversa com bancos de dados e outros serviços. Cada entrada recebida pode ser usada de forma inesperada se o sistema não validar e tratar corretamente.”

Apresente, sem tentar decorar a lista inteira, alguns exemplos do OWASP Top 10:

- controle de acesso quebrado;
- falhas de autenticação;
- injeção;
- configuração insegura;
- componentes desatualizados;
- falhas de registro e monitoramento.

**Exemplo seguro de SQL Injection:**

Explique primeiro o problema conceitual. Um código inseguro pode montar uma consulta juntando texto recebido do usuário:

```js
const sql = "SELECT * FROM usuarios WHERE nome = '" + nome + "'";
```

Diga:

> “Aqui, o valor digitado deixa de ser apenas um dado e pode alterar a estrutura da consulta. Em um laboratório local, podemos demonstrar isso com dados fictícios para perceber o comportamento. Não vamos usar esse tipo de teste contra sistemas reais.”

Mostre a forma correta, usando consulta parametrizada:

```js
const sql = "SELECT * FROM usuarios WHERE nome = ?";
db.query(sql, [nome]);
```

Reforce que a correção não é simplesmente bloquear alguns caracteres. A defesa principal é separar código de dados, usar parâmetros, validar entradas, aplicar menor privilégio e registrar eventos relevantes.

**Pergunte:**

- “Por que escapar caracteres sozinho não é uma defesa completa?”
- “O que muda quando a consulta usa parâmetros?”
- “Se um usuário comum conseguir acessar dados de administrador, qual controle falhou?”

**Atividade:** peça que cada grupo escolha uma falha e explique: causa, possível impacto e uma medida preventiva.

### 40–60 min — Semana 16: IPv4, sub-redes e CIDR

**O que falar:**

> “Um endereço IPv4 identifica um endereço lógico em uma rede. A máscara define qual parte representa a rede e qual parte pode identificar dispositivos dentro dela.”

Explique a notação CIDR. Em `192.168.10.0/24`, os 24 primeiros bits representam a rede. Uma rede `/24` possui 256 endereços totais, normalmente 254 utilizáveis em uma rede tradicional, porque há endereço de rede e broadcast.

Apresente exemplos simples:

- `/24`: rede maior, menos divisão;
- `/26`: quatro blocos dentro de uma `/24`;
- `/30`: bloco pequeno, comum em enlaces ponto a ponto.

**Pergunte:**

- “Por que separar uma rede em sub-redes pode melhorar a segurança?”
- “O que poderia acontecer se todos os dispositivos ficassem na mesma rede?”

### 60–80 min — Semana 17: Gestão de riscos

**O que falar:**

> “Risco não é apenas a existência de uma ameaça. Ele aparece quando uma ameaça pode explorar uma vulnerabilidade e causar um impacto.”

Use a relação didática:

> **Risco = probabilidade × impacto**

Diferencie:

- ameaça: algo que pode causar dano;
- vulnerabilidade: uma fraqueza;
- impacto: o prejuízo se o evento acontecer;
- controle: uma medida para reduzir probabilidade ou impacto.

**Exemplo:** uma conta sem autenticação multifator pode facilitar acesso indevido a um sistema importante.

**Pergunte:**

- “Qual risco merece atenção primeiro: um evento provável com impacto médio ou um evento raro com impacto enorme?”
- “Todo risco precisa ser eliminado?”

Explique que organizações podem evitar, reduzir, transferir ou aceitar um risco, desde que a decisão seja consciente e registrada.

### 80–100 min — Semana 18: LGPD

**O que falar:**

> “A LGPD trata de dados pessoais e estabelece regras para que eles sejam coletados e usados de maneira adequada. O foco não é impedir o uso de dados, mas exigir responsabilidade e transparência.”

Explique os conceitos:

- dado pessoal: identifica ou pode identificar alguém;
- dado pessoal sensível: como saúde, biometria, religião ou origem racial;
- titular: a pessoa a quem o dado se refere;
- controlador: decide sobre o tratamento;
- operador: trata dados seguindo instruções.

Apresente princípios importantes: finalidade, necessidade, transparência, segurança e prevenção. Comente que a organização deve coletar apenas o necessário e proteger o que armazena.

**Pergunte:**

- “Uma empresa precisa guardar todos os dados que consegue coletar?”
- “Qual seria uma justificativa clara para pedir um telefone?”
- “Qual é a diferença entre dado pessoal e dado pessoal sensível?”

### 100–120 min — Semana 19: Nuvem, IAM e criptografia em trânsito

**O que falar:**

> “Usar nuvem não elimina a responsabilidade de segurança. Parte da infraestrutura é administrada pelo provedor, mas permissões, identidades, dados e configurações continuam exigindo cuidado.”

Explique IAM como gestão de identidades e permissões:

- quem é a pessoa ou serviço;
- o que pode fazer;
- em qual recurso;
- em qual momento.

Apresente o princípio do menor privilégio: conceder apenas o necessário.

Sobre criptografia em trânsito:

> “Quando os dados viajam entre cliente e servidor, o HTTPS ajuda a impedir leitura e alteração por terceiros no caminho. Isso não corrige uma senha fraca nem uma permissão excessiva, mas protege a comunicação.”

**Pergunte:**

- “Por que um serviço automatizado não deveria usar uma conta com acesso total?”
- “Qual problema o HTTPS resolve e qual problema ele não resolve?”

### 120–140 min — Semana 20: Backup, recuperação e continuidade

**O que falar:**

> “Backup não é simplesmente copiar arquivos. Precisamos saber o que será recuperado, em quanto tempo e com qual perda aceitável de dados.”

Explique:

- RPO: quanto de dados podemos perder;
- RTO: quanto tempo podemos levar para voltar;
- backup completo, incremental e cópia fora do ambiente principal;
- testes de restauração;
- plano de continuidade e comunicação durante incidentes.

Dê o exemplo: se o RPO é de 15 minutos, um backup diário não atende ao objetivo.

**Pergunte:**

- “De que adianta ter backup se nunca testamos a restauração?”
- “Qual serviço deveria voltar primeiro em uma empresa: o site institucional ou o sistema de pedidos?”
- “Quem precisa saber o que fazer durante uma interrupção?”

### 140–150 min — Quiz e encerramento

Peça que os alunos respondam ao quiz do site individualmente ou em duplas. Depois, discuta as respostas sem transformar o momento em uma prova.

**O que falar no encerramento:**

> “Hoje vimos que segurança é um conjunto de decisões. Uma aplicação precisa tratar entradas; uma rede precisa ser organizada; riscos precisam ser avaliados; dados pessoais precisam de finalidade e proteção; acessos devem ser limitados; e a recuperação precisa ser praticada. A pergunta mais importante não é ‘está seguro?’, mas ‘o que estamos protegendo, contra qual cenário e como saberemos se a proteção funciona?’”

**Pergunta final:**

- “Qual medida simples vocês aplicariam primeiro em um sistema fictício e por quê?”

---

## Dicas para conduzir o quiz

- Leia a pergunta e dê alguns segundos antes de mostrar as alternativas.
- Peça que os alunos justifiquem a escolha, não apenas apontem uma letra.
- Evite dar pistas pelo tamanho das respostas; alternativas devem ser curtas e parecidas.
- Quando houver uma resposta errada, pergunte qual parte da ideia estava correta antes de explicar o ajuste.
- Reforce que o exemplo de SQL Injection é exclusivamente educacional e deve ficar restrito ao laboratório autorizado.

## Mensagem pronta para iniciar a aula

> “Bom dia, alunos. Hoje vamos estudar segurança da informação de um jeito prático. Vamos observar como aplicações, redes, dados pessoais, serviços em nuvem e backups se relacionam. Durante a aula, vou fazer perguntas e vocês também vão analisar situações. Não precisam saber tudo agora: o objetivo é aprender a identificar problemas e escolher uma proteção coerente.”

## Mensagem pronta para finalizar

> “Obrigado pela participação. Segurança não depende de uma ferramenta única. Ela depende de processos, escolhas técnicas e comportamento das pessoas. Continuem fazendo perguntas e testando ideias apenas em ambientes autorizados e preparados para isso.”
接
