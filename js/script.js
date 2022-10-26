// CREAZIONE ARRAY
const listImg = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg" ]


// DICHIARO VARIABILE CONTAINER
let container = document.querySelector(".items")


// creazione ciclo per inserimento lista nel html
for(let i = 0; i < listImg.length; i++){
    
    // CREO UN DIV IN JS
    const element = document.createElement("div")

    // CREO UNA CLASSE ALL'ELEMENTO
    element.classList.add("item")


    // INSERISCO IL CONTENUTO NELL'ELEMENTO
    element.innerHTML = (`<img src="${listImg[i]" alt="img">`);


    // STAMPA l'ELEMENTO CREATO NEL SUO CONTENITORE
    items
    

    

}