import React from 'react';
import ClickCounterButton from './ClickCounterButton';
import Counter from './Counter';

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {counter: 0}
    }

    handleClick() {
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        return <div>
            <ClickCounterButton handler={this.handleClick}/>
            <br />
            <Counter value={this.state.counter}/>
        </div>
    }
}

export default Content