import React from 'react';
import Link from './Link';

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menus: []
        }
    }

    componentDidMount() {
        fetch('./menus.json')
        .then((response) => {
            return response.json();
        }).then((menus) => {
            this.setState({menus: menus})
        });
    }

    render() {
        return <div>
            {this.state.menus.map((v, i) => {
                return <div key={i}><Link label={v}/></div>
            })}
        </div>
    }
}

export default Menu