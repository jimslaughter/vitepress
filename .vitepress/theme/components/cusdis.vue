<template>
  <div id="cusdis_thread"
    :data-host="host"
    :data-app-id="appId"
    :data-page-id="pageId"
    :data-page-url="pageUrl"
    :data-page-title="pageTitle"
  ></div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  appId: {
    type: String,
    required: true
  },
  pageId: String,
  pageUrl: String,
  pageTitle: String,
  host: {
    type: String,
    default: 'https://cusdis.com'
  }
})

onMounted(() => {
  // Load Cusdis script
  const script = document.createElement('script')
  script.src = 'https://cusdis.com/js/cusdis.es.js'
  script.async = true
  document.body.appendChild(script)
})
</script>