<script setup>
import { useCartStore } from "../store/cart";
const useCart = useCartStore();
const {addProduct, removeProducts, deleteProduct} = useCart;
const props = defineProps({
    id: String,
    name: String,
    images: {
        type: Array,
        default: []
    },
    currency: String,
    price: String,
    amount: Number
})
</script>
<template>
    <v-card class="pa-5 rounded-lg">
        <v-card-item>
            <v-row>
                <v-col cols="12" md="8" class="d-flex justify-start gc-5">
                    <div class="cartItem__img">
                        <v-img :src="props.images[0].url" cover class="rounded-xl"></v-img>
                    </div>
                    <div class="cartItem__data">
                        <h5 class="text-h5">{{ props.name }}</h5>
                        <div class="cartItem__buttons">
                            <div class="d-flex align-center">
                                <v-btn density="compact" min-width="32" class="px-0"
                                    @click="removeProducts(props)">
                                    <v-icon icon="mdi-minus"></v-icon>
                                </v-btn>
                                <span class="text-h6 mx-2 mx-md-4">{{ props.amount }}</span>
                                <v-btn density="compact" min-width="32" class="px-0"
                                    @click="addProduct(props)">
                                    <v-icon icon="mdi-plus"></v-icon>
                                </v-btn>
                            </div>
                            <v-btn color="red-darken-1" class="mt-2" @click="deleteProduct(props.id)">
                                Delete
                                <v-icon icon="mdi-delete" class="ml-2"></v-icon>
                            </v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="4" class="d-flex justify-center align-center">
                    <p class="text-h6 text-md-h5">${{ props.price }} {{ props.currency }}</p>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>