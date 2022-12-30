let cardbtn1El = document.querySelector(".card__btn1");
let cardbtn2El = document.querySelector(".card__btn2");
let parentEl = document.querySelector(".parent");
let cardEl = document.querySelector(".card");
let item2btnEl = document.querySelector(".item2__btn");
let forminputEl = document.querySelector("#parent__form__input");
let item1btnEl = document.querySelector("#item1__btn");
let parentulEl = document.querySelector("#ul");

cardbtn1El.addEventListener("click",(e)=>{
    e.preventDefault();
    parentEl.style.display = "block"
    cardEl.style.display = "none";  
})
cardbtn2El.addEventListener("click",(e)=>{
    e.preventDefault();
    parentEl.style.display = "block"
    cardEl.style.display = "none";  
})
item2btnEl.addEventListener("click",(e)=>{
    e.preventDefault();
    parentEl.style.display = "none"
    cardEl.style.display = "block"
})

item1btnEl.addEventListener("click",(e)=>{
    e.preventDefault();
     let liEl = document.createElement("li")
     parentulEl.appendChild(liEl);
     liEl.innerHTML = forminputEl.value;
})


