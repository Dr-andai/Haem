import { makeStyles } from '@mui/material';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
import "/frontend/static/css/home.css"
import homeImage from '/frontend/static/images/sample.jpg';

import React from 'react'
import LandPage from './LandPage';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

function HomePage () {  
    return (<Router> 
        <Switch>
            <Route exact path = '/'>
               <div className='main-background'>
              
               </div> 
            </Route>
            <Route path = '/land'component = {LandPage}/>
        </Switch>
    </Router>
    )
    }

export default HomePage