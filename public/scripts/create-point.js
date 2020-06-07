function populateUFs(){ 

    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

        for(const state of states ){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
        
    })

}

populateUFs()


function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput= document.querySelector("[name=state]")
    
    

    const ufValue = event.target.value

    
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text


    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value> Selecione a cidade </option>"
    
    citySelect.innerHTML ="<option value> Selecione a cidade </option>"
    citySelect.disabled = true 

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        
        

        for(const city of cities ){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        
        
     citySelect.disabled = false 

    })
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)
     


    /**items de coleta */

    //pegar todos os li's

    const itemsToCollect = document.querySelectorAll(".items-grid li");

    for (const item of itemsToCollect){
        item.addEventListener("click",handleSelectedItem);
    }

    let selectedItems = []

    const collectedItems = document.querySelector("input[name=items]")

    function handleSelectedItem(event){
        
        const itemLi = event.target

        //adicionar ou remover um classe com java script
        itemLi.classList.toggle("selected")

        

        const itemId = itemLi.dataset.id

       //console.log('ITEM ID:',itemId)


        //verificar se os itens estão selecionados
        // pegar os itens selecionados
        const alreadySelected = selectedItems.findIndex( item => {
            const itemFound = item ==itemId //sera true ou false
            return item == itemId

        })


        
        // se ja estiver selecionado, tirar da seleção

        if (alreadySelected >=0){
            // tirar da selecao
            const filteredItems = selectedItems.filter(item => {
                const itemIsDifferent = item != itemId //false
                return itemIsDifferent

            } )

            selectedItems = filteredItems
        } else {
            // se nao estiver selecionado , adicionar a seleção
            // adicionar a seleção

            selectedItems.push(itemId)

        }

       // console.log('selectedItems:',itemId)

        // atualizar o campo esconddido com os dados selecionados
        collectedItems.value = selectedItems






    }