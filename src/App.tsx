import './App.css';
import Footer from './components/appLayout/Footer';
import AppLayout from './components/appLayout/Layout';
import Navbar from './components/appLayout/Navbar';
import AllRoutes from './components/Routes/AllRoutes';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <AppLayout>
          <AllRoutes />
        </AppLayout>
      </Router>
    </>
  );
}

export default App;
