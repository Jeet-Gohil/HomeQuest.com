import React , {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import { HouseContextProvider } from '../Context/apiContext';
import Home from '../Components/homeComp/Home';
import Rent from '../Components/buyComp/Rent';
import Loading from './Loading';


const App = () => {
  
  return (
    <div>
      <HouseContextProvider>
        <div>
          <Router>
          
        
            <Routes>
              <Route path = "/" element = {<Home/>}></Route>
              <Route path = "/homeQuest/propertyForRent" element = {<Rent/>} ></Route>
              <Route path = "/homeQuest/propertyForRent/:id" ></Route>
              <Route path = "/homeQuest/propertyForSell/:id"></Route>
            </Routes>
      
          </Router>
        </div>
        </HouseContextProvider>

    </div>
  )
}

export default App;
