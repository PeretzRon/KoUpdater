const {app, BrowserWindow} = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    });
}

app.whenReady()
    .then(() => {
        createWindow();
    });


function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 724,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    });

    win.loadFile('index.html')
        .then(value => {
            console.log("Windows loaded");
        });
    // isDev && win.webContents.openDevTools(); // open web deb tool automatically
}

