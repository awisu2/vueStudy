var vm = new Vue({
  // オプション
  el: '#example',
  data: {
    // text
    msg: "hello Vue!!",

    // rawHtml
    rawHtml: "<p style='color: red;'>rawHtml</p>",

    // bind
    dynamicId: 'dynamicId',
    isButtonDisabled: true,
    href: "https://jp.vuejs.org/v2/guide/syntax.html#生の-HTML",

    // v- function
    isDisplay: true,

    // v-on
    onClick: function(e) {
      console.log("onClick", e);
    },
    onSubmit: function(e) {
      console.log("onSubmit", e);
    },
    filter: "ABC",
  },
  filters: {
    lawerCase: function(t) {
      return t.toLowerCase();
    },
    addStr: function(t, add) {
      return t + add;
    },
  }
})
vm.msg = "hello Vue!! 2";


