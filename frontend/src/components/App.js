import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import sample1 from "/frontend/static/images/sample.jpg";


import Header from './layout/Header';
import HomePage from './HomePage';
// import LandPage from './LandPage';

function App (){
        return (
        <div>
        <Header />
        <HomePage />
        {/* <LandPage /> */}
        </div>
        )

}

ReactDOM.render(<App />, document.getElementById('app'));