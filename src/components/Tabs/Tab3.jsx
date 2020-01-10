import React, { Component, Fragment } from 'react';
import axios from 'axios';
import '../../css/all.css';
import '../Tabs/tabs.css';


class Tab3 extends Component {
    state = {
        rent: []
    }


    componentDidMount() {
        axios.get('http://10.61.11.20:5090/api/Rent/registry')
            .then(res => {
                const rent = res.data;
                this.setState({ rent });
            });
    }



    render() {
        return (
            <Fragment>
                <ul> 
                    {this.state.rent.map((el, index) => <li key={index}>{el['doc_name']}</li>)}
                </ul>
            </Fragment>
        );
    }
}


export default Tab3;
