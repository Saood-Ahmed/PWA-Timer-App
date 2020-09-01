import React from 'react';

const TimerButton = (props: any) => (

  <div className={` ${props.className}`} onClick={() => props.buttonAction()}>
    <button className="button-value button-primary u-full-width">{props.buttonValue}</button>
  </div>

);

export default TimerButton;

