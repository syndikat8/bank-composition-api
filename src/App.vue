<template>
  <component
      v-if="layout"
      :is="`${layout}Layout`"
  />
</template>

<script>
import {useRoute} from 'vue-router'
import {computed} from "vue";

import MainLayout from "@/layout/MainLayout"
import AuthLayout from "@/layout/AuthLayout"

export default {
  components: {
    MainLayout,
    AuthLayout
  },
  setup() {
    const router = useRoute()

    const layout = computed(() => router.meta.layout)

    return {
      layout
    }
  }
}
</script>
