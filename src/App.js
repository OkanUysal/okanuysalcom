import React, { Component } from 'react';
import InfoPanel from './components/info-panel/InfoPanel';
import DetailTabPanel from './components/detail-tabpanel/DetailTabPanel';
import SideBar from './components/sidebar/sidebar'

class App extends Component {
    render() {
        return (
            <div className="App">
                <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                <DetailTabPanel></DetailTabPanel>
            </div>
        );
    }
}

export default App;
