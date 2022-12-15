export class Student{
    private _id: number;
    private _name: string;
    private _age: number;
    private _gpa: number;

    public constructor(id: number, name: string, age: number, gpa: number) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._gpa = gpa;
    }

    getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getAge(): number {
        return this._age;
    }

    setAge(value: number) {
        this._age = value;
    }

    getGPA(): number {
        return this._gpa;
    }

    setGPA(value: number) {
        this._gpa = value;
    }
}