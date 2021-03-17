import React, { useState } from 'react';
import style from './Apod.module.css';
import logo from "../../assets/images/apod logo.svg"


const Apod = (props) => {
  const [XY, setXY] = useState({
    x: 0,
    y: 0
  })
  const [sXY, setsXY] = useState({
    x: 0,
    y: 0
  })
  var selectRef = React.createRef();

  const _onMouseMove = (e) => {
    setXY({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
    var sxPos = (e.nativeEvent.offsetX / selectRef.current.clientWidth * 100 - 50) * 2;
    var syPos = (e.nativeEvent.offsetY / selectRef.current.clientHeight * 100 - 50) * 2;
    setsXY({ x: (0.1* sxPos), y: (-0.1* syPos) })
    console.log(XY.x, XY.y)
  };
  const { title, copyright, date, hdurl, explanation } = props.data
  console.log(props.data)
  return (
    <div className={style.rootAPOD}>
      <img className={style.logo} src={logo} alt="The NASA APOD Project" />
      <div className={style.line} />
      <div className={style.Apod}>
        {/* <div className={style.bline} /> */}
        <div className={style.title}>{title}</div>
        <div className={style.date}>{date}</div>
        <div style={{ display: "flex", flexFlow: "column" }}>
          <div className={style.image} ref={selectRef}
            style={{ transform: `rotateX(${sXY.x}deg) rotateY(${sXY.y}deg)` }}
            onMouseOut={() => setsXY({ x: 0, y: 0 })}
            onMouseMove={_onMouseMove.bind(this)} >
            <img className={style.Apodimage} alt={title} src={hdurl} />
          </div>
          <div>by {copyright}</div>
          <div className={style.explanation}>{explanation}</div>
        </div>
      </div>
    </div>
  );
}

export default Apod;