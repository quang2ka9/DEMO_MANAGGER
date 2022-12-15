import {Student} from "../Model/Student";

export class StudentManager{
    private studentLists: Student[] = [];

    constructor() {
        this.studentLists.push(new Student(1, "Nguyen Van a", 21, 3.5));
    }

    public display(){
        console.table(this.studentLists);
    }
    public addStudent(student: Student){
        this.studentLists.push(student);
    }
    public updateStudent(id: number, newStudent: Student){
        // Biet la can sua thang nao
        let index = this.findById(id);
        if(index === -1){
            return "Khong co sinh vien";
        }
        // Minh sua no
        this.studentLists[index] = newStudent;
        return "Sua thanh cong";
    }
    public removeStudent(id: number){
        // Biet la xoa thang nao
        let index = this.findById(id);
        if(index === -1){
            return "Khong co sinh vien nay"
        }
        // Xoa no
        this.studentLists.splice(index, 1);
        return "Xoa Thanh cong";
    }
    public findById(id: number){
        for(let i = 0; i < this.studentLists.length; i++){
            if(this.studentLists[i].getId() === id){
                return i;
            }
        }
        return -1;
    }
}