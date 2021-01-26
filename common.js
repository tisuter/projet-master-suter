var einleitung = {
    type: 'instructions',
    pages: ['<h2>Bonjour! Hier bist du richtig bei Gruppe 1. Wenn du bereit bist, drücke weiter (prochain).</h2>'],
    show_clickable_nav: true,
    button_label_previous: 'retour',
    button_label_next: 'prochain',
};

var nameklasse = {
    type: 'survey-text',
    questions: [
        {
            prompt: '<h2>Bitte gib deinen Namen und deine Klasse an.</h2>' +
                '<p> Hinweis: Bitte gib deinen Namen so an: erste zwei Buchstaben deines Vornamens, erste zwei Buchstaben deines Nachnamens, also so: Anna Roggo = AnRo</p>',
            columns: 4,
            required: true,
            name: 'nom-eleve'
        },
        {
            prompt: 'Klasse',
            columns: 2,
            name: 'classe-eleve',
            required: true
        }
    ],
};


var schlusssatzUebung = {
    type: 'instructions',
    pages: ['<h2>Merci beaucoup! Du hast die Übungen erfolgreich abgeschlossen. Klicke nun auf beenden (terminer).<h2>'],
    show_clickable_nav: true,
    button_label_previous: 'retour',
    button_label_next: 'terminer',
};


var schlusssatzFragen = {
    type: 'instructions',
    pages: ['<h2>Merci beaucoup! Du hast die Fragen erfolgreich beantwortet. Klicke nun auf beenden (terminer).<h2>'],
    show_clickable_nav: true,
    button_label_previous: 'retour',
    button_label_next: 'terminer',
};


// let loopFunction = function (data) {
//     return data.values()[0].button_pressed === 2;
// };

