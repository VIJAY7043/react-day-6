import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Component for List Students
const ListStudents = ({ students, deleteStudent }) => (
  <div>
    <h2>List Students</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>
              <Link to={`/edit-student/${student.id}`}>Edit</Link>
              <button onClick={() => deleteStudent(student.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Component for List Teachers
const ListTeachers = ({ teachers, deleteTeacher }) => (
  <div>
    <h2>List Teachers</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Subject</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {teachers.map(teacher => (
          <tr key={teacher.id}>
            <td>{teacher.id}</td>
            <td>{teacher.name}</td>
            <td>{teacher.subject}</td>
            <td>
              <Link to={`/edit-teacher/${teacher.id}`}>Edit</Link>
              <button onClick={() => deleteTeacher(teacher.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Other components for CreateStudent, EditStudent, CreateTeacher, EditTeacher are similar to the previous example.

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Student 1', age: 18 },
    { id: 2, name: 'Student 2', age: 20 },
    // ...
  ]);

  const [teachers, setTeachers] = useState([
    { id: 1, name: 'Teacher 1', subject: 'Math' },
    { id: 2, name: 'Teacher 2', subject: 'Science' },
    // ...
  ]);

  // Functions for CRUD operations on students and teachers

  return (
    <Router>
      <div>
        <h1>Admin Dashboard</h1>
        <nav>
          <Link to="/students">List Students</Link> |{' '}
          <Link to="/teachers">List Teachers</Link> |{' '}
          {/* Other navigation links */}
        </nav>

        <Route
          path="/students"
          render={() => <ListStudents students={students} deleteStudent={deleteStudent} />}
        />
        <Route
          path="/teachers"
          render={() => <ListTeachers teachers={teachers} deleteTeacher={deleteTeacher} />}
        />
        {/* Additional routes for create and edit pages */}
      </div>
    </Router>
  );
};

export default App;
