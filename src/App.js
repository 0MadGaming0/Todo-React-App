import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddTodo/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
