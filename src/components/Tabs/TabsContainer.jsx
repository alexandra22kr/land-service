import React, { Component } from 'react';
import Tabs from './Tabs';
import '../../css/all.css';


class TabsContainer extends Component {
    render() {
        return (
            <section className="tabs" id="second">
                <Tabs />
            </section>
        );
    }
}


export default TabsContainer;
