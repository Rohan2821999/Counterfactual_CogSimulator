<?php
    $my_file = 'results/results_'.$_POST['session_id'].'.csv';
    $handle = fopen($my_file, 'a') or die('Cannot open file:  '.$my_file);
    fwrite($handle,$_POST["q_num"].','.$_POST["response"]."\n");
    fclose($handle);
?>
{}