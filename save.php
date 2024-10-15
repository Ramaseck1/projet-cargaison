<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use TCPDF;
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


//envoi mail avec recu
function genereRecu($cargaison, $produit) {
    $pdf = new TCPDF();

    // Set document information
    $pdf->SetCreator(PDF_CREATOR);
    $pdf->SetAuthor('SEN ggpCARGO COMPANY');
    $pdf->SetTitle('Reçu de Cargaison');
    $pdf->SetSubject('Reçu de Cargaison');
    $pdf->SetKeywords('TCPDF, PDF, example, test, guide');

    // Add a page
    $pdf->AddPage();

    // Title
    $pdf->SetFont('helvetica', 'B', 20);
    $pdf->Cell(0, 15, 'Reçu de Cargaison', 0, 1, 'C');

    // Cargaison Info
    $pdf->SetFont('helvetica', '', 12);
    $html = '<h1>Informations de la Cargaison</h1>';
    $html .= '<p>Numéro: ' . $cargaison['codeUnique'] . '</p>';
    $html .= '<p>Point de Départ: ' . $cargaison['lieu_depar'] . '</p>';
    $html .= '<p>Point d\'Arrivée: ' . $cargaison['lieu_arrive'] . '</p>';
    $html .= '<p>Date de Départ: ' . $cargaison['datedebut'] . '</p>';
    $html .= '<p>Date d\'Arrivée: ' . $cargaison['datefin'] . '</p>';
    $html .= '<p>Distance: ' . $cargaison['distance'] . ' km</p>';
    $html .= '<p>Type: ' . $cargaison['type'] . '</p>';

    // Produit Info
    $html .= '<h3>Informations du Produit</h3>';
    $html .= '<p>Numéro: ' . $produit['codeUnique'] . '</p>';
    $html .= '<p>Nom: ' . $produit['libelle'] . '</p>';
    $html .= '<p>Poids: ' . $produit['poids'] . ' kg</p>';
    $html .= '<p>Type: ' . $produit['Typeproduit'] . '</p>';
/*     $html .= '<p>Type: ' . $produit['frais'] .'FCFA </p>';
/*  */    
/* $html .= '<a href="http://www.sidy.diop.balde:8010/projettailwinTs/demo-1/public/index.php?page=connexion">Suivre mon colis</a>';
 */    $html .= '<h1> sen GP Cargo Company: Sénegal , Tel: +221 78-470-23-28</h1>';
    $pdf->writeHTML($html, true, false, true, false, '');

    // Save PDF to a file
    $filename = '/var/www/html/projetcargaison/recu/recu'.'.pdf';
    $pdf->Output($filename, 'F');

    return $filename;
}

function envoieRecu($clientEmail, $pdfFilename) {
    $mail = new PHPMailer(true);

    try {
        // Paramètres du serveur
        $mail->isSMTP();
        $mail->Host       = 'smtp@gmail.com'; // Remplacez par le serveur SMTP de votre fournisseur
        $mail->SMTPAuth   = true;
        $mail->Username   = 'seckrama098@gmail.com'; // Votre adresse email SMTP
        $mail->Password   = 'bvlp bzec mvah fwjo'; // Votre mot de passe SMTP
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587; // Port SMTP

        // Destinataires
        $mail->setFrom('seckrama098@gmail.com', 'Sidy Diop Balde');
        $mail->addAddress($clientEmail);

        // Pièce jointe
        $mail->addAttachment($pdfFilename);

        // Contenu de l'email
        $mail->isHTML(true);
        $mail->Subject = 'Reçu de votre Cargaison';
        $mail->Body    = 'Veuillez trouver ci-joint le reçu de votre cargaison.';

        $mail->send();
        echo 'Le reçu a été envoyé avec succès';
        return true;
    } catch (Exception $e) {
        echo "Le message n'a pas pu être envoyé. Erreur: {$mail->ErrorInfo}";
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
                "codeUniques" => $data['codeUniques'],


            ];

            $currentData = lireJSON('cargaisons.json');
            $idCargaison = $data['code'];


            $cargaisonTrouvee = false;
            foreach ($currentData['cargaisons'] as &$cargaison) {
                if ($cargaison['codeUnique'] === $idCargaison) {
                    $cargaison['produits'][] = $newProduit['produit'];
                    $cargaisonTrouvee = true;
                    /*   */
                   /*  envoieRecu('seckrama098@gmail.com', $recu); */

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
            if (isset($newProduit['produit']['emaildestinataire'])) {
                envoyerEmail($newProduit['produit']['emaildestinataire'], 'Enregistrement colis', 'Votre colis ' . $data['code'] . ' vient d\'être mis dans la cargaison');
            } else {
                echo json_encode(["status" => "error", "message" => "Adresse email du destinataire manquante"]);
            }
            //ENVOYER RECU EN PDF
           
 

            
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
