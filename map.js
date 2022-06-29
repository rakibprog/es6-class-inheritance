//map
// const numbers = [10,20,30];
// const result = numbers.map(x=> x*2);
// console.log(result);

// map 

const products = [
    {name:'iphone',price:500,ram:'2gb'},
    {name:'htc',price:200,ram:'2gb'},
    {name:'nokia',price:300,ram:'2gb'},
    {name:'xiaomi',price:400,ram:'2gb'},
    {name:'vivo',price:600,ram:'2gb'},
    {name:'oktel',price:700,ram:'2gb'},
    
];

const result = products.map(product => product);
console.log(result);
 products.forEach(element => console.log(element));