<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay nada Selecionado</h1>
    </div>
        <Fab-boton />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

    export default {
       components : {
           FabBoton: defineAsyncComponent(()=>import('@/modules/daybook/components/FabButtonPlus.vue'))
            
       } 
    }
</script>

  
<style lang="scss" scoped>

div {
    height: 100%;
}

</style>