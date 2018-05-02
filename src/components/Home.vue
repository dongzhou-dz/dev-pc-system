<template>
  <div id="Home">
      <h2>{{mess}}</h2>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                mess:"你是一个好人!"
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>