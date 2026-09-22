const inputTarefa =
    document.getElementById("novaTarefa");

const botaoAdicionar =
    document.getElementById("adicionar");

const listaTarefas =
    document.getElementById("listaTarefas");


const botaoTodas =
    document.getElementById("todas");

const botaoPendentes =
    document.getElementById("pendentes");

const botaoConcluidas =
    document.getElementById("concluidas");


const contador =
    document.getElementById("contador");


const tarefasSalvas =
    localStorage.getItem("tarefas");


const tarefas = tarefasSalvas
    ? JSON.parse(tarefasSalvas)
    : [];


let filtroAtual = "todas";


function salvarTarefas() {

    localStorage.setItem(
        "tarefas",
        JSON.stringify(tarefas)
    );

}


function adicionarTarefa() {

    const textoTarefa =
        inputTarefa.value.trim();


    if (textoTarefa === "") {

        return;

    }


    const tarefa = {

        texto: textoTarefa,

        concluida: false

    };


    tarefas.push(tarefa);


    salvarTarefas();

    renderizarTarefas();


    inputTarefa.value = "";

    inputTarefa.focus();

}


function atualizarContador() {

    const total = tarefas.length;

    let concluidas = 0;


    tarefas.forEach(function(tarefa) {

        if (tarefa.concluida === true) {

            concluidas++;

        }

    });


    const pendentes =
        total - concluidas;


    contador.textContent =
        `Total: ${total} | Pendentes: ${pendentes} | Concluídas: ${concluidas}`;

}


function renderizarTarefas() {

    listaTarefas.innerHTML = "";


    tarefas.forEach(function(tarefa, indice) {


        if (
            filtroAtual === "pendentes" &&
            tarefa.concluida === true
        ) {

            return;

        }


        if (
            filtroAtual === "concluidas" &&
            tarefa.concluida === false
        ) {

            return;

        }


        const item =
            document.createElement("li");


        item.textContent =
            tarefa.texto;


        if (tarefa.concluida === true) {

            item.classList.add("concluida");

        }


        item.addEventListener(
            "click",
            function() {

                tarefa.concluida =
                    !tarefa.concluida;


                salvarTarefas();

                renderizarTarefas();

            }
        );


        const botaoExcluir =
            document.createElement("button");


        botaoExcluir.textContent =
            "Excluir";


        botaoExcluir.addEventListener(
            "click",
            function(evento) {

                evento.stopPropagation();


                tarefas.splice(
                    indice,
                    1
                );


                salvarTarefas();

                renderizarTarefas();

            }
        );


        item.appendChild(
            botaoExcluir
        );


        listaTarefas.appendChild(
            item
        );

    });


    atualizarContador();

    atualizarFiltroAtivo();

}


/* ADICIONAR COM BOTÃO */

botaoAdicionar.addEventListener(
    "click",
    function() {

        adicionarTarefa();

    }
);


/* ADICIONAR COM ENTER */

inputTarefa.addEventListener(
    "keydown",
    function(evento) {

        if (evento.key === "Enter") {

            adicionarTarefa();

        }

    }
);


/* FILTRO TODAS */

botaoTodas.addEventListener(
    "click",
    function() {

        filtroAtual = "todas";

        renderizarTarefas();

    }
);


/* FILTRO PENDENTES */

botaoPendentes.addEventListener(
    "click",
    function() {

        filtroAtual = "pendentes";

        renderizarTarefas();

    }
);


/* FILTRO CONCLUÍDAS */

botaoConcluidas.addEventListener(
    "click",
    function() {

        filtroAtual = "concluidas";

        renderizarTarefas();

    }
);

function atulizarFiltroAtivo() {

    botaoTodas.classList.remove("ativo");

    botaoPendentes.classList.remove("ativo");

    botaoConcluidas.classList.remove("ativo");

    if (filtroAtual === "todas") {

        botaoTodas.classList.add("ativo");

    }

    if (filtroAtual === "pendentes") {

        botaoPendentes.classList.add("ativo");

    }

    if (filtroAtual === "concluidas") {

        botaoConcluidas.classList.add("ativo");

    }

}


/* MOSTRAR TUDO AO ABRIR */

renderizarTarefas();