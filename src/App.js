import './App.css';
import { BrowserRouter as Routes,Route, Router } from 'react-router-dom';
import Home from './component/Home';
import Nav from './component/Nav';

function App() {
  return (
    <>
    {/* <div className="h-screen w-screen flex "> */}
      <Router>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/Nav' element={<Nav/>}/>
      </Routes>
      </Router>
    {/* </div> */}
    </>
  );
}
export default App;
