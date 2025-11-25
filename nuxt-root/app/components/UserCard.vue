<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-gray-100 mb-4">
    <p class="text-gray-700 text-base">
      Username: {{ data.name }}
    </p>
    <p class="text-gray-700 text-base">
      Email: {{ data.email }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@core/types';

defineProps<{
  data: User,
}>()

</script>