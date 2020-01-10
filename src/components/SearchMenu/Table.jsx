import React, { Component, Fragment } from 'react';
import axios from 'axios';
import '../../css/all.css';
import './css/searchMenu.css';

const TABLE_COLUMNS = [
    {
        label: 'Номер',
        sort: 'sortNum',
    }, {
        label: 'Тип',
        sort: 'sortLetter',
    }, {
        label: 'Дата закінчення',
        sort: 'sortDate',
    }
];


class Table extends Component {
    state = {
        activeRow: 1,
        rent: [],
    }

    componentDidMount() {
        axios.get('http://10.61.11.20:5090/api/Rent/registry')
            .then(res => {
                const rent = res.data;
                this.setState({ rent });
            })
            .catch((error) => {
                console.log("error", error)
            })
    }


    sortTable = (e) => {
        e.preventDefault();
        let isSorted = false;
        let target = e.target;
        
        if (target.nodeName !== 'TH') return;
        console.log('class: ', target.className);
        
        let arrow = target.querySelector('span');
        console.log(arrow);
        const sorted = document.querySelector('.sorted');
        // if(sorted) sorted.classList.remove('sorted');
        if(target.classList.contains('sorted')) {
            arrow.innerHTML = '<svg class="sort-svg" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 292.362 292.361"><path d="M286.935 197.287L159.028 69.381c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233 1.807-12.85 5.424L5.424 197.287C1.807 200.904 0 205.186 0 210.134s1.807 9.233 5.424 12.847c3.621 3.617 7.902 5.425 12.85 5.425h255.813c4.949 0 9.233-1.808 12.848-5.425 3.613-3.613 5.427-7.898 5.427-12.847s-1.814-9.23-5.427-12.847z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFF"/></svg>';
            isSorted = true;
        } else {
            arrow.innerHTML = '<svg class="sort-svg"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 292.362 292.362"><path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFF"/></svg>';
        }
        this.setState({ rent:  this.sortBy(this.state.rent, e, isSorted) });
        e.target.classList.toggle('sorted');
    }

    sortBy = (arr, e, isDescending) => {
        if (e.target.classList.contains('sortNum')) {
            return arr.sort(function (a, b) {
                if(isDescending) return b['application_number'] - a['application_number'];
                return a['application_number'] - b['application_number'];
            })         
        }

        if (e.target.classList.contains('sortLetter')) {
            if(isDescending) return arr.sort((a,b) => (b['doc_name'] > a['doc_name']) ? 1 : ((a['doc_name'] > b['doc_name']) ? -1 : 0));
            return arr.sort((a,b) => (a['doc_name'] > b['doc_name']) ? 1 : ((b['doc_name'] > a['doc_name']) ? -1 : 0)); 
        }

        if (e.target.classList.contains('sortDate')) {
            return arr.sort(function (a, b) {
                let dateA = new Date(a['application_reg_date']), dateB = new Date(b['application_reg_date'])
                if(isDescending) return dateB - dateA;
                return dateA - dateB;
            });
        }
    }


    handleRow = (e) => {
        e.preventDefault();
        console.log(e.target);
        
        if (e.target.nodeName === 'TD') {
            const active = document.querySelector('.active-row');
            if (active) {
                active.classList.remove('active-row');
            }
            e.target.parentNode.classList.toggle('active-row');
            // console.log(e.target);

            this.setState({
                activeRow: Number(e.target.parentNode.getAttribute('data-name'))
            });
        }
    }


    render() {
        return (
            <Fragment>
                <table className="search-menu__table">
                    <thead>
                        <tr onClick={this.sortTable.bind(this)}>
                            {TABLE_COLUMNS.map((element, index) =>
                                <th key={index} data-sort={element.sort} className={element.sort}>{element.label} 
                                <span>
                                    {/* <svg className="sort-svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 292.362 292.362"><path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFF"/></svg> */}
                                </span>
                                {/* <span>
                                    <img src="src\components\SearchMenu\img\caret-down.png" alt="sort" className="sort-img"/>  
                                </span> */}
                                    {/* <button>
                                        <img src="src\components\SearchMenu\img\caret-down.png" alt="sort" className="sort-img"/>                                    
                                    </button> */}
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody onClick={this.handleRow.bind(this)} id="scrollbar">
                        {this.state.rent.map((el, index) => <tr key={index} className="search-menu__row" data-name={el['object_id']} >
                            <td>{el['application_number']}</td>
                            <td>{el['doc_name']}</td>
                            <td>{new Date(el['application_reg_date']).toLocaleDateString("ru")}</td>
                        </tr>)}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default Table;
