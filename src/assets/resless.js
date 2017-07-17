
var num = 1 / window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale='+num+',minimum-scale='+num+',maximum-scale='+num+'" />')
var fontNum = document.documentElement.clientWidth / 10;
var html = document.getElementsByTagName('html')[0] ;
html.style.fontSize = fontNum + 'px';
