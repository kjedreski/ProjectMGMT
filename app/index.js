const electron = module.require('electron')
const {app} = electron
const {BrowserWindow} = electron


app.on('ready', function() {
    
    // will run a window when app starts
    let mainWindow = new BrowserWindow( {
        width: 300,
        height: 500,
        x: 100,
        y: 100,
        transparent: true
    })
    
    mainWindow.loadURL('file://' + __dirname + '/gui/index.html');
  
})
