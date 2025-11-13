<script setup>
//what is the state?

import { ref, defineProps } from 'vue'

defineProps({isFlipped: Boolean})
const emit = defineEmits(['flip','unflip'])
</script>


<template>
<div @click="$emit('unflip')" v-if="isFlipped" class="card">front</div>
<div @click="$emit('flip')" v-else class="card">back</div>


</template>

<style scoped>

div {
    width:10rem;
    height: 14rem;
    border-radius: 1rem;
    background-color: bisque;
    color: black;
}
</style>