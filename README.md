# vue study

## simple use

### html

```html
<!doctype html>

<html lang="jp">
<head>
  <meta charset="utf-8">
  <title>**** vue sample ****</title>
</head>

<body>
  <div id="app">
    {{message}}
    <button type="submit" @click="hello">hello</button>
  </div>
  <script src="https://unpkg.com/vue"></script>
  <script type="text/javascript">
    new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue.js World'
      },
      methods: {
        hello: function () {
          alert('hello world')
        }
      }
    })
  </script>
</body>
</html>
```

### cdn & files

- file <https://jp.vuejs.org/v2/guide/installation.html>
- cdn <https://cdnjs.com/libraries/vue>

### webpack

<https://github.com/vuejs-templates/webpack>