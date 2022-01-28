import './App.css';
import Navbar from './Components/Navbar';
import Taskbar from './Components/Taskbar/Taskbar';
import Carousel from './Components/carousel/Carousel';
import Homepage from './Mainpage/Homepage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Taskbar />
     <Homepage />
     <Carousel />
     <Footer />
    </div>
  );
}

export default App;
