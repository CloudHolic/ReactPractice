import React from 'react';
import DigitalDisplay from './DigitalDisplay';
import AnalogDisplay from './AnalogDisplay';

class Clock extends React.Component
{
    constructor(props) {
        super(props)
        this.launchClock()
        this.state = {currentTime: (new Date()).toLocaleString('en')}
    }

    launchClock() {
        setInterval(() => {
            console.log('Updating time...')
            this.setState({currentTime: (new Date().toLocaleString('en'))})
        }, 1000)
    }

    render () {
        console.log('Rendering...')
        return <div>
            <AnalogDisplay time={this.state.currentTime}/>
            <DigitalDisplay time={this.state.currentTime}/>
        </div>
    }
}

export default Clock