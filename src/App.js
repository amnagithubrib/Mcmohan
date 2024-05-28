import React from 'react'
import { Route , Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Contactus from './Contactus';
import Career from './Career';
import Company from './Company';
import GetAFreeQuote from './GetAFreeQuote';
import Interest from './Interest';
import Project from './Project';
import Services from './Services';
import Footer from './Footer'
import Electrical from './Electrical';
import Operating from './Operating';
import Top from './Top';
function App() {
  return (
    <div>
   <Top/>
    <Menu/>
    <Switch>
    <Route exact path="/" component={Home}/>
   <Route path="/about" component={About}/>
   <Route path="/contact"  component={Contactus}/>
   <Route path="/career"  component={Career}/>
   <Route path="/company"  component={Company}/>
   <Route path="/freequote"  component={GetAFreeQuote}/>
   <Route path="/interest" component={Interest}/>
   <Route path="/project"  component={Project}/>
   <Route path="/services"  component={Services}/>
   <Route path="/electrical"  component={Electrical}/>
   <Route path="/Operating"  component={Operating}/>
    </Switch><Footer/>
    </div>
  )
}

export default App