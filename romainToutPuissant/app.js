console.log("Bienvenue!");
// On créé un fonction qui englobe tout :

function cafe() {
  // On déclare les variables
var court = 1;
var long = 2;
var lait = 3;
var choix = prompt("Court, long ou au lait ?");
var piece = prompt("Insérez une pièce:");

// On met en route les conditions
  if (choix == "court") {
    alert("Préparation café court");
    // On insère une condition dans le choix café court
    if (piece > court) {
      var rendu = piece - court; // On déduit la somme pour rendre la monnaie
      alert("Voici votre monnaie : " + rendu +"€");
    }
  }
  else if (choix == "long") {
    alert("Préparation café long");
        // On insère une condition dans le choix café long
    if (piece > long) {
      var rendu = piece - long; // On déduit la somme pour rendre la monnaie
      alert("Voici votre monnaie :" + rendu +"€");
    }
  }
  else if (choix == "lait") {
    alert("Préparation café au lait");
        // On insère une condition dans le choix café lait
    if (piece > lait) {
      var rendu = piece - lait; // On déduit la somme pour rendre la monnaie
      alert("Voici votre monnaie : " + rendu +"€");
    }
  }
  else {
    // Pour l'instant on doit insérer le montant exact
    alert("Insérez le montant exact");
  }
}

// On dit qu'il y a 11 gobelets en tout dans la machine
var gobelets = 11;
// On fait une boucle pour décrémenter le nbre de gobelets
for (var i = 0; i < 11; i++) {
  console.log("Gobelets restants : ", gobelets);
  gobelets --;
  cafe();
}
// Une fois arrivé à zéro on prévient le consommateur :
console.log("Plus de gobelets, machine hors service.");


/*var pieceValide = [0.1, 0.2, 0.5, 1, 2];
var credit = [];
credit.push(piece);
var rendu = piece - court;
var somme = 0;*/
