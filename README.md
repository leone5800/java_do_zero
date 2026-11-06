# Semana 21 · Virtualização de Rede e SDN

Site de apoio (HTML, CSS e JS puros) + roteiro completo para uma aula de **150 minutos**.

- **Aula 1:** Virtual switch, vRouter e plano de controle vs. plano de dados
- **Aula 2:** SDN em nuvem pública
- **Aula 3:** Laboratório Mininet
- **Quiz:** 25 perguntas com trechos de código e terminal

---

## Como abrir o site

O site fica na pasta `public/`. Tem três jeitos de abrir:

1. **Mais fácil:** dê dois cliques em `public/index.html`. Abre direto no navegador, não precisa de internet (só as fontes ficam diferentes se estiver offline).
2. **Pelo v0 / Vercel:** clique em *Publish* e use o link gerado. Dá para passar o link para os alunos acompanharem pelo celular.
3. **Servidor local:** `pnpm install` e depois `pnpm dev` → abre em `http://localhost:3000`.

### O que tem no site

| Seção | O que faz |
|---|---|
| Cronômetro (topo) | Clique em **Iniciar** no começo da aula. Ele mostra em qual parte do roteiro você deveria estar e quanto falta. |
| Agenda | Os blocos da aula. Clicar num item leva para a parte certa do site. |
| Simulador SDN (Aula 1) | Mostra o switch perguntando ao controlador (`PACKET_IN`) e o controlador instalando a regra (`FLOW_MOD`). |
| Diagrama da VPC (Aula 2) | Clique em cada peça (Internet Gateway, NAT, sub-rede...) e aparece a explicação ao lado. |
| Calculadora CIDR (Aula 2) | Digita `10.0.1.0/24` e ela mostra quantos IPs cabem. |
| Testador de Security Group (Aula 2) | Liga/desliga regras de firewall e testa se uma conexão passa ou é bloqueada. |
| Terminal Mininet (Aula 3) | Um terminal falso que responde aos comandos do Mininet. Não precisa instalar nada. |
| Quiz | Uma pergunta por vez. Os alunos escolhem, você clica em **Confirmar** e aparece a explicação. Teclas 1 a 4 escolhem, Enter confirma. |

> **Dica:** no quiz, as alternativas mudam de posição toda vez e todas têm o mesmo tamanho. Não adianta "chutar a maior". Peça para a turma votar levantando a mão (A, B, C ou D) antes de você clicar em Confirmar.

---

## Visão geral do tempo

| Minuto | Bloco | Onde no site |
|---|---|---|
| 0 – 10 | Abertura e quebra-gelo | Topo |
| 10 – 30 | Aula 1: vSwitch e vRouter | Aula 1 |
| 30 – 45 | Aula 1: controle vs. dados + simulador | Simulador SDN |
| 45 – 55 | Quiz da Aula 1 (8 perguntas) | Quiz → filtro "Aula 1" |
| 55 – 65 | **Intervalo** | |
| 65 – 90 | Aula 2: SDN na nuvem, VPC | Aula 2 |
| 90 – 100 | Aula 2: CIDR e Security Group | Calculadora + Testador |
| 100 – 108 | Quiz da Aula 2 (8 perguntas) | Quiz → filtro "Aula 2" |
| 108 – 138 | Aula 3: Laboratório Mininet | Terminal |
| 138 – 145 | Quiz da Aula 3 (9 perguntas) | Quiz → filtro "Aula 3" |
| 145 – 150 | Encerramento | Topo |

**Legenda do roteiro:**
- **[FALE]** o que você diz (pode ler, pode adaptar com suas palavras)
- **[PERGUNTE]** pergunta para a turma (espere uns segundos, deixe eles pensarem)
- **[RESPOSTA ESPERADA]** o que você quer ouvir
- **[NO SITE]** o que clicar
- **[PARA VOCÊ ENTENDER]** a explicação técnica, para você não ser pego de surpresa

---

## ROTEIRO

### 0 – 10 min · Abertura e quebra-gelo

**[NO SITE]** deixe o topo da página aberto no projetor. Clique em **Iniciar** no cronômetro.

**[FALE]**
> "Bom dia, pessoal! Tudo bem com vocês? Hoje a gente vai falar de um assunto que parece complicado pelo nome, mas que vocês usam todo santo dia sem perceber: **virtualização de rede e SDN**.
>
> A aula de hoje vai ter três partes. Primeiro, a gente vai entender quais são as peças de uma rede quando tudo roda dentro de um computador. Depois, a gente vai ver como isso funciona na nuvem, tipo Amazon e Microsoft. E no final, a gente vai brincar num laboratório de rede chamado Mininet. Entre uma parte e outra tem quiz, então prestem atenção que vale ponto de orgulho."

