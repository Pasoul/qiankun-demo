<template>
   <div>
     page about
     <div @click="goBack">go back</div>
   </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
}
</script>
<style scoped>
</style>