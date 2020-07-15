import { Student } from "../models/student.model";

export function createNotesStore() {
    return {
        students: Student = [],
        addStudent(student: Student) {
            this.students.push(student);
        }
    }
}