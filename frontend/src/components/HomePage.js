import { makeStyles } from '@mui/material';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
import "/frontend/static/css/home.css"
import homeImage from '/frontend/static/images/sample.jpg';
// import homeImage from 'C:\Users\user\Desktop\Haem project\frontend\static\images\sample.jpg';

import React from 'react'
import LandPage from './LandPage';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

// const homepic = new URL ("/frontend/src/static/images/sample.jpg", import.meta.url)

function HomePage () {  
    return (<Router> 
        <Switch>
            <Route exact path = '/'>
              <div>

              <img src={homeImage} alt= "" />

              </div>

               {/* <div className='main-background'>
                <h1> Haem Projects
              
                </h1>
               </div> */}

              {/* <img src='https://images.pexels.com/photos/4047146/pexels-photo-4047146.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4047146.jpg&fm=jpg'></img> */}

            </Route>
            <Route path = '/land'component = {LandPage}/>
        </Switch>
    </Router>
    )
    }

export default HomePage