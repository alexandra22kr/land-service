import React, { Component, Fragment } from 'react';
import { Resize, ResizeHorizon } from "react-resize-layout";
import Media from "react-media";
import SearchMenu from './SearchMenu/SearchMenu';
import TabsContainer from './Tabs/TabsContainer';
import '../css/all.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: 1
    }
  }


  render() {
    return (
      <main className="main">
        <Media query="(max-width: 768px)">
          {matches =>
            matches ? (
              <Fragment>
                <SearchMenu />
                <TabsContainer />
              </Fragment>
            ) : (
              <Resize handleWidth="3px" handleColor="var(--main-color)">
              <ResizeHorizon minWidth="300px" width="400px">
                <div className="resize-horizon" data-min-width="100%" data-show="block">
                  <SearchMenu />
                </div>
              </ResizeHorizon>
              <ResizeHorizon minWidth="425px">
                <div className="resize-horizon" data-min-width="100%" data-show="block">
                  <TabsContainer />
                </div>
              </ResizeHorizon>
            </Resize>
              )
          }
        </Media>
        
      </main>
    );
  }
}


export default Main;




// class Main extends Component {


//   render() {
//     return (
//       <main className="main">
//         <SearchMenu />
//         <div id="separator" onMouseDown={this.dragElement}></div>
//         <TabsContainer />
//       </main>
//     );
//   }
// }


// export default Main;

// <Resize handleWidth="3px" handleColor="var(--main-color)">
//           <div className="resize" data-resize-id={0}>
//           <ResizeHorizon minWidth="300px" width="400px">
//             <div className="resize-horizon" data-min-width="100%" data-show="block">
//               <SearchMenu />
//             </div>
//           </ResizeHorizon>
//           <ResizeHorizon minWidth="420px">
//             <div className="resize-horizon" data-min-width="100%" data-show="block">
//               <TabsContainer />
//             </div>
//           </ResizeHorizon>
//           </div>
//         </Resize>