import { Produit, Alimentaire, Chimique, Fragile, Incassable } from './Model/Produit';
import { Cargaison, CargaisonAerienne, CargaisonMaritime, CargaisonRoutiere } from './Model/Cargaison';

let cargaisons: Cargaison[] = [];
let filteredCargaisons: Cargaison[] = [];
let produits: Produit[] = [];

function showDetails(type: string, distance: number) {
    console.log("Type recherché:", type);
    console.log("Distance recherchée:", distance);

    const cargaison = cargaisons.find(c => c.type === type && c.distance === distance);
    console.log("Cargaison trouvée:", cargaison);
    
    if (cargaison) {
        let details = `
            <p>Type: ${cargaison.type}</p>
            <p>Distance: ${cargaison.distance} km</p>
            <p>Lieu de départ: ${cargaison.lieu_depart}</p>
            <p>Lieu d'arrivée: ${cargaison.lieu_arrive}</p>
            <p>Date de début: ${cargaison.datedebut}</p>
            <p>Date de fin: ${cargaison.datefin}</p>
        `;

        const detailsContainer = document.getElementById('details-container');
        if (detailsContainer) {
            detailsContainer.innerHTML = details;
            const modal = document.getElementById('details-modal') as HTMLDialogElement;
            if (modal) {
                modal.classList.remove('hidden');
                modal.showModal();
            }
        }
    } else {
        console.log("Cargaison non trouvée.");
    }
}



function closeModal() {
    const modal = document.getElementById('details-modal') as HTMLDialogElement;
    if (modal) {
        modal.close(); // Fermer le modal
    }
}



    

(window as any).showDetails = showDetails;

let code:any
function addProduct(numero:any) {
  
        const detailsContainer = document.getElementById('ajouter-container');
        if (detailsContainer) {
            const modal = document.getElementById('ajouter-product') as HTMLDialogElement;
            if (modal) {
                modal.classList.remove('hidden');
                modal.showModal(); // Afficher le modal
            }
      
        }
       console.log(numero);

       code=numero
       
    }



   


function closeModals() {
    const modal = document.getElementById('details-modal') as HTMLDialogElement;
    if (modal) {
        modal.close(); // Fermer le modal
    }
}
(window as any).addProduct = addProduct;


function validateForm(): boolean {
    const typeInput = <HTMLSelectElement>document.getElementById('type-cargaison');
    const nbrproduit = <HTMLInputElement>document.getElementById('Nproduit');
    const nbrproduitError = document.getElementById('Nproduit-error');
    const datedebutInput = <HTMLInputElement>document.getElementById('date-debut');
    const datefinInput = <HTMLInputElement>document.getElementById('date-fin');
    const datedebutError = document.getElementById('datedebut-error');
    const datefinError = document.getElementById('datefin-error');

    let isValid = true;

    if (typeInput.value === "") {
        isValid = false;
    }

    datedebutError.textContent = '';
    datefinError.textContent = '';

    if (datedebutInput.value === "") {
        datedebutError.textContent = "Veuillez remplir ce champ.";
        datedebutError.style.color = "red";
        isValid = false;
    }

    if (datefinInput.value === "") {
        datefinError.textContent = "Veuillez remplir ce champ.";
        datefinError.style.color = "red";
        isValid = false;
    }

    const dateDebut = new Date(datedebutInput.value);
    const today = new Date();
    if (dateDebut <= today) {
        datedebutError.textContent = "La date de début doit être supérieure à la date d'aujourd'hui.";
        datedebutError.style.color = "red";
        isValid = false;
    }

    const dateFin = new Date(datefinInput.value);
    if (dateFin <= dateDebut) {
        datefinError.textContent = "La date de fin doit être supérieure à la date de début.";
        datefinError.style.color = "red";
        isValid = false;
    }

    return isValid;
}

const prevPageButton = document.getElementById('prevPage') as HTMLButtonElement;
const nextPageButton = document.getElementById('nextPage') as HTMLButtonElement;
const currentPageSpan = document.getElementById('currentPage') as HTMLSpanElement;

let currentPage = 1;
const itemsPerPage = 4;

prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        afficherCargaisons(filteredCargaisons.length > 0 ? filteredCargaisons : cargaisons);
    }
});

nextPageButton.addEventListener('click', () => {
    const totalItems = cargaisons.length;
    const lastPage = Math.ceil(totalItems / itemsPerPage);
    if (currentPage < lastPage) {
        currentPage++;
        afficherCargaisons(filteredCargaisons.length > 0 ? filteredCargaisons : cargaisons);
    }
});