**[PERGUNTE]**
> "Quando vocês abrem o Instagram ou a Netflix, o celular manda um pedido para algum lugar. Alguém tem ideia de por quantos equipamentos esse pedido passa até chegar no servidor?"

**[RESPOSTA ESPERADA]** qualquer chute serve. Pode ser "uns 5", "uns 20"... A ideia é eles pensarem.

**[FALE]**
> "Passa por vários: o roteador da casa de vocês, os equipamentos da operadora, roteadores no meio do caminho... e quando chega na Amazon ou no Google, sabe o que acontece? Muitos desses 'equipamentos' **nem existem fisicamente**. São programas. Software fingindo ser switch, roteador, firewall. É isso que a gente vai entender hoje."

**[PERGUNTE]**
> "Antigamente, para ouvir música, tirar foto e usar GPS, você precisava de três aparelhos. Hoje precisa de quantos?"

**[RESPOSTA ESPERADA]** "Um, o celular."

**[FALE]**
> "Exatamente. O rádio, a câmera e o GPS viraram **apps** dentro do celular. A virtualização de rede é a mesma coisa: o switch, o roteador e o firewall viraram programas dentro de um servidor. Guardem essa ideia."

---

### 10 – 30 min · Aula 1: vSwitch e vRouter

**[NO SITE]** clique em **Aula 1** no menu. Mostre os três cartões.

**[PARA VOCÊ ENTENDER]**
- **Virtualização de rede:** transformar funções de rede (que eram hardware) em software. Rodam em servidores comuns.
- **Virtual switch (vSwitch):** switch feito de software. Liga as VMs (máquinas virtuais) que estão no mesmo servidor. Trabalha na **camada 2** do modelo OSI, ou seja, olha o **endereço MAC**. O mais famoso é o **Open vSwitch (OVS)**, que é o que o Mininet usa.
- **Virtual router (vRouter):** roteador em software. Liga **redes diferentes** (por exemplo, 10.0.1.0 e 10.0.2.0). Trabalha na **camada 3**, olha o **endereço IP** e a tabela de rotas. Exemplos: VyOS, pfSense.
- **Hypervisor:** o programa que cria e roda as VMs (VMware, Hyper-V, KVM, VirtualBox).

**[FALE]**
> "Imaginem um servidor bem parrudo dentro de um datacenter. Dentro dele rodam, sei lá, 30 máquinas virtuais. Cada uma tem a sua placa de rede virtual. Pergunta: como essas 30 VMs conversam entre si se não tem cabo nenhum ligando elas?"

**[PERGUNTE]**
> "Alguém chuta?"

**[RESPOSTA ESPERADA]** "Tem um switch dentro do servidor" ou algo parecido.

**[FALE]**
> "Isso! Tem um **switch virtual**, um programa que faz exatamente o que um switch físico faz: recebe o quadro de uma VM, olha o endereço MAC de destino e entrega para a VM certa. O mais famoso se chama **Open vSwitch**, e é ele que a gente vai usar no laboratório."

**[NO SITE]** role até o diagrama "Servidor físico (hypervisor)".

**[FALE]**
> "Olhem esse desenho. VM 1 e VM 2 estão na rede 10.0.1. Elas estão na mesma rede, então o vSwitch resolve. Agora a VM 3 está na rede 10.0.**2**. É outra rede. O switch não resolve isso sozinho, porque switch só entende MAC. Quem liga redes diferentes?"

**[PERGUNTE]**
> "Quem liga uma rede com outra rede?"

**[RESPOSTA ESPERADA]** "O roteador."

**[FALE]**
> "Isso. E se o switch é virtual, o roteador também pode ser: o **vRouter**. Ele olha o **IP** de destino, consulta a tabela de rotas e manda para a rede certa.
>
> Resumindo para vocês anotarem:
> - **vSwitch** = camada 2 = MAC = liga coisas da **mesma** rede.
> - **vRouter** = camada 3 = IP = liga redes **diferentes**."

**[PERGUNTE PARA FIXAR]**
> "Se eu quero ligar o computador do laboratório 1 com o do laboratório 2, que estão em redes diferentes, eu preciso de quê?"

**[RESPOSTA ESPERADA]** "Um roteador / vRouter."

---

### 30 – 45 min · Aula 1: Plano de controle vs. plano de dados

