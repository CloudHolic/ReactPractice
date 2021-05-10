import React from 'react';

class Hello extends React.Component
{
    render()
    {
        return React.createElement('h1', this.props, 'Hello ' + this.props.frameworkName + ' world!!!')
    }
}

export default Hello;