import React, { Component, Fragment } from "react";
// import axios from 'axios';
import "../../css/all.css";
import "../Tabs/tabs.css";

const tabContent = [
  {
    headline: "Реквізити договору",
    items: [
      {
        itemTitle: "Тип договору",
        itemValue: "цуасцу"
      },
      {
        itemTitle: "Номер договору",
        itemValue: "324"
      },
      {
        itemTitle: "Дата договору",
        itemValue: "2424"
      },
      {
        itemTitle: "Тема договору",
        itemValue: "упму"
      },
      {
        itemTitle: "Реэстратор",
        itemValue: "купмук"
      }
    ]
  },
  {
    headline: "Дані по ділянці",
    items: [
      {
        itemTitle: "Кадастровий номер",
        itemValue: "23"
      },
      {
        itemTitle: "Категорія земель",
        itemValue: "ацука"
      },
      {
        itemTitle: "Площа в га.",
        itemValue: "4334"
      }
    ]
  },
  {
    headline: "Дані по власнику",
    items: [
      {
        itemTitle: "ПіБ / назва юр. особи",
        itemValue: "кпку"
      },
      {
        itemTitle: "ЕДРПОУ",
        itemValue: "купу"
      }
    ]
  },
  {
    headline: "Строки дій договору",
    items: [
      {
        itemTitle: "Початок дії",
        itemValue: "4"
      },
      {
        itemTitle: "Кінцевий термін",
        itemValue: "23"
      },
      {
        itemTitle: "Місяців",
        itemValue: "3"
      }
    ]
  },
  {
    headline: "Фінансові розрахунки",
    items: [
      {
        itemTitle: "Орендна плата %",
        itemValue: ""
      },
      {
        itemTitle: "Орендна плата за умовою %",
        itemValue: ""
      }
    ]
  }
];

class Tab1 extends Component {
  render() {
    return (
      <Fragment>
        <ul className="list">
          <li className="item">
            <h3 className="item__title">Реквізити договору</h3>
            <ul className="info-list">
              <li className="info-list__item">
                <h4 className="info-list__title">Тип договору</h4>
                <p className="info-list__text">апва</p>
              </li>
              <li className="info-list__item">
                <h4 className="info-list__title">Номер договору</h4>
                <p className="info-list__text">2322</p>
              </li>
              <li className="info-list__item">
                <h4 className="info-list__title">Дата договору</h4>
                <p className="info-list__text">09.10.2019</p>
              </li>
              <li className="info-list__item">
                <h4 className="info-list__title">Тема договору</h4>
                <p className="info-list__text">пвапва</p>
              </li>
            </ul>
          </li>
          <li className="item">
            <h3 className="item__title">Дані по ділянці</h3>
            <ul className="info-list">
              <li className="info-list__item">
                <h4 className="info-list__title">Кадастровий номер</h4>
                <p>2322</p>
              </li>
              <li className="info-list__item">
                <h4 className="info-list__title">Категорія земель</h4>
                <p>2322</p>
              </li>
              <li className="info-list__item">
                <h4 className="info-list__title">Площа в га.</h4>
                <p>2322</p>
              </li>
            </ul>
          </li>
          <li className="item">
            <h3 className="item__title">Дані по власнику</h3>
            <ul className="info-list">
              <li className="info-list__item">
                <h4 className="info-list__title">ПіБ / назва юр. особи</h4>
                <p>апва</p>
              </li>
              <li className="info-list__item">
                <h4 className="info-list__title">ЕДРПОУ</h4>
                <p>2322</p>
              </li>
            </ul>
          </li>
          <li className="item">
            <h3 className="item__title">Строки дій договору</h3>
            <ul className="info-list">
              <li className="info-list__item">
                <h4 className="info-list__title">Початок дії</h4>
                <p>2322</p>
              </li>
              <li className="info-list__item">
                <h4 className="info-list__title">Кінцевий термін</h4>
                <p>2322</p>
              </li>
              <li className="info-list__item">
                <h4 className="info-list__title">Місяців</h4>
                <p>2322</p>
              </li>
            </ul>
          </li>
          <li className="item">
            <h3 className="item__title">Фінансові розрахунки</h3>
            <ul className="info-list">
              <li className="info-list__item">
                <h4 className="info-list__title">Орендна плата %</h4>
                <p>2322</p>
              </li>
              <li className="info-list__item">
                <h4 className="info-list__title">Орендна плата за умовою %</h4>
                <p>2322</p>
              </li>
            </ul>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default Tab1;