**[NO SITE]** role até "Os dois cérebros de todo equipamento de rede".

**[PARA VOCÊ ENTENDER]**
- Todo switch ou roteador tem duas "partes" lógicas:
  - **Plano de controle (control plane):** é quem **decide**. Calcula as rotas, monta as tabelas, conversa com outros equipamentos usando protocolos como OSPF, BGP e STP. É mais lento, porque "pensa".
  - **Plano de dados (data plane ou forwarding plane):** é quem **executa**. Pega o pacote, olha a tabela que já está pronta e manda para a porta certa. É muito rápido (nanossegundos), porque não pensa, só consulta.
- **Na rede tradicional:** cada equipamento tem os dois planos dentro dele. Se você tem 100 switches, tem 100 "cérebros" separados e precisa configurar um por um.
- **No SDN (Software Defined Networking):** o plano de controle é **tirado** de dentro dos switches e colocado num **controlador central** (um software). Os switches ficam só com o plano de dados. O controlador manda regras para eles usando um protocolo chamado **OpenFlow**.
- **Tabela de fluxos (flow table):** é a tabela dentro do switch SDN. Cada linha é uma regra: "se o pacote for para X (match), faça Y (ação)".
- **PACKET_IN:** mensagem do switch para o controlador: "chegou um pacote e eu não tenho regra, o que eu faço?"
- **FLOW_MOD:** resposta do controlador: "instala essa regra aqui e segue a vida".

**[FALE]**
> "Agora vem a parte mais importante da aula, então prestem atenção. Todo equipamento de rede tem dois 'cérebros'. Vou usar o trânsito para explicar.
>
> Quando vocês vão para algum lugar de carro com o GPS ligado, tem duas coisas acontecendo. O **GPS** calcula o caminho: 'vire à direita em 200 metros'. E o **motorista** executa: vira o volante. O GPS é o **plano de controle**: ele decide. O motorista é o **plano de dados**: ele executa."

**[PERGUNTE]**
> "Qual dos dois precisa ser mais rápido? O GPS calculando a rota ou o motorista virando o volante?"

**[RESPOSTA ESPERADA]** "O motorista." (Se alguém disser o GPS, tudo bem, explique.)

**[FALE]**
> "O motorista. O GPS pode demorar uns segundos para recalcular, tudo bem. Mas na hora de virar, tem que ser na hora. Na rede é igual: o plano de dados encaminha milhões de pacotes por segundo, então ele só consulta uma tabela pronta. Quem monta a tabela, com calma, é o plano de controle."

**[NO SITE]** role até o quadro azul "A grande ideia do SDN".

**[FALE]**
> "Agora, o pulo do gato. Numa rede tradicional, cada switch tem o seu próprio GPS. Se a empresa tem 200 switches, são 200 GPS, cada um pensando sozinho, e o técnico tem que configurar um por um.
>
> O **SDN**, que significa Software Defined Networking, ou rede definida por software, fala o seguinte: 'vamos tirar o GPS de dentro de cada switch e colocar um GPS só, central, que manda em todo mundo'. Esse GPS central se chama **controlador**. Os switches ficam burrinhos: só obedecem. E a língua que eles usam para conversar é um protocolo chamado **OpenFlow**."

**[PERGUNTE]**
> "Qual a vantagem de ter um cérebro só mandando em tudo?"

**[RESPOSTA ESPERADA]** "Mais fácil de configurar", "muda tudo de uma vez", "programa a rede".

**[FALE]**
> "Isso. Eu mudo a regra num lugar só e ela vale para a rede inteira. E como o controlador é um programa, eu posso **programar a rede** com código. Por isso o nome: rede definida por software."

**[NO SITE]** role até o **Simulador** "Controlador SDN + tabela de fluxos".

**[FALE]**
> "Vamos ver isso funcionando. Aqui em cima é o controlador. No meio, o switch s1. Embaixo, três computadores: h1, h2 e h3. Olhem a tabela de fluxos do switch: está vazia. O switch não sabe nada ainda."

**[NO SITE]** deixe "De: h1, Para: h2" e clique em **Enviar pacote**. Leia o log em voz alta enquanto acontece.

**[FALE]**
> "Olhem o log: o h1 mandou o pacote, o switch procurou na tabela e... **TABLE MISS**. Não achou regra. Então ele mandou um **PACKET_IN** para o controlador, que é tipo 'chefe, chegou isso aqui, o que eu faço?'. O controlador pensou, viu que o h2 está na porta 2, e mandou um **FLOW_MOD**, que é 'instala essa regra aí'. Olhem a tabela: agora tem uma linha."

