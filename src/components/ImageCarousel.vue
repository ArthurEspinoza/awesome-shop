<script setup>
const props = defineProps({
    images:{
        type: Array,
        default: []
    }
})
</script>
<template>
    <v-carousel v-if="props.images && props.images.length > 0"
        height="250">
        <v-carousel-item
            v-for="image in props.images" :key="image.id">
            <v-img
                :src="image.url"
                height="250"
                cover
            ></v-img>
        </v-carousel-item>
    </v-carousel>
</template>