let rootElm = document.querySelector('.ul')
let ul2 = document.querySelector('.ul2')
let searchBox = document.querySelector('#serch-box')

let allhouse = got.houses
let filterhouses = allhouse

allhouse.forEach((house) => {
  let list = document.createElement('li')
  list.classList.add('listBtn')
  list.innerText = house.name
  rootElm.append(list)
  list.addEventListener('click', handle)
})

// handle
function handle(e) {
  filterhouses = allhouse.filter((elm) => elm.name === e.target.innerText)
  creatUi()
  handleSearch()
}

// handleearch
function handleSearch(e) {
  searchText = e.target.value
  filterhouses = allhouse.filter((elm) =>
    elm.name.toLowerCase().includes(searchText.toLowerCase()),
  )
  creatUi(filterhouses)
}

// creatUi
function creatUi() {
  ul2.innerHTML = ''
  filterhouses.forEach((elm) => {
    let allPeople = elm.people
    allPeople.forEach((elm) => {
      let allLi = document.createElement('li')
      allLi.classList.add('allLi')
      let image = document.createElement('img')
      image.classList.add('image')
      image.src = elm.image
      let h2 = document.createElement('h2')
      h2.innerText = elm.name
      let pera = document.createElement('p')
      pera.innerText = elm.description
      let btn = document.createElement('button')
      btn.classList.add('knowmore-btn')
      btn.innerText = 'Know more!'
      allLi.append(image, h2, pera, btn)
      ul2.append(allLi)
    })
  })
}
creatUi()

searchBox.addEventListener('input', handleSearch)
