import React from 'react';

const DigitalDisplay = props => {
    const locale = time => (new Date(time)).toLocaleString('ko')
    return <div>{locale(props.time)}</div>
}

export default DigitalDisplay