**[NO SITE]** clique em **Enviar pacote** de novo (mesmo h1 → h2).

**[PERGUNTE]**
> "E agora? O switch vai perguntar pro controlador de novo?"

**[RESPOSTA ESPERADA]** "Não, porque agora ele tem a regra."

**[FALE]**
> "Exatamente. **MATCH**. Ele achou a regra e mandou direto, sem incomodar o chefe. Olhem o contador de pacotes subindo. Isso é o plano de dados trabalhando sozinho."

**[NO SITE]** mande h1 → h3. Mostre que gera outro PACKET_IN (regra nova). Depois clique em **Limpar tabela** e mande de novo para mostrar que volta a perguntar.

---

### 45 – 55 min · Quiz da Aula 1

**[NO SITE]** clique em **Quiz** e no filtro **Aula 1**.

**[FALE]**
> "Hora do quiz! Vou ler a pergunta, vocês pensam e quando eu falar 'já', cada um levanta a mão com a letra: A, B, C ou D. Atenção: as alternativas mudam de lugar e não tem 'a maior é a certa', viu?"

Como conduzir: leia a pergunta, conte até 10, peça a votação, clique na mais votada, depois **Confirmar**. Leia a explicação que aparece. Se muita gente errou, explique de novo com a analogia do GPS.

---

### 55 – 65 min · Intervalo

**[FALE]**
> "Bora fazer uma pausa de 10 minutos. Água, banheiro, café. Às [hora] em ponto a gente volta para falar de nuvem."

**[NO SITE]** pause o cronômetro se quiser, ou deixe rodando.

---

### 65 – 90 min · Aula 2: SDN em nuvem pública

**[NO SITE]** clique em **Aula 2** no menu.

**[PARA VOCÊ ENTENDER]**
- Na nuvem pública (AWS, Azure, Google Cloud), **toda a rede é SDN**. Você não vê cabo nem switch. Você cria a rede por painel, linha de comando ou API, e o software do provedor programa a rede por baixo.
- **VPC (Virtual Private Cloud):** sua rede privada e isolada dentro da nuvem. Você escolhe a faixa de IP, por exemplo `10.0.0.0/16`.
- **Sub-rede (subnet):** um pedaço da VPC, por exemplo `10.0.1.0/24`.
  - **Pública:** tem rota para a internet (via Internet Gateway). Ex: servidor web.
  - **Privada:** não tem rota direta para a internet. Ex: banco de dados.
- **Internet Gateway (IGW):** a porta da VPC para a internet. Sem ele, nada entra nem sai.
- **NAT Gateway:** deixa máquinas da sub-rede privada **saírem** para a internet (baixar atualização), mas **não deixa ninguém de fora entrar**.
- **Route Table:** tabela de rotas da sub-rede. A rota `0.0.0.0/0 → igw` significa "tudo que não é da VPC, manda para a internet".
- **Security Group (SG):** firewall da instância (VM). É **stateful**: se deixou entrar, a resposta volta automaticamente. Só tem regras de **permitir**. O que não está liberado é bloqueado.
- **Network ACL (NACL):** firewall da sub-rede inteira. É **stateless**: tem que liberar a ida e a volta. Tem regras de permitir e de negar.
- **Nomes em cada nuvem:** AWS = VPC, Azure = **VNet**, Google = VPC. Security Group na Azure é **NSG**.

**[FALE]**
> "Bem-vindos de volta! Lembram do controlador SDN que manda nos switches? Agora vou contar um segredo: quando vocês criam uma rede na Amazon, na Microsoft ou no Google, vocês estão **usando SDN** sem perceber. Ninguém vai lá no datacenter passar cabo para vocês. Vocês clicam num botão, ou mandam um comando, e o software deles configura tudo. Vocês viram o 'controlador' da rede de vocês."

**[PERGUNTE]**
> "Se eu tenho uma empresa e coloco meus servidores na Amazon, vocês acham que os servidores de outra empresa conseguem ver os meus?"

**[RESPOSTA ESPERADA]** "Não", "não deveria".

**[FALE]**
> "Não. E é por causa disso aqui: a **VPC**. É como se a Amazon fosse um prédio enorme e a VPC fosse o seu apartamento. Tem parede, tem porta, e só entra quem você deixa."

**[NO SITE]** no diagrama, clique em **VPC 10.0.0.0/16** e leia a explicação. Depois clique em **Sub-rede pública** e **Sub-rede privada**.

