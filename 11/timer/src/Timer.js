import React from 'react';

const Timer = (props) => {
    const minutes = Math.ceil(props.timeLeft / 60) - 1
    const seconds = (props.timeLeft - minutes * 60) - 1
    
    if(props.timeLeft == 0) {
        const timerEndedEvent = new CustomEvent('timerEnded', {})
        dispatchEvent(timerEndedEvent)
    }

    if(props.timeLeft == null || props.timeLeft == 0)
        return <div/>
    return <h1> Time left: {minutes}:{seconds < 10 ? '0' : ''}{seconds}</h1>
}

export default Timer