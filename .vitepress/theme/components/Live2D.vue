<script setup>
import { onMounted } from 'vue'

function loadCSS(href) {
  if (document.querySelector(`link[href="${href}"]`)) return
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return }
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.body.appendChild(script)
  })
}

onMounted(async () => {
  if (document.getElementById('pio-container')) return

  const base = '/openclaw-genesis-output'
  loadCSS(`${base}/live2d/lib/pio.css`)

  await loadScript(`${base}/live2d/lib/TweenLite.js`)
  await loadScript(`${base}/live2d/lib/live2dcubismcore.min.js`)
  await loadScript(`${base}/live2d/lib/pixi.min.js`)
  await loadScript(`${base}/live2d/lib/cubism4.min.js`)
  await loadScript(`${base}/live2d/lib/pio.js`)
  await loadScript(`${base}/live2d/lib/pio_sdk4.js`)

  if (typeof _pio_initialize_pixi === 'function') {
    _pio_initialize_pixi()
  }

  await loadScript(`${base}/live2d/lib/load.js?v=2`)
})
</script>

<template>
  <div />
</template>

<style>
#pio-container {
  z-index: 50;
}
#pio {
  height: 240px;
}
</style>
