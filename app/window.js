const path = require('path');
const { BrowserWindow } = require('electron');
const config = require('./config');

class Window {
  createWindow({
    homepage = `file://${path.join(__dirname, 'index.html')}`,
    windowState = {},
  } = {}) {
    const win = new BrowserWindow(Object.assign({
      name: 'Gittergram',
      width: 800,
      height: 600,
      minWidth: 430,
      minHeight: 250,
      // titleBarStyle: 'hidden-inset'
    }, windowState));

    win.loadURL(homepage);

    win.$config = config;

    return win;
  }
}

module.exports = new Window();