let lexTaleAudioFiles = [
    {text: 'cheveux', audio: '01-cheveux.mp3'},
    {text: 'soumon', audio: '02-soumon.mp3'},
    {text: 'cloche', audio: '03-cloche.mp3'},
    {text: 'fascine', audio: '04-fascine.mp3'},
    {text: 'huif', audio: '05-huif.mp3'},
    {text: 'semonce', audio: '06-semonce.mp3'},
    {text: 'canoter', audio: '07-canoter.mp3'},
    {text: 'infâme', audio: '08-infame.mp3'},
    {text: 'fourmi', audio: '09-fourmi.mp3'},
    {text: 'cadenas', audio: '10-cadenas.mp3'},
    {text: 'racaille', audio: '11-racaille.mp3'},
    {text: 'pourcine', audio: '12-pourcine.mp3'},
    {text: 'œillet', audio: '13-oeillet.mp3'},
    {text: 'raplaner', audio: '14-raplaner.mp3'},
    {text: 'plaiser', audio: '15-plaiser.mp3'},
    {text: 'cerveler', audio: '16-cerveler.mp3'},
    {text: 'endifier', audio: '17-endifier.mp3'},
    {text: 'jamain', audio: '18-jamain.mp3'},
    {text: 'ennemi', audio: '19-ennemi.mp3'},
    {text: 'pouce', audio: '20-pouce.mp3'},
    {text: 'metter', audio: '21-metter.mp3'},
    {text: 'fosse', audio: '22-fosse.mp3'},
    {text: 'inciter', audio: '23-inciter.mp3'},
    {text: 'salière', audio: '24-saliere.mp3'},
    {text: 'fouet', audio: '25-fouet.mp3'},
    {text: 'cessure', audio: '26-cessure.mp3'},
    {text: 'clouer', audio: '27-clouer.mp3'},
    {text: 'mappemonde', audio: '28-mappemonde.mp3'},
    {text: 'gloque', audio: '29-gloque.mp3'},
    {text: 'lézard', audio: '30-lezard.mp3'},
    {text: 'sacher', audio: '31-sacher.mp3'},
    {text: 'nouer', audio: '32-nouer.mp3'},
    {text: 'occire', audio: '33-occire.mp3'},
    {text: 'écouce', audio: '34-ecouce.mp3'},
    {text: 'osseaux', audio: '35-osseaux.mp3'},
    {text: 'rejoute', audio: '36-rejoute.mp3'},
    {text: 'escroc', audio: '37-escroc.mp3'},
    {text: 'hache', audio: '38-hache.mp3'},
    {text: 'parchance', audio: '39-parchance.mp3'},
    {text: 'pinceau', audio: '40-pinceau.mp3'},
    {text: 'poisson', audio: '41-poisson.mp3'},
    {text: 'robinet', audio: '42-robinet.mp3'},
    {text: 'amadouer', audio: '43-amadouer.mp3'},
    {text: 'peigne', audio: '44-peigne.mp3'},
    {text: 'retruire', audio: '45-retruire.mp3'},
    {text: 'crayon', audio: '46-crayon.mp3'},
    {text: 'sentuelle', audio: '47-sentuelle.mp3'},
    {text: 'alourdir', audio: '48-alourdir.mp3'},
    {text: 'marteau', audio: '49-marteau.mp3'},
    {text: 'esquif', audio: '50-esquif.mp3'},
    {text: 'treillage', audio: '51-treillage.mp3'},
    {text: 'dauphin', audio: '52-dauphin.mp3'},
    {text: 'orgueil', audio: '53-orgueil.mp3'},
    {text: 'amorce', audio: '54-amorce.mp3'},
    {text: 'cintre', audio: '55-cintre.mp3'},
    {text: 'chameau', audio: '56-chameau.mp3'},
    {text: 'bouton', audio: '57-bouton.mp3'},
    {text: 'capeline', audio: '58-capeline.mp3'},
    {text: 'lanière', audio: '59-laniere.mp3'},
    {text: 'honteur', audio: '60-honteur.mp3'},
    {text: 'abêtir', audio: '61-abetir.mp3'},
    {text: 'fenêtre', audio: '62-fenetre.mp3'},
    {text: 'écureuil', audio: '63-ecureuil.mp3'},
    {text: 'caddie', audio: '64-caddie.mp3'},
    {text: 'détume', audio: '65-detume.mp3'},
    {text: 'oeuiller', audio: '66-oeuiller.mp3'},
    {text: 'balai', audio: '67-balai.mp3'},
    {text: 'prioche', audio: '68-prioche.mp3'},
    {text: 'vicelard', audio: '69-vicelard.mp3'},
    {text: 'joueux', audio: '70-joueux.mp3'},
    {text: 'agire', audio: '71-agire.mp3'},
    {text: 'éventail', audio: '72-eventail.mp3'},
    {text: 'boutard', audio: '73-boutard.mp3'},
    {text: 'panier', audio: '74-panier.mp3'},
    {text: 'citrouille', audio: '75-citrouille.mp3'},
    {text: 'bouilloire', audio: '76-bouilloire.mp3'},
    {text: 'parir', audio: '77-parir.mp3'},
    {text: 'remporter', audio: '78-remporter.mp3'},
    {text: 'procoreux', audio: '79-procoreux.mp3'},
    {text: 'tanin', audio: '80-tanin.mp3'},
    {text: 'église', audio: '81-eglise.mp3'},
    {text: 'indicible', audio: '82-indicible.mp3'},
    {text: 'réporce', audio: '83-reporce.mp3'},
    {text: 'mignon', audio: '84-mignon.mp3'}
];


['abgelehnt', 'bezahlt', 'es reicht', 'gefunden', 'isst', 'keine Sorge', 'klingelt', 'liegen', 'stehlen']

