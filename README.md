✅ To-Do List — Projeto de Estudos

Uma aplicação de lista de tarefas desenvolvida como parte da minha evolução nos estudos de HTML, CSS e JavaScript.

Este projeto foi importante para mim porque não serviu apenas para criar uma lista de tarefas. Ele me ajudou a começar a entender melhor como uma aplicação funciona por trás da interface: como guardar dados, alterar estados, responder a ações do usuário, atualizar a tela e manter informações salvas no navegador.

📌 Sobre o projeto

A To-Do List permite criar e organizar tarefas de forma simples.

Durante o desenvolvimento, fui adicionando as funcionalidades aos poucos, entendendo a lógica de cada parte antes de avançar.

Funcionalidades

Adicionar novas tarefas

Adicionar uma tarefa pressionando Enter

Marcar e desmarcar tarefas como concluídas

Excluir tarefas

Filtrar por Todas, Pendentes e Concluídas

Contador de tarefas

Armazenamento das tarefas no navegador com localStorage

Recuperação dos dados após atualizar ou fechar a página

Interface responsiva para telas menores

🧠 O que aprendi

Este projeto me fez praticar conceitos importantes de JavaScript que ainda estou estudando e desenvolvendo.

DOM

Aprendi a conectar o JavaScript aos elementos do HTML utilizando:

document.getElementById()

Também pratiquei criação e alteração de elementos da página com:

document.createElement()
textContent
appendChild()
classList.add()
classList.remove()

Eventos

Aprendi a fazer a aplicação responder às ações do usuário com:

addEventListener()

Usei eventos de clique e teclado, incluindo:

"click"
"keydown"

Arrays

Utilizei um array para guardar as tarefas:

const tarefas = [];

Pratiquei métodos como:

push()
splice()
forEach()

Com isso, comecei a entender melhor como armazenar, percorrer, adicionar e remover dados.

Objetos

Cada tarefa é representada por um objeto:

const tarefa = {
    texto: textoTarefa,
    concluida: false
};

Isso me ajudou a perceber que um objeto pode reunir várias informações relacionadas à mesma coisa.

Booleanos e estado

A propriedade:

concluida: false

pode mudar entre false e true.

Usei:

tarefa.concluida = !tarefa.concluida;

para alternar o estado de uma tarefa.

Esse foi um passo importante para começar a entender o conceito de estado de uma aplicação.

Funções

Dividi responsabilidades em funções como:

adicionarTarefa()
salvarTarefas()
renderizarTarefas()
atualizarContador()

Isso me mostrou por que é melhor organizar o código em partes reutilizáveis em vez de colocar toda a lógica em um único lugar.

localStorage e JSON

Também aprendi a manter os dados mesmo depois de atualizar a página.

Para salvar:

JSON.stringify()

transforma os dados do JavaScript em texto.

Para recuperar:

JSON.parse()

transforma esse texto novamente em dados JavaScript.

O projeto utiliza:

localStorage.setItem()
localStorage.getItem()

para armazenar e recuperar as tarefas no navegador.

🔄 Uma das ideias mais importantes que aprendi

Durante este projeto comecei a entender este fluxo:

Usuário realiza uma ação
        ↓
JavaScript altera os dados
        ↓
Os dados são salvos
        ↓
A interface é renderizada novamente

Por exemplo:

Adicionar tarefa
      ↓
tarefas.push()
      ↓
salvarTarefas()
      ↓
renderizarTarefas()

Esse conceito foi importante porque comecei a enxergar meus projetos não apenas como páginas, mas como aplicações que possuem dados, lógica e interface.

💙 Por que este projeto foi importante para mim

Esta To-Do List representa mais do que um exercício pronto.

Enquanto desenvolvia o projeto, precisei revisar conceitos que ainda não dominava, encontrar erros, entender o motivo deles e melhorar o código aos poucos.

Foi aqui que pratiquei com mais profundidade conceitos como:

arrays;

objetos;

índices;

funções;

eventos;

condicionais;

booleanos;

manipulação do DOM;

armazenamento de dados;

renderização da interface.

Algumas partes não foram fáceis de entender de primeira, principalmente objetos, índices e métodos de arrays. Por isso, o projeto também mostrou quais fundamentos eu ainda preciso reforçar.

Isso é importante para a minha evolução: em vez de apenas copiar código, quero chegar ao ponto de conseguir ler, entender, explicar, modificar e criar a lógica sozinho.

A To-Do List é um registro dessa fase do meu aprendizado.

Ainda estou estudando programação e tenho muito para aprender, mas este projeto mostra uma evolução em relação aos meus primeiros projetos e será uma referência para comparar meu progresso no futuro.

🗂️ Estrutura do projeto

to-do-list/
│
├── index.html
├── styles.css
└── script.js

index.html

Responsável pela estrutura da aplicação.

styles.css

Responsável pela aparência, organização visual e responsividade.

script.js

Responsável pela lógica, tarefas, filtros, eventos, armazenamento e atualização da interface.

▶️ Como executar

Baixe ou clone este projeto.

Abra a pasta no VS Code.

Abra o arquivo index.html no navegador.

Não é necessário instalar dependências ou configurar um servidor para utilizar a versão atual.

🛠️ Tecnologias utilizadas

HTML5

CSS3

JavaScript

Web Storage API (localStorage)

📚 Status

Projeto concluído como projeto de estudos.

O objetivo principal não foi apenas chegar a uma aplicação funcionando, mas utilizar o projeto para desenvolver fundamentos de programação.

🚀 Possíveis melhorias futuras

No futuro, quando eu tiver avançado mais nos estudos, posso voltar a este projeto e implementar novas funcionalidades, como:

edição de tarefas;

datas e horários;

prioridades;

categorias;

pesquisa;

modo claro e escuro;

animações;

sincronização com banco de dados;

autenticação de usuários;

versão com backend.

Assim poderei comparar o código antigo com o novo e acompanhar minha própria evolução como desenvolvedor.

👨‍💻 Autor

Lucas Moreira

Projeto desenvolvido durante meus estudos de programação.
