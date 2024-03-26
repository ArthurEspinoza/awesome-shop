<script setup>
import {useCartStore} from "../store/cart";
const useCart = useCartStore();
const {addProduct} = useCart;
const props = defineProps({
    id: String,
    name: String,
    images: {
        type: Array,
        default: []
    },
    currency: String,
    price: String
})
</script>
<template>
    <v-card>
        <v-img
            height="150"
            :src="props.images[0].url || 'https://static.thenounproject.com/png/3850446-200.png'"
        ></v-img>
        <v-card-item>
            <v-card-title>{{ props.name }}</v-card-title>
            <v-card-subtitle>${{ props.price }} {{ props.currency }}</v-card-subtitle>
        </v-card-item>
        <v-card-actions>
            <v-btn color="primary" :to="`/details/${props.id}`">
                <v-icon icon="mdi-eye-outline" class="mr-2"></v-icon>
                Details
            </v-btn>
            <v-btn variant="tonal" color="green" rounded="lg" @click="addProduct(props)">
                <v-icon icon="mdi-cart-plus" class="mr-2"></v-icon>
                Add
            </v-btn>
        </v-card-actions>
    </v-card>
</template>