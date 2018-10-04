new Vue({
  el: '#exercise',
  data: {  	
  	isEffect: false,
  	redClass: 'red',
  	fontClass: 'font',
  	classValue: 'shrink',
  	classValue2: 'box1',
  	enableFlag: false,
  	styleValue: '',
  	progressColor: 'red'

  },
  methods: {
    startEffect: function() {
       this.isEffect = !this.isEffect;
    },

    startProgress: function(){
    	var vm = this;
    	setTimeout(function(){
    		vm.progressColor = 'green';
    	},	2000);
    }

  },
  computed: {
  	progressbar: function() {
  	  return {
  	  	'background-color': this.progressColor,
  	  	width: '300px',
  	  	height: '10px',
  	  }
  	}
  }
});
