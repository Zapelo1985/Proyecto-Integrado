//FUNCION PARA MOVER EL CARRO DE COMPRA

function moverCarro() {
    var carro = document.querySelector('.shopp');
    
    carro.classList.add('carro-animado');
    
    setTimeout(function() {
        carro.classList.remove('carro-animado');
    }, 1000);
}

//FUNCION PARA ORDENAR LOS PRODUCTOS EN EL CATALOGO

function sortProducts() {
    var select = document.getElementById("sort-by");
    var sortBy = select.value;
    var itemsContainer = document.querySelector(".items-container");
    var items = itemsContainer.querySelectorAll(".item");

    var itemsArray = Array.prototype.slice.call(items);

    if (sortBy === "price") {
        itemsArray.sort(function(a, b) {
            var priceA = parseFloat(a.querySelector(".price").textContent.replace("€", ""));
            var priceB = parseFloat(b.querySelector(".price").textContent.replace("€", ""));
            return priceA - priceB;
        });
    } else if (sortBy === "name") {
        itemsArray.sort(function(a, b) {
            var nameA = a.querySelector(".info-product h3").textContent.toUpperCase();
            var nameB = b.querySelector(".info-product h3").textContent.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }

    itemsContainer.innerHTML = "";

    itemsArray.forEach(function(item) {
        itemsContainer.appendChild(item);
    });
}

document.getElementById("sort-by").addEventListener("change", sortProducts);
