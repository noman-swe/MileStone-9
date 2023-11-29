import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <h1 className='mb-8 text-2xl mt-2'>Welcome to my fancy routing website!!</h1>
      <Routes>
        <Route path='/' element={ <Home></Home>}></Route>
        <Route path="/about" element={ <About/> } />
        <Route path="/friends" element={ <Friends/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </div>
  );
}

export default App;
