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
	study(){
		super(name)
		console.log(`${this.name} is studing`)
	}
}

class Teacher extends Person {
	teach(){
		super(name)
		console.log(`${this.name} is studing`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
