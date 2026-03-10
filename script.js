class Person {
	constructor(name, age){
		this._name = name
		this._age = age
	}

	get name(){
		return this._name
	}

	set age(value){
		this._age = value
	}

	get age(){
		return this._age
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age)
	}

	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age)
	}

	teach(){
		console.log(`${this.name} is teaching`)
	}
}

// Creating a Person instance
const person = new Person("John", 25);
console.log(person.name);

person.age = 30;
console.log(person.age);

// Creating a Student instance
const student = new Student("Alice", 22);
student.study();

// Creating a Teacher instance
const teacher = new Teacher("Bob", 40);
teacher.teach();

window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;