import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar'
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/cart';
import Checkout from './component/Checkout';
import About from './component/About';
import Contact from './component/Contact';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './component/Login';
import Register from './component/Register';
function App() {
  return (
    <>
     
      <Router>
      <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/Products/:id" component={Product} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
  

      </Router>
    </>
  );
}

export default App;