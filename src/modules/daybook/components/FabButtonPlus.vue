<template>
    <button class="btn btn-primary">
        <i class="fa fa-2x"
                   :class="icon">
                    </i>
    </button>
</template>
props: {
    icon: {
        type:String
    }
}
<script>
export default {
   props: {
    icon: {
        type:String,
        default: 'fa-plus'
    }
}
}
</script>
<style lang="scss" scoped>
button {
    border-radius: 50%;
    bottom: 15px;
    height: 60px;
    position: fixed;
    right: 15px;
    width: 60px;
  
}
</style>