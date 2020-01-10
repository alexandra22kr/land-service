import React, { Component, Fragment } from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import '../../css/all.css';
import '../Tabs/tabs.css';


const tabs = [
    {
        dataName: 1,
        title: 'Редагувати',
        value: 'Редагувати'
    },
    {
        dataName: 2,
        title: "Зв'язки",
        value: "Зв'язки"
    },
    {
        dataName: 3,
        title: 'Розрахунки',
        value: 'Розрахунки'
    },
    {
        dataName: 4,
        title: 'Звіти',
        value: 'Звіти'
    }
];


class Tabs extends Component {
    state = {
        activeTab: 1,
    }

    handleTab = (e) => {
        e.preventDefault();
        const active = document.querySelector('.active');
        if (active) active.classList.remove('active');
        e.target.classList.toggle('active');

        this.setState({
            activeTab: Number(e.target.getAttribute('data-name'))
        });
    }


    render() {
        const { activeTab } = this.state;
        return (
            <Fragment>
                <div className="tabs__menu">
                    {tabs.map(({ dataName, title }) => (
                        <button
                            key={dataName}
                            data-name={dataName}
                            onClick={this.handleTab.bind(this)}
                            className="tab"
                        >{title}</button>
                    ))}
                </div>
                <div className="tabs__content" id="scrollbar-2">
                    {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : activeTab === 3 ? <Tab3 /> : <Tab4 />}
                    {/* {`active tab is ${activeTab === 1 ? 'Редагувати' : activeTab === 2 ? "Зв'язки" : activeTab === 3 ? 'Розрахунки' : 'Звіти'}`} */}
                </div>
            </Fragment>
        );
    }
}


export default Tabs;
