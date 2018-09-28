new Vue({
  el: '#exercise',
  data: {  	
  	isEffect: false,
  	redClass: 'red',
  	fontClass: 'font',
  	classValue: 'shrink'

  },
  methods: {
    startEffect: function() {
       this.isEffect = !this.isEffect;
    }

  }
});
