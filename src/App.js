import React from 'react';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from './components/Modal'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch,Route} from 'react-router-dom';


class App extends React.Component {


  render() {
    return (
      <>
      <Navbar />
     
     <Switch>
      <Route exact path="/"  component={ProductList} /> 
      <Route path="/details"  component={Details} />
      <Route path="/cart"  component={Cart} />
      <Route component={Default} />
      </Switch>
      <Modal />
      
      </>
    );
  }
}



export default App;