**[FALE]**
> "Dentro do apartamento tem cômodos: as **sub-redes**. A sala, que recebe visita, é a sub-rede **pública**: é onde fica o servidor do site, que todo mundo acessa. O quarto, que ninguém de fora entra, é a sub-rede **privada**: é onde fica o banco de dados com os dados dos clientes."

**[PERGUNTE]**
> "Por que vocês acham que o banco de dados fica na parte privada e não na pública?"

**[RESPOSTA ESPERADA]** "Por segurança", "para hacker não acessar".

**[NO SITE]** clique em **Internet Gateway**, depois em **NAT Gateway**.

**[FALE]**
> "O **Internet Gateway** é a porta de entrada do apartamento. E o **NAT Gateway** é tipo uma portinha que só abre de dentro para fora. O banco de dados pode sair para baixar uma atualização, mas ninguém de fora consegue usar essa porta para entrar."

**[NO SITE]** clique em **Route Table**.

**[FALE]**
> "E quem diz para onde cada pacote vai? A **Route Table**. Lembram do plano de controle? É isso aqui. Vocês configuram as rotas, e o plano de dados da nuvem obedece."

**[NO SITE]** clique em **Security Group** e depois **Network ACL**.

**[FALE]**
> "E tem dois seguranças. O **Security Group** é o segurança na porta de cada servidor. Ele é **stateful**, que quer dizer 'tem memória': se ele deixou você entrar, ele lembra e deixa você sair. A **Network ACL** é o segurança da portaria do prédio, da sub-rede inteira. Ele é **stateless**, não tem memória: precisa de autorização para entrar e outra para sair."

**[NO SITE]** role até a tabela "Mesmo conceito, nomes diferentes".

**[FALE]**
> "Cada nuvem dá um nome diferente para as mesmas coisas. Não precisa decorar tudo, mas guardem que na Azure a VPC se chama **VNet**. Isso cai muito."

---

### 90 – 100 min · Aula 2: CIDR e Security Group

**[NO SITE]** role até a **Calculadora** "Quantos IPs cabem nessa rede?".

**[PARA VOCÊ ENTENDER]**
- **CIDR** é aquele número depois da barra: `10.0.1.0/24`.
- O endereço IPv4 tem **32 bits**. O `/24` quer dizer que **24 bits são da rede**. Sobram 32 − 24 = **8 bits** para os hosts.
- Quantidade de endereços = **2 elevado aos bits que sobram**: $$2^{32-24} = 2^8 = 256$$
- `/16` → $$2^{16} = 65.536$$ endereços. `/28` → $$2^4 = 16$$ endereços.
- **Regra de bolso:** quanto **maior** o número depois da barra, **menor** a rede.
- Na AWS, **5 IPs de cada sub-rede são reservados** (rede, roteador, DNS, futuro uso e broadcast). Uma /24 dá 251 utilizáveis.

**[FALE]**
> "Quando vocês criam uma VPC, a nuvem pergunta: 'qual o tamanho da sua rede?'. E vocês respondem com esse número esquisito com barra, tipo /16 ou /24. Isso se chama **CIDR**. O IP tem 32 bits. O número depois da barra diz quantos bits são do 'nome da rede'. O que sobra é para os computadores."

**[NO SITE]** com `10.0.1.0/24`, clique em **Calcular**. Mostre os 256.

**[PERGUNTE]**
> "Se /24 dá 256 endereços... vocês acham que /16 dá mais ou menos?"

**[RESPOSTA ESPERADA]** confusão, provavelmente alguém diz "menos". 

**[NO SITE]** digite `10.0.0.0/16` e calcule. Mostra 65.536.

**[FALE]**
> "Dá MUITO mais! 65 mil. Porque com /16, só 16 bits são da rede e sobram 16 bits para hosts. Regra de bolso: **número maior depois da barra, rede menor**. Testem aí: quanto dá /28?"

**[NO SITE]** digite `10.0.1.0/28` → 16 endereços (11 utilizáveis na AWS).

**[NO SITE]** role até o **Testador de Security Group**.

**[FALE]**
> "Agora vamos brincar de segurança. Aqui estão as regras de entrada do nosso servidor web. Repara: HTTPS liberado para todo mundo, HTTP também, SSH, que é o acesso remoto de administrador, só do IP do admin, e o MySQL, que é o banco, só de dentro da VPC."

**[NO SITE]** teste nesta ordem, perguntando **antes** de clicar em "Testar conexão":

