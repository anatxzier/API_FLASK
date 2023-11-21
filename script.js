const tabela = document.querySelector('.tabela-js')

axios.get('http://127.0.0.1:5000/list').then((response) => {
    getData(response.data)
})
    .catch(function (error) {
        console.log(error)
    })

function getData(data) {
    data.map((item) => {
        tabela.innerHTML += `
            <tr>
                <th scope="row">${item.ID}</th>
                <td>${item.TAREFA}</td>
                <td><button class="btn" type="button" onclick="excluirCSV(${item.ID})"data-bs-toggle="modal"
                data-bs-target="#modalexcluir"><span class="material-symbols-outlined text-danger">
                delete
                </span></button><button class="btn" type="button" data-bs-toggle="modal"
                data-bs-target="#modaleditar"><span class="material-symbols-outlined text-success">
                edit
                </span></button></td>
            </tr>
            `
    })
}

// Adicionar tarefa

function adicionarCSV(){
    const input = document.getElementById("recipient-name").value 

    if (input.trim() !==""){
        const apiUrl = 'http://127.0.0.1:5000/add'
        const Tarefa = {
            Tarefa: input
        }
        axios.post(apiUrl, Tarefa)
        .then(function (response) {
            console.log("Informação adicionada com sucesso:", response.data);
        })
        .catch(function (error) {
            console.error("Erro ao adicionar informação à API:", error);
        });
} else {
    alert("Por favor, insira uma informação antes de adicionar à API.");
}
}
    
// excluir tarefa

function excluirCSV(id){
    tarefaExcluir = id
}

function confirmar(){

        const apiUrl = `http://127.0.0.1:5000/delete/${tarefaExcluir}`;

        axios.delete(apiUrl)
            .then(response => {
                console.log('Tarefa excluída com sucesso:', response.data);
                alert('Tarefa excluída com sucesso!');
            })
            .catch(error => {
                console.error('Erro ao excluir a tarefa:', error);
                alert('Erro ao excluir a tarefa.');
            });

        itemDeletar = null;
    }

// editar tarefa




    


