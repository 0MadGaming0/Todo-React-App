import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';
import ViewallTodo from './components/ViewallTodo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddTodo/>}/>
      <Route path="/search" element={<SearchTodo/>}/>
      <Route path="/view" element={<ViewallTodo/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
