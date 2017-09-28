Vue.component('component', {
  template: '<div @click="method">count:{{count}}</div>',
  props: {
    myCount: {
      type: Number,
      default: 100
    },
  },
  data: function() {
    return {
      count: this.myCount,
    }
  },
  methods: {
    method: function(){
      this.count = this.count + 1;
      this.$emit('childmethod');
    },
  },
})

Vue.component('currency-input', {
  template: '\
    <span>\
      $\
      <input\
        ref="input"\
        :value="value"\
        @input="updateValue($event.target.value)">\
    </span>\
  ',
  props: ['value'],
  methods: {
    // 値を直接的に更新する代わりに、このメソッドを使用して input の
    // 値の整形と値に対する制約が行われる
    updateValue: function (value) {
      var formattedValue = value
        // 両端のスペースを削除
        .trim()
        // 小数点2桁以下まで短縮
        .slice(
          0,
          value.indexOf('.') === -1
            ? value.length
            : value.indexOf('.') + 3
        )
      // 値が既に正規化されていないならば、
      // 手動で適合するように上書き
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue
      }
      // input イベントを通して数値を発行する
      this.$emit('input', Number(formattedValue))
    }
  }
})

var bus = new Vue();
Vue.component('bus', {
  template: '<div @click="increment">local:{{local}},global:{{global}}</div>',
  data: function(){
    return {
      local: 0,
      global: 0,
    }
  },
  created: function(){
    bus.$on("busMethod", (globalValue) => {
      this.global = globalValue;
    });
  },
  methods: {
    increment: function(){
      this.local = this.local + 1;
      this.global = this.global + 1;
      bus.$emit('busMethod', this.global);
    },
  }
});

Vue.component('slot-one', {
  template: '\
    <div>\
      <slot>\
        This will only be displayed if there is no content\
        to be distributed.\
      </slot>\
    </div>\
  '
})
Vue.component('slot-name', {
  template: '\
    <div>\
      <slot name="a"></slot>\
      <slot name="b"></slot>\
    </div>\
  '
})

Vue.component('slot-none', {
  template: '<div>slot none origin</div>'
})

Vue.component('scope-slot', {
  template: '\
    <div class="child">\
      <slot text="hello from child"></slot>\
    </div>\
  '
})

let local = {
  template: "<div>local component</div>"
}

Vue.component('InlineComponent', {
  template: '<div>inline</div>',
})

var vm = new Vue({
  el: "#example",
  data: {
    foo: 3,
    dynamic: 'dynamic02',
    dynamic03: {
      template: '<p>dumamic03</p>'
    },
  },
  methods: {
    childCallback: function() {
      this.myCount = 0;
      console.log("childCallback");
    },
    inputCallback: function(v) {
      console.log(v);
    },
    dynamicMethodCallback: function() {
      this.dynamic = (this.dynamic == "dynamic01") ? "dynamic02": "dynamic01";
    },
  },
  components: {
    local: local,
    dynamic01: {
      template: '<p @click="changeDynamic">dynamic01 : click me</p>',
      methods: {
        changeDynamic: function() {
          this.$emit('dynamicmethod');
        }
      }
    },
    dynamic02: {
      template: '<p @click="changeDynamic">dynamic02 : click me</p>',
      methods: {
        changeDynamic: function() {
          this.$emit('dynamicmethod');
        }
      }
    },
  }
})
