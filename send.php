<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>wulpers</title>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,900" rel="stylesheet">
	<link rel="shortcut icon" href="image/header__logo.jpg"/>
	<link rel="stylesheet" href="style.css">
</head>
<body>
<main class="send">
    <img src="./image/3/header__img.svg" alt="wulpers" class="send__img">
    <h2><span>Thanks!</span><br> We will communicate to you soon</h2>
    <button id="botonVolver" class="btn botonVolver">Home</button>
</main>




<?php

    
    
    $email = $_POST["email"];
     
    $mensaje =  "Hola, se ha registrado un nuevo usuario, sus datos son los siguientes..." .
                " correo: " . $email;


    $asunto = "Un nuevo suscriptor";
    $destinatario = "advisor@wulpers.com";
    // echo $destinatario . $asunto . $mensaje ;
    mail($destinatario, $asunto, $mensaje);
?> 

    <script src="js/volver.js"></script>
</body>
</html>


