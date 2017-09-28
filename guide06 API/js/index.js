Vue.config.productionTip = false;

Vue.config.errorHandler = function (err, vm, info) {
  console.log(err, vm, info);
}

var vm = new Vue({
  el: "#example",
  data: {
  },
  methods: {
  },
  components: {
  }
})
