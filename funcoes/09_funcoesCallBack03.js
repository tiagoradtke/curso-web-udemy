//exemplo callback no browser
document.getElementsByTagName('body')[0].onclick = function (e){console.log("o evento ocorreu")}

//document. getElementById('body')[0] = function (e){console.log("o evento ocorreu")}

document.getElementsByTagName('body')[0].onclick = function (e){alert('test')}

