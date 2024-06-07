<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<!--     api google maps (openRouteservice)
 -->    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css" />
    <script src="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.css" />

    <link rel="stylesheet" href="../dist/output.css">
    <style>
        .sidebar {
            transform: translateX(1%);
            transition: transform 0.3s ease-in-out;
        }
        .sidebar.show {
            transform: translateX(-100%);
        }
    </style>
    
</head>
<body class="bg-gray-100 h-screen ">
    <div class="content flex">
        <div id="sidebar" class="sidebar fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-4 translate-x-[1%] transition-transform duration-300 ease-in-out">
            <img src="../public/img/logoff.png" alt="">
            <ul>
                <li class="mt-20"><a href="#" class="text-blue-500 text-2xl hover:bg-blue-400 hover:text-white border border-blue-500 pr-20 pb-3 pt-3 pl-10 rounded-2xl" id="accueil">Accueil</a></li>
                <li class="mt-20"><a href="#" class="text-blue-500 text-2xl hover:bg-blue-400 hover:text-white border border-blue-500 pr-20 pb-3 pt-3 pl-5 rounded-2xl" id="cargaison">cargaison</a></li>
                <li class=" mt-20"><a href="#" class="text-blue-500 text-2xl hover:bg-blue-400 hover:text-white border border-blue-500 pr-10 pb-3 pt-3 pl-5 rounded-2xl" id="produit">produit/colis</a></li>
            </ul>
        </div>
        <div class="container p-4 flex justify-around bg-white w-1000" id="container">
            <div class="flex">
                <button id="burger" class="text-3xl p-2  ">
                    &#9776;
                </button>
            </div>
            <p class="text-blue-700 text-3xl font-bold">GP-MONDE</p>
            <input type="date" name="" id="" class="-mr-10 bg-blue-100 border-b rounded-2xl">
        </div>
    </div>

<!--     accueil
 -->  
   <div class="main bg-red-700 mt-20 ml-80 h-150 pb-80 bg-cover opacity-80 relative" id="main">
     
        <h1 class="text-4xl font-bold mb-4 fixed top-80 ml-10 text-white">Bienvenue chez GPduMonde</h1>
        <h1 class=" text-3xl mb-8 fixed top-80 mt-20 ml-10 text-white ">Nous sommes une entreprise de transport de colis mondial.</h1>
        <button class="bg-blue-800 hover:bg-blue-600 text-white text-xl py-2 px-4 rounded fixed top-80 mt-40 ml-10" id="btncargaison">
            Accéder à la gestion des cargaisons 
        </button>
        <p class="text-transparent">Lorem ipsum dolor sit, amet consectetur <br> adipisicing elit. Corporis sit quo, dolores libero <br> fuga nam! Rerum laudantium aliquid natus perferendis culpa deleniti fuga  <br>ipsam ipsa commodi dolore omnis hic laborum  <br>nesciunt illo porro, vitae impedit dolorem velit sed officia provident non minima. Maiores modi atque itaque culpa dolor.  <br>Alias, vero cumque consequatur nihil, asperiores quisquam ex ad cum animi quaerat, illum officia quas consequuntur deserunt vel deleniti sed. Eius quod nihil  <br>repellendus inventore reiciendis illo minus doloremque, cupiditate iste repellat error voluptas ipsam? Ex recusandae corrupti,  <br>quis blanditiis tempora dolor repellat dolores numquam quidem, ducimus praesentium eos aut amet,  <br>rerum expedita. Quod nisi itaque incidunt, delectus ex magni a maxime blanditiis consectetur non impedit consequatur corporis, fugit molestias tenetur maiores. Ea explicabo,  <br>doloribus blanditiis aliquid a sit mollitia corrupti, alias perferendis  <br>corporis tenetur illo quia dolores repellat commodi sint rerum, sapiente inventore cum aliquam facere iste. Magni accusamus sed explicabo corrupti quod animi eum neque, placeat <br>numquam molestias odio doloremque vel ipsa facere <br>repellendus reiciendis enim quisquam,  <br>sit sunt consectetur libero. Sapiente placeat eius deserunt amet enim iusto, in magni. Cupiditate eveniet vero non ipsa delectus, quod consectetur minima culpa sunt iste eum at sit corrupti quam eaque modi? Vero!</p>
    </div>
   

<!--     page cargaison
 -->
    <div class="section flex justify-around flex-row" id="section">


