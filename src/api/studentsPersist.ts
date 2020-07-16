import { Student } from "../models/student.model";
import data from './mockdata.json';

export const loadStudents = (): Promise<Student []> => {
    return new Promise((resolve, reject) => {
        const students = JSON.parse(localStorage.getItem('students') as string);
        if (students) {
            resolve(students);
        } else {
            const parsed = JSON.parse(JSON.stringify(data));
            const studentsMock: Student[] = parsed;
            resolve(studentsMock);
        }
    });
};

export const saveStudents = (students: Student[]): Promise<Student []> => {
    return new Promise((resolve) => {
        localStorage.setItem('students', JSON.stringify(students));
        resolve();
    });
};

export const removeStudents = (): Promise<Student []> => {
    return new Promise((resolve) => {
        localStorage.clear();
        resolve();
    });
};