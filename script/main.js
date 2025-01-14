               // MANIPULATION DES CHAINES
    
    // FONCTION POUR INVERSER UNE CHAÎNE

    let input1_inverser = document.getElementById('input1_inverser');
    let input2_inverser = document.getElementById('input2_inverser');
    let btn_inverser = document.getElementById('btn_inverser');

    function inverserChaine(chaine) {
        return chaine.split('').reverse().join('');
    }

    btn_inverser.addEventListener('click', function() {
        input2_inverser.value = inverserChaine(input1_inverser.value);
    });


    // FONCTION POUR COMPTER LE NOMBRE DE CARACTERES DANS UNE CHAINE
    
    let input1_compter = document.getElementById('input1_compter');
    let input2_compter = document.getElementById('compteur');
    let btn_compter = document.getElementById('btn_compter');
    
    function compterCaracteres(chaine) {
        return chaine.length;
    }
    
    btn_compter.addEventListener('click', function() {
        var input1_compter = document.getElementById('input1_compter').value;
        var compteur = document.getElementById('compteur');
        compteur.textContent = compterCaracteres(input1_compter);
    });

/*     input1_compter.addEventListener('input', function() {
        var compteur = document.getElementById('compteur');
        if (this.value.trim() === '') {
          compteur.textContent = 0;
        } else {
          compteur.textContent = compterCaracteres(this.value);
        }
    }); */



    // FONCTION POUR METTRE EN MAJUSCULE LA 1ERE LETTRE D'UN MOT D'UNE PHRASE

    let input1_majuscule = document.getElementById('input1_majuscule');
    let input2_majuscule = document.getElementById('input2_majuscule');
    let btn_majuscule = document.getElementById('btn_majuscule');
    
    function majusculeMots(phrase) {
        return phrase
            .split(' ')
            .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
            .join(' ');
    }

    btn_majuscule.addEventListener('click', function() {
        input2_majuscule.value = majusculeMots(input1_majuscule.value);
    });



            // MANIPULATION DES TABLEAUX

    // FONCTION POUR TROUVER LE MAXIMUM ET LE MINIMUM D'UN TABLEAUX
    

    let input_rechercher = document.getElementById('input_rechercher');
    let btn_rechercher = document.getElementById('btn_rechercher');
    let minimum = document.getElementById('min');
    let maximum = document.getElementById('max');
    
/*     function rechercherMinMax(tableau) {
        let min = Infinity;
        let max = -Infinity;
        for (let i = 0; i < tableau.length; i++) {
            if (tableau[i] < min) {
                min = tableau[i];
            }
            if (tableau[i] > max) {
                max = tableau[i];
            }
        }
        return { min, max };
    }

    btn_rechercher.addEventListener('click', function() {
        let tableau = input_rechercher.value.trim().split(',').map(Number);
        if (tableau.length === 0) {
            alert('Veuillez saisir des valeurs');
            return;
        }
        let { min, max } = rechercherMinMax(tableau);
        minimum.textContent = min;
        maximum.textContent = max;
    }); */

    // Fonction pour trouver la valeur maximale dans un tableau
    function trouverMaximum(tableau) {
        if (tableau.length === 0) return null; // Retourne null si le tableau est vide
        return Math.max(...tableau);
    }
  
  // Fonction pour trouver la valeur minimale dans un tableau
    function trouverMinimum(tableau) {
        if (tableau.length === 0) return null; // Retourne null si le tableau est vide
        return Math.min(...tableau);
    }

    btn_rechercher.addEventListener('click', function() {
        let tableau = input_rechercher.value.trim().split(',').map(Number);
        minimum.textContent = trouverMinimum(tableau);
        maximum.textContent = trouverMaximum(tableau);
    });


    // Fonction pour calculer la somme des éléments d'un tableau

    let input_somme = document.getElementById('input_somme');
    let btn_somme = document.getElementById('btn_somme');
    let somme = document.getElementById('somme');

    function sommeTableau(tableau) {
        return tableau.reduce((somme, valeur) => somme + valeur, 0);
    }

    btn_somme.addEventListener('click', function() {
        let tableau = input_somme.value.trim().split(',').map(Number);
        somme.textContent = sommeTableau(tableau);
    });



    // Fonction pour filtrer les nombres pairs et impairs d'un tableau

    let input1_filtrer = document.getElementById('input1_filtrer');
    let btn_filtrer = document.getElementById('btn_filtrer');
    let input2_pairs = document.getElementById('input2_pairs');
    let input2_impairs = document.getElementById('input2_impairs');

    function filtrerTableau(tableau) {
        let pairs = [];
        let impairs = [];
        for (let i = 0; i < tableau.length; i++) {
            if (tableau[i] % 2 === 0) {
                pairs.push(tableau[i]);
            } else {
                impairs.push(tableau[i]);
            }
        }
        return { pairs, impairs };
    }

    btn_filtrer.addEventListener('click', function() {
        let tableau = input1_filtrer.value.trim().split(',').map(Number);
        let { pairs, impairs } = filtrerTableau(tableau);
        input2_pairs.textContent = pairs;
        input2_impairs.textContent = impairs;
    });





        // FONCTIONS MATHEMATIQUES


    // FONCTION POUR CALCULER LE FACTORIEL D'UN NOMBRE

    let input_factoriel = document.getElementById('input_factoriel');
    let btn_factoriel = document.getElementById('btn_factoriel');
    let factoriel = document.getElementById('factoriel');

    function factorielle(n) {
        if (n < 0) {
            alert("La factorielle n'est pas définie pour les nombres négatifs.");
        }
        let resultat = 1;
        for (let i = 2; i <= n; i++) {
            resultat *= i;
        }
        return resultat.toLocaleString('fr-FR', { minimumFractionDigits: 0 });
    }

    btn_factoriel.addEventListener('click', function() {
        let n = parseInt(input_factoriel.value);
        factoriel.textContent = factorielle(n);
    });


    // FONCTION POUR VERIFIER SI UN NOMBRE EST PREMIER

    let input_premier = document.getElementById('input_premier');
    let btn_verifier = document.getElementById('btn_verifier');
    let nombre_premier = document.getElementById('nombre_premier');

    function estPremier(n) {
        if (n <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
        }

    btn_verifier.addEventListener('click', function() {
        let n = parseInt(input_premier.value);
        nombre_premier.textContent = estPremier(n) ? "Le nombre est premier" : "Le nombre n'est pas premier";
    });


    // FONCTION POUR CALCULER LA SUITE D'UNE SERIE DE FIBONACCI

    let input_suite = document.getElementById('input_suite');
    let btn_suite = document.getElementById('btn_suite');
    let suite= document.getElementById('suite');

    function fibonacci(n) {
        if (n <= 0) {
            alert("Le nombre de termes doit être supérieur à zéro.");
        }
        let sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence.slice(0, n);
    }

    btn_suite.addEventListener('click', function() {
        let n = parseInt(input_suite.value);
        suite.textContent = fibonacci(n).join(', ');
    });
