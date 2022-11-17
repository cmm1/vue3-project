<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { useUserStore } from '@/store/user'
defineProps<{ msg: string }>()
 const userStore = useUserStore()
 userStore.updateName('李四')
</script>
<template>
      <HelloWorld msg="Vite + Vue" />
    <!-- <p>{{userStore.name}}</p> -->
 </template>
 