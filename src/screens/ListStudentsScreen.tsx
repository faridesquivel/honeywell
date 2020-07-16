import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { toast } from 'react-toastify';
import { Student } from '../models/student.model';
import { useRootStore } from '../context/RootStateContext';
import './ListStudentsScreen.scss';
import '../styles/_general.scss';

const ListStudents = ({ history }: any) => {
  const { studentsStore } = useRootStore()
  const navigate = (sid: string) => {
    history.push(`/studentDetail/${sid}`)
  };
  return useObserver(
    () => (
      <div className="ListContainer">
        <div className="Content">
          {
            studentsStore.students.map((student: Student) => (
              <div key={student.sid} className="Card">
                  <div className="CardHeader" onClick={(event: any) => navigate(student.sid)}>
                    <div className="CardImage">Image Placeholder</div>
                    <h1 className="CardTitle">{student.firstName} {student.lastName}</h1>
                  </div>
                  <div className="CardContent" onClick={(event: any) => navigate(student.sid)}>
                    <div>
                      <h2 className="CardPhone">{student.phoneNumber}</h2>
                      <h2 className="CardText">GPA: {student.GPA}</h2>
                    </div>
                  </div>
                  <button className="FormInputButton Delete" onClick={() => studentsStore.removeStudent(student.sid)}>Delete</button>
              </div>
            ))
          }
        </div>
        <div className="Footer">
            <button className="FormInputButton AddButton" onClick={() => history.push('/addStudent')}>Add New Student</button>
            <button className="FormInputButton" onClick={() => {
              studentsStore.saveStudents();
              toast.dark('Students saved in memory!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            }}>Save Students</button>
            <button className="FormInputButton" onClick={() => {
              studentsStore.loadStudents();
              toast.dark('Students loaded from memory!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            }}>Load Students</button>
            <button className="FormInputButton" onClick={() => {
              studentsStore.removeAllStudents();
              toast.dark('Students deleted from memory!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }}>Remove All Students</button>
        </div>
      </div>
    )
  );
}

export default ListStudents;
