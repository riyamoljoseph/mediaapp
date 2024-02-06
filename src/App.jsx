
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import WatchHistory from './pages/WatchHistory';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
<Routes>
  <Route path ='/' element={<LandingPage/>}/>
  <Route path ='/home' element={<Home/>}/>
  <Route path ='/watchhistory' element={<WatchHistory/>}/>  
</Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
