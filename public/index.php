<?php


include "../header.html.php";



if (isset($_GET['page'])) {
    // Recupere la valeur du parametre 'page'
    $page = $_GET['page'];

    switch ($page) {
        case 'cargaison':
            include "../cargaison.html.php";
            break;    
        case 'produit':
            require_once "../produit.html.php";
            break;  
            case 'accueil':
                require_once "../accueils.html.php";
                break;   
        default:
            // Optionally, include a 404 or error page
            echo "Page not found.";
            break;
    }
} else {
    // Si aucun parametre 'page' n'est defini, afficher la page d'accueil
    include "../accueils.html.php";
}

include "../footer.html.php";



?>