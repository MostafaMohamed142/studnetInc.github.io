import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header style={{height:'225px'}}>
        <Header/>
      </header>
      
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path='/careerlibrary' element={<h1>Not built yet</h1>}/>
        <Route path='/majorlibrary' element={<h1>Not built yet</h1>}/>
        <Route path='/schoollibrary' element={<h1>Not built yet</h1>}/>
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
