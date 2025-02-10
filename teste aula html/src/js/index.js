window.alert('SUPRESA MEU AMOOOOR')
/* PASSO 1: criar uma variável em java script pra trabalhar com a listagem */
const ListaSelecaoMomentos = document.querySelectorAll(".momento.ativo");
console.log(ListaSelecaoMomentos)
//PASSO 2: Identificar o evento de clique no elemento da listagem
ListaSelecaoMomentos.forEach(momento =>{
    momento.addEventListener("click", () =>{
        //PASSO 3: Remover a classe aberto só do momento que tá aberto
        const MomentoAberto = document.querySelector(".aberto")
        MomentoAberto.classList.remove("aberto"); 
        //PASSO 4: Ao clicar em um momento da listagem pegamos o id desse momento pra saber qual momento abrir
        const idMomentoSelecionado = momento.attributes.id.value;
        const MomentoParaAbrir = document.getElementById(idMomentoSelecionado)
        MomentoParaAbrir.classList.add("aberto");
    })
})
