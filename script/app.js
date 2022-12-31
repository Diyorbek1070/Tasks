let cardbtn1El = document.querySelector(".card__btn1");
let cardbtn2El = document.querySelector(".card__btn2");
let parentEl = document.querySelector(".parent");
let cardEl = document.querySelector(".card");
let item2btnEl = document.querySelector(".item2__btn");
let forminputEl = document.querySelector("#parent__form__input");
let item1btnEl = document.querySelector("#item1__btn");
let parentulEl = document.querySelector("#ul");
let formEl = document.querySelector(".parent__form");
let ulEl = document.querySelector(".form__serch");
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

formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
     let liEl = document.createElement("li")
     let imgEl = document.createElement("img");
     parentulEl.appendChild(liEl);
     liEl.appendChild(imgEl);
     imgEl.src = "https://cdn-icons.flaticon.com/svg/3917/3917759.svg?token=exp=1672423511~hmac=3bf9eff240e2897dec89da7187467a64";
     liEl.innerHTML = forminputEl.value;
})



let tasks = [
    {
        task:"Hello"
    },
    {
        task:"qwerrtyui"
    },
    {
        task:"opasdfgfg"
    },
    {
        task:"hjklzxzcvbnm"
    },
    {
        task:"Hello World"
    },
    {
        task:"Jou Dou"
    },
    {
        task:"Nilola"
    },
    {
        task:"John"
    },
    {
        task:"Superman"
    },
    {
        task:"Alishe"
    },
    {
        task:"Boxs"
    },
]
 
let sortedArr = tasks.sort((a,b) =>{
    if(a.task.toLowerCase() < b.task.toLowerCase()){
        return -1
    }
    return 1
})
console.log(sortedArr);
forminputEl.addEventListener("input",()=>{
    let all = [];
    let inputValue = forminputEl.value.toLowerCase();
    tasks.forEach(user =>{
        if(user.task.toLocaleUpperCase().indexOf(inputValue) !== -1){
            all.push(user.task)
        }
    })
    ulEl.innerHTML = "";
    all.forEach(k => {
        const li = document.createElement("li");
        li.innerHTML = k
        ulEl.appendChild(li);
    })
})
