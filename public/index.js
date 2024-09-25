function getProductById() {
    const id = document.getElementById('productId').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'productos.json', true); 

    xhr.onload = function() {
        if (this.status === 200) {
            const productos = JSON.parse(this.responseText);
            const producto = productos.find(prod => prod.id == id);

            if (producto) {
                document.getElementById('product').innerHTML = `
                    <h2>${producto.title}</h2>
                    <p>${producto.description}</p>
                    <p>Precio: $${producto.price}</p>
                    <img src="${producto.image}" alt="${producto.title}" width="200">
                `;
            } else {
                document.getElementById('product').innerHTML = `<p>Producto no encontrado</p>`;
            }
        }
    };

    xhr.send();
}


