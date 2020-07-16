import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { toast } from 'react-toastify';
import { useRootStore } from '../context/RootStateContext';
import { Student } from '../models/student.model';
import './StudentDetailScreen.scss';
import '../styles/_general.scss';

const StudentDetail = ({match, history}: any) => {
  const { studentsStore } = useRootStore()
  return useObserver(
    () => (

      <div className="ListContainer">
        <div className="Container">
          {studentsStore.students.filter((student: Student) => student.sid === match.params.sid)
          .map((student: Student) => (
            <div key={student.sid} className="CardDetail">
                <div className="CardHeader">
                  <div className="CardImage">Image Placeholder</div>
                  <h1 className="CardTitle">{student.firstName} {student.lastName}</h1>
                </div>
                <div className="CardContent">
                    <h2 className="CardPhone">{student.phoneNumber}</h2>
                    <h2 className="CardText">GPA: {student.GPA}</h2>
                    <h2 className="CardText">St. {student.address.streetName} {student.address.streetNumber}</h2>
                    <h2 className="CardText">{student.address.city}, {student.address.zipcode}, {student.address.state}</h2>
                </div>
                <button className="FormInputButton Delete" onClick={() => {
                    studentsStore.removeStudent(student.sid);
                    toast.dark('Student deleted!', {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                    history.push('/listStudents')
                }}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default StudentDetail;
