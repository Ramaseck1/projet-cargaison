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
    
    <!-- accueil -->
    <div class="main bg-red-700 mt-20 ml-80 h-150 pb-80 bg-cover opacity-80 relative" id="main">
     
     <h1 class="text-4xl font-bold mb-4 fixed top-80 ml-10 text-white">Bienvenue chez GPduMonde</h1>
     <h1 class=" text-3xl mb-8 fixed top-80 mt-20 ml-10 text-white ">Nous sommes une entreprise de transport de colis mondial.</h1>
     <button class="bg-blue-800 hover:bg-blue-600 text-white text-xl py-2 px-4 rounded fixed top-80 mt-40 ml-10" id="btncargaison">
         Accéder à la gestion des cargaisons 
     </button>
     <p class="text-transparent">Lorem ipsum dolor sit, amet consectetur <br> adipisicing elit. Corporis sit quo, dolores libero <br> fuga nam! Rerum laudantium aliquid natus perferendis culpa deleniti fuga  <br>ipsam ipsa commodi dolore omnis hic laborum  <br>nesciunt illo porro, vitae impedit dolorem velit sed officia provident non minima. Maiores modi atque itaque culpa dolor.  <br>Alias, vero cumque consequatur nihil, asperiores quisquam ex ad cum animi quaerat, illum officia quas consequuntur deserunt vel deleniti sed. Eius quod nihil  <br>repellendus inventore reiciendis illo minus doloremque, cupiditate iste repellat error voluptas ipsam? Ex recusandae corrupti,  <br>quis blanditiis tempora dolor repellat dolores numquam quidem, ducimus praesentium eos aut amet,  <br>rerum expedita. Quod nisi itaque incidunt, delectus ex magni a maxime blanditiis consectetur non impedit consequatur corporis, fugit molestias tenetur maiores. Ea explicabo,  <br>doloribus blanditiis aliquid a sit mollitia corrupti, alias perferendis  <br>corporis tenetur illo quia dolores repellat commodi sint rerum, sapiente inventore cum aliquam facere iste. Magni accusamus sed explicabo corrupti quod animi eum neque, placeat <br>numquam molestias odio doloremque vel ipsa facere <br>repellendus reiciendis enim quisquam,  <br>sit sunt consectetur libero. Sapiente placeat eius deserunt amet enim iusto, in magni. Cupiditate eveniet vero non ipsa delectus, quod consectetur minima culpa sunt iste eum at sit corrupti quam eaque modi? Vero!</p>
 </div>

<!--  cargaison
 -->
 <div class="section flex justify-around flex-row" id="section">



 <div class="text-3xl mt-10 relative left-80  w-10  " id="results">
            <form action="">
            <div class="flex gap-10">

    <input type="text" placeholder="Recherche" class=" w-80" id="searcht"> <br>
    <input type="text" placeholder="Recherche" class=" w-80" id="searchd"> <br>
    <input type="text" placeholder="code" class=" w-80 ml-10" id="search-code"> <br>
    </form>
    </div> <br> 
    <table class="min-w-10 bg-white border-4 ">
    <thead class="bg-gray-800 text-white w-full">
    <tr>
        <th class="w-1/4 py-3 px-10 uppercase font-semibold text-sm">code</th>
        <th class="w-1/4 py-3 px-10 uppercase font-semibold text-sm">Type</th>
        <th class="w-1/4 py-3 px-10 uppercase font-semibold text-sm">Distance (km)</th>
        <th class="w-1/4 py-3 px-10 uppercase font-semibold text-sm" >Date debut</th>
        <th class="w-1/4 py-3 px-10 uppercase font-semibold text-sm" >Date fin</th>
        <th class="w-1/4 py-3 px-10 uppercase font-semibold text-sm" id="nb">Nb produit</th>
        <th class="w-1/4 py-3 px-10 uppercase font-semibold text-sm" id="pd">Poids</th>
        <th class="w-1/4 py-3 px-10 uppercase font-semibold text-sm">Montant Total (F)</th>
        <th class="w-1/4 py-3 px-10 uppercase font-semibold text-sm">Etat</th>
        <th class="py-3 px-10 uppercase font-semibold text-sm">Actions</th>
    </tr>
</thead>
<tbody class="text-gray-700" id="tbodycargaison">
    <tr>
        <!-- Les lignes ajoutées dynamiquement auront des cellules avec les classes nb-cell et pd-cell -->
    </tr>
</tbody>
    </table>






<button class="btn" onclick="my_modal_5.showModal()">open modal</button>
<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>


  </div>
</dialog>

<script src="../dist/app-bundle.js"></script>

</body>
</html>