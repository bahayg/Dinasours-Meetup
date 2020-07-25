import React, { useState } from 'react';
import './App.css';

// import StudentList from './components/StudentList';
import BioInventoryList from './components/BioInventoryList';

function App() {
  // declare initial array, and a blank question for quiz
  // const initialStudent = [{
  //   name: 'Joe', 
  //   grade: 12,
  //   id: 0
  // }];

  const initialBioInventory = [{
    name: 'Wood Frog',
    observer: 'bahayg',
    date: 'May 23 2018',
    place: 'Istanbul, Turkey',
    id: 0
  }];

  // declare state from initial values.
  // const [ students, setStudents ] = useState(initialStudent);
  const [ bioInventories, setBioInventories ] = useState(initialBioInventory)

  // helper method for adding a student
  // const addStudent = () =>{
  //   setStudents([...students, {name: '', grade: 0, id: students.length}])
  // };
  const addBioInventory = () => {
    setBioInventories([...bioInventories, {name: '', observer: '', date: '', place: '', id: bioInventories.length }])
  }

  // this method allows me to find a student by it's ID and change that entry in our array.
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const newStudents = [...students];
  //   const fields = {
  //     id: event.target.id.value,
  //     name: event.target.name.value,
  //     grade: event.target.grade.value
  //   };
  //   newStudents[event.target.id.value] = fields;
  //   setStudents(newStudents)
  // };

  const handleSubmit = event => {
    event.preventDefault();
    const newBioInventories = [...bioInventories];
    const fields = {
      id: event.target.id.value,
      name: event.target.name.value,
      observer: event.target.observer.value,
      date: event.target.date.value,
      place: event.target.place.value,
    };
    newBioInventories[event.target.id.value] = fields;
    setBioInventories(newBioInventories)
  }

  // return (
  //   <div className="App">
  //     <StudentList array={students} handleSubmit={handleSubmit} />
  //     <button onClick={addStudent}>Add a Student!</button>
  //   </div>
  // );

  return (
    <div className='App'>
      <BioInventoryList arr={bioInventories} handleSubmit={handleSubmit} />
      <button onClick={addBioInventory}>Add a new Biological Inventory</button>
    </div>
  );
}

export default App;