let motsCiblesFilmB = [
    //Adjectifs adverbes conjonctions prépositions
    {
        type: "Adjectifs&co.",
        text: "fou",
        audio: "01-fou.m4a",
        translation: ['ansonsten', 'draussen', 'ehrlich', 'gelb', 'manchmal', 'verliebt', 'verrückt', 'vor(her)', 'widerlich', 'übrigens']
    },
    {
        type: "Adjectifs&co.",
        text: "amoureuse",
        audio: "01-amoureuse.m4a",
        translation: ['ansonsten', 'draussen', 'ehrlich', 'gelb', 'manchmal', 'verliebt', 'verrückt', 'vor(her)', 'widerlich', 'übrigens']
    },
    {
        type: "Adjectifs&co.",
        text: "dégueulasse",
        audio: "01-degueulasse.m4a",
        translation: ['ansonsten', 'draussen', 'ehrlich', 'gelb', 'manchmal', 'verliebt', 'verrückt', 'vor(her)', 'widerlich', 'übrigens']
    },
    {
        type: "Adjectifs&co.",
        text: "ailleurs",
        audio: "01-ailleurs.m4a",
        translation: ['ansonsten', 'draussen', 'ehrlich', 'gelb', 'manchmal', 'verliebt', 'verrückt', 'vor(her)', 'widerlich', 'übrigens']
    },
    {
        type: "Adjectifs&co.",
        text: "parfois",
        audio: "01-parfois.m4a",
        translation: ['ansonsten', 'draussen', 'ehrlich', 'gelb', 'manchmal', 'verliebt', 'verrückt', 'vor(her)', 'widerlich', 'übrigens']
    },
    {
        type: "Adjectifs&co.",
        text: "dehors",
        audio: "01-dehors.m4a",
        translation: ['ansonsten', 'draussen', 'ehrlich', 'gelb', 'manchmal', 'verliebt', 'verrückt', 'vor(her)', 'widerlich', 'übrigens']
    },
    {
        type: "Adjectifs&co.",
        text: "franchement",
        audio: "01-franchement.m4a",
        translation: ['ansonsten', 'draussen', 'ehrlich', 'gelb', 'manchmal', 'verliebt', 'verrückt', 'vor(her)', 'widerlich', 'übrigens']
    },
    {
        type: "Adjectifs&co.",
        text: "sinon",
        audio: "01-sinon.m4a",
        translation: ['ansonsten', 'draussen', 'ehrlich', 'gelb', 'manchmal', 'verliebt', 'verrückt', 'vor(her)', 'widerlich', 'übrigens']
    },
    {
        type: "Adjectifs&co.",
        text: "avant",
        audio: "01-avant.m4a",
        translation: ['ansonsten', 'draussen', 'ehrlich', 'gelb', 'manchmal', 'verliebt', 'verrückt', 'vor(her)', 'widerlich', 'übrigens']
    },

    //nom
    {
        type: "noms",
        text: "genre",
        audio: "01-genre.m4a",
        translation: ['Art', 'Einkäufe', 'Gemeinschaftskasse', 'Kinder', 'Maul', 'Pferd', 'Schlüssel', 'Schwere', 'Typ']
    },
    {
        type: "noms",
        text: "clés",
        audio: "01-cles.m4a",
        translation: ['Art', 'Einkäufe', 'Gemeinschaftskasse', 'Kinder', 'Maul', 'Pferd', 'Schlüssel', 'Schwere', 'Typ']
    },
    {
        type: "noms",
        text: "cagnotte",
        audio: "01-cagnotte.m4a",
        translation: ['Art', 'Einkäufe', 'Gemeinschaftskasse', 'Kinder', 'Maul', 'Pferd', 'Schlüssel', 'Schwere', 'Typ']
    },
    {
        type: "noms",
        text: "courses",
        audio: "01-courses.m4a",
        translation: ['Art', 'Einkäufe', 'Gemeinschaftskasse', 'Kinder', 'Maul', 'Pferd', 'Schlüssel', 'Schwere', 'Typ']
    },
    {
        type: "noms",
        text: "gosses",
        audio: "01-gosses.m4a",
        translation: ['Art', 'Einkäufe', 'Gemeinschaftskasse', 'Kinder', 'Maul', 'Pferd', 'Schlüssel', 'Schwere', 'Typ']
    },
    {
        type: "noms",
        text: "gueule",
        audio: "01-gueule.m4a",
        translation: ['Art', 'Einkäufe', 'Gemeinschaftskasse', 'Kinder', 'Maul', 'Pferd', 'Schlüssel', 'Schwere', 'Typ']
    },
    {
        type: "noms",
        text: "lourdeur",
        audio: "01-lourdeur.m4a",
        translation: ['Art', 'Einkäufe', 'Gemeinschaftskasse', 'Kinder', 'Maul', 'Pferd', 'Schlüssel', 'Schwere', 'Typ']
    },
    {
        type: "noms",
        text: "mec",
        audio: "01-mec.m4a",
        translation: ['Art', 'Einkäufe', 'Gemeinschaftskasse', 'Kinder', 'Maul', 'Pferd', 'Schlüssel', 'Schwere', 'Typ']
    },

    // verbes
    {
        type: "verbes",
        text: "bouffe",
        audio: "01-bouffe.m4a",
        translation: ['abgelehnt', 'bezahlt', 'es reicht', 'gefunden', 'isst', 'keine Sorge', 'klingelt', 'liegen', 'stehlen']
    },
    {
        type: "verbes",
        text: "inquiète",
        audio: "01-inquiete.m4a",
        translation: ['abgelehnt', 'bezahlt', 'es reicht', 'gefunden', 'isst', 'keine Sorge', 'klingelt', 'liegen', 'stehlen']
    },
    {
        type: "verbes",
        text: "payé",
        audio: "01-paye.m4a",
        translation: ['abgelehnt', 'bezahlt', 'es reicht', 'gefunden', 'isst', 'keine Sorge', 'klingelt', 'liegen', 'stehlen']
    },
    {
        type: "verbes",
        text: "refusée",
        audio: "01-refusee.m4a",
        translation: ['abgelehnt', 'bezahlt', 'es reicht', 'gefunden', 'isst', 'keine Sorge', 'klingelt', 'liegen', 'stehlen']
    },
    {
        type: "verbes",
        text: "sonne",
        audio: "01-sonne.m4a",
        translation: ['abgelehnt', 'bezahlt', 'es reicht', 'gefunden', 'isst', 'keine Sorge', 'klingelt', 'liegen', 'stehlen']
    },
    {
        type: "verbes",
        text: "suffit",
        audio: "01-suffit.m4a",
        translation: ['abgelehnt', 'bezahlt', 'es reicht', 'gefunden', 'isst', 'keine Sorge', 'klingelt', 'liegen', 'stehlen']
    },
    {
        type: "verbes",
        text: "trouvé",
        audio: "01-trouve.m4a",
        translation: ['abgelehnt', 'bezahlt', 'es reicht', 'gefunden', 'isst', 'keine Sorge', 'klingelt', 'liegen', 'stehlen']
    },
    {
        type: "verbes",
        text: "voler",
        audio: "01-voler.m4a",
        translation: ['abgelehnt', 'bezahlt', 'es reicht', 'gefunden', 'isst', 'keine Sorge', 'klingelt', 'liegen', 'stehlen']
    },
];

