class Greeter {
   constructor(message) {
        this.message = message;
   }
      
   greet() {
       console.log('Now ' + this.message);
   }
};
    
var greeter = new Greeter('Using ECMA 6');
greeter.greet();
