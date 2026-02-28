// values are stored on the stack
const name = "John";
const age = 20;

// objects are stored on the heap
const person = {
  name: "Brad",
  age: 20,
}; // reference to the object is stored in stack

let newName = name;
newName = "Jane";

let newPerson = person;
newPerson.name = "JanBradley";

console.log(person, newPerson);
