import React from 'react'
import './Container.css'
// https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88047.jpg
// https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87802.jpg
const Container = ({source, title, text, button, color, text_color}) => {
  return (
    <div className='app__Container'>
        <div className="app__Container-left" style={{backgroundColor:color, color:text_color}}>
            <span>{title}</span>
            <div className="app__Container-left_text">
                 {text}
            </div>
            <button style={{color:text_color,
            border:`0.5px solid ${text_color} `}}>{button}</button>
        </div>

        <div className="app__Container-right" style={{backgroundColor:color}}>
            <img src={source} alt="" />
        </div>
      
    </div>
  )
}

export default Container