<button class="btn text-3xl relative   mt-20 ml-80  w-80 left-1/2  transform ml-translate-x-1/2 -translate-y-1/2 border rounded-2xl  text-center bg-blue-700  " onclick="my_modal_5.showModal()" >Ajouter Cargaison</button>
<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle px-40  py-20 " >

  <div class="modal-box">
  <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn text-red ml-20" style="margin-left:700px;color:red">fermer</button>
      </form>
    </div>
    <form action="" id="cargaisonForm">
    
                 <div class="flex flex-col items-start w-full">
                <label for="type-cargaison" class="self-start">Type de Cargaison:</label>
                <select id="type-cargaison" class="border border-gray-300 rounded px-2 py-1 w-full">
                    <option value="aerienne">Aérienne</option>
                    <option value="maritime">Maritime</option>
                    <option value="routiere">Routière</option>
                </select>
            </div>
            <div class="flex flex-col items-start w-full">
        <label for="date-debut" class="self-start">Date de debut:</label>
        <input type="date" id="date-debut" class="border border-gray-300 rounded px-10 py-1 w-full">
        <p id="datedebut-error"></p>
    </div>
    <div class="flex flex-col items-start w-full">
        <label for="date-fin" class="self-start">date de fin</label>
        <input type="date" id="date-fin" class="border border-gray-300 rounded px-10 py-1 w-full">
        <p id="datefin-error"></p>
    </div>

    <div class="flex flex-col items-start w-full">
                <label for="cargoplein" class="self-start">Cargaison plein:</label>
                <select name="cargoplein" id="cargoplein" class="border border-gray-300 rounded px-10 py-1 w-full">
                    <option value="poids" id="poid">Poids</option>
                    <option value="nbproduit" id="nbproduitss">Nombre de produits</option>
                </select>
            </div>
    <div class="flex flex-col items-start w-full"  id="poids-produit">
        <label for="poids-produit" class="self-start">Poids (kg):</label>
        <input type="number" id="poids"class="border border-gray-300 rounded px-10 py-1 w-full">
        <p id="poids-error"></p>
    </div>
    <div class="flex flex-col items-start w-full"  id="nbr_produit" >
        <label for="poids-produit" class="self-start">Nombre de produit</label>
        <input type="number" id="Nproduit"class="border border-gray-300 rounded px-10 py-1 w-full">
        <p id="Nproduit-error"></p>
    </div>
   <!--  <div class="flex flex-col items-start w-full">
        <label for="type-produit" class="self-start">Type de Produit:</label>
        <select id="type-produit" class="border border-gray-300 rounded px-10 py-1 w-full">
            <option value="alimentaire">Alimentaire</option>
            <option value="chimique">Chimique</option>
            <option value="fragile">Fragile</option>
            <option value="incassable">Incassable</option>
        </select>
        <p id="type-produit-error"></p>
    </div> -->
             <!--             map
 -->            <div id="map" style="height: 150px; width: 100%;" ></div>
            <div class="flex flex-col items-start w-full">
                <label for="distance" class="self-start">Lieu de depart</label>
                <input type="text" id="lieu_depart" class="border border-gray-300 rounded px-10 py-1 w-full">
            </div>

            <div class="flex flex-col items-start w-full">
                <label for="distance" class="self-start">lieu d'arriver:</label>
                <input type="text" id="lieu_arrive" class="border border-gray-300 rounded px-10 py-1 w-full">
            </div>
            
            <div class="flex flex-col items-start w-full">
                <label for="distance" class="self-start">Distance:</label>
                <input type="number" id="distance" class="border border-gray-300 rounded px-10 py-1 w-full">
                <p id="distance-error"></p>
            </div>


          
         
            <input type="submit" id="submit-cargaison" class="bg-blue-500 mt-10 hover:bg-gray-300 text-black font-semibold py-2 px-4 border border-gray-400 rounded">
         
         

        </form>

       
        
    </div>
  
 



 

  
</dialog>
    <div class="text-3xl mt-10 relative left-80  w-10  " id="results">
            <form action="">
            <div class="flex gap-10">

    <input type="text" placeholder="Recherche" class=" w-80" id="searcht"> <br>
    <input type="text" placeholder="Recherche" class=" w-80" id="searchd"> <br>
    <input type="text" placeholder="code" class=" w-80 ml-10" id="search-code"> <br>
    </form>
    </div> <br> 

    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead class="text-xl text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
        <th class="px-6 py-3">code</th>
        <th class="px-6 py-3">Type</th>
        <th class="px-6 py-3">Distance (km)</th>
        <th class="px-6 py-3" >Date debut</th>
        <th class="px-6 py-3" >Date fin</th>
        <th class="px-6 py-3" >lieu depart</th>
        <th class="px-6 py-3" >Date arriver</th>
        <th class="px-6 py-3" id="nb">Nb produit</th>
        <th class="px-6 py-3" id="pd">Poids</th>
