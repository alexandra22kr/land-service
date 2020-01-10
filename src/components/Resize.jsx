import React, { Component, Fragment } from 'react';
import { Resize, ResizeVertical, ResizeHorizon } from "react-resize-layout";
import SearchMenu from './SearchMenu/SearchMenu';
import TabsContainer from './Tabs/TabsContainer';
import '../css/all.css';

// class verticalResize extends Component {

//   render() {
//     return (
//       <Resize handleWidth="5px" handleColor="#777">
//         <ResizeHorizon width="100px">Horizon 1</ResizeHorizon>
//         <ResizeHorizon width="200px" minWidth="150px">
//           Horizon 2
//         </ResizeHorizon>
//         <ResizeHorizon minWidth="5px">Horizon 3</ResizeHorizon>
//       </Resize> ,
//       document.getElementById("separator")
//     );
//   }
// }


class Main extends Component {





  render() {
    return (
      <Fragment>
        
          {/* //   <SearchMenu />
      //   <div id="separator">
      //     <verticalResize />
      //   </div>

      //   <Resize>
      //     <verticalResize><div id="separator"></div></verticalResize>
      //   </Resize>
      //   <TabsContainer /> */}


          {/* <main className="main"> */}
          <Resize className="main">
            <ResizeHorizon>
              <SearchMenu />
            </ResizeHorizon>
            <ResizeHorizon>
              <TabsContainer />
            </ResizeHorizon>
          </Resize>
            {/* </main> */}
        
      </Fragment>
    );
  }
}


export default Main;

