import { observable, action } from 'mobx';
import { Student } from "../models/student.model";
import { loadStudents, saveStudents, removeStudents } from '../api/studentsPersist';

export class StudentsStore {
    @observable students: Student[] = [];
    
    @action
    addStudent = (student: Student) => {
        this.students.push(student);
    }

    @action
    removeStudent = (sid: string) => {
        const filteredStuds = this.students.filter((student) => student.sid !== sid)
        this.students = filteredStuds;
    }

    @action
    loadStudents = () => {
        loadStudents().then((students: Student[]) => this.students = students)
        .catch((err) => this.students = []);
    }

    @action
    saveStudents = () => {
        saveStudents(this.students);
    }

    @action
    removeAllStudents = () => {
        removeStudents().then(() => this.students = []);
    }
}