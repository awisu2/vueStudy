let template = `
<div id="app">
  <section>
    <button type="input" @click="onClick">click event</button>
    <p>{{text}}</p>
  </section>
</div>
`

var app = new Vue({
  el: 'app',
  template: template,
  data: {
    count: 0
  },
  computed: {
    text: function () {
      return "count: " + this.count
    }
  },
  methods: {
    onClick: function (name) {
      this.count++
    }
  }
})
