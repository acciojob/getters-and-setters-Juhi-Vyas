class Person {
	constructor(name, age){
		this.name = name
		this.age= age
	}
	get name(){
		return this.name
	}
	set name(value){
		this.age = value
	}
}

class Student extends Person {
	constructor(){
		super(name)
	}
	study(){
		console.log(`${this.name} is studing`)
	}
}

class Teacher extends Person {
	constructor(){
		super(name)
	}
	teach(){
		console.log(`${this.name} is studing`)
	}
}

// Creating a Person instance
const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.age = 30;  // Using the setter to change the age
console.log(person.age);  // Output: 30

// Creating a Student instance
const student = new Student("Alice", 22);
student.study();  // Output: Alice is studying

// Creating a Teacher instance
const teacher = new Teacher("Bob", 40);
teacher.teach();  // Output: Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
