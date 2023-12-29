import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import Gifts from './pages/Gifts/Gifts'
import Rewards from './pages/Rewards/Rewards'
import { BrowserRouter as Router,
Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'  element={<Home/>}/> 
          <Route path='menu' element={<Menu/>}/> 
          <Route path='gifts' element={<Gifts/> }/>  
          <Route path='rewards' element={<Rewards/>}/>    
        
        
        </Routes>
      </Router>
     
     
      
   
    </div>
  );
}

export default App;
