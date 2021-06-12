import React from "react";
import classes from './Header.module.css';
import MenuBar from "./MenuBar/MenuBar";

const Header = () => {
    return (
        <React.Fragment>
            <div className={classes.Header}>
                <h1 className={classes.Title}>KoUpdater Plus +</h1>
            </div>
        </React.Fragment>
    );
};

export default Header;
