<template>
  <div id="app">
    <select v-model="year"><option v-for="year in years" :value="year">{{year}}</option></select>/
    <select v-model="month"><option v-for="month in monthes" :value="month">{{month}}</option></select>/
    <select v-model="day"><option v-for="day in days" :value="day">{{day}}</option></select>
    <select v-model="hour"><option v-for="hour in hours" :value="hour">{{hour}}</option></select>:
    <select v-model="minute"><option v-for="minute in minutes" :value="minute">{{minute}}</option></select>
  </div>
</template>

<script>
let createArray = (start, end, increment = 1) => {
  let array = []
  let check = increment > 0
    ? (i) => { return i <= end }
    : (i) => { return i >= end }
  for (let i = start; check(i); i = i + increment) {
    array.push(i)
  }
  return array
}

export default {
  name: 'app',
  props: [
    'sync'
  ],
  data: function () {
    return {
      debug: true,
      // consts
      years: createArray(2050, 1951, -1),
      monthes: createArray(1, 12),
      days: createArray(1, 31),
      hours: createArray(0, 23),
      minutes: createArray(0, 59),
      // value
      year: 1951,
      month: 1,
      day: 1,
      hour: 0,
      minute: 0,
      // methods
      isEmit: false
    }
  },
  created: function () {
    if (!this.serFromSync()) return

    // set & check syntax.
    this.isEmit = this.isSameValueRet(this.sync)
    if (!this.isEmit && this.debug) {
      console.log('ERROR::syntax error. not create same value.')
    }
  },
  computed: {
    ret: function () {
      return this.createRet()
    }
  },
  methods: {
    serFromSync: function () {
      // check sync value & reset
      if (typeof this.sync !== 'string' || this.sync.length !== 12) {
        this.resetEmit()
        return false
      }

      let d = new Date(this.sync.substr(0, 4) + '-' +
        this.sync.substr(4, 2) + '-' +
        this.sync.substr(6, 2) + ' ' +
        this.sync.substr(8, 2) + ':' +
        this.sync.substr(10, 2))

      if (isNaN(d.getTime())) {
        this.resetEmit()
        return false
      }

      this.year = d.getFullYear()
      this.month = d.getMonth() + 1
      this.day = d.getDate()
      this.hour = d.getHours()
      this.minute = d.getMinutes()

      return true
    },
    resetEmit: function () {
      this.$emit('update:sync', this.yyyymmddhhmm(new Date()))
    },
    createRet: function () {
      let d = new Date(this.year + '-' + this.month + '-' + this.day +
         ' ' + this.hour + ':' + this.minute)
      return this.yyyymmddhhmm(d)
    },
    isSameValueRet: function (v) {
      return v === this.createRet()
    },
    yyyymmddhhmm: function (d) {
      return d.getFullYear() +
       ('0' + (d.getMonth() + 1)).slice(-2) +
       ('0' + d.getDate()).slice(-2) +
       ('0' + d.getHours()).slice(-2) +
       ('0' + d.getMinutes()).slice(-2)
    }
  },
  watch: {
    sync: function () {
      this.serFromSync()
    },
    ret: function (ret) {
      if (this.isEmit && this.sync !== ret) {
        this.$emit('update:sync', ret)
      }
    }
  }
}
</script>

<style>
</style>
