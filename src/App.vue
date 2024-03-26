<script setup>
import {RouterView} from "vue-router";
import {ref} from "vue";
const drawer = ref(false);

</script>

<template>
  <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Awesome Shop</v-toolbar-title>

        <v-spacer></v-spacer>

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

