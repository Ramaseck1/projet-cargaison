
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




    <script src="../dist/app-bundle.js"></script>





        