<?php
function connexion() {
    // Lecture du fichier JSON
    $chemin_fichier_json = '../json/connexion.json';

    $contenu_json = file_get_contents($chemin_fichier_json);

    // Décodage du JSON en un tableau associatif
    $donnees = json_decode($contenu_json, true);

    // Vérification des erreurs de décodage
    if ($donnees === null) {
        // Il y a eu une erreur lors du décodage JSON
        return array(); // Ou vous pouvez gérer l'erreur d'une autre manière
    }

    return $donnees['utilisateurs']; // Retourne le tableau d'utilisateurs
}

$chemin_fichier_json = '../json/connexion.json';

// Exemple d'utilisation :
$utilisateurs = connexion($chemin_fichier_json);

// Afficher les utilisateurs chargés
foreach ($utilisateurs as $utilisateur) {
}
?>