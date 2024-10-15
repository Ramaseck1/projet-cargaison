<?php

if (isset($_GET['page'])) {
    // Récupère la valeur du paramètre 'page'
    $page = $_GET['page'];
    if ($page !== 'connexion') {
        require_once "../header.html.php";
    }

    switch ($page) {
        case 'cargaison':
            include "../cargaison.html.php";
            if ($page !== 'connexion') {
                include "../footer.html.php";
            }
            break;    
        case 'produit':
            include "../produit.html.php";
            if ($page !== 'connexion') {
                include "../footer.html.php";
            }
            break;  
        case 'accueil':
            include "../accueils.html.php";
            if ($page !== 'connexion') {
                include "../footer.html.php";
            }
            break;
        case 'connexion':
            include "../connexion.html.php";
            break;   
        default:
            // Optionally, include a 404 or error page
            echo "Page not found.";
            break;
    }
} else {
    // If 'page' n'existe pas, include connexion comme page par défaut
    include "../connexion.html.php";
}

?>
