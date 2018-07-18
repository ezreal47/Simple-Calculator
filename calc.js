let app = new Vue({
  el: '#app',
  data: {
    num: '',
    numTwo: '',
    operator: null,
    _oper: null,
    result: '0',
    display: 0,
    count: 0
  },

  methods: {
    setNumber(num) {
      if(this.operator == null){
        this.num += num
        this.display = this.num
      }else{
        this.numTwo += num
        this.display = this.numTwo
      }
    },
    setOperator(oper) {
      this.display = 0
      this.operator = oper
      this.count += 1
      if(this.count == 1){
        this._oper = this.operator  
      }
      if(this.count == 2){
        this.calc(this._oper)
        this._oper = this.operator
        this.count = 1
      } 
    },

    calc(_oper = this.operator) {
      switch(_oper) {
        case '+':
          this.result = Number(this.num) + Number(this.numTwo)
          break;
        case '-':
          this.result = Number(this.num) - Number(this.numTwo)
          break;
        case '*':
          this.result = Number(this.num) * Number(this.numTwo)
          break;
        case '/':
          this.result = Number(this.num) / Number(this.numTwo)
          break;      
      }
     
      this.num = this.result
      this.numTwo = ''
    },

    setDisplay() {
      this.calc()
      this.display = this.result
    },

    reset() {
      this.display = 0
      this.num = ''
      this.numTwo = ''
      this.result = '0'
      this.count = 0
      this.operator = null
      this._oper = null
    },

    load() {
      window.history.go(0)
    }
  }
})