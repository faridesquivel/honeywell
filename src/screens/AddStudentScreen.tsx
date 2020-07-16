import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { NewStudentInput } from '../components/StudentInput';
import { useRootStore } from '../context/RootStateContext';
import '../styles/_general.scss';

const UserScreen = ({ history }: any) => {
  const { studentsStore } = useRootStore()
  return useObserver(
    () => (
      <div className="Container">
        <NewStudentInput addStudent={studentsStore.addStudent} navigate={() => history.push('/listStudents')}/>
      </div>
    )
  );
}

export default UserScreen;
