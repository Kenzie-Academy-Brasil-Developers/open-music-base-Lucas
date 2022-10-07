/* Desenvolva sua lógica aqui ... */

const createCard = (products) => {
  let div = document.createElement('div')

  div.insertAdjacentHTML("afterbegin", `
    
        <div>
          <ul>
            <li class="li-card">
              <img src=${products.img} alt="" class="img-card">
              <div class="div-info-card">
              <div class="div-span">
              <span>${products.band} </span>
              <span>${products.year} </span>   
              </div>           
              <h3>${products.title}</h3>
              <div class="div-price">
                <h4 >R$ ${products.price}</h4>
                <h4 class="h4-comprar">Comprar</h4>
              </div>
              </div>
            </li>

          </ul>
    `)

  return div
}

const section = document.querySelector(".section-card")
const renderCard = (cardList) => {

  section.innerHTML = ""

  cardList.forEach((element) => {
    const card = createCard(element)
    section.appendChild(card)
  })

  createCard(cardList)

}
renderCard(products)



// ******************ciando categorias*****************

const createCategory = () => {

  let div = document.createElement('div')

  div.insertAdjacentHTML("afterbegin", `
    <p>Genero musical</p>
    <ul class="musicGenres">
      <li class="filterItem">Todos</li>
      <li class="filterItem">Pop</li>
      <li class="filterItem">MPB</li>
      <li class="filterItem">Forró</li>
      <li class="filterItem">Samba</li>
      <li class="filterItem">Baião</li>
      <li class="filterItem">Rap</li>
      <li class="filterItem">Hip-Hop</li>
      <li class="filterItem">Rock</li>
      <li class="filterItem">Reggae</li>
      <li class="filterItem">Country</li>
      <li class="filterItem">Gospel</li>
    </ul>

    `)

  return div
}



const nav = document.querySelector(".container-category")
const renderCategory = (categoryList) => {

  const card = createCategory()
  nav.appendChild(card)

  createCategory(categoryList)

}
renderCategory(categories)