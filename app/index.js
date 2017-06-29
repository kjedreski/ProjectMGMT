const electron = module.require('electron')
const {app} = electron
const {BrowserWindow} = electron
const {ClientRequest} = electron
const console = require('console');

global.version = app.getVersion()


app.on('ready', function() {
    
    // will run a window when app starts
    let mainWindow = new BrowserWindow( {
        width: 300,
        height: 500,
        x: 100,
        y: 100,
        transparent: true,
        maximizable: false,
        toolbar: false
    })
    
    mainWindow.loadURL('file://' + __dirname + '/gui/index.html');
    

   app.console = new console.Console(process.stdout, process.stderr);
  
})
