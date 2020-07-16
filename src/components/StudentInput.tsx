import React, { useState } from 'react';
import { StudentsStore } from '../store/StudentsStore';
import { nanoid } from 'nanoid'
import { Student } from '../models/student.model';
import { toast } from 'react-toastify';
import './StudentInput.scss';
import '../styles/_general.scss';

type NewStudentInputProps = {
    addStudent: StudentsStore['addStudent'];
    navigate: any;
};

export const NewStudentInput: React.FC<NewStudentInputProps> = ({ addStudent, navigate }) => {
    const studentInitialState: Student = {
        sid: nanoid(),
        firstName: '',
        lastName: '',
        phoneNumber: 0,
        GPA: 0,
        address: {
            streetName: '',
            state: '',
            city: '',
            streetNumber: 0,
            zipcode: 0
        }

    };
    const [student, setStudent] = useState(studentInitialState);
    const updateStudent = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const nameObjects: string[] = key.split('.');
        const { value } = event.target;
        if (nameObjects.length > 1) {
            setStudent(prevState => ({
                ...prevState,
                address: {
                    ...prevState.address,
                    [nameObjects[1]]: value
                }
            }));
        } else {
            setStudent(prevState => ({
                ...prevState,
                [nameObjects[0]]: value
            }));
        }
    };
    const onAddStudent = () => {
        addStudent(student);
        setStudent(studentInitialState);
        toast.dark('Student added correctly!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate();
    };

    return (
        <div className="FormContainer">
            <h1 className="FormTitle">Adding New Student</h1>
            <div className="FormInputGroup">
                <label className="FormInputLabel">First Name</label>
                <input 
                    value={student.firstName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateStudent(event, 'firstName')}
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    className="FormInput"
                />
            </div>
            <div className="FormInputGroup">
                <label className="FormInputLabel">Last Name</label>
                <input 
                    value={student.lastName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateStudent(event, 'lastName')}
                    type='text'
                    name='lastName'
                    placeholder='Last Name'
                    className="FormInput"
                />
            </div>
            <div className="FormInputGroup">
                <label className="FormInputLabel">Phone Number</label>
                <input 
                    value={student.phoneNumber}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateStudent(event, 'phoneNumber')}
                    type='text'
                    name='phoneNumber'
                    placeholder='Phone Number'
                    className="FormInput"
                />
            </div>
            <div className="FormInputGroup">
                <label className="FormInputLabel">GPA</label>
                <input 
                    value={student.GPA}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateStudent(event, 'GPA')}
                    type='text'
                    name='gpa'
                    placeholder='GPA'
                    className="FormInput"
                />
            </div>
            <div className="FormInputGroup">
                <label className="FormInputLabel">Street Name</label>
                <input 
                    value={student.address.streetName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateStudent(event, 'address.streetName')}
                    type='text'
                    name='streetName'
                    placeholder='Street Name'
                    className="FormInput"
                />
            </div>
            <div className="FormInputGroup">
                <label className="FormInputLabel">Street Number</label>
                <input 
                    value={student.address.streetNumber}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateStudent(event, 'address.streetNumber')}
                    type='text'
                    name='streetNumber'
                    placeholder='Street Number'
                    className="FormInput"
                />
            </div>
            <div className="FormInputGroup">
                <label className="FormInputLabel">City</label>
                <input 
                    value={student.address.city}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateStudent(event, 'address.city')}
                    type='text'
                    name='city'
                    placeholder='City'
                    className="FormInput"
                />
            </div>
            <div className="FormInputGroup">
                <label className="FormInputLabel">State</label>
                <input 
                    value={student.address.state}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateStudent(event, 'address.state')}
                    type='text'
                    name='state'
                    placeholder='State'
                    className="FormInput"
                />
            </div>
            <div className="FormInputGroup">
                <label className="FormInputLabel">Zip Code</label>
                <input 
                    value={student.address.zipcode}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateStudent(event, 'address.zipcode')}
                    type='text'
                    name='zipCode'
                    placeholder='Zip Code'
                    className="FormInput"
                />
            </div>
            <button onClick={onAddStudent} className="FormInputButton Delete">Add Student</button>
        </div>
    );
}