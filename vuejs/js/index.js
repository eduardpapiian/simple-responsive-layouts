new Vue({
  el: '#app',
  data: {
    widthCSS: '',
    window: {
      width: 0,
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      if (this.window.width <= 400){
        this.widthCSS = 'mobile';
      }else{
        this.widthCSS = 'notebook';
      }
    },
  }
});
