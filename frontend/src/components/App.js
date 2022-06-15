import React, {Component} from 'react';
import ReactDOM from 'react-dom';



import Header from './layout/Header';
import HomePage from './HomePage';
import BlogPage from './BlogPage';


function App (){
        return (
        <div>
        <Header />
        <HomePage />
        <BlogPage />
        {/* <LandPage /> */}
        </div>
        )

}

ReactDOM.render(<App />, document.getElementById('app'));