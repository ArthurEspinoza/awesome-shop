<script setup>
import axios from "axios";
import {ref} from "vue";

const products = ref([]);

const getProducts = async() => {
    try {
        const {data} = await axios.get("https://eshop-deve.herokuapp.com/api/v2/products", {
            headers: {
                "Authorization": import.meta.env.VITE_API_KEY
            }
        })
        // We check if there are products
        if(data.products && data.products.length > 0){
            products.value = data.products.map(item => ({
                id: item.id,
                name: item.name,
                description: item.description,
                currency: item.currency,
                quantity: item.quantity,
                price: item.price,
                images: item.images,
                variants: item.variants
            }))
        }
    } catch (error) {
        console.log("Error fetching the products: ", error);
    }
};

getProducts();
</script>
<template>
    <div class="container">
        Products
        {{ products }}
    </div>
</template>