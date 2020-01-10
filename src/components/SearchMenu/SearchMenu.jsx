import React, { Component } from 'react';
import InputSearch from './InputSearch';
import Table from './Table';
import '../../css/all.css';
import '../SearchMenu/css/searchMenu.css';


class SearchMenu extends Component {
    render() {
        return (
            <section className = "search-menu" id="first">
                <InputSearch />
                <Table />
            </section>
        );
    }
}


export default SearchMenu;
