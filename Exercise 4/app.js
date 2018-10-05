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
  	progressColor: 'red',
  	myStyle: {
  		width: '100px',
  		height: '150px',
  		backgroundColor: 'gray'
  	},
  	progressBar : {
  		width: '0px',
  		backgroundColor: 'red'
  	}

  },
  methods: {
    startEffect: function() {
       var vm = this
       setInterval(function() {
       	 vm.isEffect = !vm.isEffect;
       }, 1000);
    },

    startProgress: function(){
    	var vm = this;
    	setTimeout(function(){
    		vm.progressColor = 'green';
    	},	2000);
    },
    startProgress2: function(){
    	var vm = this;
        var width = 0;
    	var interval = setInterval(function(){
          width += 10;
          vm.progressBar.width = width + 'px'  
    	}, 500);

    	if(width == 300) {
    		clearInterval(interval);
    	}
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
