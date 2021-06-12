import React, {useEffect} from "react";
import classes from './VersionSideBar.module.css';
import Version from "../Version/Version";

const VersionSideBar = () => {

    const [versionsList, setVersionList] = new React.useState([]);

    useEffect(() => {
        const list = [];
        list.push({
            id: new Date().getMilliseconds(),
            type: 'VS',
            versionNumber: '5.0.0.746'
        });

        list.push({
            id: new Date().getMilliseconds(),
            type: 'VS',
            versionNumber: '5.0.0.5680'
        });

        list.push({
            id: new Date().getMilliseconds(),
            type: 'ROC',
            versionNumber: '5.0.0.190'
        });

        setVersionList(list);
    }, []);

    const versions = versionsList.map(version => {
        return <Version key={version.id} version={version}/>;
    });

    return (
        <div className={classes.VersionSideBar}>
            {versions}
        </div>
    );
};

export default VersionSideBar;
