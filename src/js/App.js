import React from 'react';
import './App.css';
import './index.css';
import Header from "./Header/Header";
import VersionSideBar from "./MyVersions/VersionSideBar/VersionSideBar";
import MenuBar from "./Header/MenuBar/MenuBar";


const App = () => {

    return (
        <div className='App'>
            <MenuBar/>
            <VersionSideBar/>
        </div>
    );
};

export default App;
