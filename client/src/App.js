import logo from './logo.svg';
import './App.css';
import StudentForm from './components/StudentForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayStudent from './components/DisplayStudent';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentForm />} />
          <Route path="/display-students" element={<DisplayStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
