<template>
  <div class="p-4">
    <h1>Users</h1>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div>
      <UserCard 
        v-for="user in data" 
        :key="user.id" 
        :data="user"
      />
    </div>
    <div>
      <button 
        @click="refresh()" 
        :disabled="pending"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {{ pending ? 'Loading...' : 'Reload' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGetUsers } from '~/composables/get-users';

const { data, error, pending, refresh } = await useGetUsers()

</script>
