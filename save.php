<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Twilio\Rest\Client;
require '/var/www/html/projetcargaison/vendor/autoload.php';

function envoyerEmail($destinataire, $sujet, $message) {
    $mail = new PHPMailer(true);
    try {
        // Configurer le serveur SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp@gmail.com'; // Remplacez par votre serveur SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'seckrama098@gmail.com'; // Remplacez par votre email
        $mail->Password = 'bvlp bzec mvah fwjo'; // Remplacez par votre mot de passe
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Destinataires
        $mail->setFrom('seckrama098@gmail.com', 'Cargo');
        $mail->addAddress($destinataire);

        // Contenu
        $mail->isHTML(true);
        $mail->Subject = $sujet;
        $mail->Body    = $message;

        $mail->send();
        echo 'Message has been sent';
        return true;
    } catch (Exception $e) {
        error_log("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
    }
}

function lireJSON($filename) {
    if (!file_exists($filename)) {
        return ["cargaisons" => [], "produits" => []];
    }

    $json_data = file_get_contents($filename);
    if ($json_data === false) {
        error_log("Erreur de lecture du fichier $filename");
        return ["cargaisons" => [], "produits" => []];
    }

    $data = json_decode($json_data, true);
    if ($data === null) {
        error_log("Erreur de décodage JSON pour le fichier $filename");
        return ["cargaisons" => [], "produits" => []];
    }

    return $data;
}

function ecrireJSON($filename, $data) {
    $json_data = json_encode($data, JSON_PRETTY_PRINT);
    if (file_put_contents($filename, $json_data) === false) {
        error_log("Erreur d'écriture dans le fichier $filename");
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if ($data !== null) {
        // Ajouter une cargaison
        if (isset($data['type']) && isset($data['codeUnique'])) {
            $newCargaison = [
                "idcargo" => uniqid(),
                "codeUnique" => $data['codeUnique'],
                "type" => $data['type'],
                "distance" => $data['distance'],
                "datedebut" => $data['datedebut'],
                "datefin" => $data['datefin'],
                "lieu_depart" => $data['lieu_depart'],
                "lieu_arrive" => $data['lieu_arrive'],
                "status" => 'fermer', // Initial status
                "etatAvancement" => 'en attente', // Initial state
                "produits" => []
            ]; 

            error_log("Nouvelle cargaison: " . print_r($newCargaison, true));

            $currentData = lireJSON('cargaisons.json');
            if (!isset($currentData['cargaisons'])) {
                $currentData['cargaisons'] = [];
            }

            $currentData['cargaisons'][] = $newCargaison;

            ecrireJSON('cargaisons.json', $currentData);

            echo json_encode(["status" => "success", "message" => "Cargaison ajoutée avec succès"]);
        }
        // Ajouter un produit à une cargaison existante
        elseif (isset($data['product']) && isset($data['code']) && isset($data['type'])) {
            $newProduit = [
                'type' => $data['type'],
                "code" => $data['code'],
                "produit" => $data['product'],
            ];

            $currentData = lireJSON('cargaisons.json');
            $idCargaison = $data['code'];

            $cargaisonTrouvee = false;
            foreach ($currentData['cargaisons'] as &$cargaison) {
                if ($cargaison['codeUnique'] === $idCargaison) {
                    $cargaison['produits'][] = $newProduit;
                    $cargaisonTrouvee = true;
                    break;
                }
            }
            
            if (!$cargaisonTrouvee) {
                echo json_encode(["status" => "error", "message" => "Cargaison non trouvée"]);
                exit;
            }
            
            ecrireJSON('cargaisons.json', $currentData);
            echo json_encode(["status" => "success", "message" => "Produit ajouté avec succès"]);

            // Envoyer l'email
            if (isset($data['product']['emaildestinataire'])) {
                envoyerEmail($data['product']['emaildestinataire'], 'Enregistrement colis', 'Votre colis ' . $data['code'] . ' vient d\'être mis dans la cargaison');
            } else {
                echo json_encode(["status" => "error", "message" => "Adresse email du destinataire manquante"]);
            }
        }
        // Mettre à jour le statut et l'état d'avancement d'une cargaison
        elseif (isset($data['codeUnique']) && (isset($data['status']) || isset($data['etatAvancement']))) {
            $currentData = lireJSON('cargaisons.json');
            $codeUnique = $data['codeUnique'];
            $newStatus = isset($data['status']) ? $data['status'] : null;
            $newEtatAvancement = isset($data['etatAvancement']) ? $data['etatAvancement'] : null;

            $cargaisonTrouvee = false;
            foreach ($currentData['cargaisons'] as &$cargaison) {
                if ($cargaison['codeUnique'] === $codeUnique) {
                    if ($newStatus !== null) {
                        $cargaison['status'] = $newStatus;
                    }
                    if ($newEtatAvancement !== null) {
                        $cargaison['etatAvancement'] = $newEtatAvancement;
                    }
                    $cargaisonTrouvee = true;
                    break;
                }
            }
            
            if (!$cargaisonTrouvee) {
                echo json_encode(["status" => "error", "message" => "Cargaison non trouvée"]);
                exit;
            }
            
            ecrireJSON('cargaisons.json', $currentData);
            echo json_encode(["status" => "success", "message" => "Statut et état de la cargaison mis à jour avec succès"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Les données nécessaires ne sont pas fournies"]);
        }
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $data = lireJSON('cargaisons.json');
    if ($data === null) {
        echo json_encode(["status" => "error", "message" => "Erreur de lecture des données existantes"]);
    } else {
        echo json_encode($data);
    }
    exit;
}
?>
