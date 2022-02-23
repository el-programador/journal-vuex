<template>
    <div class="entry-title d-flex justify-content-between p-2">
       <div>
           <span class="text-success fs-3 fw-bold">22</span>
           <span class="mx-1 fs-3">Febrero</span>
           <span class="mx-2 fs-4 fw-ligth">2022, sabado</span>
       </div>
       <div >
           <button class="btn btn-secondary mx-2">
               <i class="fa fa-upload"></i>
           </button>
            <button class="btn btn-danger mx-2">
               <i class="fa fa-trash"></i>
           </button>
       </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="Qué sucedió hoy?"></textarea>
    </div>

    <FabButtonPlus  icon="fa-save"/>
    
    <img src="@/assets/paja.png" alt="Paja" class="thumbnail">
</template>

<script>
import FabButtonPlus  from '../components/FabButtonPlus.vue'
    export default {
  components: { FabButtonPlus  },
        
    }
</script>

<style lang="scss" scoped>
button {
    border-radius: 50px;
}
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }

}
img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>                