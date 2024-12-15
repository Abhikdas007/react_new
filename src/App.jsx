import {BrowserRouter} from 'react-router'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import AppRoutes from './routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./assets/css/style.css";
import "./assets/css/green-gradient.css";




function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <div className="main">
            <AppRoutes/>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
