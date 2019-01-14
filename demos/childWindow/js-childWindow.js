function onClick_OpenNewWindow() {
    //  打开本地页面child.html
    win = window.open('./child.html')  
}

function onClick_OpenNewWindowUrl(){
    win = window.open('https://www.baidu.com')
}

//  创建并显示一个主窗口（标题，属性）
function onClick_OpenWindow1() {
    win = window.open('./child.html','新的窗口','width=300,height=200')
}
//  获得焦点
function onClick_Focus() {
    if(win != undefined) {
       win.focus();
    }
}
//  失去焦点
function onClick_Blur() {
    if(win != undefined) {
        win.blur();
    }
}
//  调用子窗口中的打印对话框
function onClick_PrintDialog() {
    if (win != undefined) {
        win.print();
    }
}
//  关闭子窗口
function onClick_Close() {
    if (win != undefined) {
        if(win.closed)
        {
            alert('子窗口已经关闭，不需要再关闭');
            return;
        }
        win.close();
    }
}




//主窗口与子窗口交互
const remote = require('electron').remote;
const dialog = remote.dialog;
const ipcMain = remote.ipcMain;
const {ipcRenderer} = require('electron')
//拦截窗口关闭事件
ipcMain.on('close', (event, str) => {
    alert("close:"+str);
});

function onClick_Message() {
//BrowserWindowProxy.postMessage 方法，该方法可以向指定的窗口传递任意类型的数据和来源（origin），如果不知来源，可以使用星号 '*' 代替
    win.postMessage('abcd', '*');
}

var label
function onLoad() {
    label = document.getElementById('label');
    //添加了一个 message 事件的 listener，当使用 postMessage 方法传递数据时，
    //接收数据的页面就会触发 message 事件，并通过事件回调函数参数的 data 属性得到传过来的数据。
    window.addEventListener('message', function (e) {
        //e.origin 表示传递过来的来源，就是 postMessage 函数的第 2 个参数值
        alert("message:"+e.origin);
        //e.data 表示传递过来的数据，就是 postMessage 函数的第 1 个参数值
        label.innerText = e.data
    });
}
function onClick_Close() {
    const win  =  remote.getCurrentWindow();
    //关闭前发送一条消息给主窗口，被ipcMain.on('close', (event, str) => {})接收
    ipcRenderer.send('close','窗口已经关闭');
    //关闭窗口
    win.close();
}

function onClick_Eval() {
    //通过 eval 方法设置 child 窗口中的 label 标签
    win.eval('label.innerText="hello world"')
}


//设置进度条
function onClick_Test() {
    const win = remote.getCurrentWindow();
    win.setProgressBar(0.5)
}