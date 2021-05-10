import React from 'react';
import ReactDOM from 'react-dom';

class Logger extends React.Component {
    constructor(props) {
        super(props)
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount executed')
        console.log('DOM node: ', ReactDOM.findDOMNode(this))
    }    

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate executed')
        console.log('new props: ', newProps)
        console.log('new state: ', newState)
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate executed')
        console.log('prev props: ', prevProps)
        console.log('prev state: ', prevState)
        return prevProps
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('componentDidUpdate executed')
        console.log('prev props: ', prevProps)
        console.log('prev state: ', prevState)
        console.log('snapshot: ', snapShot)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount executed')
    }

    render() {
        // console.log('render executed')
        return <div>{this.props.time}</div>
    }
}

export default Logger