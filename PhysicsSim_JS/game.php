<?php
    if(!isset($_SESSION["idn"]) && isset($_GET["session_id"])) {
        $_SESSION["idn"] = $_GET["session_id"];
    }
?>
<!--The simulation setup works best in the Internet Explorer 8 browser, position issues are encountered while running in Chrome or Firefox-->
<html>
<head>
    <title> Simulation Layout </title>
    <!--Load in ajax and jquery related API's-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
</head>
<body>
    <div> SESSION ID: <?php echo $_SESSION["idn"] ?></div>
    <p align ="center" >
        <!--Separate canvases are created to depict separate scenes of the simulation-->
        <!-- Important to remember : every element created has an ID so that it can be called from anywhere in the script-->
        <canvas id  = "myCanvas" width="600" height="500" style="position:absolute; left: 100px; top: 100px" ></canvas>
        <canvas id = "myCanvas2" width="600" height="500" style="position:absolute; right: 100px; top: 100px"></canvas>
        <canvas id=  "myCanvas3" width="600" height="500" style="position:absolute; left: 400px; top: 100px"></canvas>
        <canvas id="myCanvas4" width="600" height="500" style="position:absolute; left: 400px; top: 100px"></canvas>
        <!-- Start Experiment Button on first page, when button is clicked (onclick) run a function startCallback from main.js and get button 'proceed' on next page. Other functions are also executed when 'start' is clicked (later in the code)-->
        <button id ="start"style="height: 100px;width: 400px;position: absolute; top: 200px;right: 600px"onclick="startCallback(); document.getElementById('proceed');">Start Experiment</button>
        <!-- slider element and Layout3 from actualsetup1.js is called on click of 'proceed' button. Similar for 'setup2' button-->
        <button id="proceed"style="height: 50px; width: 350px;position:absolute; bottom:50px; right: 600px"onclick="document.getElementById('slider');Layout_3()">Proceed with Experiment</button>
        <button id="setup2"style="height: 50px; width:150px;position:absolute;bottom:50px;right:200px"onclick="Layout_4()">Go to Next Setup</button>
    </p>
    <!-- div element just defines a section of the html page. It's just an encapsulating element for other elements-->
    <input type="hidden" id="question_num" value=""/>
    <input type="hidden" id="response" value=""/>
    <div class="slider-bg">
        <div id="slider" style="position:absolute; bottom: 50px">
            <!-- JS code below that stores array of possible question and randomly generates them in the Message() function-->
            <script type="text/javascript">
                var Questionsarray = [
                    "What's the Probability that the ball goes through one of the red gates and goes through the green goal",
                    "What's the Probability that the ball goes through red gate 1 or any other red gate and goes through the green goal?",
                    "What's the Probability that the ball goes through red gate 3 or any other red gate and goes through the green goal?"
                ]
                function Message() {
                    var q_num = Math.floor(Math.random()*Questionsarray.length);
                    $("#question_num").val(q_num);
                    return Questionsarray[q_num]
                }
                document.getElementById("slider").innerHTML = Message();
             </script>
            <!-- Creating a slider from 0-100 'input' allows to create different types of buttons and sliders. In the case we are using the 'range' type. On sumbit (onclick) it runs the trajectory (true trajectory (StartCallback3()function from a js script)) for the user-->
             :  <br/> 0
            <input type="range" name="probablity" id="user_input" min="0" max="100" />
                      100
            <input type="submit" id ="input" />
            <input type="submit" value="Run Simulation" id="run" style="display: none;"/>




        </div>
     </div>
     <!-- Page1 Intro -->
     <div id="page1" style="display:block">
         <h3>Welcome: </h3>
         <p> This study is part of a research project conducted by Ishita Dasgupta, Harvard University.</p>
         <p> We want to examine people's intuitions about objects falling and colliding naturally.</p>
         <p> Please read the instructions carefully and try to perform as well as you can.</p>
         <p> If you have any questions, please write an email to <a href="mailto:idasgupta@physics.harvard.edu"><font color="blue">Ishita Dasgupta</font></a></p><br>
         <button type="button" id="continue">Continue</button>
     </div>

     <!--Second page contains Ethics statement-->
     <div id="page2">
         <h3>Consent form for participation in this online experiment</h3>
         <p>
             Designed by: Ishita Dasgupta<br>
             Email: <font color="blue">idasgupta@physics.harvard.edu</font><br>
         </p>
         <p>Before you decide whether you want to take part, it is important for you to read the following information carefully.</p>
         <p>We are investigating how people perceive quantities intuitively. In this study you will perform a simple task in which you will have to judge how objects falling under gravity behave.</p>
         <p>The study will take about <b>10 minutes on average</b>. You will <b>receive $1</b> for your participation.</p>
         <p>We have done our best to comply with the <b>WeAreDynamo Guidelines</b> for Academic Requesters. </p>
         <p>If you have any suggestions on how we can improve this or future HITs, please do not hesitate to get in touch.</p>
         <br>
         <p>By clicking on the button below, you agree to the following:</p>
         <p>I have read the above information.</p>
         <p>I understand that I am free to withdraw from the study without penalty if I so wish.</p>
         <p>I understand that my information will be treated as strictly confidential and handled in accordance with the Data Protection Act 1998. </p>
         <p>I understand that the information I have submitted will be published as a report; confidentiality and anonymity will be maintained.</p>
         <br>
         <button type="button" name="button" id="agree" ;>Agree</button>
     </div>
     <!-- Page 3 -->
     <div id="page3">
         <h3>Instructions:</h3>
         <p><b>Please read the following instructions carefully: </b></p>
         <br>
         <p> The following study will ask you to estimate the probability of a ball falling through a final goal on it's way down through field of colliders.</p>
         <p>
             Two example trajectories will be shown in the beginning for you to get a feel for how heavy the ball is, how bouncy the ball is etc. For all the subsequent scenarios presented, the properties of the
             objects in the scene stay the same (as from the examples).
         </p>
         <p> There will be 6 scenarios and for each, you will be asked to submit  how likely you thinnk the ball is to satisfy the condition for that scenario (for eg. that it goes through a blue gate and goes through the final goal) on a slider going from 0 to 100. <br>
         <p>If you do not answer within 20 seconds, a "Timeout" box will appear and you will not be able to answer that trial any more. Click "OK" to go on to the next trial. For every judgement you make on time, you will get an additional bonus of $0.2. As the payment fee for this study is $0.8, you can earn $2 in total; so please try to answer the questions before the timeout.</p>
         <br>
         <br><br>

         <button type="button" name="button" id="task" ;> Go to task </button>

     </div>
    <!-- Defining Text Displays for different HTML pages -->
    <div id="textdisplay" style="position:absolute; top:50px;left:600px;font-size:20px">
        Below are sample setups of the simulation
    </div>
    <div id="textdisplay2" style="position:absolute; top:50px;left:550px;font-size:20px">
        Below is the actual simulation setup
        <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Setup 1:
    </div>
    <div id="textdisplay3" style="position:absolute; top:50px;left:550px;font-size:20px">
        <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Setup 2:
    </div>
    <div id="timer"style="position:absolute;bottom:10px">
        You have <span id="value">45</span> seconds to enter a value!
    </div>

    <script type="text/javascript">
        var time;
        function Timer() {
            var sec = 45;
            time = setInterval(function () {
                var a = new Date();
                document.getElementById("value").innerHTML = sec;

                if (sec == 00) {
                    sec = 00
                    $("#input").hide();
                    $("#setup2").show();
                }
                else {
                    sec--
                }
            }, 1000);
        }
        function StopTimer() {
            clearInterval(time)
        }


    </script>


    <!--Initially all elements are hidden except for 'start' button. When 'start' is clicked following things happen: 'start' button destroys itself, 'proceed' button is shown,'textdisplay' element is shown and second sample simualtion is run with a delay of 11000 ms-->
    <!-- Difference between calling any Layout() and an StartCallback(); Layout'n'() just shows the plinko setup but doesn't simulate it, StartCallback'n' runs the LayoutSetup multiple times per second to show moving effect of ball every time with a new x and y position-->
    <script type="text/javascript">
        $("#start").hide()
        $("#proceed").hide()
        $("#slider").hide()
        $("#textdisplay").hide()
        $("#textdisplay2").hide()
        $("#textdisplay3").hide()
        $("#setup2").hide()
        $("#timer").hide()

        $("#page2").hide();
        $("#page3").hide();
        $("#continue").click(function () {
            $("#page1").hide();
            $("#page2").show();

        })
        $("#task").click(function () {
            $("#page3").hide();
            $("#start").show();
        })
        $("#agree").click(function () {
            $("#page2").hide();
            $("#page3").show();

        })

        $("#start").click(function () {
            startCallback()
            $(this).remove();
            $("#proceed").show()
            $("#textdisplay").show()
            // setTimeout(function () {
            //     startCallback2()
            // }, 7000) // delay of 11 seconds to run StartCallback2 after StartCallback1. This delay is between sample setup simulations.

        });
        $("#proceed").click(function () { // when proceed button clicked after viewing sample simulations
            if(cb != "")
               window.clearInterval(cb);
            $(this).remove(); // button kills itself
            $("#slider").show(); // displays slider button for probablity user response
            $("#myCanvas").remove(); // removes canvas1 and canvas2
            $("#myCanvas2").remove();
            $("#textdisplay").hide();
            $("#textdisplay2").show(); // shows textdisplay2
            $("#setup2").hide();
            Timer()
            $("#timer").show()

        });
        $("#input").click(function () {
            $("#setup2").show();  // when user input clicked give option for setup2 and disp user input
            $("#timer").hide();
            StopTimer();
            $("#run").show()
            $("#run").click(function () {
                if(cb != "")
                    window.clearInterval(cb);

                startCallback3();
            })
            dispInput();
        });
        $("#setup2").click(function () { // works similarly only accesses different canvases and startCallback functions for a separate simulation
            if(cb != "")
                window.clearInterval(cb);
            $(this).remove();
            $("#proceed").hide();
            $("#textdisplay2").hide();
            $("#myCanvas3").remove();
            $("#textdisplay3").show();
            sec = 45;
            Timer()
            $("#timer").show()
            $("#input").click(function (){
                $("#run").click(function () {
                    if(cb != "")
                        window.clearInterval(cb);

                    startCallback4();
                })
            })
        })

        function submitData() {
            $.ajax({
                url: 'submit_data.php',
                type: "POST",
                data: {q_num: $("#question_num").val(), response: $("#response").val(), session_id: "<?php echo $_SESSION['idn'] ?>"},
                cache: false,
                success: function (data, status) { // if successfully reads in files
                    console.log("updated data");
                },
                error: function (xhr,textStatus,err) {
                    alert("error updating response: "+err);
                }
            })
        }

        function dispInput() {
            // displays user input on the page itself and links to 'setup2' button
            var val = document.getElementById("user_input").value
            $("#response").val(val);
            submitData();
            var value_input = "Great! Value you entered: "+val+"...You can now actually view the actual trajectoric simualtion by clicking Run simulation. Click on the button (right) for Setup 2";
            document.getElementById('display').innerHTML = value_input; // .innerHTML is actually used to allow interaction between JS variable and HTML page
            $("#setup2").click(function () {
                document.getElementById('display').innerHTML = ""
            })
        }
        // ignore function storedata() for now. It basically creates accesses a local php page to store data and save it on a database.If and when you decide on how to store user responses the code below could be helpful
        function storedata() {
            var xmlhttp;
            xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", "insert.php?pv="+document.getElementById("user_input"), false)
            xmlhttp.send(null)
        }
    </script>
    <!-- import following scripts defined below: -->
    <script type ='text/javascript'src ='main.js'></script>
    <script type='text/javascript' src='main2.js'></script>
    <script type='text/javascript' src='actualsetup1.js'></script>
    <script type="text/javascript" src="actualsetup2.js"></script>
    <p style="position:absolute;bottom:10px"><span id="display"></span></p>

</body>
</html>
