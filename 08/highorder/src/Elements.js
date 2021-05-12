import React from 'react';

export class Button extends React.Component {
    render() {
        return <button
            className="btn btn-primary"
            onClick={this.props.handleClick}>
            {this.props.label}
        </button>
    }
}

export class Link extends React.Component {
    render() {
        return <a onClick={this.props.handleClick} href="http://www.naver.com">{this.props.label}</a>
    }
}

export class Logo extends React.Component {
    render() {
        return <img onClick={this.props.handleClick} width="40" src="logo.png" href="#" alt="alternative text"/>
    }
}

// Logo = (props) => {
//     return <img onClick={props.handleClick} width="40" src="logo.png" href="#" alt="alternative text"/>
// }