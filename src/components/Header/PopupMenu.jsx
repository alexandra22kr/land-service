import React, { Component, Fragment } from 'react';
import '../../css/all.css';
import './css/popupMenu.css'
// import './css/searchMenu.css';

class PopupMenu extends Component {
    render() {
        return (
            <Fragment>
                <button className="btn-more">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="512" height="512"><path d="M30 16c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zM30 44c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#1D65EB" /></svg>
                </button>
                <div className="popup">
                    <h2 className="popup__departmen">Відділ організаційного забезпечення приймальні Київської міської ради із земельних питань</h2>
                </div>
            </Fragment>
        );
    }
}

export default PopupMenu;


