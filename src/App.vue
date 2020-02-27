<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
.parent{
  height: 200px;
  background-color: yellow;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
}
.child{
  width: 100px;
  background-color: red;
  margin: 10px 10px;
  text-align: center;
}

</style>
