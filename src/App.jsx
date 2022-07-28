import './App.css';
import HeaderPanel from './components/HeaderPanel/HeaderPanel'
import Orders from './components/Orders/Orders'
import Pagination from './components/Orders/Pagination/Pagination'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderPanel/>
      </header>
       <Orders/>
     <Pagination/>
    </div>
    
  );
}

export default App; 
