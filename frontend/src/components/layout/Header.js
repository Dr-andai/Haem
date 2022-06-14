import React, { Component } from 'react';
import {makeStyles} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { AppBar } from '@mui/material';
import SortIcon from '@mui/material/Icon';
import "/frontend/static/css/header.css"

function Header() {
    return (
            <div className="navbar">
                  <h4> Haem Products</h4>
                  <ul>
                    <li><a href="#" className="header-link">Home</a></li>
                    <li><a href="#" className="header-link">Blog</a></li>
                    <li><a href="#" className="header-link">Invite</a></li>
                  </ul> 
              </div>
    )
  }

export default Header