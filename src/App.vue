<script setup>
import {RouterView} from "vue-router";
import {ref} from "vue";
import { storeToRefs } from "pinia";
import {useCartStore} from "./store/cart";

const useCart = useCartStore();
const {cartLength} = storeToRefs(useCart);
const drawer = ref(false);

</script>

<template>
  <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
        color="teal"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Awesome Shop</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn to="/cart">
          <span class="text-h6">{{ cartLength }}</span>
          <v-icon icon="mdi-cart-outline" class="text-h6 ml-2"></v-icon>
        </v-btn>

      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list-item link to="/">
          <template v-slot:prepend>
            <v-icon icon="mdi-list-box-outline"></v-icon>
          </template>
          <v-list-item-title>Products</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/cart">
          <template v-slot:prepend>
            <v-icon icon="mdi-cart"></v-icon>
          </template>
          <v-list-item-title>Cart</v-list-item-title>
        </v-list-item>
      </v-navigation-drawer>

      <v-main style="height: 500px;">
        <RouterView/>
      </v-main>
    </v-layout>
</template>

