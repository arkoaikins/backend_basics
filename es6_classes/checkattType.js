class Person {
    constructor(name, age) {
        //her is where we check for the type
        if(typeof name !== 'string') {
            throw new TypeError('Name must be a string')
        }
        if(typeof age !== 'number') {
            throw new TypeError('Age must be a number')
        }

        this.name = name;
        this.age = age;
    }

}

// YOu can also check if an attribute is an array of strings
// By using a combination of Array.isArray() which checks if attribute is an array
// and Array.prototype.every() to check if elements in the array are strings
class Classroom {
    constructor(students) {
        if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
            throw new TypeError('Students must be an array of  strings');
        }
        
        this.students = students;
    }
}