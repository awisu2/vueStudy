Vue.component('computed', {
  template: `
    <div>
      <input type="text" v-model="a"> + 
      <input type="text" v-model="b"> = 
      {{ c }}
    </div>
    `,
  data: function(){
    return {
      a: 1,
      b: 1,
    }
  },
  computed: {
    c: function() {
      return Number(this.a) + Number(this.b)
    }
  }
})

var vm = new Vue({
  // オプション
  el: '#example',
  data: {
    // text
    message: 'hello Vue!!',
    info: '',
    input: '',
  },
  filters: {
  },
  computed: {
    reversedMessage: function () {
      // `this` は vm インスタンスを指します
      return this.message.split('').reverse().join('')
    },
  },
  watch:{
    input: _.debounce(
      function(){
        this.info = new Date().getTime()
      }
      , 500),
  }
})
