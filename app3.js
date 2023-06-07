let products = {
    data: [
        {
            productName: "Regular white T-Shirt",
            category:"Topwear",
            price:"30",
            Image:"white-tshirt.jpg",
        },
        {
            productName: "Beige Short Skirt",
            category:"Bottomwear",
            price:"49",
            Image:"short-skirt.jpg",
        },
        {
            productName: "Sporty SmartWatch",
            category:"Watch",
            price:"99",
            Image:"sporty-smartwatch.jpg",
        },
        {
            productName: "Basic Knitted Top",
            category:"Topwear",
            price:"29",
            Image:"knitted-top.jpg",
        },
        {
            productName: "Black Leather Jacket",
            category:"Jacket",
            price:"129",
            Image:"black-leather-jacket.jpg",
        },
        {
            productName: "Stylish Pink Trousers",
            category:"Bottomwear",
            price:"89",
            Image:"pink-trousers.jpg",
        },
        {
            productName: "Brown Men's Jecket",
            category:"Jacket",
            price:"189",
            Image:"brown-jacket.jpg",
        },
        {
            productName: "Comfy Gray Pants",
            category:"Bottomwear",
            price:"49",
            Image:"comfy-gray-pants.jpg",
        },
    ]
};
for(let i of products.data){
    let card = document.createElement("div");
    card.classList.add("card",i.category,"hide");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src",i.Image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    let container = document.createElement("div")
    container.classList.add("container");
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    let price = document.createElement("h6");
    price.innerText ="$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}
function filterProduct(value){
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button =>{
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });
    let elements = document.querySelectorAll(".card");
    elements.forEach((elements)=>{
        if(value == "all" ){
            elements.classList.remove("hide");
        }
        else{
            if(elements.classList.contains(value)){
                elements.classList.remove("hide");
            }
            else{
                elements.classList.add("hide");
            }
        }
    });
}
//search button click
document.getElementById("search").addEventListener("click",() => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element,index) => {
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    });
});

window.onload = () => {
    filterProduct("all");
}