

console.log("Script 2");
//object literal
let dog={
    name:"Tito",
    age:3,
    run:function(){
        console.log(this.name+" is running");
    }

}
console.log(dog);


console.log("Script 2");
//object literal
let cat={
    name:"Simba",
    age:8,
    run:function(){
        console.log(this.name+" is running");
    }

}
console.log(cat);
//object constructor
function Animal(n,a,o){
    this.name=n;
    this.age=a;
    this.owner=o;
}
let dog1=new Animal("Sam", 38,"Tony");
let dog2=new Animal("Butch", 36,"Karen");
console.log(dog1,dog2);

