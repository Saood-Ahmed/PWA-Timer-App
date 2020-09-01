import React from 'react';
import Timer from '../Timer/Timer';
import HourGlass from './hourGlass.png';


const App = () => {

return(
<div className="container-fluid" style={{textAlign: 'center'}}> 
    <div className="row" style={{backgroundColor: "#4facfe", color: "white"}}>
    <h2><i className="glyphicon glyphicon-time" style={{marginRight: "5px"}}></i>TIMER APP</h2>
    </div>
    <Timer />
   <div className="container">
       <img className="u-full-width" src={HourGlass} alt="hour-glass-illustration"/>
       </div>   
</div>
);
}

export default App;