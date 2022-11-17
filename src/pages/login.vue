<script setup lang="ts">

import { useUserStore } from '@/store/user'
defineProps<{ msg: string }>()
 const userStore = useUserStore()
 userStore.updateName('李四')
</script>
<template>
    <p>{{userStore.name}}</p>
 </template>
 