<!--         <th class="w-1/4 py-3 px-10 uppercase font-semibold text-sm">Montant Total (F)</th>
 -->        <th class="px-6 py-3">Etat</th>
        <th class="px-6 py-3">Actions</th>
    </tr>
</thead>
<tbody class="text-black text-xl" id="tbodycargaison">
    <tr>
        <!-- Les lignes ajoutées dynamiquement auront des cellules avec les classes nb-cell et pd-cell -->
    </tr>
</tbody>
    </table>
    
</div>
<div class="pagination flex justify-center mt-4">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l" id="prevPage">&lt;</button>
    <span class="px-4 py-2">Page <span id="currentPage">1</span></span>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r" id="nextPage">&gt;</button>
</div>


    
</div>






        

    </div>

<!--     Ajout Produit dans cargaison
 -->
 <div id="details-modal" class="modal hidden">
    <div class="modal-content">
        <span class="close-button">&times;</span>
        <div id="details-container">fvv</div>
    </div>
</div>

 <div class="ajout">

 </div>







<!--     page produit colis
 -->   
  <div class="section1 text-3xl fixed right-0 -ml-100 mt-10 mr-10 p-10 text-center bg-blue-100" id="section1">

        
        <h1 class="text-3xl font-bold text-blue-500 sm:text-center">Produit</h1>
        <label for="libelle-produit">Libellé:</label> <br>
        <input type="text" id="libelle-produit" class="ml-10"> <br>
        <label for="poids-produit">Poids:</label> <br>
        <input type="number" id="poids-produit" class="ml-10"> <br>
        <label for="type-produit">Type de Produit:</label> <br>
        <select id="type-produit" class="ml-10">
            <option value="alimentaire">Alimentaire</option>
            <option value="chimique">Chimique</option>
            <option value="fragile">Fragile</option>
            <option value="incassable">Incassable</option>
        </select> <br>
        <label for="toxicite-produit" class="toxicite-label" style="display: none;">Toxicité:</label> <br>
        <input type="number" id="toxicite-produit" class="ml-10 toxicite-input" style="display: none;"> <br>
        <input type="submit" id="submit-produit" class="bg-blue-500 mt-10 hover:bg-gray-300 text-black font-semibold py-2 px-4 border
        border-gray-400 rounded">

    </div>
    <div class="  main  bg-white  mt-10 ml-80 h-20  bg-cover opacity-200 "  id="main1">
        <h1 class="text-xl  mb-4 mt-12 ml-10 text-center ">@GPduMonde-Sonatel</h1>
      
    </div>






<dialog id="details-modal" class="modal hidden">
  <div class="modal-box" id="modal-box">
    <h3 class="font-bold text-lg">Détails de la Cargaison</h3>
    <div id="details-container" style="margin-left:20px"></div>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn" onclick="closeModal()">Close</button>
      </form>
    </div>
  </div>
</dialog>



    
</div>
<div class="pagination flex justify-center mt-4">
    <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-10 rounded-l" id="prevPage">&lt;</button>
    <span class="px-4 py-2">Page <span id="currentPage">1</span></span>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r" id="nextPage">&gt;</button>
</div>














<dialog id="ajouter-product" class="modal hidden">

