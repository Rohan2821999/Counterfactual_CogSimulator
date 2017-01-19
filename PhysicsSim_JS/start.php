<?php
    if(!isset($_SESSION["idn"])) {
        $x=1;$_SESSION['idn']=strval(rand(0,10000));
        while ($x==1){
          if (file_exists('results/results_'.$_SESSION['idn'].'.csv')) {
            $_SESSION['idn']=strval(rand(0,10000));
          } else {
            $x=0;
          }
        }
    }

    header( 'Location: consent.php?session_id='.$_SESSION['idn'] ) ;
?>
