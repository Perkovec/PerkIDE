const os = require('os');
const {
  app,
  Menu,
} = require('electron');
const windowStateKeeper = require('electron-window-state');
const buildMenu = require('./menu');
const window = require('./window');

const platform = os.platform();

const appMenu = buildMenu();

const createMainWindow = () => {
  const windowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600,
  });

  const win = window.createWindow({ windowState });
  windowState.manage(win);
  return win;
};

let mainWindow // eslint-disable-line

const shouldQuit = app.makeSingleInstance(() => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  }
});

if (shouldQuit) {
  app.quit();
}

app.on('ready', () => {
  const createAppWindow = () => {
    Menu.setApplicationMenu(appMenu);
    mainWindow = createMainWindow();

    if (platform === 'darwin') {
      mainWindow.setSheetOffset(36);
    }
  };

  createAppWindow();
});

app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit();
  }
});
