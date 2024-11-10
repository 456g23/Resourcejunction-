// Sample data: products with name, category, image URL, description, and affiliate link
const products = [
    { name: "Productivity App", category: "software", image: "link-to-image1.jpg", description: "Boost productivity with this app.", link: "https://affiliate-link1.com" },
    { name: "Accounting Software", category: "software", image: "link-to-image2.jpg", description: "Efficient accounting made easy.", link: "https://affiliate-link2.com" },
    { name: "Web Hosting Service", category: "services", image: "link-to-image3.jpg", description: "Reliable hosting for your site.", link: "https://affiliate-link3.com" },
    { name: "SEO Optimization Service", category: "services", image: "link-to-image4.jpg", description: "Increase your site visibility.", link: "https://affiliate-link4.com" },
    { name: "Online Store - Gadgets", category: "ecommerce", image: "link-to-image5.jpg", description: "Latest gadgets and electronics.", link: "https://affiliate-link5.com" },
    { name: "Furniture Store", category: "furniture", image: "link-to-image6.jpg", description: "Quality furniture for your home.", link: "https://affiliate-link6.com" }
];

// Function to display products based on category
function showCategory(category) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear existing content

    // Filter products based on category
    const filteredProducts = category === "all" ? products : products.filter(product => product.category === category);

    // Display filtered products
    filteredProducts.forEach(product => {
        const productItem = document.createElement("div");
        productItem.className = "product-item";
        
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button onclick="window.open('${product.link}', '_blank')">Buy Now</button>
        `;

        productList.appendChild(productItem);
    });
}

// Show all products initially
showCategory("all");
     
