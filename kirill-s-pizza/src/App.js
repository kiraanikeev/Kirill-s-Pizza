import { Redirect, Route, Router, Switch } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Basket from './components/Basket/Basket';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Slider from './components/Slider/Slider';





function App() {


  return (
    <div className="App">
      <Navbar/>
      <Slider/>
        <Switch>
<Route exact path="/" component={Home}/>
<Route path="/menu" component={Menu}/>
<Route path="/about" component={About}/>
<Route path="/contacts" component={Contacts}/>
<Route path="/basket" component={Basket}/>
<Redirect to="/"/>
</Switch>
    </div>
  );
}

export default App;
