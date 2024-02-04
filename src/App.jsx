import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home } from './pages';

const App = () => {
  return (
    <main className=''>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/about" element={<About/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/team" element={<Team/>}/> */}
        </Routes>
      </Router>
    </main>
  )
}

export default App