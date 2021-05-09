import React from 'react';

let h1 = React.createElement('h1', null, 'Hello world!')

class Hello extends React.Component
{
    render()
    {
        return React.createElement('h1', this.props, 'Hello ' + this.props.frameworkName + ' world!!!')
    }
}

export default Hello;