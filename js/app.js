function removeItemList(id) {
    const item = document.getElementById("tarefa-"+id)
    item.remove()
    countItems()
}

function addItemList() {
    const id = Date.now()
    const texto = document.getElementById("tarefa-texto").value
    const item = createItemList(id, texto)
    const lista = document.getElementById("tarefas")
    lista.innerHTML += item 
    countItems()

}

function createItemList(id, text) {
    const item = `<div id="tarefa-${id}" class="item celula">
    <ul>
        <li><input type="checkbox"><label>${text}</label>
        <button class="delete border-button position-button" onclick="removeItemList(${id})">Excluir</button>
        </li>
    </ul>
</div>`
return item
}

function countItems() {
    const contador = document.querySelectorAll("div[id^='tarefa-']").length
    const textoContador = document.getElementById("quantidade")
    textoContador.innerText = "Quantidade de tarefas: " + contador

}