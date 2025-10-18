<template>
  <ClientOnly>
    <div class="cusdis-wrapper">
      <hr class="cusdis-divider" />
      <h3 class="cusdis-heading">Comments</h3>
      <div id="cusdis_thread"
        :data-host="host"
        :data-app-id="appId"
        :data-page-id="pageId"
        :data-page-url="pageUrl"
        :data-page-title="pageTitle"
      ></div>
    </div>
  </ClientOnly>
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
  const script = document.createElement('script')
  script.src = 'https://cusdis.com/js/cusdis.es.js'
  script.async = true
  document.body.appendChild(script)
})
</script>

<style scoped>
.cusdis-wrapper {
  margin-top: 3rem;
}

.cusdis-divider {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin-bottom: 1.5rem;
}

.cusdis-heading {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
}

#cusdis_thread {
  min-height: 8500px;
}

#cusdis_thread iframe {
  min-height: 850px !important;
  height: auto !important;
}
</style>