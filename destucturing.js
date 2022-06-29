// // Destructuring 
const phone = {name:'xiami mia2',price:400,brand:'china xaiomi co',camera:'50 megapiel',ram:'2gb'}
const {name,price,brand,camera,ram} = phone;
console.log(name,price,camera,ram);

//nested object destructuring

const products = {shirt:'full shirt',price:500, 

     genji:{price:500,brand:'easy',size:'xl',

        pants:{prices:200,brands:'easy',size:'xxl'}
    
    }

}

// const {size,prices}  = products?.halpent?.genji?.pants;
// console.log(size,prices);

// array destructuring 

 const [a,b]  = [50,60];
 console.log(a,b);
// optional chaining 
 const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
  const dogName = adventurer.dog?.name;
  console.log(dogName);