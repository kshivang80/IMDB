import logo from './logo.svg';
import './App.css';
import BottomNavbar from './Components/BottomNavbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
          <BottomNavbar/>
          <AllRoutes/>
    </div>
  );
}

export default App;
