import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/navbar';
import News from './Components/news';
import LoadingBar from 'react-top-loading-bar'

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

export default class App extends Component {
  //darkmode
  state = {
    progress: 0,
    color:'light'
  }


toggle=()=>{

 if(this.state.color==='dark')
    {
      
          this.setState({
                color:'light'

          })
    }
    else{
          this.setState({
                color:'dark'
          })
    }

  
   
}

//api key

  apiKey = '1e272078f1474a9fba3465cc78a514db'

  //loding
 
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {

    return (
      <div className={`const bg-${this.state.color==='dark'?'secondary':'success'} bg-opacity-${this.state.color==='dark'?'50':'25'}`}>
        <Router basename='/News'>
          <Navbar toggle={this.toggle} mode={this.state} />
          <LoadingBar height={3} color='#f11946' progress={this.state.progress} />
          

          <Routes>
            <Route exact path="/" element={<News mode={this.state.color} setProgress={this.setProgress} apiKey={this.apiKey} category='general' heading='General' />} />
            <Route exact path="/sports" element={<News mode={this.state.color} setProgress={this.setProgress} apiKey={this.apiKey} key="sports" category='sports' heading='Sports' />} />
            <Route exact path="/business" element={<News mode={this.state.color} setProgress={this.setProgress} apiKey={this.apiKey} key="business" category='business' heading='Business' />} />
            <Route exact path="/entertainment" element={<News mode={this.state.color} setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" category='entertainment' heading='Entertainment' />} />
            <Route exact path="/health" element={<News mode={this.state.color} setProgress={this.setProgress} apiKey={this.apiKey} key="health" category='health' heading='Health' />} />
            <Route exact path="/science" element={<News mode={this.state.color} setProgress={this.setProgress} apiKey={this.apiKey} key="science" category='science' heading='Science' />} />
            <Route exact path="/sports" element={<News mode={this.state.color} setProgress={this.setProgress} apiKey={this.apiKey} key="sports" category='sports' heading='Sports' />} />
            <Route exact path="/technology" element={<News mode={this.state.color} setProgress={this.setProgress} apiKey={this.apiKey} key="technology" category='technology' heading='Technology' />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
