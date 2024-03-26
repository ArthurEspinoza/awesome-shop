import {ref, computed} from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', () => {
    const cart = ref([]);

    // We get the exact amount of elements in the cart
    const cartLength = computed(() => {
        return cart.value.length;
    })

    // We get the total of all the prices multiplied by its amount
    const total = computed(() => {
        let total = 0;
        cart.value.forEach(item => {
            total += parseFloat(item.data.price) * item.amount
        })
        return total;
    })
    // We add a product to the cart
    const addProduct = (product) => {
        let matchIndex = cart.value.findIndex(item => item.data.id === product.id);
        // We check if that item is not already on the cart, if it's not it will add it with amount of 1
        if(matchIndex === -1){
            cart.value.push({
                data: product,
                amount: 1
            });
        }else{ // In case the item is in the cart, it will just modify its amount value
            cart.value = cart.value.map(item => {
                if(item.data.id === product.id){
                    return {...item, amount: item.amount + 1}
                }
                return item;
            })
        }
    }
    // We reduce the amount the of product
    const removeProducts = (product) => {
        let index = cart.value.findIndex(item => item.data.id === product.id);
        let item = cart.value[index];
        // If the product's amount is 1 then we proceed to delete them from the cart
        if(item.amount === 1){
            cart.value = cart.value.filter(item => item.data.id !== product.id)
        }else{ // If the amount is greater we just reduce the amount value
            cart.value = cart.value.map(item => {
                if(item.data.id === product.id){
                    return {
                        ...item,
                        amount: item.amount - 1
                    }
                }
                return item;
            })
        }
    }
    // Delete fully a product in the cart no matter the amount
    const deleteProduct = (id) => {
        cart.value = cart.value.filter(item => item.data.id !== id);
    }
    // Clear the cart once the checkout is submitted
    const clearCart = () => {
        cart.value = [];
    }
    return {
        cart,
        cartLength,
        total,
        addProduct,
        removeProducts,
        deleteProduct,
        clearCart
    }
})