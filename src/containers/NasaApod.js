import React from 'react';
import classNames from './NasaApod.module.css';
import axios from 'axios';
import Apod from '../components/Apod/Apod';

class NasaApod extends React.Component {
  
    state={
      Data:{}
    }
    
    componentDidMount(){
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=AiHVy94pQIgHcaUDjO57X2Nk3Lgmxtp0nGheg275")
        .then(res=>{
            console.log(res);
            this.setState({Data:res.data})
        })
        .catch(error=>{console.log(error)})
    }
  
    render() {
    return (
      <div className={classNames.NasaAPOD}>
        <Apod Data={this.state.Data}/>
      </div>
    );
  }
}

export default NasaApod;
