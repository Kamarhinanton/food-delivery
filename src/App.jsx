import './App.css';
import './null.scss'
import HeaderPanel from './components/HeaderPanel/HeaderPanel'
import OrdersContainer from "./components/Orders/OrdersContainer";

function App() {
  return (
    <div>
        <HeaderPanel/>
        <OrdersContainer/>
    </div>
  );
}

export default App; 
