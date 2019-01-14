const remote = require('electron').remote;
const dialog = remote.dialog;

//或者
// const {dialog} = require('electron')

function onClick_OpenFile() {
    const label = document.getElementById('label');
    label.innerText = dialog.showOpenDialog({ properties: ['openFile'] })
}

function onClick_CustomOpenFile() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '打开文件';
    options.message = '打开我的文件';
    options.buttonLabel = '选择';
    //  Mac OSX 默认目录是桌面
    options.defaultPath = '.';
    options.properties = ['openFile'];
    label.innerText = dialog.showOpenDialog(options)
}

function onClick_FileType() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '打开文件';
    options.buttonLabel = '选择';
    //  Mac OSX 默认目录是桌面
    options.defaultPath = '.';
    options.properties = ['openFile'];
    options.filters = [
        { name: '图像文件', extensions: ['jpg', 'png', 'gif'] },
        { name: '视频文件', extensions: ['mkv', 'avi', 'mp4'] },
        { name: '音频文件', extensions: ['mp3', 'wav'] },
        { name: '所有文件', extensions: ['*'] }
    ]
    label.innerText = dialog.showOpenDialog(options)
}

function onClick_OpenAndCreateDirectory() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '打开目录';
    //  createDirectory仅用于Mac OS 系统
    options.properties = ['openDirectory', 'createDirectory'];
    label.innerText = dialog.showOpenDialog(options)
}

function onClick_MultiSelection() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '选择多个文件和目录';
    options.message = '选择多个文件和目录';

    options.properties = ['openFile', 'multiSelections'];
    if (process.platform === 'darwin') {
        options.properties.push('openDirectory');
    }
    label.innerText = dialog.showOpenDialog(options)
}

function onClick_Callback() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '选择多个文件和目录';
    options.message = '选择多个文件和目录';

    options.properties = ['openFile', 'multiSelections'];
    if (process.platform === 'darwin') {
        options.properties.push('openDirectory');
    }
    dialog.showOpenDialog(options, (filePaths) => {
        for (var i = 0; i < filePaths.length; i++) {
            label.innerText += filePaths[i] + '\r\n';
        }

    });
}



//保存对话框
function onClick_Save() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '保存文件';
    options.buttonLabel = '保存';
    options.defaultPath = '.';
    //Only Mac OS X，输入文件名文本框左侧的标签文本
    options.nameFieldLabel = '请输入要保存的文件名';
    //是否显示标记文本框，默认值为True
    //options.showsTagField = false;
    //设置要过滤的图像类型  
    options.filters = [
        {name: '图像文件', extensions: ['jpg', 'png', 'gif']},
        {name: '视频文件', extensions: ['mkv', 'avi', 'mp4']},
        {name: '音频文件', extensions: ['mp3','wav']},
        {name: '所有文件', extensions: ['*']}
    ]
    //显示保存文件对话框，并将返回的文件名显示页面上
    label.innerText= dialog.showSaveDialog(options)
}

//保存对话框 - 回调
function onClick_SaveCallback() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '保存文件';
    options.buttonLabel = '保存';
    options.defaultPath = '.';
    //  Only Mac OS X
    options.nameFieldLabel = '请输入要保存的文件名';
    // 
    options.showsTagField = false;
    options.filters = [
        {name: '图像文件', extensions: ['jpg', 'png', 'gif']},
        {name: '视频文件', extensions: ['mkv', 'avi', 'mp4']},
        {name: '音频文件', extensions: ['mp3','wav']},
        {name: '所有文件', extensions: ['*']}
    ]
    dialog.showSaveDialog(options,(filename) => {
        label.innerText = filename;
    })
}