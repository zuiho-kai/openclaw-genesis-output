<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { computed } from 'vue'
import ParticlesBg from './components/ParticlesBg.vue'
import ReadingProgress from './components/ReadingProgress.vue'
import ImageZoom from './components/ImageZoom.vue'
import MusicPlayer from './components/MusicPlayer.vue'
import Live2D from './components/Live2D.vue'

const { Layout } = DefaultTheme
const route = useRoute()
</script>

<template>
  <Layout>
    <template #layout-top>
      <ReadingProgress />
    </template>
  </Layout>
  <ParticlesBg id="tsparticles" />
  <Live2D />
  <ImageZoom />
  <MusicPlayer />
</template>
