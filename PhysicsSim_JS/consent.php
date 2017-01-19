<?php
    if(!isset($_SESSION["idn"]) && isset($_GET["session_id"])) {
        $_SESSION["idn"] = $_GET["session_id"];
    }
?>
<html>
<head>
    <title> Simulation Layout </title>
    <!--Load in ajax and jquery related API's-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
</head>
<body> 
  <div> SESSION ID: <?php echo $_SESSION["idn"] ?></div>
  <FORM name="form1" METHOD="post" ACTION="game.php?session_id=<?php echo $_SESSION['idn'] ?>">
    Consent form goes here.
    <center>
      <input type="checkbox" name="field01" required> 
      <b>I understand the procedures described above. My questions have been answered to my satisfaction, and I agree to participate in this study.</b>
    </center>
    <div id="sub">
      <input type="submit" name="next1" id="next1" value="Submit">
    </div>
  </FORM>
</body>
</html>