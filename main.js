// Vue.component('link-button',
// {
//   template : `<a v-bind:href="url"><button>{{text}}</button></a>`,
//   props: ['url', 'text'],
// })

Vue.component('jumbotron',
{
  template : `<div class="jumbotron">
  <h1>{{text}}</h1>
  <p>{{headertext}}</p>
  </div>`,
props: ['text', 'headertext'],


})


var mainVM = new Vue({
  el : '#app',
  data : {
    url : '',
    headertext : 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
    text : 'Hello, World!',
  },
})
