import {StudentManager} from "../Controller/StudentManager";
import {Student} from "../Model/Student";

const readlineSync = require('readline-sync');

export class StudentMenu{
    studentManager: StudentManager;
    private menu = `
    1. Show student list
    2. Create new Student
    3. Update Student
    4. Delete Student    
    5. Exit
    `
    constructor() {
        this.studentManager = new StudentManager();
    }
    public selection(): void{
        let isLoop = true;
        while(isLoop){
            console.log(this.menu);
            let choice;
            do{
                choice = +readlineSync.question("Enter your choice: ");
                if(choice < 1 || choice > 5){
                    console.log("Wrong choice. Please try again");
                }
            }while (choice < 1 || choice > 5);
            switch (choice){
                case 1: {
                    this.studentManager.display();
                    break;
                }
                case 2: {
                    let student = this.inputStudent(null);
                    this.studentManager.addStudent(student);
                    break;
                }
                case 3: {
                    let id = +readlineSync.question("Enter student id you to update: ");
                    let newStudent = this.inputStudent(id);
                    this.studentManager.updateStudent(id, newStudent);
                    break;
                }
                case 4: {
                    let id = +readlineSync.question("Enter student id you to delete: ");
                    this.studentManager.removeStudent(id);
                    break;
                }
                case 5: {
                    isLoop = false;
                    break;
                }
            }
        }
    }
    private inputStudent(id: number | null): Student{
        if(id === null){
            let index = -1;
            do{
                id = +readlineSync.question("Enter student id: ");
                index = this.studentManager.findById(id);
                if(index !== -1){
                    console.log("Id exists. Please try again!");
                }
            }while (index !== -1);

        }
        let name = readlineSync.question("Enter student name: ");
        let age = +readlineSync.question("Enter student age: ");
        let gpa = +readlineSync.question("Enter student gpa: ");
        return new Student(id, name, age, gpa);
    }
}