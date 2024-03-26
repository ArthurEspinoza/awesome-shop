import {ref, computed} from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', () => {
    const cart = ref([]);
    const total = computed(() => {
        let total = 0;
        cart.value.forEach(item => {
            total += parseFloat(item.data.price) * item.amount
        })
        return total;
    })
    const addProduct = (product) => {
        let matchIndex = cart.value.findIndex(item => item.data.id === product.id);
        if(matchIndex === -1){
            cart.value.push({
                data: product,
                amount: 1
            });
        }else{
            cart.value = cart.value.map(item => {
                if(item.data.id === product.id){
                    return {...item, amount: item.amount + 1}
                }
                return item;
            })
        }
    }
    const removeProducts = (product) => {
        let index = cart.value.findIndex(item => item.data.id === product.id);
        let item = cart.value[index];
        if(item.amount === 1){
            cart.value = cart.value.filter(item => item.data.id !== product.id)
        }else{
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
    const deleteProduct = (id) => {
        cart.value = cart.value.filter(item => item.data.id !== id);
    }
    return {
        cart,
        total,
        addProduct,
        removeProducts,
        deleteProduct
    }
})