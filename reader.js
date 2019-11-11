// JavaScript source code
dico_dir_files = JSON.parse('{"asiatique": ["Afghanistan Pakisatn 1 .png", "Afghanistan Pakistan 2.png", "Afghanistan Pakistan 3.png", "Himalaya 1.png", "Himalaya 2.png", "Himalaya 3.png", "Himalaya 4.png", "HImalaya 5 .png", "Japon 1.png", "Japon 2.png", "Japon 3.png", "Japon 4.png", "Japon 5.png", "Japon 6.png", "Japon 7.png"], "contemporain_africain": ["Abou Traore.png", "Aboudia.png", "Aboulia 2.png", "Diakite.png", "Man Ray .png", "Sanogo.png", "SolyCisse 1 .png"], "quai_branly": ["Abou Traore .png", "colombien.png", "Grebo 2 .png", "indonesien.png", "Jaguqr.png", "masque chirac.png", "masque Grebo.png", "maya.png", "pre colombien.png", "precolombien vert.png", "pr\u00e9colombien tete .png", "quai branly oc\u00e9anien .png", "Quai branly statues africaines.png", "reliquaire Kota.png", "visuelquaibranly.png"]}');
console.log(dico_dir_files);
dico_files_dir = JSON.parse('{"Afghanistan Pakisatn 1 .png": ["asiatique"], "Afghanistan Pakistan 2.png": ["asiatique"], "Afghanistan Pakistan 3.png": ["asiatique"], "Himalaya 1.png": ["asiatique"], "Himalaya 2.png": ["asiatique"], "Himalaya 3.png": ["asiatique"], "Himalaya 4.png": ["asiatique"], "HImalaya 5 .png": ["asiatique"], "Japon 1.png": ["asiatique"], "Japon 2.png": ["asiatique"], "Japon 3.png": ["asiatique"], "Japon 4.png": ["asiatique"], "Japon 5.png": ["asiatique"], "Japon 6.png": ["asiatique"], "Japon 7.png": ["asiatique"], "Abou Traore.png": ["contemporain_africain"], "Aboudia.png": ["contemporain_africain"], "Aboulia 2.png": ["contemporain_africain"], "Diakite.png": ["contemporain_africain"], "Man Ray .png": ["contemporain_africain"], "Sanogo.png": ["contemporain_africain"], "SolyCisse 1 .png": ["contemporain_africain"], "Abou Traore .png": ["quai_branly"], "colombien.png": ["quai_branly"], "Grebo 2 .png": ["quai_branly"], "indonesien.png": ["quai_branly"], "Jaguqr.png": ["quai_branly"], "masque chirac.png": ["quai_branly"], "masque Grebo.png": ["quai_branly"], "maya.png": ["quai_branly"], "pre colombien.png": ["quai_branly"], "precolombien vert.png": ["quai_branly"], "pr\u00e9colombien tete .png": ["quai_branly"], "quai branly oc\u00e9anien .png": ["quai_branly"], "Quai branly statues africaines.png": ["quai_branly"], "reliquaire Kota.png": ["quai_branly"], "visuelquaibranly.png": ["quai_branly"]}');
console.log(dico_files_dir);
foldersList = Object.keys(dico_dir_files);
nFolders = foldersList.length;
nImgPerFolder = 4; // the number of pictures we are going to select randomly in each sub category

filesChosen = [];
for (i = 0; i < nFolders; i++) {
    filesList = dico_dir_files[foldersList[i]];
    alreadyChosen = new Array();
    for (j = 0; j < nImgPerFolder; j++) {
        randomNumber = Math.floor(Math.random() * filesList.length);
        while (alreadyChosen.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * filesList.length);
        };
        alreadyChosen.push(randomNumber);
        filesChosen.push(filesList[randomNumber]);
    };
};

// Function to shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(filesChosen)

filesChosen.forEach(function (file) {
    var path = "asiatique_africain/" + dico_files_dir[file] + "/" + file;

    var container = $("<div>");
    container.addClass("card-item");

    var img = $("<img>");
    img.attr("src", path);
    img.addClass("image_center");
    container.append(img);

    $("div.stackedcards-container").append(container);
});