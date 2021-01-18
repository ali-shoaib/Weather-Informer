import React from 'react';
import '../App.css';

    export const ModalDev = ({setShowModalDev}) => {
        const heading = {
            position: 'absolute',
            top: '4px',
            left:'12px',
            color: 'white',
            textShadow: '1px 1px 1px black'
        }
        const btn={
            position: 'absolute',
            bottom: '4px',
            right: '8px'
        }
      return (
        <div className="devBox">
            <h3 style={heading}>About Developer</h3>
            <p style={{fontWeight: 500, fontSize: '15px'}}>This is <u>Ali Shoaib</u>, a frontend developer, lives in Karachi, Pakistan</p>
            <button className="btn btn-primary" style={btn} onClick={()=>setShowModalDev(false)}>Close</button>
        </div>
      )
    }
    
    export const ModalAbout = ({setShowModalAbout}) => {
        const heading = {
            position: 'absolute',
            top: '4px',
            left:'12px',
            color: 'purple'
        }
        const btn={
            position: 'absolute',
            bottom: '4px',
            right: '8px'
        }
        const bgs = [
            {color: 'Green'},
            {color: 'steelBlue'},
            {color: 'Gray'}
        ]
      return (
        <div className="aboutBox">
            <h3 style={heading}>About App</h3>
            <ul style={{fontSize: '15px',fontWeight: 500}}>
                <li style={bgs[0]}>This app is made on React JS and Redux</li>
                <li style={bgs[1]}>Weather data is fetched through a rest API</li>
                <li style={bgs[2]}>Styling is done by using CSS and bootstrap</li>
            </ul>
            <button className="btn btn-primary" style={btn} onClick={()=>setShowModalAbout(false)}>Close</button>
        </div>
      )
    }