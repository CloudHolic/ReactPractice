import React from 'react'

class Sound extends React.Component {
    constructor(props) {
        super(props)
        this.audioRef = React.createRef()
        this.handleTimerEnded = this.handleTimerEnded.bind(this)
    }

    handleTimerEnded() {
        this.audioRef.play()
    }

    componentDidMount() {
        window.addEventListener('timerEnded', this.handleTimerEnded)
    }

    render() {
        return <audio ref={this.audioRef} src="flute_c_long_01.wav" preload="auto"/>
    }
}

export default Sound