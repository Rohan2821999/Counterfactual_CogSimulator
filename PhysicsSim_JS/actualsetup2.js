

var c4 = document.getElementById("myCanvas4");
var context4 = c4.getContext("2d")
context4.scale(0.6, 0.6)
var i_4 = document.createElement("input")
var dy_4 = 1;
var y_pos_4 = 0;
var x_pos_4 = 21;
var number_4 = 0
var values_4 = 0;

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
    url: 'PositionFile4.json',
    dataType: 'json',
    cache: false,
    success: function (data_4, status_4) {
        values_4 = data_4
        // console.log(values_4);
        // console.log(status_4);
    },
    error: function (xhr,textStatus,err) {
        console.log(xhr);
        console.log(textStatus);
    }
})
function Layout_4() {
    $("#run").hide();  
  
    i_4.setAttribute('type', "text")
    i_4.setAttribute('name', "username");
    i_4.setAttribute('value', "default");

    // Fill background with black color
    context4.fillStyle = "black"
    context4.fillRect(0, 0, 1000, 800)
    x_pos_4 = values_4[number_4][0]
    y_pos_4 = values_4[number_4][1]
    // Rectangular Colliders
    context4.fillStyle = "green"
    var Rec1 = context4.fillRect(400, 760, 200, 40)
    // Moving Ball

    context4.fillStyle = 'green'
    context4.beginPath()
    var Ball = context4.arc(x_pos_4, y_pos_4, 20, 0, 2 * Math.PI)
    context4.closePath()
    context4.fill()

    // Circular colliders
    context4.fillStyle = "grey"

    context4.beginPath()
    var Collider1body = context4.arc(160, 220, 20, 0, 2 * Math.PI)
    var Collider2body = context4.arc(50, 230, 20, 0, 2 * Math.PI)
    context4.closePath()
    context4.fill()


    context4.beginPath()
    var Collider3body = context4.arc(790, 250, 20, 0, 2 * Math.PI)
    var Collider4body = context4.arc(520, 200, 20, 0, 2 * Math.PI)
    context4.closePath()
    context4.fill()


    context4.beginPath()
    var Collider5body = context4.arc(890, 290, 20, 0, 2 * Math.PI)
    var Collider6body = context4.arc(790, 110, 20, 0, 2 * Math.PI)
    context4.closePath()
    context4.fill()


    context4.beginPath()
    var Collider7body = context4.arc(505, 280, 20, 0, 2 * Math.PI)
    var Collider8body = context4.arc(255, 220, 20, 0, 2 * Math.PI)
    context4.closePath()
    context4.fill()


    context4.beginPath()
    var Collider9body = context4.arc(405, 240, 20, 0, 2 * Math.PI)
    var Collider10body = context4.arc(970, 270, 20, 0, 2 * Math.PI)
    context4.closePath()
    context4.fill()


    context4.beginPath()
    var Collider11body = context4.arc(970, 620, 20, 0, 2 * Math.PI)
    var Collider12body = context4.arc(835, 660, 20, 0, 2 * Math.PI)
    context4.closePath()
    context4.fill()

    context4.beginPath()
    var Collider13body = context4.arc(755, 540, 20, 0, 2 * Math.PI)
    var Collider14body = context4.arc(650, 700, 20, 0, 2 * Math.PI)
    context4.closePath()
    context4.fill()


    context4.beginPath()
    var Collider15body = context4.arc(535, 580, 20, 0, 2 * Math.PI)
    var Collider16body = context4.arc(395, 620, 20, 0, 2 * Math.PI)
    context4.closePath()
    context4.fill()

    context4.beginPath()
    var Collider17body = context4.arc(235, 700, 20, 0, 2 * Math.PI)
    var Collider18body = context4.arc(25, 640, 20, 0, 2 * Math.PI)
    context4.closePath()
    context4.fill()

    context4.beginPath()
    var Collider19body = context4.arc(125, 740, 20, 0, 2 * Math.PI)
    context4.closePath()
    context4.fill()


    // Defining Sub-gate lines
    context4.fillStyle = "red"
    var Redline1 = context4.fillRect(0, 479, 58, 5)
    var Redline2 = context4.fillRect(380, 479, 55, 5)
    var Redline3 = context4.fillRect(574, 479, 56, 5)
    var Redline4 = context4.fillRect(955, 479, 45, 5)
    context4.fillStyle = "blue"
    var Blueline1 = context4.fillRect(195, 479, 50, 5)
    var Blueline2 = context4.fillRect(765, 479, 55, 5)


    // Triangular Colliders
    context4.fillStyle = "grey"
    context4.beginPath()
    context4.moveTo(125, 420)
    context4.lineTo(55, 480)
    context4.lineTo(195, 480)
    context4.closePath()
    context4.fill()


    context4.fillStyle = "grey"
    context4.beginPath()
    context4.moveTo(315, 420)
    context4.lineTo(245, 480)
    context4.lineTo(385, 480)
    context4.closePath()
    context4.fill()

    context4.fillStyle = "grey"
    context4.beginPath()
    context4.moveTo(505, 420)
    context4.lineTo(435, 480)
    context4.lineTo(575, 480)
    context4.closePath()
    context4.fill()

    context4.fillStyle = "grey"
    context4.beginPath()
    context4.moveTo(695, 420)
    context4.lineTo(625, 480)
    context4.lineTo(765, 480)
    context4.closePath()
    context4.fill()

    context4.fillStyle = "grey"
    context4.beginPath()
    context4.moveTo(885, 420)
    context4.lineTo(815, 480)
    context4.lineTo(955, 480)
    context4.closePath()
    context4.fill()

    if (number_4 < (values_4.length-1)) {
        number_4 = number_4 + 1
    }
    else {
        window.clearInterval(cb);
        cb = "";
        number_4 = 0
        window.location.reload("http://turkgate.gershmanlab.webfactional.com/TurkGate/codes/generate.php?stamp=10814856");
    }    
}

/*loadJSONfile(function (response) {
    var actual_JSON = JSON.parse(response)
    alert(actual_JSON);
    console.log(actual_JSON);


})*/


function startCallback4() {
    cb = window.setInterval(Layout_4, 10);
}