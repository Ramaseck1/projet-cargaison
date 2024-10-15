<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    
</head>
<body>
    

<div class="main  mt-20 ml-80 h-150 pb-80 bg-cover opacity-80 relative" id="main">
     
     <h1 class="text-4xl font-bold mb-4 fixed top-80 ml-10 text-white">Bienvenue chez SEN GP-GARGO</h1>
     <h1 class=" text-3xl mb-8 fixed top-80 mt-20 ml-10 text-white ">Nous sommes une entreprise de transport de colis mondial.</h1>
     <a href="index.php?page=cargaison" class="bg-blue-800 hover:bg-blue-600 text-white text-xl py-2 px-4 rounded fixed top-80 mt-40 ml-10" id="btncargaison">
         Accéder à la gestion des cargaisons 
     </a>
     <p class="text-transparent">Lorem ipsum dolor sit, amet consectetur <br> adipisicing elit. Corporis sit quo, dolores libero <br> fuga nam! Rerum laudantium aliquid natus perferendis culpa deleniti fuga  <br>ipsam ipsa commodi dolore omnis hic laborum  <br>nesciunt illo porro, vitae impedit dolorem velit sed officia provident non minima. Maiores modi atque itaque culpa dolor.  <br>Alias, vero cumque consequatur nihil, asperiores quisquam ex ad cum animi quaerat, illum officia quas consequuntur deserunt vel deleniti sed. Eius quod nihil  <br>repellendus inventore reiciendis illo minus doloremque, cupiditate iste repellat error voluptas ipsam? Ex recusandae corrupti,  <br>quis blanditiis tempora dolor repellat dolores numquam quidem, ducimus praesentium eos aut amet,  <br>rerum expedita. Quod nisi itaque incidunt, delectus ex magni a maxime blanditiis consectetur non impedit consequatur corporis, fugit molestias tenetur maiores. Ea explicabo,  <br>doloribus blanditiis aliquid a sit mollitia corrupti, alias perferendis  <br>corporis tenetur illo quia dolores repellat commodi sint rerum, sapiente inventore cum aliquam facere iste. Magni accusamus sed explicabo corrupti quod animi eum neque, placeat <br>numquam molestias odio doloremque vel ipsa facere <br>repellendus reiciendis enim quisquam,  <br>sit sunt consectetur libero. Sapiente placeat eius deserunt amet enim iusto, in magni. Cupiditate eveniet vero non ipsa delectus, quod consectetur minima culpa sunt iste eum at sit corrupti quam eaque modi? Vero!</p>
 </div>


 <script src="../dist/app-bundle.js"></script>
 <script>
     const images = ['../public/img/avions.jpg', '../public/img/bateau.jpg', '../public/img/avionss.jpg'];
    let currentIndex = 0;
    
    function changeBackgroundImage() {
        document.getElementById('main').style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }
    
    setInterval(changeBackgroundImage, 2000);
    
 </script>

 </body>
</html>

