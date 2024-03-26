<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "../store/cart";
import CartItem from "../components/CartItem.vue";
const useCart = useCartStore();
const { cart, total } = storeToRefs(useCart);
</script>
<template>
    <div class="container mt-5">
        <div class="cart__container">
            <h5 class="text-h5 text-center">Your cart</h5>
            <div class="d-flex justify-space-between align-center mb-3">
                <h4 class="text-h4">Total: ${{ total }}</h4>
                <v-btn color="green" rounded="xl">
                    <v-icon icon="mdi-checkbox-marked-outline"></v-icon>
                    Checkout my cart
                </v-btn>
            </div>
            <div class="cart__items">
               <CartItem
                    v-for="item in cart" :key="item.data.id"
                    :name="item.data.name"
                    :currency="item.data.currency"
                    :price="item.data.price"
                    :id="item.data.id"
                    :images="item.data.images"
                    :amount="item.amount"
               /> 
            </div>
        </div>
    </div>
</template>