| Teste | Pergunte antes | Resultado |
|---|---|---|
| Porta 443, usuário da internet | "Um usuário qualquer consegue abrir o site?" | PERMITIDO |
| Porta 22, usuário da internet | "E esse mesmo usuário consegue entrar por SSH?" | NEGADO |
| Porta 22, IP do administrador | "E o administrador?" | PERMITIDO |
| Porta 3306, usuário da internet | "Um hacker consegue acessar o banco direto?" | NEGADO |
| Porta 3389, qualquer um | "E a porta 3389, que é o RDP do Windows? Não tem regra nenhuma para ela..." | NEGADO (bloqueado por padrão) |

**[NO SITE]** agora **ligue** a última regra (SSH para 0.0.0.0/0) e teste porta 22 com usuário da internet → PERMITIDO.

**[FALE]**
> "Olha o perigo: alguém, com preguiça, liberou SSH para 0.0.0.0/0, que é o mundo inteiro. Agora qualquer pessoa da internet pode tentar adivinhar a senha do servidor. Isso é um dos erros de segurança mais comuns na nuvem. **Nunca façam isso.**"

---

### 100 – 108 min · Quiz da Aula 2

**[NO SITE]** **Quiz** → filtro **Aula 2**. Mesmo esquema de votação.

---

### 108 – 138 min · Aula 3: Laboratório Mininet

**[NO SITE]** clique em **Aula 3** no menu.

**[PARA VOCÊ ENTENDER]**
- **Mininet** é um programa para Linux que cria uma rede inteira (hosts, switches, links e controlador) **dentro de um computador só**. Usado para estudar e testar SDN.
- Os switches do Mininet são **Open vSwitch** e falam **OpenFlow** com o controlador.
- Comando para criar a rede: `sudo mn` (precisa de `sudo` porque mexe na rede do sistema).
- Topologias:
  - `sudo mn` → padrão: 2 hosts e 1 switch.
  - `--topo single,3` → 1 switch e 3 hosts.
  - `--topo linear,4` → 4 switches em fila, 1 host em cada (4 hosts).
  - `--topo tree,depth=2,fanout=2` → árvore. Hosts = fanout elevado a depth ($$2^2 = 4$$). Switches = 3.
- Dentro do Mininet (prompt `mininet>`):
  - `nodes` → lista os nós.
  - `net` → mostra quem está ligado em quem.
  - `dump` → mostra IP e processo de cada nó.
  - `pingall` → todo mundo pinga todo mundo.
  - `h1 ping -c 3 h2` → o h1 pinga o h2 três vezes.
  - `h1 ifconfig` → roda o comando `ifconfig` **dentro** do h1.
  - `link s1 h2 down` → derruba o cabo entre s1 e h2.
  - `sh ovs-ofctl dump-flows s1` → mostra a tabela de fluxos do s1.
  - `exit` → sai do Mininet.
- `sudo mn -c` → limpa as sobras quando o Mininet trava.
- `--controller=none` → cria a rede **sem controlador**. Os switches ficam sem regras e o ping falha 100%. Corrige com `sh ovs-ofctl add-flow s1 action=normal` (manda o switch se comportar como um switch comum).

**[FALE]**
> "Agora é hora de colocar a mão na massa. Para estudar SDN, a gente precisaria de switches, cabos, controlador... sai caro. Aí inventaram o **Mininet**: ele cria uma rede inteira, com vários computadores e switches, dentro de um único Linux. É tipo um 'The Sims' de rede.
>
> Normalmente a gente instala ele numa máquina virtual. Hoje, para não perder tempo com instalação, eu coloquei um **terminal simulado** aqui no site que responde igualzinho."

**[NO SITE]** mostre os três cartões de topologia.

**[PERGUNTE]**
> "Se eu digitar `sudo mn --topo single,3`, quantos computadores e quantos switches vão aparecer?"

**[RESPOSTA ESPERADA]** "3 computadores e 1 switch."

**[NO SITE]** no terminal, clique no atalho `sudo mn --topo single,3` (ou digite).

**[FALE]**
> "Olhem o que ele fez: criou os hosts h1, h2 e h3, o switch s1, os links e o controlador c0. E o prompt mudou para `mininet>`. Agora estamos 'dentro' da rede."

**[NO SITE]** rode `nodes` e depois `net`.

**[FALE]**
> "O `net` mostra os cabos: h1-eth0 está ligado no s1-eth1. Ou seja, a placa de rede do h1 está plugada na porta 1 do switch."

**[NO SITE]** rode `sh ovs-ofctl dump-flows s1` **antes** do ping.

