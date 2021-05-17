import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Tooltip extends React.Component {
    constructor(props) {
        super(props)

        this.state = {opacity: false}
        this.handleClick = this.handleClick.bind(this)
        this.handleMouseInteraction = this.handleMouseInteraction.bind(this)
    }

    handleClick() {
        if(!this.props.allowToggleWithClick) {
            return false
        }

        this.toggle()
    }

    handleMouseInteraction() {
        if(!this.props.allowToggleWithMouseInteraction) {
            return false
        }

        this.toggle()
    }

    toggle() {
        const tooltipNode = ReactDOM.findDOMNode(this)
        this.setState({
            opacity: !this.state.opacity,
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft
        })
    }

    render() {
        const top = this.state.top || 0
        const style = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: +this.state.opacity,
            top: top + (this.props.allowToggleWithMouseInteraction === 'bottom' ? +20 : -60),
            left: (this.state.left || 0) - 30
        }

        const toolTipClasses = 'tooltip ' + this.props.positionWhereShowText

        return <div style={{display: 'inline'}}>
            <span style={{color: 'blue'}} onClick={this.handleClick} onMouseEnter={this.handleMouseInteraction} onMouseOut={this.handleMouseInteraction}>
                {this.props.children}
            </span>
            <div className="tooltip bottom" style={style} role="tooltip">
                <div className="tooltip-arrow"/>
                <div className="tooltip-inner">
                    {this.props.text}
                </div>
            </div>
        </div>

    }
}

Tooltip.propTypes = {
    allowToggleWithClick: PropTypes.bool,
    allowToggleWithMouseInteraction: PropTypes.bool,
    positionWhereShowText: PropTypes.oneOf(['bottom', 'top'])
}

Tooltip.defaultProps = {
    allowToggleWithClick: false,
    allowToggleWithMouseInteraction: true,
    positionWhereShowText: 'bottom'
}

export default Tooltip