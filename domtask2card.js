
let data = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "Great outerwear jackets for Spring/Autumn/Winter.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    },
    {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "Inspired by the mythical water dragon.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    }
];

let products = document.getElementById("container");

for (let i = 0; i < data.length; i++) {
    let imgContainer = document.createElement("div");
    imgContainer.style.border = "2px solid #ccc";
    imgContainer.style.borderRadius = "8px";
    imgContainer.style.padding = "10px";
    imgContainer.style.margin = "10px";
    imgContainer.style.textAlign = "center";
    imgContainer.style.width = "150px";
    imgContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    imgContainer.style.transition = "transform 0.3s";

    // Add hover effect
    imgContainer.onmouseover = () => imgContainer.style.transform = "scale(1.05)";
    imgContainer.onmouseout = () => imgContainer.style.transform = "scale(1)";

    let img = document.createElement("img");
    img.src = data[i].image;
    img.alt = data[i].title;
    img.style.width = "100%";
    img.style.borderRadius = "5px";

    let title = document.createElement("p");
    title.innerText = data[i].title;
    title.style.fontSize = "14px";
    title.style.marginTop = "10px";

    imgContainer.appendChild(img);
    imgContainer.appendChild(title);

    products.appendChild(imgContainer);
}