//fonction fermer ouvert cargaison
async function toggleStatus(codeUnique: string) {
    const cargaison = cargaisons.find(c => c.codeUnique === codeUnique);
    if (cargaison) {
        const newStatus = cargaison.status === 'fermer' ? 'ouvrir' : 'fermer';
        const data = JSON.stringify({ codeUnique, status: newStatus });

        try {
            const response = await fetch('http://www.rama.seck:9000/projetcargaison/save.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            });

            if (response.ok) {
                const result = await response.json();
                if (result.status === "success") {
                    cargaison.status = newStatus;
                    document.getElementById(`toggle-${codeUnique}`).textContent = newStatus; // Mise à jour du statut dans la table HTML
                } else {
                    console.error('Erreur lors de la mise à jour du statut:', result.message);
                }
            } else {
                console.error('Erreur lors de la requête:', response.statusText);
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
        }
    }
}


(window as any).toggleStatus = toggleStatus;


//fonction pour pour l"etat d'avancement

async function updateEtatAvancement(codeUnique: string) {
    const selectElement = document.getElementById(`status-select-${codeUnique}`) as HTMLSelectElement;
    const newStatus = selectElement.value;

    try {
        const response = await fetch('http://www.rama.seck:9000/projetcargaison/save.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ codeUnique, status: newStatus })
        });

        if (response.ok) {
            const result = await response.json();
            if (result.status === "success") {
                // Mise à jour locale de l'affichage si nécessaire
                const button = document.getElementById(`toggle-${codeUnique}`);
                if (button) {
                    button.textContent = newStatus;
                }
            } else {
                console.error('Erreur lors de la mise à jour du statut:', result.message);
            }
        } else {
            console.error('Erreur lors de la requête:', response.statusText);
        }
    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
    }
}
(window as any).updateEtatAvancement = updateEtatAvancement;




function afficherCargaisons(data: Cargaison[]): void {
    fetch('http://www.rama.seck:9000/projetcargaison/save.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur réseau');
            }
            return response.text();
        })
        .then(responseText => {
            try {
                const data = JSON.parse(responseText);
                if (!data.cargaisons) { 
                    throw new Error('Données mal structurées');
                }

                cargaisons = data.cargaisons;

                const cargaisonList = document.getElementById('tbodycargaison');
                if (!cargaisonList) {
                    console.error('Element avec ID "tbodycargaison" non trouvé');
                    return;
                }
                cargaisonList.innerHTML = '';

                if (cargaisons.length === 0) {
                    const message = document.createElement('p');
                    message.textContent = 'Aucune cargaison ne correspond aux critères de filtrage.';
                    cargaisonList.appendChild(message);
                    return;
                }

                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                const paginatedCargaisons = (filteredCargaisons.length > 0 ? filteredCargaisons : cargaisons).slice(startIndex, endIndex);

                paginatedCargaisons.forEach(cargaison => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${cargaison.codeUnique}</td>
                        <td>${cargaison.type}</td>
                        <td>${cargaison.distance}</td>
                        <td>${cargaison.datedebut}</td>
                        <td>${cargaison.datefin}</td>
                        <td>${cargaison.lieu_depart}</td>
                        <td>${cargaison.lieu_arrive}</td>
                        <td>
                        <select id="status-select-${cargaison.codeUnique}" onchange="updateEtatAvancement('${cargaison.codeUnique}')">
                            <option value="en cours">En cours</option>
                            <option value="en attente">En attente</option>
                            <option value="arrivé">Arrivé</option>
                        </select>
                    </td>                      
                      <td id="status-${cargaison.codeUnique}">
                        <button id="toggle-${cargaison.codeUnique}" onclick="toggleStatus('${cargaison.codeUnique}')">${cargaison.status}</button>
                        
                        </td>


                        <td style="display:flex !important">
                        <button  style="border:none" class="text-blue-400 text-xl pr-3 font-bold rounded" onclick="showDetails('${cargaison.type}', ${cargaison.distance})">Détails</button>
                        <button style="border:none" class="products text-blue-400 text-xl pr-3 font-bold rounded" onclick="addProduct('${cargaison.codeUnique}')" >Ajouter</button>
                        </td>

                       

                    `;
                    cargaisonList.appendChild(row);
                });
             
                const totalItems = cargaisons.length;
                const lastPage = Math.ceil(totalItems / itemsPerPage);
                currentPageSpan.textContent = currentPage.toString();
                prevPageButton.disabled = currentPage === 1;
                nextPageButton.disabled = currentPage === lastPage;
            } catch (error) {
                console.error('Erreur lors du parsing JSON:', error);
                console.log('Raw response text:', responseText);
            }
        })
        .catch(error => {
            console.error('Erreur lors du fetch:', error);
        });
        


        
        
     /*    document.querySelectorAll('.products').forEach(produit =>{
            produit.addEventListener('click',(event)=>{
              
                const target=event.target as HTMLElement;
                const numero= target.getAttribute('data-numero')
                console.log(numero);
            })
        
        }) */


}



function filterCargaisons() {
    const codeInputElement = document.getElementById('code') as HTMLInputElement;
    const datedebutInputElement = document.getElementById('date-debut') as HTMLInputElement;
    const datefinInputElement = document.getElementById('date-fin') as HTMLInputElement;
    const lieuDepartInputElement = document.getElementById('lieu-depart') as HTMLInputElement;
    const lieuArriveInputElement = document.getElementById('lieu-arrive') as HTMLInputElement;

    const codeInput = codeInputElement?.value.trim().toLowerCase() || '';
    const datedebutInput = datedebutInputElement?.value.trim() || '';
    const datefinInput = datefinInputElement?.value.trim() || '';
    const lieuDepartInput = lieuDepartInputElement?.value.trim().toLowerCase() || '';
    const lieuArriveInput = lieuArriveInputElement?.value.trim().toLowerCase() || '';


    filteredCargaisons = cargaisons.filter(cargaison => {
        const matchCode = codeInput ? cargaison.codeUnique.toLowerCase().includes(codeInput) : true;
        const matchDateDebut = datedebutInput ? cargaison.datedebut === datedebutInput : true;
        const matchDateFin = datefinInput ? cargaison.datefin === datefinInput : true;
        const matchLieuDepart = lieuDepartInput ? cargaison.lieu_depart.toLowerCase().includes(lieuDepartInput) : true;
        const matchLieuArrive = lieuArriveInput ? cargaison.lieu_arrive.toLowerCase().includes(lieuArriveInput) : true;
        return matchCode && matchDateDebut && matchDateFin && matchLieuDepart &&
        matchLieuArrive;
    });

    currentPage = 1;
    afficherCargaisons(filteredCargaisons);
}

const filterButton = document.getElementById('filter-button') as HTMLButtonElement;
if (filterButton) {
    filterButton.addEventListener('click', (event) => {
        event.preventDefault();
        filterCargaisons();
    });
}


document.addEventListener('DOMContentLoaded', () => {
    afficherCargaisons(cargaisons);
});





afficherCargaisons(cargaisons);



const form = document.getElementById('cargaisonForm') as HTMLFormElement;
const envoie = document.getElementById('submit-cargaison') as HTMLButtonElement;
envoie.addEventListener('click', async (e) => {
    e.preventDefault();

    if (validateForm()) {

        const distanceInput = document.getElementById('distance') as HTMLInputElement;
        const typeInput = document.getElementById('type-cargaison') as HTMLSelectElement;
        const poidscargaison = document.getElementById('poids') as HTMLInputElement;
        const nombreproduit = document.getElementById('Nproduit') as HTMLInputElement;
        const datedebutInput = document.getElementById('date-debut') as HTMLInputElement;
        const datefinInput = document.getElementById('date-fin') as HTMLInputElement;
        const lieudepartInput = document.getElementById('lieu_depart') as HTMLInputElement;
        const lieuarriverInput = document.getElementById('lieu_arrive') as HTMLInputElement;
        const distance = parseInt(distanceInput.value);
        const type = typeInput.value;
        const datedebut = datedebutInput.value;
        const datefin = datefinInput.value;
        const poidscargo = parseFloat(poidscargaison.value);
        const nomreproduit = parseInt(nombreproduit.value);
        const lieudepart=lieudepartInput.value;
        const lieuarrive=lieuarriverInput.value

        let cargaison: Cargaison | null = null;
        switch (type) {
            case 'aerienne':
                cargaison = new CargaisonAerienne(distance, datedebut, datefin, poidscargo, nomreproduit,lieudepart,lieuarrive);
                break;
            case 'maritime':
                cargaison = new CargaisonMaritime(distance, datedebut, datefin, poidscargo, nomreproduit,lieudepart,lieudepart);
                break;
            case 'routiere':
                cargaison = new CargaisonRoutiere(distance, datedebut, datefin, poidscargo, nomreproduit,lieuarrive,lieudepart);
                break;
        }
        if (cargaison) {
            cargaisons.push(cargaison);

            const cargaisonData = {
                codeUnique:cargaison.codeUnique,
                type: cargaison.type,
                distance: cargaison.distance,
                produits: cargaison.produits,
                datedebut: cargaison.datedebut,
                datefin: cargaison.datefin,
                poidscargo:cargaison.poidscargo,
                nomreproduit:cargaison.nomreproduit,
                lieu_depart:cargaison.lieu_depart,
                lieu_arrive:cargaison.lieu_arrive,
                status:cargaison.status,
                etatAvancement:cargaison.etatAvancement


            };
            const data = JSON.stringify(cargaisonData);

            try {
                const response = await fetch('http://www.rama.seck:9000/projetcargaison/save.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: data
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log('Succès:', result);
                    afficherCargaisons(cargaisons);

                } else {
                    console.error('Erreur lors de la requête:', response.statusText);
                }
            } catch (error) {
                console.error('Erreur lors de l\'envoi:', error);
            }
            alert("cargaison ajouté");

        }
    }
});

//pagination



//option d"affichage poids ou nb de proquit dans le tableau
const nbrproduct=document.getElementById('nb');
const poid=document.getElementById('pd'); 
    
/*     document.addEventListener('DOMContentLoaded', (event) => {
        const modal = document.getElementById('details-modal');
        const closeButton = document.querySelector('.close-button');
    
        if (modal && closeButton) {
            closeButton.addEventListener('click', () => {
                modal.classList.add('hidden');
                modal.style.display = 'none';
            });
    
            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.classList.add('hidden');
                    modal.style.display = 'none';
                }
            });
        } */










 //formulaire cargaison
 const productform = document.getElementById('btn-envoyer') as HTMLButtonElement;

 productform.addEventListener('click', (event) => {
     event.preventDefault();
     handleProductFormSubmit(event);

     
   
 });
 async function handleProductFormSubmit(event: Event): Promise<boolean> {
    event.preventDefault();

    const libelleProduit = (document.getElementById('libelle-produit') as HTMLInputElement).value;
    const typeProduit = (document.getElementById('type-produit') as HTMLSelectElement).value;
    const poidsProduit = parseFloat((document.getElementById('poids-produit') as HTMLInputElement).value);
    const toxicite = (document.getElementById('toxicite') as HTMLInputElement)?.valueAsNumber || 0;

   
    
    let produit: Produit;

    switch (typeProduit) {
        case 'Alimentaire':
            produit = new Alimentaire(libelleProduit, poidsProduit);
            break;
        case 'Chimique':
            produit = new Chimique(libelleProduit, poidsProduit, toxicite);
            break;
        case 'Fragile':
            produit = new Fragile(libelleProduit, poidsProduit);
            break;
        case 'Incassable':
            produit = new Incassable(libelleProduit, poidsProduit);
            break;
        default:
            console.error('Type de produit non reconnu');
            return false;
    }

    const produitData = {
        type: typeProduit,
        "code" :code,
        "product": produit,
       
    };

    
    const data = JSON.stringify(produitData);
    
    try {
        const response = await fetch('http://www.rama.seck:9000/projetcargaison/save.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Succès:', result);
            // Affiche les produits après ajout
/*             ajouterProduit(libelleProduit, typeProduit, poidsProduit, toxicite);
 */
        } else {
            console.error('Erreur lors de la requête:', response.statusText);
        }

    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
    }
    return false;
}





// Event listener for product form submission

// Attache l'événement de soumission au formulaire lors du chargement du document

        const cargopleinSelect = document.getElementById('cargoplein') as HTMLSelectElement;

        if (cargopleinSelect) {
            cargopleinSelect.addEventListener('change', (e) => {
                const selectedValue = (e.target as HTMLSelectElement).value;
                toggleTableColumns(selectedValue);
            });
    
            // Initial toggle based on the default value
            toggleTableColumns(cargopleinSelect.value);
        }


    const poidsContainer = document.getElementById('poids-produit');
    const nbProduitsContainer = document.getElementById('nbr_produit');


poidsContainer.style.display="none"
nbProduitsContainer.style.display="none"











    //choix cargaison pleine
    document.getElementById('cargoplein')?.addEventListener('change', function (this: HTMLInputElement) {
        const poidsContainer = document.getElementById('poids-produit') as HTMLElement | null;
        const nbProduitsContainer = document.getElementById('nbr_produit') as HTMLElement | null;
    
        if (this.value === 'poids') {
            if (poidsContainer) poidsContainer.style.display = 'block';
            if (nbProduitsContainer) nbProduitsContainer.style.display = 'none';
        } else if (this.value === 'nbproduit') {
            if (poidsContainer) poidsContainer.style.display = 'none';
            if (nbProduitsContainer) nbProduitsContainer.style.display = 'block';
        }
    });
    


  

 

   


    // affichage optioneele des valeurs pods et nbproduit



    function toggleTableColumns(value: string) {
        const nbColumn = document.getElementById('nb') as HTMLTableHeaderCellElement;
        const pdColumn = document.getElementById('pd') as HTMLTableHeaderCellElement;
    
        const nbCells = document.querySelectorAll('.nb-cell') as NodeListOf<HTMLTableCellElement>;
        const pdCells = document.querySelectorAll('.pd-cell') as NodeListOf<HTMLTableCellElement>;
    
        if (value === 'poids') {
            nbColumn.style.display = 'none';
            pdColumn.style.display = '';
            nbCells.forEach(cell => cell.style.display = 'none');
            pdCells.forEach(cell => cell.style.display = '');
        } else {
            nbColumn.style.display = '';
            pdColumn.style.display = 'none';
            nbCells.forEach(cell => cell.style.display = '');
            pdCells.forEach(cell => cell.style.display = 'none');
        }
    }















































































    
    const burger = document.getElementById('burger');
    const sidebar = document.getElementById('sidebar');
    const millieu = document.getElementById("main");
    const accueil = document.getElementById("accueil");
    const accecargaison = document.getElementById("btncargaison");
    
    burger.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });
    
    burger.style.marginLeft = "-250px";
    burger.style.zIndex = "1";
    burger.style.transform = "translateX(100%)";
    burger.style.transition = "transform 0.3s ase-in-out";
    
    const cont = document.getElementById("container");
    cont.style.marginLeft = "330px";
    
    const container = document.getElementById("section");
    const Cargaisons = document.getElementById("cargaison");
    const produit = document.getElementById("produit");
    const section1 = document.getElementById("section1");
    section1.style.display = "none";
    container.style.display = "none";
    
   /*  Cargaisons.addEventListener("click", () => {
        container.style.display = "block";
        section1.style.display = "none";
        millieu.style.display = "none";
        footer.style.marginTop = "550px";
    });
    
    produit.addEventListener("click", () => {
        section1.style.display = "block";
        container.style.display = "none";
        millieu.style.display = "none";
        footer.style.marginTop = "43%";
    });
     */
    
   /*  accueil.addEventListener("click", () => {
        millieu.style.display = "block";
        section1.style.display = "none";
        container.style.display = "none";
        footer.style.marginTop = "1%";
    });
    
    accecargaison.addEventListener("click", () => {
        container.style.display = "block";
        millieu.style.display = "none";
        section1.style.display = "none";
        footer.style.marginTop = "350px";
    }); */
    
    const images = ['../public/img/avions.jpg', '../public/img/bateau.jpg', '../public/img/avionss.jpg'];
    let currentIndex = 0;
    
    function changeBackgroundImage() {
        document.getElementById('main').style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }
    
    setInterval(changeBackgroundImage, 2000);
    
    const modalss = document.getElementById("my_modal_5");
    const body=document.querySelector("body")
    
    const modals = document.getElementById("modals");
    modals.addEventListener("click", () => {
        modalss.style.display = "block";
      
    });
    const mod=document.getElementById('fermer')
    mod.style.color="red"
    const fermer = document.getElementById("annuler");
    fermer.style.color="red"
    fermer.addEventListener("click", () => {
        mod.style.display = "none";
        form.reset();
    });



    document.getElementById('cargoplein')!.addEventListener('change', function (this: HTMLSelectElement) {
        const nbproduits = document.getElementById('nbproduits');
        if (this.value === 'nbproduit') {
            if (nbproduits) {
                nbproduits.style.display = 'block';
            }
        } else {
            if (nbproduits) {
                nbproduits.style.display = 'none';
            }
        }
    })


    // map
    // Récupération du formulaire
     
    // Définition des classes de produits
   

    // Ajoutez cet écouteur d'événements après que la page ait chargé
  
 