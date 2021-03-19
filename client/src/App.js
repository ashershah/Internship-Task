import React, { useState, useEffect } from 'react';
import Register from './Register';
import Crud from './Crud'
import Axios from 'axios';
import Login from './Login'
import {Switch,Route,Redirect} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
function App() {

  return(<>
<Switch>
<Route exact path='/' component={Register}/>
  <Route path='/Login' component={Login}/>
  <Route path='/Crud' component={Crud}/>
  
  
</Switch> 
  </>);
};
  export default App;


   

  



