<template>
  <div id="app">
    <timeSet :sync.sync="date"></timeSet>
    {{date}}::
    <input type="text" v-model="date">
    <timeSet :sync.sync="date2"></timeSet>
    {{date2}}::
    <input type="text" v-model="date2">
  </div>
</template>

<script>
import TimeSet from '@/components/TimeSet'
export default {
  name: 'app',
  components: {
    timeSet: TimeSet
  },
  data: function () {
    return {
      date: '200004010000',
      date2: '205012312359'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