**[PERGUNTE]**
> "A tabela de fluxos está vazia. Lembram do simulador? Se eu fizer um ping agora, o que vocês acham que vai acontecer com o primeiro pacote?"

**[RESPOSTA ESPERADA]** "Vai perguntar para o controlador."

**[NO SITE]** rode `h1 ping -c 3 h2`.

**[FALE]**
> "Olhem o tempo: o **primeiro** pacote demorou alguns milissegundos e os outros foram quase zero. Por quê? Porque o primeiro teve que ir até o controlador perguntar! Depois que a regra foi instalada, os outros foram direto. É a teoria da Aula 1 acontecendo de verdade."

**[NO SITE]** rode `sh ovs-ofctl dump-flows s1` de novo.

**[FALE]**
> "E agora tem regras na tabela. Estão vendo o `n_packets`? É o contador de quantos pacotes usaram cada regra."

**[NO SITE]** rode `pingall`.

**[FALE]**
> "O `pingall` faz todo mundo pingar todo mundo. '0% dropped' quer dizer que nenhum pacote se perdeu. Rede funcionando."

**Desafio 1 (quebre a rede)** — deixe os alunos dizerem o que acontece antes de rodar:

**[NO SITE]** `link s1 h2 down` e depois `pingall`.

**[PERGUNTE]**
> "Derrubei o cabo do h2. Quem vai continuar se falando?"

**[RESPOSTA ESPERADA]** "h1 e h3 continuam, o h2 fica isolado."

**[NO SITE]** `link s1 h2 up` e `pingall` para mostrar que voltou.

**Desafio 2 (rede sem cérebro):**

**[NO SITE]** `exit`, depois `sudo mn --topo single,3 --controller=none`, depois `pingall`.

**[PERGUNTE]**
> "Criei a rede sem controlador. 100% dos pacotes foram perdidos. Por quê? Os cabos estão todos lá..."

**[RESPOSTA ESPERADA]** "Porque não tem ninguém para dizer ao switch o que fazer."

**[FALE]**
> "Isso! O switch SDN é só plano de dados. Sem controlador e sem regras, ele não sabe para onde mandar nada e joga fora. Então vou fazer o papel do controlador **na mão**."

**[NO SITE]** `sh ovs-ofctl add-flow s1 action=normal` e `pingall` → 0% dropped.

**[FALE]**
> "Eu instalei uma regra dizendo 'se comporte como um switch normal'. Pronto, funcionou. Eu fui o plano de controle. Isso é programar a rede."

**Bônus (se sobrar tempo):**
- `sh ovs-ofctl add-flow s1 "in_port=1,actions=drop"` e `pingall` → o h1 fica isolado. Pergunte: "Por que só o h1?" (Porque o h1 está na porta 1 e tudo que entra nela é descartado.)
- `exit` e `sudo mn --topo tree,depth=2,fanout=2` → pergunte antes quantos hosts vão aparecer (4).
- `sudo mn --topo linear,4` → depois `net` para mostrar os switches em fila.

---

### 138 – 145 min · Quiz da Aula 3

**[NO SITE]** **Quiz** → filtro **Aula 3**.

---

### 145 – 150 min · Encerramento

**[NO SITE]** volte para o topo.

**[FALE]**
> "Pessoal, vamos fechar. Se vocês forem levar só três coisas da aula de hoje, levem essas:
>
> 1. **Virtualização de rede** é transformar switch, roteador e firewall em software. O vSwitch liga coisas da mesma rede (MAC), o vRouter liga redes diferentes (IP).
> 2. Toda rede tem um **plano de controle**, que decide, e um **plano de dados**, que executa. O **SDN** tira o plano de controle dos switches e coloca num controlador central, que programa a rede.
> 3. A **nuvem pública é SDN**: VPC, sub-rede, route table e security group são todos configurados por software. E o **Mininet** deixa a gente testar tudo isso no próprio computador.
>
> Alguma dúvida? Valeu, pessoal, até a próxima!"

**[PERGUNTA FINAL, OPCIONAL]**
> "Em uma frase: qual a diferença entre plano de controle e plano de dados?"

---

## Gabarito do quiz

> No site as alternativas aparecem embaralhadas. Aqui está o texto da resposta certa.

