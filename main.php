<?php


$to = "tkachuk.olexiy@gmail.com";
$subject = "New client Unicorn LLC!";
$charset = "utf-8";
$headerss ="Content-type: text/html; charset=$charset\r\n";
$headerss.="MIME-Version: 1.0\r\n";
$headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";


$msg = "Unicorn LLC \r\n";
$msg .= "<br> Call me";
$msg .= "<br> Name: ".$_POST["name"]."\r\n";
$msg .= "<br> Phone: ".$_POST["telephone"]."\n";

mail($to, $subject, $msg, $headerss);

?>
