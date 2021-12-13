// 控制应用生命周期和创建原生浏览器窗口的模组
const {app, BrowserWindow} = require('electron');
const path = require('path');

// 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被
// 垃圾回收的时候，window对象将会自动的关闭
let win;

function createWindow() {
  // 创建浏览器窗口。
  win = new BrowserWindow({
    width: 1400,
    height: 800,
    webPreferences: {
      // nodeIntegration: true,
      // preload: path.join(__dirname, 'preload.js')
    },
  });

  // 加载index.html文件
  if (process.env.NODE_ENV === 'debug') {
    console.log('start from dev-server...');
    win.loadURL('http://localhost:4200/');
    // 打开开发者工具
    win.webContents.openDevTools();
  } else {
    console.log('Start app from static files...');
    // win.loadURL(
    //   url.format({
    //     pathname: path.join('file:/', __dirname, '../www/index.html'),
    //     protocol: 'file:',
    //     slashes: true
    //   })
    //
    win.loadURL(path.join('file:/', __dirname, '../www/index.html'))
  }

  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null;
  });
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


// // 当全部窗口关闭时退出。
// app.on('window-all-closed', () => {
//   // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
//   // 否则绝大部分应用及其菜单栏会保持激活。
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });
//
// app.on('activate', () => {
//   // 在macOS上，当单击dock图标并且没有其他窗口打开时，
//   // 通常在应用程序中重新创建一个窗口。
//   if (win === null) {
//     createWindow();
//   }
// });



