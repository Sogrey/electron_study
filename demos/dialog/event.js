const remote = require('electron').remote;
const dialog = remote.dialog;

//或者
// const {dialog} = require('electron')



//消息提示
function onClick_MessageBox() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '信息';
    options.message = '这是一个信息提示框';
    label.innerText= dialog.showMessageBox(options)
}

//消息提示 - 设置图标
function onClick_MessageBoxIcon() {
    var options = {};
    options.title = '信息';
    options.message = '这是一个信息提示框';
    //  设置对话框的图标
    options.icon = '../imgs/i.png';   
    dialog.showMessageBox(options)
}

//消息提示 - 警告
function onClick_WarningBox() {
    var options = {};
    options.title = '警告';
    options.message = '这是一个警告提示框';
   // 设置对话框类型
    options.type = 'warning';
    dialog.showMessageBox(options)
}
//消息提示 - 警告 - 图标，多按钮
function onClick_WarningBoxIconAndMulBtns() {
    var options = {};
    options.title = '警告';
    options.message = '这是一个警告提示框';
    options.icon = '../imgs/warning.png';
    options.type = 'warning';
    options.buttons = ['按钮1','按钮2','按钮3','按钮4','按钮5']
    dialog.showMessageBox(options)
}

//消息提示 - 多按钮点击回调索引
// function onClick_WarningBoxIconAndMulBtnsCallback() {
//     var options = {};
//     options.title = '警告';
//     options.message = '这是一个警告提示框';
//     options.icon = '../imgs/warning.png';
//     options.type = 'warning';
//     options.buttons = ['按钮1','按钮2','按钮3','按钮4','按钮5']
//     //  获取单击按钮的索引，并将索引输出到控制台
//     dialog.showMessageBox(options,(response) => {
//         console.log('当前被单击的按钮索引是' + response);
//         label.innerText='当前被单击的按钮索引是' + response
//     })
// }
function onClick_WarningBoxIconAndMulBtnsCallback() {
    // var options = {};
    // options.title = '警告';
    // options.message = '这是一个警告提示框';
    // options.icon = '../imgs/warning.png';
    // options.type = 'warning';
    // options.buttons = ['按钮1','按钮2','按钮3','按钮4','按钮5']
    //  获取单击按钮的索引，并将索引输出到控制台
    dialog.showMessageBox({
        title :'警告',
        message: '这是一个警告提示框',
        icon : '../imgs/warning.png',
        type : 'warning',
        buttons : ['按钮1','按钮2','按钮3','按钮4','按钮5']
    },(response) => {
        console.log('当前被单击的按钮索引是' + response);
        label.innerText='当前被单击的按钮索引是' + response
    })
}

//消息提示 - error
//通过 showErrorBox 方法可以非常容易地显示错误对话框，该方法只有两个参数，第一个参数表示标题，第二个参数表示内容
function onClick_ErrorBox() {
    var options = {};
    options.title = '错误';
    options.content = '这是一个错误'
    dialog.showErrorBox('错误', '这是一个错误');
}