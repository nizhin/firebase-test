<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import flippableCard from './flippableCard.vue'

import { ref } from 'vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')

const isFlipped = ref(true)
</script>
<template>
  <flippableCard :isFlipped="isFlipped" @flip="isFlipped = true" @unflip="isFlipped = false"></flippableCard>
</template>
