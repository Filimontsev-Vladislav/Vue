
var app = new Vue({
  el: '#app',
  data: {
    message: 'Привет, Vue!',
	mystyleCSS:''
  },
  methods:{
	  changeText(){
		  this.message = 'Какой-то новый текст'
	  }
  }
})


var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
  }
})


var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Изучить JavaScript' },
      { text: 'Изучить Vue' },
      { text: 'Создать что-нибудь классное' }
    ]
  }
})
