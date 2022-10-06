/* Desenvolva sua lógica aqui ... */

const createCard = (products) => {
    let div = document.createElement('div')

    div.insertAdjacentHTML("afterbegin", `
    <p>Albuns encontrados</p>
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
      <li>Todos</li>
      <li>Pop</li>
      <li>MPB</li>
      <li>Forró</li>
      <li>Samba</li>
      <li>Baião</li>
      <li>Rap</li>
      <li>Hip-Hop</li>
      <li>Rock</li>
      <li>Reggae</li>
      <li>Country</li>
      <li>Gospel</li>
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