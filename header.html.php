<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<!--     api google maps (openRouteservice)
 -->   

 <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
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
                <li class="mt-20"><a href="index.php?page=accueil" class="text-blue-500 text-2xl hover:bg-blue-400 hover:text-white border border-blue-500 pr-20 pb-3 pt-3 pl-10 rounded-2xl" id="accueil">Accueil</a></li>
                <li class="mt-20"><a href="index.php?page=cargaison" class="text-blue-500 text-2xl hover:bg-blue-400 hover:text-white border border-blue-500 pr-20 pb-3 pt-3 pl-5 rounded-2xl" id="cargaison">cargaison</a></li>
                <li class=" mt-20"><a href="index.php?page=produit" class="text-blue-500 text-2xl hover:bg-blue-400 hover:text-white border border-blue-500 pr-10 pb-3 pt-3 pl-5 rounded-2xl" id="produit">produit/colis</a></li>
            </ul>
        </div>
        <div class="container p-4 flex justify-around bg-white w-1000 ml-80" id="container">
            <div class="flex">
                <button id="burger" class="text-3xl p-2 -ml-10 ">
                    &#9776;
                </button>
            </div>
            <p class="text-blue-700 text-3xl font-bold">GP-MONDE</p>
            <input type="date" name="" id="" class="-mr-10 bg-blue-100 border-b rounded-2xl">
        </div>
    </div>

<!--     accueil
 -->  
  

 <script src="../dist/app-bundle.js"></script>


    </body>
</html>