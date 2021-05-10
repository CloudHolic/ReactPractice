import React from 'react';

class Hello extends React.Component
{
    render()
    {
        return <h1 {...this.props}>Hello {this.props.frameworkName} world!!!</h1>        
    }
}

export default Hello