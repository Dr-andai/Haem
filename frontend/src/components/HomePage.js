import "/frontend/static/css/home.css"
import React from 'react'
import LandPage from './LandPage';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

function HomePage () {  
    return (<Router> 
        <Switch>
            <Route exact path = '/'>
               <div className='main-background'>
                
               <div className='container'>
               <p>Unicode:
                  <span className="glyphicon">&#xe080;</span>
                </p> 
                  </div>
               </div>
              
            </Route>
            <Route path = '/land'component = {LandPage}/>
        </Switch>
    </Router>
    )
    }

export default HomePage