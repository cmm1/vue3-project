
<template>
   <div>
        <p>首页 {{counter}}</p> 
   </div>
</template>

<script lang="ts">
import { useInterval } from '@vueuse/core'
import { defineComponent } from 'vue';

     export default defineComponent({
         name: 'VueUse',
         setup() {
            const { counter, pause, resume } = useInterval(200, { controls: true })
           return {
            counter, pause,resume
           }
         }
     });

</script>