<div id="ajouter-container" style="margin-left:20px"></div>
   <div class="modal-action">
     <form method="dialog" id="form-produit">
       <button class="btn" onclick="closeModal()">Close</button>
     </form>
   </div>
 </div>
 <div class="modal-box" id="modal-box">

   <form class="max-w-3xl mx-auto p-20"  id="form-produits">
   <div class="flex  gap-10">
   <div>
   <h3 class="font-bold text-lg"> Produit</h3>

     <div class="mb-5">
       <label for="libelle-produit" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Nom du produit</label>
       <input type="text" id="libelle-produit" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
     </div>
     <div class="mb-5">
       <label for="type_produit">Type de produit</label>
       <select name="" id="type-produit" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
           <option value="alimentaire">Alimentaire</option>
           <option value="chimique">chimique</option>
           <option value="materiel">Matériel</option>
       </select>
     </div>

     <div class="mb-5" id="option_materiel">
       <select name="" id="materielschoix" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
           <option value="fragile">fragile</option>
           <option value="incassable">incassable</option>
       </select>
     </div>
    
     <div class="mb-5">
       <label for="toxicite-produit" class="block mb-2 text-sm font-medium ">Toxicity</label>
       <input type="text" id="toxicite-produit" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
     </div>
     <div class="mb-5">
       <label for="poids-produit" class="block mb-2 text-sm font-medium ">Poids</label>
       <input type="text" id="poids-produit" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
     </div>
     <div class="mb-5">
       <label for="prix" class="block mb-2 text-sm font-medium ">Prix</label>
       <input type="prix" id="prix" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
     </div>
   
   </div>
   
   <div>
   <h3 class="font-bold text-lg">Info client</h3>

   <div class="mb-5">
       <label for="nom" class="block mb-2 text-sm font-medium "> Nom du produit</label>
       <input type="text" id="nom" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
     </div>
     <div class="mb-5">
       <label for="prenom" class="block mb-2 text-sm font-medium "> prenom du client</label>
       <input type="text" id="prenom" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"   />
     </div>
     <div class="mb-5">
       <label for="telephone" class="block mb-2 text-sm font-medium "> Numero telephone</label>
       <input type="text" id="telephone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"   />
     </div>
     <div class="mb-5">
       <label for="adresse" class="block mb-2 text-sm font-medium "> Adresse</label>
       <input type="text" id="adresse" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
     </div>
   </div>
     
   
   <div>
   <h3 class="font-bold text-lg">Info destinataire</h3>

   <div class="mb-5">
       <label for="nom" class="block mb-2 text-sm font-medium  "> Nom du destinataire</label>
       <input type="text" id="nom" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
     </div>
     <div class="mb-5">
       <label for="prenom" class="block mb-2 text-sm font-medium "> prenom du destinataire</label>
       <input type="text" id="prnom" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
     </div>
     <div class="mb-5">
       <label for="adresse" class="block mb-2 text-sm font-medium "> Adresse</label>
       <input type="text" id="adresse" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
     </div>
     </div>
     </div>
     <button type="submit" id="form"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">envoie </button>
   </form>
   </div>
</dialog>


    </div>


    <script src="../dist/app-bundle.js"></script>

    <script>
        let map = L.map('map').setView([48.8566, 2.3522], 13); // Centre sur Paris par défaut

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let startMarker, endMarker;
let startPoint, endPoint;

let geocoder = L.Control.Geocoder.nominatim();

document.getElementById('lieu_depart').addEventListener('focus', () => {
    map.once('click', function(e) {
        if (startMarker) {
            map.removeLayer(startMarker);
        }
        startMarker = L.marker(e.latlng).addTo(map);
        startPoint = e.latlng;
        geocoder.reverse(e.latlng, map.options.crs.scale(map.getZoom()), function(results) {
            let result = results[0];
            document.getElementById('lieu_depart').value = result.name;
        });
        calculateDistance();
    });
});

document.getElementById('lieu_arrive').addEventListener('focus', () => {
    map.once('click', function(e) {
        if (endMarker) {
            map.removeLayer(endMarker);
        }
        endMarker = L.marker(e.latlng).addTo(map);
        endPoint = e.latlng;
        geocoder.reverse(e.latlng, map.options.crs.scale(map.getZoom()), function(results) {
            let result = results[0];
            document.getElementById('lieu_arrive').value = result.name;
        });
        calculateDistance();
    });
});

function calculateDistance() {
    if (startPoint && endPoint) {
        let start = [startPoint.lat, startPoint.lng];
        let end = [endPoint.lat, endPoint.lng];

        let router = L.Routing.control({
            waypoints: [
                L.latLng(start[0], start[1]),
                L.latLng(end[0], end[1])
            ],
            createMarker: function() { return null; },
            routeWhileDragging: false,
            addWaypoints: false
        }).addTo(map);

        router.on('routesfound', function(e) {
            let routes = e.routes;
            let summary = routes[0].summary;
            document.getElementById('distance').value = (summary.totalDistance / 1000).toFixed(2); // distance en km
            router.remove();
        });
    }
}



</script>

    </script>
</body>
</html>

               
