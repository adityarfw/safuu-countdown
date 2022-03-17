import './App.css';
import React from 'react';
import Confetti from 'react-confetti';

function App() {
  const [days, setDays] = React.useState('');
  const [hours, setHours] = React.useState('');
  const [mins, setMins] = React.useState('');
  const [secs, setSecs] = React.useState('');
  const [timeOut, setTimeOut] = React.useState(false);

  let endDate = new Date('Feb 28, 2023 23:59:59').getTime();

  setInterval(() => {
    let currentTime = new Date().getTime();

    let timeDiff = endDate - currentTime;

    // https://www.w3schools.com/howto/howto_js_countdown.asp
    setDays(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMins(Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)));
    setSecs(Math.floor((timeDiff % (1000 * 60)) / 1000));

    if (timeDiff < 0) {
      setTimeOut(true);
    }
  }, 1000);

  return (
    <div className='App'>
      {timeOut ? (
        <Confetti />
      ) : (
        <div>
          <h1 className='countdown--header'>Safuu Countdown Timer</h1>
          <div className='countdown--timer'>
            <p>
              {`${days} days ${hours} hours ${mins} minutes ${secs} seconds`}
            </p>
          </div>
          <p className='countdown--apy'>Until APY 383,025.80% changes</p>
        </div>
      )}
      <a href='https://safuu.com/' target='_blank'>
        <button className='button--website'>Visit Safuu</button>
      </a>
    </div>
  );
}

export default App;
