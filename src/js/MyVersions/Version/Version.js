import React from "react";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import classes from './Version.module.css'

const Version = props => {
    return (
        // <div className={classes.Version}>
        //     <Avatar style={{fontSize: '0.8rem'}}>{props.version.type}</Avatar>
        //     <h3 className={classes.VersionNumber}>{props.version.versionNumber}</h3>
        // </div>
        <ListItem className={classes.Version}>
            <ListItemAvatar>
                <Avatar style={{fontSize: '0.8rem'}}>{props.version.type}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.version.versionNumber} secondary="Jan 9, 2014"/>
        </ListItem>
    );
};

export default Version;
