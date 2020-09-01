import React, { Component } from 'react';
import TimerButton from '../TimerButton/TimerButton';

interface MyState {

  minutes: number;
  seconds: number;
  isOn: boolean;
}

class Timer extends Component < {}, MyState> {
  myInterval!: NodeJS.Timer;
  constructor(props: any) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
      isOn: false
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    if (this.state.isOn === true) {
      return;
    }
    this.myInterval = global.setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    this.setState({ isOn: true });
  }

  stopTimer() {
    clearInterval(this.myInterval);
    this.setState({ isOn: false });
  }

  resetTimer() {
    this.stopTimer();
    this.setState({
      minutes: 25,
      seconds: 0,
    });
  }

  render = () => {
    const { minutes, seconds } = this.state;

    return (
      <div className="conatiner-fluid">
        <div className="container" >
          <h1 style={{fontSize: "800%", border: "4px solid #4facfe", borderRadius: "5px", marginTop: "20px", marginBottom: "20px"}}>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="four columns" style={{marginTop:'10px'}}>
          <TimerButton
            className="start-timer"
            buttonAction={this.startTimer}
            buttonValue={'Start'}
          />
          </div>
          <div className="four columns" style={{marginTop:'10px'}}>
          <TimerButton
            className="stop-timer"
            buttonAction={this.stopTimer}
            buttonValue={'Stop'}
          />
          </div>
          <div className="four columns" style={{marginTop:'10px'}}>
          <TimerButton
            className="reset-timer"
            buttonAction={this.resetTimer}
            buttonValue={'Reset'}
          />
          </div>
          </div>
        </div>
      </div>
    );
  };
}
export default Timer;