let motsCiblesFilmC = [
    {text: "avoue", audio: "02-avoue.m4a"},
    {text: "boulettes", audio: "02-boulettes.m4a"},
    {text: "cachez", audio: "02-cachez.m4a"},
    {text: "car", audio: "02-car.m4a"},
    {text: "confiance", audio: "02-confiance.m4a"},
    {text: "conneries", audio: "02-conneries.m4a"},
    {text: "crois", audio: "02-crois.m4a"},
    {text: "crotte", audio: "02-crotte.m4a"},
    {text: "encore", audio: "02-encore.m4a"},
    {text: "endroit", audio: "02-endroit.m4a"},
    {text: "envoie", audio: "02-envoie.m4a"},
    {text: "flou", audio: "02-flou.m4a"},
    {text: "fout", audio: "02-fout.m4a"},
    {text: "goutte", audio: "02-goutte.m4a"},
    {text: "inquiète", audio: "02-inquiete.m4a"},
    {text: "jamais", audio: "02-jamais.m4a"},
    {text: "mentir", audio: "02-mentir.m4a"},
    {text: "pote", audio: "02-pote.m4a"},
    {text: "sale", audio: "02-sale.m4a"},
    {text: "sauf", audio: "02-sauf.m4a"},
    {text: "si", audio: "02-si.m4a"},
    {text: "transfère", audio: "02-transfere.m4a"},
    {text: "truc", audio: "02-truc.m4a"},
    {text: "tué", audio: "02-tue.m4a"}
];

