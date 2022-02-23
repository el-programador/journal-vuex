<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
    <button @click="goToDayBook" class="btn btn-primary">Hola</button>
    <button @click="goToDayBook" class="btn btn-secondary">paja</button>
    <button @click="goToDayBook" class="btn btn-success">Rob</button>
  
</template>

<script>
export default {
  methods: {
    goToDayBook(){
      this.$router.push({ name: 'no-entry'})

    }
  
}
}
</script>

