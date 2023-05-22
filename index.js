let black_bg=document.querySelector('.black');

let navbar_ul=document.querySelector("#navbar-ul");
let nav_bar=document.querySelector("#nav-bar").addEventListener('click',()=>{
    navbar_ul.classList.toggle("active")
    
    navbar_search.classList.remove("active")
    navbar_login.classList.remove("active")
    navbar_cart.classList.remove("active")
});


let navbar_search=document.querySelector("#search-bar");
let nav_input=document.querySelector("#nav-search").addEventListener('click',()=>{
    navbar_search.classList.toggle("active")
    navbar_ul.classList.remove("active")
    navbar_login.classList.remove("active")
    navbar_cart.classList.remove("active")
})

let navbar_login=document.querySelector("#navbar-login");
let nav_user=document.querySelector("#nav-user").addEventListener('click',()=>{
    navbar_login.classList.toggle("active")
    navbar_ul.classList.remove("active")
  navbar_search.classList.remove("active")
  navbar_cart.classList.remove("active")
})

let navbar_cart=document.querySelector("#navbar-cart");
let nav_cart=document.querySelector("#nav-cart").addEventListener('click',()=>{
    navbar_cart.classList.toggle("active")
    navbar_ul.classList.remove("active")
  navbar_search.classList.remove("active")
  navbar_login.classList.remove("active")
})


