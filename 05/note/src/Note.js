import React from 'react'

class Note extends React.Component {
    confirmLeave(e) {
        let confirmationMessage = '정말 닫으시겠습니까?'
        e.returnValue = confirmationMessage // Gecko, Trident, Chrome 34+
        return confirmationMessage          // Gecko, WebKit, Chrome <34
    }

    componentDidMount() {
        console.log('add confirmLeave event listener on beforeunload event')
        window.addEventListener('beforeunload', this.confirmLeave)
    }

    componentWillUnmount() {
        console.log('delete confirmLeave event listener on beforeunload event')
        window.removeEventListener('beforeunload', this.confirmLeave)
    }

    render() {
        console.log('Render')
        return <div>
            <p>Parent component will be deleted in {this.props.secondsLeft} secs.</p>
            <input type="text"/>
        </div>
    }
}

export default Note