/* eslint-disable vue/multi-word-component-names */

<template>
   <div class="entry-container mb-3 pointer p-2"
   @click="$router.push({ name: 'entry', params: { id:10} })"
   >
       <div class="entry-title d-flex">
           <span class="text-success fs-5 fw-bold">22</span>
           <span class="mx-1 fs-5">Febrero</span>
           <span class="mx-2 fw-light">2022</span>
       </div>
       <div class="entry-dscription">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur harum magnam nostrum distinctio consequatur, mollitia quasi omnis temporibus optio, dolor cum blanditiis nobis commodi at expedita dolorum perferendis nulla dolore!
           Natus, ex! Possimus tenetur at recusandae labore dignissimos ipsum ullam excepturi quae eveniet inventore quod ipsam pariatur voluptatum fugit voluptate, officiis quas debitis repellendus laboriosam aliquid corporis aut similique repellat!
           
       </div>

   </div>
</template>

<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
.entry-container {
    background: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 30);
         transition: 0.2s all ease-in;
    }
    .entry-dscription{
        font-size: 12px;
    }
}
    
</style>
