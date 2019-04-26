import React from 'react';
import classNames from './Apod.module.css';

const Apod =(props)=>{
    return (
      <div className={classNames.Apod}>
        <div className={classNames.title}>{props.Data.title}</div>
        <div className={classNames.date}>{props.Data.date}</div>
        <div className={classNames.image}><img className={classNames.Apodimage} alt={props.Data.title} src={props.Data.hdurl}/></div>
        <div className={classNames.explanation}>{props.Data.explanation}</div>
      </div>
    );
}

export default Apod;