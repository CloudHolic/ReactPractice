import React from 'react';

class SaveButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleSave = this.handleSave.bind(this)
    }

    handleSave(event) {
        console.log(this, event)
    }

    handleMouseOver(event) {
        console.log('mouse over on bubbling event')
        console.dir(event.target)
    }

    render() {
        return <button onClick={this.handleSave}
            onMouseOverCapture={(event) => {
                console.log('mouse over on capture event')
                console.dir(event)}}
            onMouseOver={this.handleMouseOver.bind(this)}>
            Save
        </button>
    }
}

export default SaveButton