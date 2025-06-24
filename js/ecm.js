import { products } from "../data.js";
window.addEventListener("DOMContentLoaded", () => {

  const homeData = document.body.id;
  const productDeails = document.body.id

  if (homeData === "home") {
    const productContainer = document.getElementById('product-container')

    products.forEach(product => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide product-item";

      slide.innerHTML = `
      <div class="text-center cursor-pointer" data-id="${product.id}">
        <a class="product-link">
          <img src="${product.image}" alt="${product.name}"
              class="mx-auto w-full mb-4 h-[400px] object-cover" />
        </a>
        <div class="flex justify-between text-sm border-t pt-2">
          <h2 class="text-xl dark:text-[#808080]">${product.name}</h2>
          <h2 class="text-xl dark:text-[#808080]">$${product.price}</h2>
        </div>
      </div>
    `;

      // Add click handler
      slide.querySelector(".product-link").addEventListener("click", () => {
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "shop-details.html";
      });

      productContainer.appendChild(slide);
    });
  }

  if (productDeails === 'shop-details') {

 const relatedProduct = document.getElementById('relatedProduct')

    products.forEach(product => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide product-item";

      slide.innerHTML = `
      <div class="text-center cursor-pointer" data-id="${product.id}">
        <a class="product-link">
          <img src="${product.image}" alt="${product.name}"
              class="mx-auto w-full mb-4 h-[400px] object-cover" />
        </a>
        <div class="flex justify-between text-sm border-t pt-2">
          <h2 class="text-xl dark:text-[#808080]">${product.name}</h2>
          <h2 class="text-xl dark:text-[#808080]">$${product.price}</h2>
        </div>
      </div>
    `;

      // Add click handler
      slide.querySelector(".product-link").addEventListener("click", () => {
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "shop-details.html";
      });

      relatedProduct.appendChild(slide);
    });



    const data = localStorage.getItem("selectedProduct");

    if (data) {
      const product = JSON.parse(data);

      document.getElementById("product-details").innerHTML = `

      <!-- Product Image -->
      <div class="relative">
        <img src="${product.image}" alt="${product.name}" class="rounded-lg w-full h-[500px] object-cover" />
        <button class="absolute top-2 left-2 bg-white dark:bg-black p-2 rounded-full shadow">
          <i data-lucide="heart" class="w-5 h-5 text-black dark:text-[#808080]"></i>
        </button>
      </div>

      <!-- Product Info -->
      <div>
        <h1 class="text-xl font-semibold mb-2 dark:text-[#808080]">${product.name}</h1>
        <span class="inline-block bg-green-100 dark:bg-[#808080] dark:text-white text-green-600 text-xs font-medium px-2 py-1 mb-2">Just In</span>

        <p class="text-2xl font-bold mb-4 dark:text-[#808080]">$${product.price}</p>
        <p class="dark:text-[#808080] mb-4 font-semibold">Shoes Info</p>
        <p class="mb-4 text-sm dark:text-[#808080]">${product.description || "No description available."}</p>

        <!-- Color and Size -->
        <div class="flex gap-4 mb-4">
          <div class="w-full">
            <label class="block text-sm font-medium mb-1 dark:text-[#808080]">Color</label>
            <select class="border bg-transparent py-3 px-4 w-full dark:text-[#808080]">
              ${product.colors.map(c => `<option>${c}</option>`).join("")}
            </select>
          </div>
          <div class="w-full">
            <label class="block text-sm font-medium mb-1 dark:text-[#808080]">Size</label>
            <select class="border bg-transparent py-3 px-4 w-full dark:text-[#808080]">
              ${product.sizes.map(s => `<option>${s}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Add to Cart Button -->
        <button class="w-full bg-black dark:bg-white dark:text-black text-white py-3 hover:opacity-90 mb-4"
                onclick="window.location.href='cart.html'">
          Add To Cart
        </button>

        <!-- Description -->
        <details class="border p-4">
          <summary class="cursor-pointer font-medium dark:text-[#808080]">Descriptions</summary>
          <p class="text-sm text-gray-600 mt-2 dark:text-[#808080]">
            ${product.description || "No extra details available."}
          </p>
        </details>
      </div>
  
  `;
    } else {
      document.getElementById("product-details").innerHTML = `
    <p class="text-center text-red-500 font-semibold col-span-2">No product selected. Please go back and choose one.</p>
  `;
    }

   
  }

  

});