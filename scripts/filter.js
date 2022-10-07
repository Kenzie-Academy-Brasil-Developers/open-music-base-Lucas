function eventFilter () {
    const filterButton = document.querySelectorAll('.filterItem')
    const sectionList = document.querySelector('.section-card')
   

    filterButton.forEach(button =>{
        button.addEventListener('click', () => {
            sectionList.innerHTML = ''

            const filter = button.innerText
            // const filterProducts = filterMusic()

            if(filter === 'Todos'){
                    renderCard(products)
            }
            // if(filter === 'Pop' || 'Hip-hop' || 'Rock'){
            //    renderCard(filterProducts)
            // }
           
            
        })
    })
}

// function filterMusic (text) {

   
//     const musicFilter = products.filter((element) => {
//         if(element.category === 3){
//             return element
//         }
//     })

//     return musicFilter
// }

eventFilter () 