<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../dist/output.css">
</head>
<body class=" flex items-center  bg-white-200 justify-center h-screen">
    <?php 
    // Inclure les fichiers PHP nécessaires
    include "../model/connexion.php";

    // Vérifier si l'utilisateur est connecté
   /*  if (isset($_SESSION["utilisateur"])) {
        $nom_utilisateur = $_SESSION["utilisateur"]["nom"]; 
    } else {
        echo "Vous n'êtes pas connecté.";
    } */

    // Vérifier si le formulaire a été soumis
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST["email"];
        $mdp = $_POST["mdp"];
        
        $utilisateurs = connexion();

        // Vérifier si l'email et le mot de passe correspondent à un utilisateur
        $identifiants_corrects = false;
        foreach ($utilisateurs as $utilisateur) {
            if ($utilisateur["email"] == $email && $utilisateur["mot_de_passe"] == $mdp) {
                // Les identifiants sont valides
                $identifiants_corrects = true;
                $_SESSION["utilisateur"] = $utilisateur;

                // Rediriger vers la page d'accueil ou effectuer d'autres actions
                if ($utilisateur["type"] == "apprenant") {
                    // Rediriger l'apprenant vers la page de présence
                    header("Location: index.php?page=pre");
                    exit();
                } else {
                    // Rediriger l'administrateur vers la page d'accueil
                    header("Location: index.php?page=accueil");
                    exit();
                }
            }
        }
    }
    ?>

<div class="bg-blue-400  p-20 rounded-lg shadow-lg  mt-20" style="height:60vh">
        <div class="mb-6 text-center">
            <img src="../public/img/avions.jpg" alt="User Icon" class="w-20 h-20 mx-auto rounded-full mb-4">
            <h1 class="text-3xl font-semibold text-white">SEN GP-GARGO</h1>
        </div>
        <form action="" method="post" id="login">
            <?php if ($_SERVER["REQUEST_METHOD"] == "POST" && !$identifiants_corrects): ?>
<!--                 <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
 --><!--                     <span class="block sm:inline">Email ou mot de passe incorrect.</span>
 -->               
<!--  </div> -->
           <?php endif; ?>
            <div class="mb-4">
                <label for="email" class="block text-white">Email</label>
                <input type="email" name="email" id="email" class="w-full p-3 h-10 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Entrer votre adresse email">
                <span id="erroremail" class="  text-red-700 hover:text-blue-400 text-sm hidden">Email ou mot de passe incorrect.</span>

            </div>
            <div class="mb-6">
                <label for="mdp" class="block text-white">Mot de passe</label>
                <input type="password" name="mdp" id="mdp" class="w-full p-3 h-10 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Entrer votre mot de passe">
                <span id="error" class="text-red-700 hover:text-blue-400 text-sm hidden">Email ou mot de passe incorrect.</span>

            </div>
            <div class="block items-center justify-between mb-6">
                <label class="inline-flex items-center text-white">
                    <input type="checkbox" name="remember" class="form-checkbox text-blue-600">
                    <span class="ml-2">Se souvenir de moi</span>
                </label> 
                <a href="#" class="text-blue-200 hover:text-blue-400 text-sm">Mot de passe oublié?</a>
            </div>
            <div>
                <button type="submit" class="w-full bg-blue-800 text-white py-2 rounded transition duration-300">Se connecter</button>
            </div>
        </form>
    </div>


    <script src="../dist/app-bundle.js"></script>



</body>
</html>