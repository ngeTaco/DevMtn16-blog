import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav.jsx';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
}
