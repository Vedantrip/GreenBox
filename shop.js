document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Shirt from Fibre', category: 'shirts', price: 2500, image: 'shirt1.jpg' },
        { id: 2, name: 'Pants from fibre', category: 'pants', price: 4500, image: 'pants1.jpg' },
        { id: 3, name: 'Sarees', category: 'jackets', price: 7500, image: 'saree1.jpg' },
        { id: 4, name: 'Shirt from Fibre', category: 'shirts', price: 3000, image: 'shirt2.jpg' },
        { id: 5, name: 'Pants from fibre', category: 'pants', price: 4000, image: 'pants2.jpg' },
        { id: 6, name: 'Sarees', category: 'jackets', price: 8000, image: 'saree2.jpg' },
    ];

    const productContainer = document.getElementById('products');
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');

    function displayProducts(productList) {
        productContainer.innerHTML = '';
        productList.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">₹${product.price}</p>
            `;
            productContainer.appendChild(productCard);
        });
    }

    function filterProducts() {
        const category = categoryFilter.value;
        let filteredProducts = products;
        if (category !== 'all') {
            filteredProducts = products.filter(product => product.category === category);
        }
        return filteredProducts;
    }

    function sortProducts(productList) {
        const sortBy = sortFilter.value;
        if (sortBy === 'price-asc') {
            productList.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            productList.sort((a, b) => b.price - a.price);
        }
        return productList;
    }

    function updateProductDisplay() {
        let filteredProducts = filterProducts();
        let sortedProducts = sortProducts(filteredProducts);
        displayProducts(sortedProducts);
    }

    categoryFilter.addEventListener('change', updateProductDisplay);
    sortFilter.addEventListener('change', updateProductDisplay);

    // Initial display
    updateProductDisplay();
});
