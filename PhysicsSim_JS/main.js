/* main'(i)' files are for the sample simulation setups 
This file accesses the first canvas.
uses scale to scale down all positions since sizes of setups are different from actual python simulation setup
*/

// for sample simulation setups only StartCallback functions are called and not the Layout functions since we just want to run the sample simulations setups and not show a static world with initial position of ball (unlike in actualsetups)
var c = document.getElementById("myCanvas");
var context = c.getContext("2d")
context.scale(0.6, 0.6)
var i = document.createElement("input")
var dy = 1;
var y_pos = 0;
var x_pos = 400;
var number = 0
var values = 0;
var cb = "";

/* Using ajax call to read in positionfile of moving ball created by the Python Simulation setup. After the python simualtion is run, a positionfile (for first trajectory) is created in the format of 
JSON, since JSON is most easily readably by JS 

*/
$.ajax({
    url: 'PositionFile1.json',
    dataType: 'json',
    cache: false,
    success: function (data, status) { // if successfully reads in files
        values = data    // store positions in value array
        // console.log(values);
        // console.log(status);
    },
    error: function (xhr,textStatus,err) {
        console.log(xhr);
        console.log(textStatus); // or display error status on browser console
    }
})
function Layout() {
    i.setAttribute('type', "text")
    i.setAttribute('name', "username");
    i.setAttribute('value', "default");

    // Fill background with black color
    context.fillStyle = "black"
    context.fillRect(0, 0, 1000, 800)
    x_pos = values[number][0]
    y_pos = values[number][1]
    // Rectangular Colliders
    context.fillStyle = "green"
    var Rec1 = context.fillRect(400, 760, 200, 40)
    // Moving Ball

    context.fillStyle = 'green'
    context.beginPath()
    var Ball = context.arc(x_pos, y_pos, 20, 0, 2 * Math.PI)
    context.closePath()
    context.fill()

    // Circular colliders
    context.fillStyle = "grey"

    context.beginPath()
    var Collider1body = context.arc(145, 260, 20, 0, 2 * Math.PI)
    var Collider2body = context.arc(25, 220, 20, 0, 2 * Math.PI)
    context.closePath()
    context.fill()


    context.beginPath()
    var Collider3body = context.arc(710, 260, 20, 0, 2 * Math.PI)
    var Collider4body = context.arc(570, 180, 20, 0, 2 * Math.PI)
    context.closePath()
    context.fill()


    context.beginPath()
    var Collider5body = context.arc(870, 220, 20, 0, 2 * Math.PI)
    var Collider6body = context.arc(790, 110, 20, 0, 2 * Math.PI)
    context.closePath()
    context.fill()


    context.beginPath()
    var Collider7body = context.arc(505, 280, 20, 0, 2 * Math.PI)
    var Collider8body = context.arc(255, 240, 20, 0, 2 * Math.PI)
    context.closePath()
    context.fill()


    context.beginPath()
    var Collider9body = context.arc(405, 240, 20, 0, 2 * Math.PI)
    var Collider10body = context.arc(970, 240, 20, 0, 2 * Math.PI)
    context.closePath()
    context.fill()


    context.beginPath()
    var Collider11body = context.arc(970, 620, 20, 0, 2 * Math.PI)
    var Collider12body = context.arc(835, 660, 20, 0, 2 * Math.PI)
    context.closePath()
    context.fill()

    context.beginPath()
    var Collider13body = context.arc(755, 540, 20, 0, 2 * Math.PI)
    var Collider14body = context.arc(650, 700, 20, 0, 2 * Math.PI)
    context.closePath()
    context.fill()


    context.beginPath()
    var Collider15body = context.arc(535, 580, 20, 0, 2 * Math.PI)
    var Collider16body = context.arc(395, 620, 20, 0, 2 * Math.PI)
    context.closePath()
    context.fill()

    context.beginPath()
    var Collider17body = context.arc(235, 700, 20, 0, 2 * Math.PI)
    var Collider18body = context.arc(25, 680, 20, 0, 2 * Math.PI)
    context.closePath()
    context.fill()

    context.beginPath()
    var Collider19body = context.arc(125, 720, 20, 0, 2 * Math.PI)
    context.closePath()
    context.fill()


    // Defining Sub-gate lines
    context.fillStyle = "red"
    var Redline1 = context.fillRect(0, 479, 58, 5)
    var Redline2 = context.fillRect(380, 479, 55, 5)
    var Redline3 = context.fillRect(574, 479, 56, 5)
    var Redline4 = context.fillRect(955, 479, 45, 5)
    context.fillStyle = "blue"
    var Blueline1 = context.fillRect(195, 479, 50, 5)
    var Blueline2 = context.fillRect(765, 479, 55, 5)


    // Triangular Colliders
    context.fillStyle = "grey"
    context.beginPath()
    context.moveTo(125, 420)
    context.lineTo(55, 480)
    context.lineTo(195, 480)
    context.closePath()
    context.fill()


    context.fillStyle = "grey"
    context.beginPath()
    context.moveTo(315, 420)
    context.lineTo(245, 480)
    context.lineTo(385, 480)
    context.closePath()
    context.fill()

    context.fillStyle = "grey"
    context.beginPath()
    context.moveTo(505, 420)
    context.lineTo(435, 480)
    context.lineTo(575, 480)
    context.closePath()
    context.fill()

    context.fillStyle = "grey"
    context.beginPath()
    context.moveTo(695, 420)
    context.lineTo(625, 480)
    context.lineTo(765, 480)
    context.closePath()
    context.fill()

    context.fillStyle = "grey"
    context.beginPath()
    context.moveTo(885, 420)
    context.lineTo(815, 480)
    context.lineTo(955, 480)
    context.closePath()
    context.fill()

  
    if (number < (values.length-1)) {
        number = number + 1
    }
    else {
        window.clearInterval(cb);
        cb = "";
        number = 0
        startCallback2();
    }
}

/*loadJSONfile(function (response) {
    var actual_JSON = JSON.parse(response)
    alert(actual_JSON);
    console.log(actual_JSON);


})*/


function startCallback() {
    cb = window.setInterval(Layout,10);
}

