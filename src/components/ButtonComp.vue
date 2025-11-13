<script setup>
    import { ref, } from 'vue'
    const count = ref(0)

    function increment() {
        count.value = count.value + 1
    }
</script>

<template>
    <button @click="increment">{{count}}</button>
</template>