let motsCiblesFilmD = [
    {text: "ultime", audio: "02-ultime.m4a"},
    {text: "aider", audio: "03-aider.m4a"},
    {text: "arrête", audio: "03-arrete.m4a"},
    {text: "attends", audio: "03-attends.m4a"},
    {text: "avec", audio: "03-avec.m4a"},
    {text: "boulot", audio: "03-boulot.m4a"},
    {text: "cadeau", audio: "03-cadeau.m4a"},
    {text: "chiante", audio: "03-chiante.m4a"},
    {text: "curieuse", audio: "03-curieuse.m4a"},
    {text: "désolé", audio: "03-desole.m4a"},
    {text: "envoyer", audio: "03-envoyer.m4a"},
    {text: "fringues", audio: "03-fringues.m4a"},
    {text: "maintenant", audio: "03-maintenant.m4a"},
    {text: "mais", audio: "03-mais.m4a"},
    {text: "parrains", audio: "03-parrains.m4a"},
    {text: "peux", audio: "03-peux.m4a"},
    {text: "plaie", audio: "03-plaie.m4a"},
    {text: "poussette", audio: "03-poussette.m4a"},
    {text: "prête", audio: "03-prete.m4a"},
    {text: "rembourser", audio: "03-rembourser.m4a"},
    {text: "ressembler", audio: "03-ressembler.m4a"},
    {text: "rien", audio: "03-rien.m4a"},
    {text: "robe", audio: "03-robe.m4a"},
    {text: "sérieux", audio: "03-serieux.m4a"},
    {text: "taf", audio: "03-taf.m4a"},
    {text: "tellement", audio: "03-tellement.m4a"}
];
const motsCiblesFilmAll = motsCiblesFilmB.concat(motsCiblesFilmC).concat(motsCiblesFilmD);

const lexTaleAudioFilesPreload = lexTaleAudioFiles.map(item => {
    return "sound/LexTale/" + item.audio
});
const motsCiblesFilmBPreload = motsCiblesFilmB.map(item => {
    return "sound/mots-cibles/" + item.audio
});
const motsCiblesFilmCPreload = motsCiblesFilmC.map(item => {
    return "sound/mots-cibles/" + item.audio
});
const motsCiblesFilmDPreload = motsCiblesFilmD.map(item => {
    return "sound/mots-cibles/" + item.audio
});

const motsCiblesFilmAllPreload = motsCiblesFilmAll.map(item => {
    return "sound/mots-cibles/" + item.audio
});

numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']

let calculations = [
    //Adjectifs adverbes conjonctions prépositions
    {type: "calc", text: "3 + 4 =", audio: "hammer.mp3", solution: numbers},
    {type: "calc", text: "7 + 11 =", audio: "hammer.mp3", solution: numbers},
    {type: "calc", text: "37-5 =", audio: "hammer.mp3", solution: numbers},
    {type: "calc", text: "92-6 =", audio: "hammer.mp3", solution: numbers},
    {type: "calc", text: "5x3 =", audio: "hammer.mp3", solution: numbers},
    {type: "calc", text: "2x12 =", audio: "hammer.mp3", solution: numbers},
    {type: "calc", text: "16:4=", audio: "hammer.mp3", solution: numbers},
    {type: "calc", text: "33:11=", audio: "hammer.mp3", solution: numbers}
];

const calculationsPreload = calculations.map(item => {
    return "sound/" + item.audio
});


function saveData(name, data) {
    $.ajax({
        // url:'https://formspree.io/suterchristoph1@gmail.com',
        url: 'https://formspree.io/mbjpwdqq',
        method: 'POST',
        data: {
            name: name,
            _replyto: "suterchristoph1+noreply@gmail.com",
            email: "suterchristoph1+noreply@gmail.com",
            data: data,
            _subject: 'Test-1 data',
        },
        dataType: "json",
        success: function () {
            console.log('success');
            $('#formBlock').hide();
            $('#thankyouBlock').show();
        }

    });
}
