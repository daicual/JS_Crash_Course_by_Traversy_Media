//alert('Hello world');
//console.log('Hello World Console');
//console.error('This is an error!');
//console.warn('This is an warning!');
//const age = 24;
//const name = 'Darío';
//const rating = 9.5;
//const isCool = true;
//const x = null;
//const y = undefined;
//let z;
//console.log("My name is "+name+ "and I am " + age + " years old."+isCool+rating);
//console.log(typeof isCool);
//console.log(typeof x); // This is bogis, its wrong by JS nature
//console.log(typeof z);

//These statements are the same
//console.log("My name is "+name+ " and I am " + age + " years old.");
//console.log(`My name is ${name} and I am ${age} years old.`);
//const hello = `My name is ${name} and I am ${age} years old.`;
//onsole.log(hello);
//

//const numbers = new Array(1,2,3,4,5);
//console.log(numbers);
//const fruits = ['apples','oranges','pears'];
//console.log(fruits);

//add one to the end(currently 3 is the next empty position in the array)
//fruits[3] ='grapes';
//console.log(fruits);
//fruits.push('mangoes');
//console.log(fruits);
//add at the beginning
//fruits.unshift('strawberries');
//console.log(fruits);
//take the last one off
//fruits.pop();
//console.log(fruits);

//to see if something is in the array
//console.log(Array.isArray(fruits));
//to know the position of an item
//console.log(fruits.indexOf('pears'));
//console.log(fruits.indexOf('non existing fruit'));

//const person = {
//    name: 'Dario',
//    lastName:'Aícua Ubierna',
//   age: 30,
//    hobbies: ['music', 'coding', 'sports', 'gaming'],
//    address:{
//        street: 'IMG Street',
//        city: 'IMG City',
//        state: 'ES'
//    }
//}
//console.log(person);
//console.log(person.name, person.lastName);
//console.log(`${person.name} ${person.lastName} lives in ${person.address.city} and one of his hobbies is ${person.hobbies[0]}`);
//console.log(`${person.name, person.lastName} lives in ${person.address.city}`); //This doesn't work
//Add properties to object
//email still not created
//console.log(`${person.name} ${person.lastName} lives in ${person.address.city} and one of his hobbies is ${person.hobbies[0]}. His email is ${person.email}`);
//create email property
//person.email='email@domain.com';
//email created
//console.log(`${person.name} ${person.lastName} lives in ${person.address.city} and one of his hobbies is ${person.hobbies[0]}. His email is ${person.email}`);
const todos = [
  {
    id: 1,
    text: "Listen to music",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Do some sports",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Play some videogames",
    isCompleted: false,
  },
];
//console.log(`Todo number ${todos[0].id}: ${todos[0].text}. Completed? ${todos[0].isCompleted}.`);
//console.log(todos);
//console.log(todos[1].text);

//Convert Array to JSON
//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);

//FOR loops
//for (let i=0;i<todos.length;i++){
//    //console.log(i);
//    console.log(`Todo number ${todos[i].id}: ${todos[i].text}. Completed? ${todos[i].isCompleted}.`);
//}
//this is the same of the above
//for (let todo of todos){
//console.log(i);
//    console.log(`Todo number ${todo.id}: ${todo.text}. Completed? ${todo.isCompleted}.`);
//}

//WHILE loops
//let contador = 0;
//while(contador < todos.length){
//    console.log(`Todo number ${todos[contador].id}: ${todos[contador].text}. Completed? ${todos[contador].isCompleted}.`);
//    contador++;
//}

//FOREACH
//todos.forEach(function(todo){
//    console.log(`Todo number ${todo.id}: ${todo.text}. Completed? ${todo.isCompleted}.`);
//});

//MAP: devuelve un array a partir de otro array
//const todoText = todos.map(function(todo){
//    return todo.text;
//});
//for (let text of todoText){
//    console.log(text);
//}
//FILTER
//const todoCompleted = todos.filter(function(todo){
//    return todo.isCompleted === true;
//});
//for (let completedTodo of todoCompleted){
//    console.log(completedTodo.text);
//}

//COMBINED: get only the text of the completed TODO's
//const completedTexts = todos.filter(function(todo){
//    return todo.isCompleted === true;
//}).map(function(todo){
//    return todo.text;
//})
//console.log(completedTexts);
//for (let completedText of completedTexts){
//    console.log(completedText);
//}

//Ternary operator
//const x = 10;
//const color = x == 10 ? 'Red' : "Yellow";
//console.log(color);
//switch(color){
//    case "Red":
//        console.log("color is red");
//       break;
//    case "Yellow":
//        console.log("color is yellow");
//}

//function Person(firstName, lastName, dob) {
//  this.firstName = firstName;
//  this.lastName = lastName;
//  this.dob = new Date(dob);
  //en el prototipo
  //    this.getBirthYear = function(){
  //       return this.dob.getFullYear();
  //    }
//  this.getFullName = function () {
//    return this.firstName + " " + this.lastName;
//  };
//}

//const person1 = new Person("Darío", "Aícua Ubierna", "1-14-1996"); //RECORDAR --> MES-DIA-AÑO
//console.log(person1);
//const person2 = new Person("Jon", "Martinez", "8-4-1990");
//console.log(person2);
//console.log(person1.dob.getFullYear());
//console.log(person1.getBirthYear()); //no funciona porque aun no se ha creado el prototipo
//console.log(person1.getFullName());

//creacion del prototipo
//Person.prototype.getBirthYear = function () {
//  return this.dob.getFullYear();
//};
//console.log(person1.getBirthYear());

class Person {
  constructor(firstName, lastname, dob) {
    this.firstName = firstName;
    this.lastName = lastname;
    this.dob = new Date(dob);
  }
  getBirthYear(){
      return this.dob.getFullYear();
  }
  getFullName(){
      return this.firstName + ' ' + this.lastName;
  }
}
const person1 = new Person("Darío", "Aícua Ubierna", "1-14-1996"); //RECORDAR --> MES-DIA-AÑO
console.log(person1.getBirthYear());
console.log(person1.getFullName());