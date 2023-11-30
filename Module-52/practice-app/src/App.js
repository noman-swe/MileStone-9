import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MyRoute from './components/MyRoute/MyRoute';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <MyRoute></MyRoute>
    </div>
  );
}

export default App;
