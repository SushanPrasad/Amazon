import './App.css';
import Navbar from './Components/Navbar';
import Taskbar from './Components/Taskbar/Taskbar';
import Carousel from './Components/carousel/Carousel';
import Homepage from './Mainpage/Homepage';
import Footer from './Components/Footer/Footer';


import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './Login';



function App() {
  return (
    <div className="App">


<Router>
  <Routes>
  <Route path='/' element={<Login />}></Route>

  <Route path='/home' element={<>
     <Navbar />
     <Taskbar />
     <Homepage />
     <Carousel />
     <div>     <Footer />
</div>
</>}></Route>
  </Routes>
</Router>

    </div>
  );
}

export default App;
