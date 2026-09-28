// Variáveis e limites
let tarefas = [];
const MAX_TAREFAS = 10;

// Função para carregar as tarefas salvas quando abre a página
function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem("tarefas_academicas");

    // Condicional
    if (tarefasSalvas != null) {
        tarefas = JSON.parse(tarefasSalvas);
    } else {
        tarefas = [];
    }

    listarTarefas();
}

// Função para organizar por prazo
function ordenarTarefas() {
    for (let i = 0; i < tarefas.length - 1; i++) {
        for (let j = 0; j < tarefas.length - i - 1; j++) {
            if (tarefas[j].prazo > tarefas[j + 1].prazo) {
                let temp = tarefas[j];
                tarefas[j] = tarefas[j + 1];
                tarefas[j + 1] = temp;
            }
        }
    }
}

// Função de Adicionar Tarefa
function adicionarTarefa() {
    // Interação com a página
    const campoNome = document.getElementById("nome_tarefa");
    const campoPrazo = document.getElementById("prazo_tarefa");

    const nome = campoNome.value;
    const prazo = Number(campoPrazo.value);

    // Condicionais para validação
    if (tarefas.length >= MAX_TAREFAS) {
        alert("[Erro] A lista de tarefas está cheia! (Máximo 10)");
        return;
    }

    if (nome == "" || campoPrazo.value == "" || prazo < 0) {
        alert("[Erro] Digite um nome e um número de dias válido!");
        return;
    }

    // Criando o objeto da tarefa
    const novaTarefa = {
        nome: nome,
        prazo: prazo
    };

    tarefas.push(novaTarefa);

    // Salvando no localStorage
    localStorage.setItem("tarefas_academicas", JSON.stringify(tarefas));

    alert("[Sucesso] Tarefa cadastrada!");

    campoNome.value = "";
    campoPrazo.value = "";

    listarTarefas();
}

// Função de Listar Tarefas
function listarTarefas() {
    const lista = document.getElementById("lista_tarefas");
    lista.innerHTML = "";

    if (tarefas.length == 0) {
        lista.innerHTML = "<li>Nenhuma tarefa pendente. Vocês estão livres!</li>";
        return;
    }

    ordenarTarefas();

    tarefas.forEach(function (tarefa, indice) {
        lista.innerHTML += `
            <li>
                <strong>${tarefa.nome}</strong> - Faltam ${tarefa.prazo} dia(s)
                <button onclick="concluirTarefa(${indice})">Concluir</button>
            </li>
        `;
    });
}

// Função de Concluir / Excluir
function concluirTarefa(indice) {
    tarefas.splice(indice, 1);
    localStorage.setItem("tarefas_academicas", JSON.stringify(tarefas));
    alert("[Sucesso] Tarefa concluída e removida da lista!");
    
    listarTarefas();
}

// Execução inicial
carregarTarefas();