let products = {
    data: [
        {
            productname: "Regular white T-Shirt",
            categary: "Topwear",
            price: "50",
            image:"men1.png",
        },
        {
            productname: "Being Short Skirt",
            categary: "Bottomwear",
            price: "35",
            image:"women1.png",
        },
        {
            productname: "Sports SmartWatch",
            categary: "watch",
            price: "99",
            image:"watch1.png",
        },
        {
            productname: "Basic Knitted Top",
            categary: "Topwear",
            price: "29",
            image:"knitted.png",
        },
        {
            productname: "Black Leather Jacket",
            categary: "Jacket",
            price: "150",
            image:"jac.png"
        },
        {
            productname: "Stylish Pink Trouser",
            categary: "Bottomwear",
            price: "89",
            image:"trouser.png"
        },
        {
            productname: "Brown Men's Jacket",
            categary: "Jacket",
            price: "189",
            image:"brown.png"
        },
        {
            productname: "Comfy Gray Pants",
            categary: "Bottomwear",
            price: "49",
            image:"pant.png"
        },
    ],
};

for(let a of products.data){

    console.log(a);
    let card = document.createElement("div");
    card.classList.add("card", a.categary,"hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    let image = document.createElement("img");
    image.setAttribute("src",a.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");
// product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = a.productname.toUpperCase();
    container.appendChild(name);
    
    // price
    let price = document.createElement("h6");
    price.innerText= "$" + a.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}   
    function filterProduct(value){
        // console.log(filterProduct(value));
        let buttons = document.querySelectorAll(".button-value");
        buttons.forEach((button)=>{
            if(value.toUpperCase() == button.innerText.toUpperCase()){
                button.classList.add(".active");
                console.log(button.innerText);
                console.log(value);
            }

            else{
                button.classList.remove(".active");

            }
        });

        let elements = document.querySelectorAll('.card');
        elements.forEach((element)=>{
            if(value == "all"){
                element.classList.remove("hide");
                console.log(element)
            }
            else{
                
                if(element.classList.contains(value)){
                    
                element.classList.remove("hide");
                }
                else{
                element.classList.add("hide");
                }
            }
        });
    }
    document.getElementById('search').addEventListener("click", ()=>{
        let searchInput = document.getElementById('search-bar').value;
        let elements = document.querySelectorAll('.product-name');
        let cards = document.querySelectorAll('.card');

        elements.forEach((element,index)=>{
            if(element.innerText.includes(searchInput.toUpperCase())){
                cards[index].classList.remove('hide');
            }
            else{
                cards[index].classList.add('hide');

            }
        });

    });

window.onload = ()=>{
filterProduct('all');
};