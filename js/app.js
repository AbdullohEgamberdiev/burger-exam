'use strict';


// const resetBtn = document.querySelector(".reset__btn");
const cheeseBtn = document.querySelector(".cheese__button");
const saladBtn = document.querySelector(".salad__button");
const tomatoBtn = document.querySelector(".tomato__button");
const pickleBtn = document.querySelector(".pickle__button");
const meatBtn = document.querySelector(".meat__button");
const onionBtn = document.querySelector(".onion__button");
const box = document.querySelector(".burger__box");
const ingreBox = document.querySelector(".ingredients__box");
const resetBtn = document.querySelector(".reset__btn");
const orderBtn = document.querySelector(".order__btn");
// const orderTitle = document.querySelector(".order__title");

let price = 2;
  document.querySelector(".price__title").textContent = `Burger's price : ${price} $`;


cheeseBtn.addEventListener("click", function(e) {
  e.preventDefault("");
  price += 2;
  document.querySelector(".price__title").textContent = `Burger's price : ${price} $`;
    let img = document.createElement("IMG");
    img.classList.add("cheese-img")
    let cheeseImg = document.querySelector(".cheese-img");
    img.style.marginBottom = "-90px"
    img.style.zIndex = "2";
    img.setAttribute("src", "cheese.svg");
    img.setAttribute("width", "400");
    img.setAttribute("height", "105");
    img.setAttribute("marginTop" , "-100px")
    ingreBox.appendChild(img)


    img.addEventListener("click", (e) => {
      e.preventDefault();
      price -= 2;
  document.querySelector(".price__title").textContent = `Burger's price : ${price} $`;
      e.target.remove(img);
    })
  }
)


meatBtn.addEventListener("click", function(e) {
  e.preventDefault("");
  price += 5;
  document.querySelector(".price__title").textContent = `Burger's price : ${price} $`;
    let img1 = document.createElement("IMG");
    img1.classList.add("cheese-img")
    let meatImg = document.querySelector(".meat-img");
    img1.style.marginBottom = "-50px"
    img1.style.zIndex = "2";
    img1.setAttribute("src", "meat.svg");
    img1.setAttribute("width", "400");
    img1.setAttribute("height", "110");
    img1.setAttribute("marginTop" , "-100px")
    ingreBox.appendChild(img1)

    img1.addEventListener("click", (e) => {
      e.preventDefault();
      price -= 5;
  document.querySelector(".price__title").textContent = `Burger's price : ${price} $`;
      e.target.remove(img1);
    })
  }
)


onionBtn.addEventListener("click", function(e) {
  e.preventDefault("");
  price += 1;
  document.querySelector(".price__title").textContent = `Burger's price : ${price} $`;
    let img2 = document.createElement("IMG");
    img2.classList.add("cheese-img")
    let onionImg = document.querySelector(".onion-img");
    img2.style.marginBottom = "-60px"
    img2.style.zIndex = "2"
    img2.setAttribute("src", "onion.svg");
    img2.setAttribute("width", "400");
    img2.setAttribute("height", "80");
    img2.setAttribute("marginTop" , "-100px")
    ingreBox.appendChild(img2)

    img2.addEventListener("click", (e) => {
      e.preventDefault();
      price -= 1;
  document.querySelector(".price__title").textContent = `Burger's price : ${price} $`;
      e.target.remove(img2);
    })
  }
)

saladBtn.addEventListener("click", function(e) {
  e.preventDefault("");
  price += 1;
  document.querySelector(".price__title").textContent = `Burger's price : ${price} $`;
    let img3 = document.createElement("IMG");
    img3.classList.add("salad-img")
    let onionImg = document.querySelector(".salad-img");
    img3.style.marginBottom = "-60px"
    img3.style.zIndex = "2"
    img3.setAttribute("src", "salad.svg");
    img3.setAttribute("width", "350");
    img3.setAttribute("height", "80");
    img3.setAttribute("marginTop" , "-100px")
    ingreBox.appendChild(img3)

    img3.addEventListener("click", (e) => {
      e.preventDefault();
      price -= 1;
  document.querySelector(".price__title").textContent = `Burger's price : ${price} $`;
      e.target.remove(img3);
    })
  }
)

tomatoBtn.addEventListener("click", function(e) {
  e.preventDefault("");
  price += 2;
  document.querySelector(".price__title").textContent = `Burger's price : ${price} $`;
    let img4 = document.createElement("IMG");
    img4.classList.add("salad-img")
    let onionImg = document.querySelector(".salad-img");
    img4.style.marginBottom = "-60px"
    img4.style.zIndex = "2"
    img4.setAttribute("src", "tomato.svg");
    img4.setAttribute("width", "400");
    img4.setAttribute("height", "90");
    img4.setAttribute("marginTop" , "-130px")
    ingreBox.appendChild(img4)

    img4.addEventListener("click", (e) => {
      e.preventDefault();
      price -= 2;
  document.querySelector(".price__title").textContent = `Burger's price : ${price} $`;
      e.target.remove(img4);
    })
  }
)

pickleBtn.addEventListener("click", function(e) {
  e.preventDefault("");
  price += 3;
  document.querySelector(".price__title").textContent = `Burger's price : ${price} $`;
    let img5 = document.createElement("IMG");
    img5.classList.add("salad-img")
    let onionImg = document.querySelector(".salad-img");
    img5.style.marginBottom = "-60px"
    img5.style.zIndex = "2"
    img5.setAttribute("src", "pickle.svg");
    img5.setAttribute("width", "450");
    img5.setAttribute("height", "95");
    img5.setAttribute("marginTop" , "-100px")
    ingreBox.appendChild(img5)

    img5.addEventListener("click", (e) => {
      e.preventDefault();
      price -= 3;
  document.querySelector(".price__title").textContent = `Burger's price : ${price} $`;
      e.target.remove(img5);
    })
  }
)


orderBtn.addEventListener("click", (e) => {
  let random = Math.floor(Math.random() * (35 - 10 + 1)) + 10;
  document.querySelector(".order__title").textContent = `Your order number : ${random} `;
  console.log(random);
})
