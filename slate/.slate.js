// 定义操作
// 全屏
var fullScreen = slate.operation('move', {
    x: "screenOriginX",
    y: "screenOriginY",
    width: 'screenSizeX',
    height: 'screenSizeY'
});

// 左半屏
var leftScreen = slate.operation('move', {
    x: 'screenOriginX',
    y: 'screenOriginY',
    width: 'screenSizeX/2',
    height: 'screenSizeY'
});

// 右半屏
var rightScreen = slate.operation('move', {
    x: 'screenSizeX/2',
    y: 'screenOriginY',
    width: 'screenSizeX/2',
    height: 'screenSizeY'
});

// 上半屏
var topScreen = slate.operation('move', {
    x: 'screenOriginX',
    y: 'screenOriginY',
    width: 'screenSizeX',
    height: 'screenSizeY/2'
});

// 下半屏
var bottomScreen = slate.operation('move', {
    x: 'screenOriginX',
    y: 'screenOriginY + screenSizeY/2',
    width: 'screenSizeX',
    height: 'screenSizeY'
});

// 左上 1/4 屏
var left_top = slate.operation('move', {
    x: 'screenOriginX',
    y: 'screenOriginY',
    width: 'screenSizeX/2',
    height: 'screenSizeY/2'
});

// 右上 1/4屏
var right_top = slate.operation('move', {
    x: 'screenOriginX + screenSizeX/2',
    y: 'screenOriginY',
    width: 'screenSizeX/2',
    height: 'screenSizeY/2'
});

// 左下 1/4屏
var left_bottom = slate.operation('move', {
    x: 'screenOriginX',
    y: 'screenOriginY + screenSizeY/2',
    width: 'screenSizeX/2',
    height: 'screenSizeY/2'
});

// 右下 1/4 屏幕
var right_bottom = slate.operation('move', {
    x: 'screenSizeX/2',
    y: 'screenOriginY + screenSizeY/2',
    width: 'screenSizeX/2',
    height: 'screenSizeY/2'
});

// 切换显示器
var nextScreen = slate.operation('move', {
    x: "screenOriginX",
    y: "screenOriginY",
    width: 'screenSizeX',
    height: 'screenSizeY',
    screen: 'next'
});

// 创建布局
var codeLayout = slate.layout('codeLayout', {
    "iTerm2": {
        operations: [slate.operation('move', {
            x: "screenOriginX",
            y: "screenOriginY",
            width: 'screenSizeX',
            height: 'screenSizeY',
            screen: '1'
        })]
    },
    "Sublime Text": {
        operations: [slate.operation('move', {
            x: "screenOriginX",
            y: "screenOriginY",
            width: 'screenSizeX',
            height: 'screenSizeY',
            screen: '0'
        })]
    },
    Code: {
        operations: [slate.operation('move', {
            x: "screenOriginX",
            y: "screenOriginY",
            width: 'screenSizeX',
            height: 'screenSizeY',
            screen: '0'
        })]
    }

});

var pushRight = slate.operation("push", {
    "direction": "right",
    "style": "bar-resize:screenSizeX/3"
});
var pushLeft = slate.operation("push", {
    "direction": "left",
    "style": "bar-resize:screenSizeX/3"
});
var pushTop = slate.operation("push", {
    "direction": "top",
    "style": "bar-resize:screenSizeY/2"
});

// 键盘绑定
// slate.bind("1:ctrl", function(win) {
//     // here win is a reference to the currently focused window
//     if (win.title() === "OMG I WANT TO BE FULLSCREEN") {
//         win.doOperation(fullscreen);
//         return;
//     }
//     var appName = win.app().name();
//     if (appName === "iTerm") {
//         win.doOperation(pushRight);
//     } else if (appName === "Google Chrome") {
//         win.doOperation(pushLeft);
//     } else {
//         win.doOperation(pushTop);
//     }
// });
slate.bind('m:ctrl,alt,cmd', function(win) {
    win.doOperation(fullScreen);
});
slate.bind('left:ctrl,alt,cmd', function(win) {
    win.doOperation(leftScreen);
});
slate.bind('right:ctrl,alt,cmd', function(win) {
    win.doOperation(rightScreen);
});
slate.bind('up:ctrl,alt,cmd', function(win) {
    win.doOperation(topScreen);
});
slate.bind('down:ctrl,alt,cmd', function(win) {
    win.doOperation(bottomScreen);
});
slate.bind('1:ctrl,alt,cmd', function(win) {
    win.doOperation(left_top);
});
slate.bind('2:ctrl,alt,cmd', function(win) {
    win.doOperation(right_top);
});
slate.bind('3:ctrl,alt,cmd', function(win) {
    win.doOperation(left_bottom);
});
slate.bind('4:ctrl,alt,cmd', function(win) {
    win.doOperation(right_bottom);
});
slate.bind('n:ctrl,alt,cmd', function(win) {
    win.doOperation(nextScreen);
});
slate.bind('c:ctrl,alt,shift', function(win) {
    win.doOperation('layout', {
        name: codeLayout
    });
});

slate.default(["1920x1080", "1280x800"], codeLayout);