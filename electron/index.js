const { app, BrowserWindow } = require('electron')
const { ipcMain } = require('electron')


let io = null;
function createWindow () {

  let win = new BrowserWindow({ width: 800, height: 600, frame: true })

  if(app.isPackaged){
    win.loadFile('build/index.html')
  }else {
    win.loadURL("http://localhost:3000");
  }
  
  
  win.webContents.on('did-finish-load', () => {
    win.webContents.send('from-main', 'finished loading')
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }

  if(io){
    io.close();
    io = null;
  }
})

ipcMain.on('start-websocket-server', (event, arg) => {
  io = require('./initSocketIo')(arg.port)
})


ipcMain.on('send-websocket-event', (event, arg) => {
    io.emit(arg.channel, arg.message);
})


ipcMain.on('close-websocket', (event, arg) => {
  if(io){
    io.close();
    io = null;
  }
})
