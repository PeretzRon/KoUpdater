// for communication between render process to main process

const {ipcRenderer, contextBridge, app} = require('electron');

contextBridge.exposeInMainWorld('electron', {
    notificationApi: {
        sendNotification(message) {
            ipcRenderer.send('notify', message);
        }
    }
});
