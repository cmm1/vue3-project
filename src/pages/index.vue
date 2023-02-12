
<template>
   <div id="app">
        <h1>{{counter}}</h1> 
        <button @click="increase">+1</button>
   </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';

     export default defineComponent({
         name: 'App',
     //     data(){
     //           return {
     //                counter : 0
     //           };
     //     },  
     //     methods:{
     //      increase(){
     //           this.counter++
     //      }
     //     },  
     setup(){
          const counter = ref(0) ;
          const increase = ()=>{
               counter.value ++;
          }
          return{
               counter,
               increase
          }
     }
     });

</script>
