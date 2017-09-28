var data = { a: 1 }
var vm = new Vue({
  // オプション
  el: '#example',
  data: data,
  created: function () {
    // `this` は vm インスタンスを指します
    console.log('a is: ' + this.a)
  }
})
data.a =  10

vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true

// check change value
vm.$watch('a', function (newVal, oldVal) {
  console.log(newVal, oldVal)
})