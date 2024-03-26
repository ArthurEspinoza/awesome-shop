<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "../store/cart";
import CartItem from "../components/CartItem.vue";
const useCart = useCartStore();
const { cart } = storeToRefs(useCart);
</script>
<template>
    <div class="container mt-5">
        <div class="cart__container">
            <h4 class="text-h4 text-center">Your cart</h4>
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