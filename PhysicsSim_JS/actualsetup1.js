

var c3 = document.getElementById("myCanvas3");
var context3 = c3.getContext("2d")
context3.scale(0.6, 0.6)
var i_3 = document.createElement("input")
var dy_3 = 1;
var y_pos_3 = 0;
var x_pos_3 = 449;
var number_3 = 0
var values_3 = 0;

/*function loadJSONfile(callback) {

    var fileobj = new XMLHttpRequest()
    fileobj.overrideMimeType("application/json")
    fileobj.open('GET', 'PositionFile1.json', true) // PositionFile1 is the file to be read 
    fileobj.onreadystatechange == function () {
        if (fileobj.readyState == 4 && fileobj.status == "200") {

            callback(fileobj.responseText);
            alert('inloop');
        }
    }
    fileobj.send(null);
}

*/
$.ajax({
    url: 'PositionFile3.json',
    dataType: 'json',
    cache: false,
    success: function (data_3, status_3) {
        values_3 = data_3 
        // console.log(values_3);
        // console.log(status_3);
    },
    error: function (xhr,textStatus,err) {
        console.log(xhr);
        console.log(textStatus);
    }
})
function Layout_3() {
    
  
    i_3.setAttribute('type', "text")
    i_3.setAttribute('name', "username");
    i_3.setAttribute('value', "default");

    // Fill background with black color
    context3.fillStyle = "black"
    context3.fillRect(0, 0, 1000, 800)
    x_pos_3 = values_3[number_3][0]
    y_pos_3 = values_3[number_3][1]
    // Rectangular Colliders
    context3.fillStyle = "green"
    var Rec1 = context3.fillRect(400, 760, 200, 40)
    // Moving Ball

    context3.fillStyle = 'green'
    context3.beginPath()
    var Ball = context3.arc(x_pos_3, y_pos_3, 20, 0, 2 * Math.PI)
    context3.closePath()
    context3.fill()

    // Circular colliders
    context3.fillStyle = "grey"

    context3.beginPath()
    var Collider1body = context3.arc(145, 260, 20, 0, 2 * Math.PI)
    var Collider2body = context3.arc(25, 220, 20, 0, 2 * Math.PI)
    context3.closePath()
    context3.fill()


    context3.beginPath()
    var Collider3body = context3.arc(710, 260, 20, 0, 2 * Math.PI)
    var Collider4body = context3.arc(570, 180, 20, 0, 2 * Math.PI)
    context3.closePath()
    context3.fill()


    context3.beginPath()
    var Collider5body = context3.arc(870, 220, 20, 0, 2 * Math.PI)
    var Collider6body = context3.arc(790, 110, 20, 0, 2 * Math.PI)
    context3.closePath()
    context3.fill()


    context3.beginPath()
    var Collider7body = context3.arc(505, 280, 20, 0, 2 * Math.PI)
    var Collider8body = context3.arc(255, 240, 20, 0, 2 * Math.PI)
    context3.closePath()
    context3.fill()


    context3.beginPath()
    var Collider9body = context3.arc(405, 240, 20, 0, 2 * Math.PI)
    var Collider10body = context3.arc(970, 240, 20, 0, 2 * Math.PI)
    context3.closePath()
    context3.fill()


    context3.beginPath()
    var Collider11body = context3.arc(970, 620, 20, 0, 2 * Math.PI)
    var Collider12body = context3.arc(835, 660, 20, 0, 2 * Math.PI)
    context3.closePath()
    context3.fill()

    context3.beginPath()
    var Collider13body = context3.arc(755, 540, 20, 0, 2 * Math.PI)
    var Collider14body = context3.arc(650, 700, 20, 0, 2 * Math.PI)
    context3.closePath()
    context3.fill()


    context3.beginPath()
    var Collider15body = context3.arc(535, 580, 20, 0, 2 * Math.PI)
    var Collider16body = context3.arc(395, 620, 20, 0, 2 * Math.PI)
    context3.closePath()
    context3.fill()

    context3.beginPath()
    var Collider17body = context3.arc(235, 700, 20, 0, 2 * Math.PI)
    var Collider18body = context3.arc(25, 680, 20, 0, 2 * Math.PI)
    context3.closePath()
    context3.fill()

    context3.beginPath()
    var Collider19body = context3.arc(125, 720, 20, 0, 2 * Math.PI)
    context3.closePath()
    context3.fill()


    // Defining Sub-gate lines
    context3.fillStyle = "red"
    var Redline1 = context3.fillRect(0, 479, 58, 5)
    var Redline2 = context3.fillRect(380, 479, 55, 5)
    var Redline3 = context3.fillRect(574, 479, 56, 5)
    var Redline4 = context3.fillRect(955, 479, 45, 5)
    context3.fillStyle = "blue"
    var Blueline1 = context3.fillRect(195, 479, 50, 5)
    var Blueline2 = context3.fillRect(765, 479, 55, 5)


    // Triangular Colliders
    context3.fillStyle = "grey"
    context3.beginPath()
    context3.moveTo(125, 420)
    context3.lineTo(55, 480)
    context3.lineTo(195, 480)
    context3.closePath()
    context3.fill()


    context3.fillStyle = "grey"
    context3.beginPath()
    context3.moveTo(315, 420)
    context3.lineTo(245, 480)
    context3.lineTo(385, 480)
    context3.closePath()
    context3.fill()

    context3.fillStyle = "grey"
    context3.beginPath()
    context3.moveTo(505, 420)
    context3.lineTo(435, 480)
    context3.lineTo(575, 480)
    context3.closePath()
    context3.fill()

    context3.fillStyle = "grey"
    context3.beginPath()
    context3.moveTo(695, 420)
    context3.lineTo(625, 480)
    context3.lineTo(765, 480)
    context3.closePath()
    context3.fill()

    context3.fillStyle = "grey"
    context3.beginPath()
    context3.moveTo(885, 420)
    context3.lineTo(815, 480)
    context3.lineTo(955, 480)
    context3.closePath()
    context3.fill()

    if (number_3 < (values_3.length-1)) {
        number_3 = number_3 + 1
    }
    else {
        window.clearInterval(cb);
        cb = "";
        number_3 = 0
    }
    
}

/*loadJSONfile(function (response) {
    var actual_JSON = JSON.parse(response)
    alert(actual_JSON);
    console.log(actual_JSON);


})*/


function startCallback3() {
    cb = window.setInterval(Layout_3, 10)
}