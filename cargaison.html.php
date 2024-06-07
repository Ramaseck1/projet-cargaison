
<!--     page cargaison
 -->
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<!--     api google maps (openRouteservice)
 -->   

 <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css" />
    <script src="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.css" />  
     <link rel="stylesheet" href="../dist/output.css">
    <style>
       
        table {
    border-collapse: collapse;
    border: 1px solid blue;

}

td, th {
    border-top: 1px solid blue;

    padding: 2px;
}

button {
    border: none;
    background: none;
    padding: 15px; /* Ajustez la valeur selon vos besoins */
}





    </style>
    
</head>
<body>
 
 <div class="section flex justify-around flex-row" id="section">


<button class="btn text-3xl relative   mt-20 ml-0  w-80 left-1/2 h-20 transform ml-translate-x-1/2 -translate-y-1/2 border rounded-2xl  text-center bg-blue-700  " onclick="my_modal_5.showModal()" >Ajouter Cargaison</button>
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
 -->                <div id="map" style="height: 200px; width: 100%;" ></div>
            <div class="flex flex-col items-start w-full">
                <label for="distance" class="self-start">Lieu de depart</label>
                <input type="text" id="lieu_depart" class="border border-gray-300 rounded px-2 py-1 w-full">
            </div>

            <div class="flex flex-col items-start w-full">
                <label for="distance" class="self-start">lieu d'arriver:</label>
                <input type="text" id="lieu_arrive" class="border border-gray-300 rounded px-2 py-1 w-full">
            </div>
            
            <div class="flex flex-col items-start w-full">
                <label for="distance" class="self-start">Distance:</label>
                <input type="number" id="distance" class="border border-gray-300 rounded px-2 py-1 w-full">
            </div>



          
         
            <input type="submit" id="submit-cargaison" class="bg-blue-500 mt-10 hover:bg-gray-300 text-black font-semibold py-2 px-4 border border-gray-400 rounded">
         
         

        </form>

       
        
    </div>
</dialog>
    <div class="text-3xl mt-10  ml-10 w-7 " id="results">
            <form action="">
            <div class="flex gap-10 mt-40 flex-wrap" style="margin-left:-1100px">
    <input type="text" placeholder="code" class="w-40 border border-black-500" id="code">
    <input type="date" placeholder="datedebut" class="w-40 border border-black-500 " id="date-debut">
    <input type="date" placeholder="datefin" class="w-40 border border-black-500 " id="date-fin">
    
    <input type="text" placeholder="lieudepart" class="w-40  border border-black-500" id="lieu-depart">
    <input type="text" placeholder="lieuarrive" class="w-40  border border-black-500" id="lieu-arrive">
    <button type="submit" id="filter-button" class="bg-blue-700 text-xl border rounded-2xl text-white">filtrer</button>
</div>


    </form> <br>


    <table class="w-full-Xxl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  border-collapse" style="margin-left:-1100px">
    <thead class="text-xl text-white uppercase bg-blue-200 bg-blue-500 text-white-400">
    <tr>
        <th class="px-6 py-3 border border-blue-500 px-2">code</th>
        <th class="px-6 py-3 border border-blue-500 px-2">Type</th>
        <th class="px-6 py-3 border border-blue-500 px-2">Distance (km)</th>
        <th class="px-6 py-3 border border-blue-500 px-2">Date debut</th>
        <th class="px-6 py-3 border border-blue-500 px-2">Date  fin</th>
        <th class="px-6 py-3 border border-blue-500 px-2" >lieu depart</th>
        <th class="px-6 py-3 border border-blue-500 px-2" >lieu arriver</th>
       <!--  <th class="px-6 py-3" id="nb">Nb produit</th>
        <th class="px-6 py-3" id="pd">Poids</th> -->
<!--         <th class="w-1/4 py-3 px-10 uppercase font-semibold text-sm">Montant Total (F)</th>
 -->       <th class="px-6 py-3">Etat Global</th>
       <th class="px-6 py-3" id="status">Etat provisoire</th>

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






<label class="swap">
  
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" />
  
  <!-- volume on icon -->
  <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/></svg>
  
  <!-- volume off icon -->
  <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"/></svg>
  
</label>



<div class="class" id="liste-produits" style="margin-left:700px">

</div>



<dialog id="ajouter-product" class="modal hidden">

<div id="ajouter-container" style="margin-left:20px"></div>
   <div class="modal-action">
     <form method="dialog" >
       <button class="btn" onclick="closeModal()">Close</button>
     </form>
   </div>
 </div>
 <form class="max-w-3xl mx-auto p-20"  id="form-produits">

 <div class="modal-box" id="modal-box">

   <div class="flex  gap-10">
   <div>
   <h3 class="font-bold text-lg"> Produit</h3>

     <div class="mb-5">
       <label for="libelle-produit" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Nom du produit</label>
       <input type="text" id="libelle-produit" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
      </div>
     <div class="mb-5">
     <select id="type-produit">
    <option value="Alimentaire">Alimentaire</option>
    <option value="Chimique">Chimique</option>
    <option value="Fragile">Fragile</option>
    <option value="Incassable">Incassable</option>
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
       <input type="text" id="toxicite" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
      </div>
     <div class="mb-5">
       <label for="poids-produit" class="block mb-2 text-sm font-medium ">Poids</label>
       <input type="text" id="poids-produit" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
      </div>
     <div class="mb-5">
       <label for="prix" class="block mb-2 text-sm font-medium ">Prix</label>
       <input type="prix" id="prix" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
       <span id="libelle-produit-error" style="display: none; color: red;"></span>
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
       <input type="text" id="nomd" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
       <div id="error-container" style="color: red;"></div>      </div>
     <div class="mb-5">
       <label for="prenom" class="block mb-2 text-sm font-medium "> prenom du destinataire</label>
       <input type="text" id="prenomd" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
       <div id="error-container" style="color: red;"></div>      </div>
     <div class="mb-5">
       <label for="adresse" class="block mb-2 text-sm font-medium "> Adresse</label>
       <input type="text" id="adressed" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
      </div>
      <div class="mb-5">
       <label for="adresse" class="block mb-2 text-sm font-medium "> Email</label>
       <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
       <span id="error" class="text-red-700" ></span>
      </div>
     </div>
     </div>
     <button type="submit" id="btn-envoyer" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envoyer</button>
     </form>
   </div>
</dialog>



    </div>


<!-- form product
 -->
    <script src="../dist/app-bundle.js"></script>

    <script>
      /*  const forms = document.getElementById("for") ;
    forms.addEventListener("submit",( )=>{
            console.log("bonjour")
    }) */

   
    
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

</body>

</html>