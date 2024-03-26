<script setup>
import axios from "axios"
import { ref } from "vue";
import { useRoute  } from "vue-router";
import ImageCarousel from "../components/ImageCarousel.vue";

const product = ref({});
const route = useRoute();
const getProduct = async(id) => {
    try {
        const {data} = await axios.get(`https://eshop-deve.herokuapp.com/api/v2/products/${id}`, {
            headers: {
                "Authorization": import.meta.env.VITE_API_KEY
            }
        })
        product.value = {
            id: data.product.id,
            name: data.product.name,
            description: data.product.description,
            currency: data.product.currency,
            quantity: data.product.quantity,
            price: data.product.price,
            images: data.product.images,
            variants: data.product.variants
        } || {};
    } catch (error) {
        console.log("Error fetching the product: ", error);
    }
}
getProduct(route.params.id);
</script>
<template>
    <div>
        <v-btn variant="text" to="/">
            <v-icon icon="mdi-arrow-left"></v-icon>
            Return to the products
        </v-btn>
        <div class="details__container my-5">
            <v-row >
                <v-col
                    cols="12"
                    md="6">
                    <ImageCarousel :images="product.images"/>
                </v-col>
                <v-col
                    cols="12"
                    md="6">
                    <div class="d-flex flex-column justify-space-between align-start details__box">
                        <div class="details__info">
                            <h1>{{ product.name }}</h1>
                            <h4>${{product.price}} {{ product.currency }}</h4>
                            <p class="my-5">{{ product.description }}</p>
                        </div>
                        <div class="details__actions d-flex gc-3 mt-3 justify-start">
                            <span class="text-bold text-h5">Stock: {{ product.quantity }}</span>
                            <v-btn color="green">
                                <v-icon icon="mdi-cart" class="mr-2"></v-icon>
                                Add
                            </v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>