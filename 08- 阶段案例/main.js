const app = new Vue({
  el: '#app',
  data:{
    books: [
      {
        id: 1,
        name: 'java思想',
        date: '2021-01',
        price: 88.28,
        count : 2,
      },
      {
        id: 2,
        name: 'java思想2',
        date: '2021-01',
        price: 88.22,
        count : 2,
      },
      {
        id: 3,
        name: 'java思想3',
        date: '2021-01',
        price: 82.91,
        count : 2,
      },
      {
        id: 4,
        name: 'java思想4',
        date: '2021-01',
        price: 89.21,
        count : 2,
      },
    ],
  },
  methods: {
      getFinalPrice(price){
        return '¥' + price.toFixed(2);
      },

    increment(index) {
        console.log("increment"+":"+index)
        this.books[index].count++;
      },

    decrement(index){
        console.log("decrement"+":"+index)
        this.books[index].count--;
     },
    removeBook(index){
        this.books.splice(index, 1)
    }
  },
  computed: {
    totalPrice(){
      /*let adtotal = 0.00;
      for (let i=0 ; i < this.books.length; i++){
        adtotal+= this.books[i].price * this.books[i].count;
      }
      return adtotal;*/
     /* for (let i in this.books){
        console.log(i)
      }
      return 100.00;*/
      let adtotal = 0.00;
      for (let item of this.books){
        adtotal+= item.price*item.count;
      }
      return adtotal;
    },
  },
  filters: {
    showPrice(price){
      return '¥' + price.toFixed(2)
    }
  }
})

const book =  [1,2,3,4,5,6,7];
let total = book.filter(function (n){
   return n < 4;
}).map(function (n){
   return n*9;
}).reduce(function (prevalue, n){
    return prevalue + n;
}, 0);
console.log(total);

let tol = book.filter(n => n>2).map(n => n*9).reduce(((previousValue, currentValue) => previousValue+currentValue), 0);
console.log(tol)