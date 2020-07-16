import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import StudentScreen from './screens/AddStudentScreen';
import ListStudents from './screens/ListStudentsScreen';
import StudentDetail from './screens/StudentDetailScreen';
import Navbar from './components/Navbar';
import { useRootStore } from './context/RootStateContext';
import './App.scss';
import './styles/_general.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { studentsStore } = useRootStore()
  useEffect(() => {
    studentsStore.loadStudents();
  }, [studentsStore]);
  return (
    <div className="Container">
      <Navbar />
      <Switch>
        <Route exact path='/listStudents' component={ListStudents}/>
        <Route exact path='/addStudent' component={StudentScreen}/>
        <Route exact path='/studentDetail/:sid' component={StudentDetail}/>
        <Route exact path="/">
          <Redirect to="/listStudents" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
