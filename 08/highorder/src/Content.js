import React from 'react';
import LoadWebsite from './LoadWebsite';
import { Button, Link, Logo } from './Elements';

const EnhancedButton = LoadWebsite(Button)
const EnhancedLink = LoadWebsite(Link)
const EnhancedLogo = LoadWebsite(Logo)

class Content extends React.Component {
    render() {
        return <div>
            <EnhancedButton/>
            <br/>
            <br/>
            <EnhancedLink/>
            <br/>
            <br/>
            <EnhancedLogo/>
            <br/>
            <br/>
            <iframe id="frame" src="" width="600" height="500" title="Iframe"/>
        </div>
    }
}

export default Content