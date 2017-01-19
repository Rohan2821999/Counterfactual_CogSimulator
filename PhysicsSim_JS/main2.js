

var c2 = document.getElementById("myCanvas2");
var context2 = c2.getContext("2d")
context2.scale(0.6, 0.6)
var i_2 = document.createElement("input")
var dy_2 = 1;
var y_pos_2 = 0;
var x_pos_2 = 200;
var number_2 = 0
var values_2 = 0;

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
    url: 'PositionFile2.json',
    dataType: 'json',
    cache: false,
    success: function (data_2, status_2) {
        values_2 = data_2 
        // console.log(values_2);
        // console.log(status_2);
    },
    error: function (xhr,textStatus,err) {
        console.log(xhr);
        console.log(textStatus);
    }
})
function Layout_2() {
    
  
    i_2.setAttribute('type', "text")
    i_2.setAttribute('name', "username");
    i_2.setAttribute('value', "default");

    // Fill background with black color
    context2.fillStyle = "black"
    context2.fillRect(0, 0, 1000, 800)
    x_pos_2 = values_2[number_2][0]
    y_pos_2 = values_2[number_2][1]
    // Rectangular Colliders
    context2.fillStyle = "green"
    var Rec1 = context2.fillRect(400, 760, 200, 40)
    // Moving Ball

    context2.fillStyle = 'green'
    context2.beginPath()
    var Ball = context2.arc(x_pos_2, y_pos_2, 20, 0, 2 * Math.PI)
    context2.closePath()
    context2.fill()

    // Circular colliders
    context2.fillStyle = "grey"

    context2.beginPath()
    var Collider1body = context2.arc(145, 260, 20, 0, 2 * Math.PI)
    var Collider2body = context2.arc(25, 220, 20, 0, 2 * Math.PI)
    context2.closePath()
    context2.fill()


    context2.beginPath()
    var Collider3body = context2.arc(710, 260, 20, 0, 2 * Math.PI)
    var Collider4body = context2.arc(570, 180, 20, 0, 2 * Math.PI)
    context2.closePath()
    context2.fill()


    context2.beginPath()
    var Collider5body = context2.arc(870, 220, 20, 0, 2 * Math.PI)
    var Collider6body = context2.arc(790, 110, 20, 0, 2 * Math.PI)
    context2.closePath()
    context2.fill()


    context2.beginPath()
    var Collider7body = context2.arc(505, 280, 20, 0, 2 * Math.PI)
    var Collider8body = context2.arc(255, 240, 20, 0, 2 * Math.PI)
    context2.closePath()
    context2.fill()


    context2.beginPath()
    var Collider9body = context2.arc(405, 240, 20, 0, 2 * Math.PI)
    var Collider10body = context2.arc(970, 240, 20, 0, 2 * Math.PI)
    context2.closePath()
    context2.fill()


    context2.beginPath()
    var Collider11body = context2.arc(970, 620, 20, 0, 2 * Math.PI)
    var Collider12body = context2.arc(835, 660, 20, 0, 2 * Math.PI)
    context2.closePath()
    context2.fill()

    context2.beginPath()
    var Collider13body = context2.arc(755, 540, 20, 0, 2 * Math.PI)
    var Collider14body = context2.arc(650, 700, 20, 0, 2 * Math.PI)
    context2.closePath()
    context2.fill()


    context2.beginPath()
    var Collider15body = context2.arc(535, 580, 20, 0, 2 * Math.PI)
    var Collider16body = context2.arc(395, 620, 20, 0, 2 * Math.PI)
    context2.closePath()
    context2.fill()

    context2.beginPath()
    var Collider17body = context2.arc(235, 700, 20, 0, 2 * Math.PI)
    var Collider18body = context2.arc(25, 680, 20, 0, 2 * Math.PI)
    context2.closePath()
    context2.fill()

    context2.beginPath()
    var Collider19body = context2.arc(125, 720, 20, 0, 2 * Math.PI)
    context2.closePath()
    context2.fill()


    // Defining Sub-gate lines
    context2.fillStyle = "red"
    var Redline1 = context2.fillRect(0, 479, 58, 5)
    var Redline2 = context2.fillRect(380, 479, 55, 5)
    var Redline3 = context2.fillRect(574, 479, 56, 5)
    var Redline4 = context2.fillRect(955, 479, 45, 5)
    context2.fillStyle = "blue"
    var Blueline1 = context2.fillRect(195, 479, 50, 5)
    var Blueline2 = context2.fillRect(765, 479, 55, 5)


    // Triangular Colliders
    context2.fillStyle = "grey"
    context2.beginPath()
    context2.moveTo(125, 420)
    context2.lineTo(55, 480)
    context2.lineTo(195, 480)
    context2.closePath()
    context2.fill()


    context2.fillStyle = "grey"
    context2.beginPath()
    context2.moveTo(315, 420)
    context2.lineTo(245, 480)
    context2.lineTo(385, 480)
    context2.closePath()
    context2.fill()

    context2.fillStyle = "grey"
    context2.beginPath()
    context2.moveTo(505, 420)
    context2.lineTo(435, 480)
    context2.lineTo(575, 480)
    context2.closePath()
    context2.fill()

    context2.fillStyle = "grey"
    context2.beginPath()
    context2.moveTo(695, 420)
    context2.lineTo(625, 480)
    context2.lineTo(765, 480)
    context2.closePath()
    context2.fill()

    context2.fillStyle = "grey"
    context2.beginPath()
    context2.moveTo(885, 420)
    context2.lineTo(815, 480)
    context2.lineTo(955, 480)
    context2.closePath()
    context2.fill()

    if (number_2 < (values_2.length-1)) {
        number_2 = number_2 + 1
    }
    else {
        window.clearInterval(cb);
        cb = "";
        number_2 = 0
    }
}

/*loadJSONfile(function (response) {
    var actual_JSON = JSON.parse(response)
    alert(actual_JSON);
    console.log(actual_JSON);


})*/


function startCallback2() {
    cb = window.setInterval(Layout_2,10)
}

