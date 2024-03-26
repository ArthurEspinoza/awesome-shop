<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useCartStore } from "../store/cart";
import CartItem from "../components/CartItem.vue";

const showDialog = ref(false);
const useCart = useCartStore();
const { cart, total } = storeToRefs(useCart);
const {clearCart} = useCart;
const router = useRouter();
const goHome = () => {
    if(showDialog) showDialog.value = false;
    clearCart();
    router.push({name: "products"});
}
</script>
<template>
    <div class="container mt-5">
        <div class="cart__container" v-if="cart.length > 0">
            <h5 class="text-h5 text-center">Your cart</h5>
            <div class="d-flex justify-space-between align-center mb-3">
                <h4 class="text-h4">Total: ${{ total }}</h4>
                <v-btn color="teal-lighten-1" rounded="xl" @click="showDialog = !showDialog">
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
        <div v-else>
            <h4 class="text-h4 text-center">You have no items in your cart</h4>
        </div>
        <v-dialog
            v-model="showDialog"
            width="auto"
        >
            <v-card
                max-width="400"
            >
                <v-card-item>
                    <v-card-title>Your order is ready</v-card-title>
                    <v-card-subtitle>Please proceed with the payment page</v-card-subtitle>
                </v-card-item>
                <v-card-text>
                    <v-img
                    class="mx-auto"
                        cover
                        width="200"
                        height="200"
                        src="https://media.istockphoto.com/id/1416145560/vector/green-circle-with-green-tick-flat-ok-sticker-icon-green-check-mark-icon-tick-symbol-in-green.jpg?s=612x612&w=0&k=20&c=Uh3KS7c_o5QmrfisyV-aRzDUNqtAM7QUVJrc8bniVsQ="></v-img>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        text="Go Shopping"
                        @click="goHome"
                        color="teal-lighten-1"
                    ></v-btn>
                    <v-btn
                        class="ms-auto"
                        text="Go Payment"
                        variant="tonal"
                        @click="goHome"
                        color="teal-darken-2"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>