### Aula 1
| # | Pergunta | Resposta | Por quê |
|---|---|---|---|
| 1 | Qual plano DECIDE o caminho? | Plano de controle | Ele calcula rotas e monta as tabelas. |
| 2 | Consulta a tabela e encaminha em ns | Plano de dados | É o que executa, rápido, sem pensar. |
| 3 | O que é o br0 no `ovs-vsctl show`? | Um switch virtual | No OVS, Bridge = switch virtual. |
| 4 | Função principal do vRouter | Ligar redes IP diferentes | Camada 3. |
| 5 | vSwitch encaminha com base em | Endereço MAC | Camada 2. |
| 6 | Pacote para 10.0.0.3 com regra só para .2 | Não casa; vai ao controlador | Table miss → PACKET_IN. |
| 7 | O que o SDN tira do switch? | O plano de controle | Vai para o controlador central. |
| 8 | 1º ping 8 ms, os outros 0,1 ms | O 1º consultou o controlador | Depois a regra já estava instalada. |

### Aula 2
| # | Pergunta | Resposta | Por quê |
|---|---|---|---|
| 9 | O que é VPC? | Rede privada isolada na nuvem | Virtual Private Cloud. |
| 10 | Endereços em /24 | 256 | 2^8. Na AWS, 251 utilizáveis. |
| 11 | Route table com 0.0.0.0/0 → igw | Pública | Tem rota para o Internet Gateway. |
| 12 | Banco privado baixar atualização | NAT Gateway | Só saída, sem entrada. |
| 13 | Precisa de regra de saída no SG? | Não, ele é stateful | A resposta volta sozinha. |
| 14 | Porta 22 para 0.0.0.0/0 | SSH aberto ao mundo | Qualquer um tenta entrar. |
| 15 | VPC na Azure | VNet | VCN é da Oracle. |
| 16 | Por que a nuvem é SDN? | É configurada por API | O software do provedor programa a rede. |

### Aula 3
| # | Pergunta | Resposta | Por quê |
|---|---|---|---|
| 17 | `--topo single,3` | 3 hosts e 1 switch | 1 switch central. |
| 18 | `--topo linear,4` | 4 switches e 4 hosts | Um host por switch. |
| 19 | `tree,depth=2,fanout=3` | 9 hosts | 3^2 = 9. |
| 20 | Testar todos com todos | pingall | |
| 21 | 100% dropped sem controlador | Switch sem regras de fluxo | Resolve com add-flow action=normal. |
| 22 | `ovs-ofctl dump-flows s1` | A tabela de fluxos do s1 | |
| 23 | `in_port=1,actions=drop` | Descarta o que entra na porta 1 | A porta continua ligada. |
| 24 | Limpar sobras do Mininet | `-c` | `sudo mn -c`. |
| 25 | `link s1 h2 down` + pingall | Só h2 fica isolado | h1 e h3 continuam pelo s1. |

---

## Perguntas difíceis que os alunos podem fazer

**"SDN e virtualização de rede são a mesma coisa?"**
Não. Virtualização de rede é transformar equipamentos em software (vSwitch, vRouter). SDN é a ideia de **separar** o plano de controle e centralizar num controlador. Eles andam juntos, mas dá para ter um sem o outro.

**"E se o controlador cair?"**
Ótima pergunta. As regras que já estão instaladas continuam funcionando, mas pacotes novos sem regra não vão ter para quem perguntar. Por isso, em produção, usam **vários controladores** (redundância).

**"OpenFlow é a mesma coisa que SDN?"**
Não. SDN é a arquitetura (a ideia). OpenFlow é **um** dos protocolos que o controlador usa para falar com os switches. É o mais famoso, mas não o único.

**"Quais são exemplos de controlador SDN?"**
OpenDaylight, ONOS, Ryu, POX e Floodlight. O Mininet já vem com um controlador simples de referência.

**"Isso cai em prova de certificação?"**
Sim. VPC, sub-rede pública/privada, NAT, Security Group stateful vs. NACL stateless e CIDR caem muito na **AWS Cloud Practitioner** e **AWS Solutions Architect**. SDN e planos de controle/dados caem na **Cisco CCNA**.

**"O Mininet funciona no Windows?"**
Não diretamente. Precisa de Linux. O jeito mais fácil é baixar a máquina virtual pronta do Mininet (mininet.org) e abrir no VirtualBox.

---

## Estrutura dos arquivos

```
public/
├── index.html        # página da aula
├── css/style.css     # estilos
└── js/
    ├── main.js       # cronômetro, agenda, simulador SDN, VPC, CIDR, Security Group
    ├── terminal.js   # terminal Mininet simulado
    └── quiz.js       # perguntas do quiz (a 1ª alternativa de cada uma é a correta)
```

Para editar uma pergunta do quiz, abra `public/js/quiz.js`. Em cada pergunta, a **primeira** opção da lista é a correta; o site embaralha na hora de mostrar.
