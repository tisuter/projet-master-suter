var group = getParam("group");
var klasse = getParam("class");

//Disable or enable globally
var responseAllowedWhilePlaying = true;

function getParam(param) {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has(param)) {
        return searchParams.get(param)
    }
    return '?'
}

var einleitung = {
    type: 'instructions',
    pages: function () {
        return ['<h2>Bonjour! Hier bist du richtig bei Gruppe ' + group + '. Wenn du bereit bist, drücke weiter (prochain).</h2>'];
    },
    show_clickable_nav: true,
    button_label_next: 'prochain',
    allow_backward: false,
};

var nameklasse = {
    type: 'survey-text',
    questions: [
        {
            prompt: '<h2>Bitte gib deinen Namen und deine Klasse an.</h2>' +
                '<p> Hinweis: Bitte gib deinen Namen so an: erste zwei Buchstaben deines Vornamens, erste zwei Buchstaben deines Nachnamens, also so: Anna Roggo = AnRo</p>',
            columns: 4,
            required: true,
            name: 'nomEleve'
        },
        {
            prompt: 'Klasse',
            columns: 2,
            name: 'classeEleve',
            required: true
        }
    ],
    on_finish: function(data){
        var jsonData = JSON.parse(data.responses);
        data.nomEleve = jsonData.nomEleve;
        data.classeEleve = jsonData.classeEleve;
        return;
    },
    button_label: 'prochain >',
};


var schlusssatzUebung = {
    type: 'instructions',
    pages: ['<h2>Merci beaucoup! Du hast die Übungen erfolgreich abgeschlossen. Klicke nun auf beenden (terminer).<h2>'],
    show_clickable_nav: true,
    button_label_next: 'terminer',
    allow_backward: false,
};


var schlusssatzFragen = {
    type: 'instructions',
    pages: ['<h2>Merci beaucoup! Du hast die Fragen erfolgreich beantwortet. Klicke nun auf beenden (terminer).<h2>'],
    show_clickable_nav: true,
    button_label_next: 'terminer',
    allow_backward: false,
};


let loopFunction = function (data) {
     return data.values()[0].button_pressed === 1;
 };

let lexTaleAudioFiles = [
    {text: 'cheveux', audio: '01_cheveux.m4a'},
    {text: 'soumon', audio: '02_soumon.m4a'},
    {text: 'cloche', audio: '03_cloche.m4a'},
    {text: 'fascine', audio: '04_fascine.m4a'},
    {text: 'huif', audio: '05_huif.m4a'},
    {text: 'semonce', audio: '06_semonce.m4a'},
    {text: 'canoter', audio: '07_canoter.m4a'},
    {text: 'infâme', audio: '08_infame.m4a'},
    {text: 'fourmi', audio: '09_fourmi.m4a'},
    {text: 'cadenas', audio: '10_cadenas.m4a'},
    {text: 'racaille', audio: '11_racaille.m4a'},
    {text: 'pourcine', audio: '12_pourcine.m4a'},
    {text: 'œillet', audio: '13_oeillet.m4a'},
    {text: 'raplaner', audio: '14_raplaner.m4a'},
    {text: 'plaiser', audio: '15_plaiser.m4a'},
    {text: 'cerveler', audio: '16_cerveler.m4a'},
    {text: 'endifier', audio: '17_endifier.m4a'},
    {text: 'jamain', audio: '18_jamain.m4a'},
    {text: 'ennemi', audio: '19_ennemi.m4a'},
    {text: 'pouce', audio: '20_pouce.m4a'},
    {text: 'métir', audio: '21_metir.m4a'},
    {text: 'fosse', audio: '22_fosse.m4a'},
    {text: 'inciter', audio: '23_inciter.m4a'},
    {text: 'salière', audio: '24_saliere.m4a'},
    {text: 'fouet', audio: '25_fouet.m4a'},
    {text: 'cessure', audio: '26_cessure.m4a'},
    {text: 'clouer', audio: '27_clouer.m4a'},
    {text: 'mappemonde', audio: '28_mappemonde.m4a'},
    {text: 'gloque', audio: '29_gloque.m4a'},
    {text: 'lézard', audio: '30_lezard.m4a'},
    {text: 'sacher', audio: '31_sacher.m4a'},
    {text: 'nouer', audio: '32_nouer.m4a'},
    {text: 'occire', audio: '33_occire.m4a'},
    {text: 'écouce', audio: '34_ecouce.m4a'},
    {text: 'osseaux', audio: '35_osseaux.m4a'},
    {text: 'rejoute', audio: '36_rejoute.m4a'},
    {text: 'escroc', audio: '37_escroc.m4a'},
    {text: 'hache', audio: '38_hache.m4a'},
    {text: 'parchange', audio: '39_parchange.m4a'},
    {text: 'pinceau', audio: '40_pinceau.m4a'},
    {text: 'poisson', audio: '41_poisson.m4a'},
    {text: 'robinet', audio: '42_robinet.m4a'},
    {text: 'amadouer', audio: '43_amadouer.m4a'},
    {text: 'peigne', audio: '44_peigne.m4a'},
    {text: 'retruire', audio: '45_retruire.m4a'},
    {text: 'crayon', audio: '46_crayon.m4a'},
    {text: 'sentuelle', audio: '47_sentuelle.m4a'},
    {text: 'alourdir', audio: '48_alourdir.m4a'},
    {text: 'marteau', audio: '49_marteau.m4a'},
    {text: 'esquif', audio: '50_esquif.m4a'},
    {text: 'treillage', audio: '51_treillage.m4a'},
    {text: 'dauphin', audio: '52_dauphin.m4a'},
    {text: 'orgueil', audio: '53_orgueil.m4a'},
    {text: 'amorce', audio: '54_amorce.m4a'},
    {text: 'cintre', audio: '55_cintre.m4a'},
    {text: 'chameau', audio: '56_chameau.m4a'},
    {text: 'bouton', audio: '57_bouton.m4a'},
    {text: 'capeline', audio: '58_capeline.m4a'},
    {text: 'lanière', audio: '59_laniere.m4a'},
    {text: 'honteur', audio: '60_honteur.m4a'},
    {text: 'abêtir', audio: '61_abetir.m4a'},
    {text: 'fenêtre', audio: '62_fenetre.m4a'},
    {text: 'écureuil', audio: '63_ecureuil.m4a'},
    {text: 'caddie', audio: '64_caddie.m4a'},
    {text: 'détume', audio: '65_detume.m4a'},
    {text: 'oeuiller', audio: '66_oeiller.m4a'},
    {text: 'balai', audio: '67_balai.m4a'},
    {text: 'prioche', audio: '68_prioche.m4a'},
    {text: 'vicelard', audio: '69_vicelard.m4a'},
    {text: 'joueux', audio: '70_joueux.m4a'},
    {text: 'agiré', audio: '71_agire.m4a'},
    {text: 'éventail', audio: '72_eventail.m4a'},
    {text: 'boutard', audio: '73_boutard.m4a'},
    {text: 'panier', audio: '74_panier.m4a'},
    {text: 'citrouille', audio: '75_citrouille.m4a'},
    {text: 'bouilloire', audio: '76_bouilloire.m4a'},
    {text: 'parir', audio: '77_parir.m4a'},
    {text: 'remporter', audio: '78_remporter.m4a'},
    {text: 'procoreux', audio: '79_procoreux.m4a'},
    {text: 'tanin', audio: '80_tanin.m4a'},
    {text: 'église', audio: '81_eglise.m4a'},
    {text: 'indicible', audio: '82_indicible.m4a'},
    {text: 'réporce', audio: '83_reporce.m4a'},
    {text: 'mignon', audio: '84_mignon.m4a'}
];

const translationVerbes = ['abgelehnt', 'bezahlt', 'es reicht', 'gefunden', 'isst', 'keine Sorge', 'klingelt', 'liegen', 'stehlen'];
let translationNoms = ['Art', 'Einkäufe', 'Gemeinschaftskasse', 'Kinder', 'Maul', 'Pferd', 'Schlüssel', 'Schwere', 'Typ'];
let translationAdjectivs = ['ansonsten', 'draussen', 'ehrlich', 'gelb', 'manchmal', 'verliebt', 'verrückt', 'vor(her)', 'widerlich', 'übrigens'];

let motsCiblesFilmB = [
    //Adjectifs adverbes conjonctions prépositions
    { type: "Adjectifs&co.", text: "fou", audio: "01-fou.m4a", translation: translationAdjectivs },
    { type: "Adjectifs&co.", text: "amoureuse", audio: "01-amoureuse.m4a", translation: translationAdjectivs },
    { type: "Adjectifs&co.", text: "dégueulasse", audio: "01-degueulasse.m4a", translation: translationAdjectivs },
    { type: "Adjectifs&co.", text: "ailleurs", audio: "01-ailleurs.m4a", translation: translationAdjectivs },
    { type: "Adjectifs&co.", text: "parfois", audio: "01-parfois.m4a", translation: translationAdjectivs },
    { type: "Adjectifs&co.", text: "dehors", audio: "01-dehors.m4a", translation: translationAdjectivs },
    { type: "Adjectifs&co.", text: "franchement", audio: "01-franchement.m4a", translation: translationAdjectivs },
    { type: "Adjectifs&co.", text: "sinon", audio: "01-sinon.m4a", translation: translationAdjectivs },
    { type: "Adjectifs&co.", text: "avant", audio: "01-avant.m4a", translation: translationAdjectivs },

    //nom
    { type: "noms", text: "genre", audio: "01-genre.m4a", translation: translationNoms },
    { type: "noms", text: "clés", audio: "01-cles.m4a", translation: translationNoms },
    { type: "noms", text: "cagnotte", audio: "01-cagnotte.m4a", translation: translationNoms },
    { type: "noms", text: "courses", audio: "01-courses.m4a", translation: translationNoms },
    { type: "noms", text: "gosses", audio: "01-gosses.m4a", translation: translationNoms },
    { type: "noms", text: "gueule", audio: "01-gueule.m4a", translation: translationNoms },
    { type: "noms", text: "lourdeur", audio: "01-lourdeur.m4a", translation: translationNoms },
    { type: "noms", text: "mec", audio: "01-mec.m4a", translation: translationNoms },

    // verbes
    { type: "verbes", text: "bouffe", audio: "01-bouffe.m4a", translation: translationVerbes },
    { type: "verbes", text: "inquiète", audio: "01-inquiete.m4a", translation: translationVerbes },
    { type: "verbes", text: "payé", audio: "01-paye.m4a", translation: translationVerbes },
    { type: "verbes", text: "refusée", audio: "01-refusee.m4a", translation: translationVerbes },
    { type: "verbes", text: "sonne", audio: "01-sonne.m4a", translation: translationVerbes },
    { type: "verbes", text: "suffit", audio: "01-suffit.m4a", translation: translationVerbes },
    { type: "verbes", text: "trouvé", audio: "01-trouve.m4a", translation: translationVerbes },
    { type: "verbes", text: "voler", audio: "01-voler.m4a", translation: translationVerbes },
];

let motsCiblesFilmC = [
    {text: "avoue", audio: "02-avoue.m4a", translation: ['unknown']},
    {text: "boulettes", audio: "02-boulettes.m4a", translation: ['unknown']},
    {text: "cachez", audio: "02-cachez.m4a", translation: ['unknown']},
    {text: "car", audio: "02-car.m4a", translation: ['unknown']},
    {text: "confiance", audio: "02-confiance.m4a", translation: ['unknown']},
    {text: "conneries", audio: "02-conneries.m4a", translation: ['unknown']},
    {text: "crois", audio: "02-crois.m4a", translation: ['unknown']},
    {text: "crotte", audio: "02-crotte.m4a", translation: ['unknown']},
    {text: "encore", audio: "02-encore.m4a", translation: ['unknown']},
    {text: "endroit", audio: "02-endroit.m4a", translation: ['unknown']},
    {text: "envoie", audio: "02-envoie.m4a", translation: ['unknown']},
    {text: "flou", audio: "02-flou.m4a", translation: ['unknown']},
    {text: "fout", audio: "02-fout.m4a", translation: ['unknown']},
    {text: "goutte", audio: "02-goutte.m4a", translation: ['unknown']},
    {text: "inquiète", audio: "02-inquiete.m4a", translation: ['unknown']},
    {text: "jamais", audio: "02-jamais.m4a", translation: ['unknown']},
    {text: "mentir", audio: "02-mentir.m4a", translation: ['unknown']},
    {text: "pote", audio: "02-pote.m4a", translation: ['unknown']},
    {text: "sale", audio: "02-sale.m4a", translation: ['unknown']},
    {text: "sauf", audio: "02-sauf.m4a", translation: ['unknown']},
    {text: "si", audio: "02-si.m4a", translation: ['unknown']},
    {text: "transfère", audio: "02-transfere.m4a", translation: ['unknown']},
    {text: "truc", audio: "02-truc.m4a", translation: ['unknown']},
    {text: "tué", audio: "02-tue.m4a", translation: ['unknown']}
];

let motsCiblesFilmD = [
    {text: "ultime", audio: "02-ultime.m4a", translation: ['unknown']},
    {text: "aider", audio: "03-aider.m4a", translation: ['unknown']},
    {text: "arrête", audio: "03-arrete.m4a", translation: ['unknown']},
    {text: "attends", audio: "03-attends.m4a", translation: ['unknown']},
    {text: "avec", audio: "03-avec.m4a", translation: ['unknown']},
    {text: "boulot", audio: "03-boulot.m4a", translation: ['unknown']},
    {text: "cadeau", audio: "03-cadeau.m4a", translation: ['unknown']},
    {text: "chiante", audio: "03-chiante.m4a", translation: ['unknown']},
    {text: "curieuse", audio: "03-curieuse.m4a", translation: ['unknown']},
    {text: "désolé", audio: "03-desole.m4a", translation: ['unknown']},
    {text: "envoyer", audio: "03-envoyer.m4a", translation: ['unknown']},
    {text: "fringues", audio: "03-fringues.m4a", translation: ['unknown']},
    {text: "maintenant", audio: "03-maintenant.m4a", translation: ['unknown']},
    {text: "mais", audio: "03-mais.m4a", translation: ['unknown']},
    {text: "parrains", audio: "03-parrains.m4a", translation: ['unknown']},
    {text: "peux", audio: "03-peux.m4a", translation: ['unknown']},
    {text: "plaie", audio: "03-plaie.m4a", translation: ['unknown']},
    {text: "poussette", audio: "03-poussette.m4a", translation: ['unknown']},
    {text: "prête", audio: "03-prete.m4a", translation: ['unknown']},
    {text: "rembourser", audio: "03-rembourser.m4a", translation: ['unknown']},
    {text: "ressembler", audio: "03-ressembler.m4a", translation: ['unknown']},
    {text: "rien", audio: "03-rien.m4a", translation: ['unknown']},
    {text: "robe", audio: "03-robe.m4a", translation: ['unknown']},
    {text: "sérieux", audio: "03-serieux.m4a", translation: ['unknown']},
    {text: "taf", audio: "03-taf.m4a", translation: ['unknown']},
    {text: "tellement", audio: "03-tellement.m4a", translation: ['unknown']}
];

var b1Adjectifs = ['verrückt', 'verliebt', 'widerlich', 'übrigens', 'manchmal', 'draussen', 'ehrlich', 'ansonsten', 'in der Art/so', 'vor(her)', 'gelb', 'neben', 'selten'];
var b1NomPl = ['die Schlüssel', 'die Einkäufe', 'die Kinder', 'die Schuhe'];
var b1NomSg = ['eine Gemeinschaftskasse', 'eine Schwere', 'ein Typ', 'ein Topf'];
var b1VerbesIndef = ['gefunden', 'bezahlt', 'abgelehnt', 'auserwählt'];
var b1VerbesConjug = ['es reicht', 'es klingelt', 'man isst', 'Halt’s Maul', 'keine Sorge', 'es schneit', 'man träumt'];

let motsCiblesFilmBVar2 = [
    {category: "TW", type: 'adjectifs&co', translation: b1Adjectifs, text: 'fou', audio: '01-fou.m4a', sentence: '<p>Maintenant, dans les boîtes de Weetabix, y en a 16. Avant, il y en avait genre 32, parfois même 34. C’est <b>fou</b>, non ?</p>'},
    {category: "TW", type: 'adjectifs&co', translation: b1Adjectifs, text: 'amoureuse', audio: '01-amoureuse.m4a', sentence: '<p>On n\'est pas dans Pretty Woman. Elle va pas tomber <b>amoureuse</b> "d\'un" pute.</p>'},
    {category: "TW", type: 'adjectifs&co', translation: b1Adjectifs, text: 'dégueulasse', audio: '01-degueulasse.m4a', sentence: '<p>Elle a pas assez morflé avec Max ? Mais c\'est <b>dégueulasse</b>. Je suis négligée, je suis <b>dégueulasse</b>. Même propre, je fais sale.</p>'},
    {category: "TW", type: 'adjectifs&co', translation: b1Adjectifs, text: 'd’ailleurs', audio: '01-ailleurs.m4a', sentence: '<p><b>D\'ailleurs</b>, chéri, t\'aurais pas 200 euros à me prêter ?</p>'},
    {category: "TW", type: 'adjectifs&co', translation: b1Adjectifs, text: 'parfois', audio: '01-parfois.m4a', sentence: '<p>Maintenant, dans les boîtes de Weetabix, y en a 16. Avant, il y en avait genre 32, <b>parfois</b> même 34</p>'},
    {category: "TW", type: 'adjectifs&co', translation: b1Adjectifs, text: 'dehors', audio: '01-dehors.m4a', sentence: '<p>Vous allez pas les foutre <b>dehors</b> quand même ?</p>'},
    {category: "TW", type: 'adjectifs&co', translation: b1Adjectifs, text: 'franchement', audio: '01-franchement.m4a', sentence: '<p><b>Franchement</b>, tu l\'as trouvée comment ? Elle est chou, non ?</p>'},
    {category: "TW", type: 'adjectifs&co', translation: b1Adjectifs, text: 'sinon', audio: '01-sinon.m4a', sentence: '<p>Je compte sur toi pour régler ça, <b>sinon</b> le panier, c\'est pour moi.</p>'},
    {category: "TW", type: 'adjectifs&co', translation: b1Adjectifs, text: 'genre', audio: '01-genre.m4a', sentence: '<p>Lui, c\'est le mec, <b>genre</b> à dire : "Bon appétit !"</p>'},
    {category: "TW", type: 'adjectifs&co', translation: b1Adjectifs, text: 'avant', audio: '01-avant.m4a', sentence: '<p>Genre, là, tout de suite, maintenant, <b>avant</b> 18h30 ?</p>'},

    {category: "TW", type: 'nomPl', translation: b1NomPl, text: 'des clés', audio: '01-cles.m4a', sentence: '<p>Ça suffit de mettre tes <b>clés</b> là, on va se faire cambrioler.</p>'},
    {category: "TW", type: 'nomPl', translation: b1NomPl, text: 'des courses', audio: '01-courses.m4a', sentence: '<p>Oui, c\'est la liste de <b>courses</b> de ma meuf.</p>'},
    {category: "TW", type: 'nomPl', translation: b1NomPl, text: 'des gosses', audio: '01-gosses.m4a', sentence: '<p>Et bruncher avec tes potes qui ont des <b>gosses</b>.</p>'},
    {category: "TW", type: 'nomSg', translation: b1NomSg, text: 'une cagnotte', audio: '01-cagnotte.m4a', sentence: '<p>- C\'est pour l\'anniv d\'Elsa.</p><p>- J\'ai déjà mis sur ta <b>cagnotte</b> Leetchi.</p>'},
    {category: "TW", type: 'nomSg', translation: b1NomSg, text: 'une lourdeur', audio: '01-lourdeur.m4a', sentence: '<p>Oh, mais la lourdeur ! Milou !</p><p>- C\'est toi, la <b>lourdeur</b>.</p>'},
    {category: "TW", type: 'nomSg', translation: b1NomSg, text: 'un mec', audio: '01-mec.m4a', sentence: '<p>C\'était cool de passer un moment avec ce <b>mec</b>.</p>'},

    {category: "TW", type: 'verbesIndef', translation: b1VerbesIndef, text: 'trouvé', audio: '01-trouve.m4a', sentence: '<p>Bien sûr, vous l\'avez <b>trouvé</b>. Où ça ? Dans le sac de Charlotte ?</p>'},
    {category: "TW", type: 'verbesIndef', translation: b1VerbesIndef, text: 'payé', audio: '01-paye.m4a', sentence: '<p>J\'ai <b>payé</b> que pour deux rendez-vous. Ça va la décoincer et basta.</p>'},
    {category: "TW", type: 'verbesIndef', translation: b1VerbesIndef, text: 'refusée', audio: '01-refusee.m4a', sentence: '<p>Ta carte a été <b>refusée</b>.</p>'},
    {category: "TW", type: 'verbesIndef', translation: b1VerbesIndef, text: 'voler', audio: '01-voler.m4a', sentence: '<p>- Ça suffit de mettre tes clés là, on va se faire cambrioler.</p><p>- Oui, on va vous <b>voler</b> vos poêles antiadhésives !</p>'},

    {category: "TW", type: 'verbesConjug', translation: b1VerbesConjug, text: 'ça suffit', audio: '01-suffit.m4a', sentence: '<p>Non ! Antoine, elle le refait ! Elle le refait ! Non, <b>ça suffit</b> !</p>'},
    {category: "TW", type: 'verbesConjug', translation: b1VerbesConjug, text: 'ça sonne', audio: '01-sonne.m4a', sentence: '<p>Ça sonne, <b>ça sonne</b>. C\'est elle !</p><p>- Je lui dis quoi, moi ?</p>'},
    {category: "TW", type: 'verbesConjug', translation: b1VerbesConjug, text: 'ça se bouffe', audio: '01-bouffe.m4a', sentence: '<p><b>Ça se bouffe</b> pas avec du lait ton truc ?</p>'},
    {category: "TW", type: 'verbesConjug', translation: b1VerbesConjug, text: 'ta gueule', audio: '01-gueule.m4a', sentence: '<p><b>Ta gueule</b> ! Changement d\'adresse. Qu\'est-ce que tu veux...</p><p>- Ta gueule !</p>'},
    {category: "TW", type: 'verbesConjug', translation: b1VerbesConjug, text: 't’inquiète', audio: '01-inquiete.m4a', sentence: '<p>Je vais voir ce qu\'il me reste.</p><p>- Non, c\'est bon, <b>t\'inquiète</b>.</p>'},
];

var c1Adjectifs = ['verschwommen', 'allerletzte', 'schmutzig', 'falls/so/doch', 'noch', 'nie', 'denn', 'ausser', 'defekt', 'ohne', 'keine'];
var c1NomPl = ['die Hackfleischbällchen', 'die Dummheiten', 'die Schränke'];
var c1NomSg = ['ein Ort', 'ein Tropfen', 'eine Kacke', 'ein Freund', 'ein Vertrauen', 'ein Ding', 'eine Tüte', 'eine Gabel'];
var c1VerbesIndef = ['ich gestehe', 'du meinst', 'keine Sorge', 'ihr verheimlicht', 'es ist uns egal', 'ihr verräumt', 'ich zünde an', 'wir lachen'];
var c1VerbesConjug = ['(an)lügen', 'versende', 'leite weiter', 'getötet', 'aussteigen', 'geschlagen'];

let motsCiblesFilmCVar2 = [
    {category: "TW", type: 'adjectif&co', translation: c1Adjectifs, text: 'flou', audio: '02-flou.m4a', sentence: '<p>Pourquoi j\'arrive pas à rester propre comme toutes ces filles avec leur petit carré <b>flou</b> parfait, leur petit slim noir sans plis...</p>'},
    {category: "TW", type: 'adjectif&co', translation: c1Adjectifs, text: 'ultime', audio: '02-ultime.m4a', sentence: '<p>C\'est ma passion <b>ultime</b>, les boulettes !</p>'},
    {category: "TW", type: 'adjectif&co', translation: c1Adjectifs, text: 'sale', audio: '02-sale.m4a', sentence: '<p>Je suis négligée, je suis dégueulasse. Même propre, je fais <b>sale</b>.</p>'},
    {category: "TW", type: 'adjectif&co', translation: c1Adjectifs, text: 'encore', audio: '02-encore.m4a', sentence: '<p>Antoine croit <b>encore </b>que tu vas au yoga prénatal ?</p>'},
    {category: "TW", type: 'adjectif&co', translation: c1Adjectifs, text: 'jamais', audio: '02-jamais.m4a', sentence: '<p>Ce sera <b>jamais </b>fini avant l\'arrivée du bébé.</p>'},
    {category: "TW", type: 'adjectif&co', translation: c1Adjectifs, text: 'car', audio: '02-car.m4a', sentence: '<p>Et t\'attends pas à un cadeau commun <b>car </b>personne a mis sur la cagnotte</p>'},
    {category: "TW", type: 'adjectif&co', translation: c1Adjectifs, text: 'si', audio: '02-si.m4a', sentence: '<p>T\'es <b>si </b>jolie que j\'en oublie que ton pull est dégueulasse.</p>'},
    {category: "TW", type: 'adjectif&co', translation: c1Adjectifs, text: 'sauf', audio: '02-sauf.m4a', sentence: '<p>- Non, mais... je vois tout <b>sauf</b> quelqu\'un de bidon, moi.</p><p>- T\'es magnifique.</p>'},

    {category: "TW", type: 'nomPl', translation: c1NomPl, text: 'des boulettes', audio: '02-boulettes.m4a', sentence: '<p>Des sandwichs <b>aux boulettes</b> ? </p><p>– Oui.</p>'},
    {category: "TW", type: 'nomPl', translation: c1NomPl, text: 'des conneries', audio: '02-conneries.m4a', sentence: '<p>- Je comprends rien au texto. Tiens.</p><p>- Envoie pas <b>de conneries</b>. </p>'},
    {category: "TW", type: 'nomSg', translation: c1NomSg, text: 'un endroit', audio: '02-endroit.m4a', sentence: '<p>On a pas <b>d\'endroit</b> pour faire ton anniversaire.</p>'},

    {category: "TW", type: 'nomSg', translation: c1NomSg, text: 'une goutte', audio: '02-goutte.m4a', sentence: '<p>- Vas-y, la petite touche pro : maïs, donut, <b>goutte</b>, <b>goutte</b>. Terminé.</p>'},
    {category: "TW", type: 'nomSg', translation: c1NomSg, text: 'une crotte', audio: '02-crotte.m4a', sentence: '<p>- Il m\'a répondu !</p><p>- Ça dit quoi ? </p><p>- Alien, alien, <b>crotte</b>, bébé.</p>'},
    {category: "TW", type: 'nomSg', translation: c1NomSg, text: 'un pote', audio: '02-pote.m4a', sentence: '<p>C\'est la <b>pote </b>d\'Elsa qui me l\'a filé pour être dans le perso.</p>'},
    {category: "TW", type: 'nomSg', translation: c1NomSg, text: 'une confiance', audio: '02-confiance.m4a', sentence: '<p>- C\'est une surprise ?</p><p>- T\'as <b>confiance</b> en moi?</p>'},
    {category: "TW", type: 'nomSg', translation: c1NomSg, text: 'un truc', audio: '02-truc.m4a', sentence: '<p>Vous me cachez <b>un truc</b> ou quoi ?</p>'},

    {category: "TW", type: 'verbesIndef', translation: c1VerbesIndef, text: 'j’avoue', audio: '02-avoue.m4a', sentence: '<p>Bon, OK, <b>j\'avoue</b>. Je venais ici, petit.</p>'},
    {category: "TW", type: 'verbesIndef', translation: c1VerbesIndef, text: 'tu crois', audio: '02-crois.m4a', sentence: '<p>- Et le père Noël, c\'est pour dire que t\'es un cadeau du ciel.</p><p>- <b>Tu crois </b>? </p>'},
    {category: "TW", type: 'verbesIndef', translation: c1VerbesIndef, text: 't’inquiète', audio: '02-inquiete.m4a', sentence: '<p>- Tu m\'en veux pas, hein ? </p><p>- Non, <b>t\'inquiète</b>.</p>'},
    {category: "TW", type: 'verbesIndef', translation: c1VerbesIndef, text: 'vous cachez', audio: '02-cachez.m4a', sentence: '<p>- Qu\'est-ce qui se passe ? Vous êtes trop cheloues ce soir.</p><p>- Vous me <b>cachez</b> un truc ou quoi ?</p>'},
    {category: "TW", type: 'verbesIndef', translation: c1VerbesIndef, text: 'on s’en fout', audio: '02-fout.m4a', sentence: '<p><b>On s\'en fout</b> ! Réponds. Sinon, ça fait la meuf qui attend pour répondre.</p>'},

    {category: "TW", type: 'verbesConjug', translation: c1VerbesConjug, text: 'mentir', audio: '02-mentir.m4a', sentence: '<p>C\'est pour savoir si je dois continuer <b>mentir</b> à mon frère sur ton congé.</p>'},
    {category: "TW", type: 'verbesConjug', translation: c1VerbesConjug, text: 'envoie', audio: '02-envoie.m4a', sentence: '<p><b>Envoie</b> juste un texto.</p>'},
    {category: "TW", type: 'verbesConjug', translation: c1VerbesConjug, text: 'transfère', audio: '02-transfere.m4a', sentence: '<p>- Vas-y, la petite touche pro : maïs, donut, goutte, goutte. Terminé. <b>Transfère</b>.</p><p>- Il m\'a répondu !</p>'},
    {category: "TW", type: 'verbesConjug', translation: c1VerbesConjug, text: 'tué', audio: '02-tue.m4a', sentence: '<p>Le gars qui a <b>tué</b> cette fille rencontrée sur Tinder.  </p>'},
];

var d1Adjectifs = ['ernst', 'neugierig', 'mühsam', 'bereit', 'jetzt', 'so/derart', 'nichts', 'aber', 'mit', 'scheu', 'gestern', 'fast'];
var d1NomPl = ['ein Kinderwagen', 'eine Plage', 'eine Arbeit', 'ein Geschenk', 'ein Kleid', 'eine Arbeit', 'ein Sattel', 'ein Kabel'];
var d1NomSg = ['die Paten', 'die Klamotten', 'die Rinder'];
var d1VerbesIndef = ['helfen', 'ähnlich sehen', '(ver)senden', 'warte', 'hör auf', 'tut mir leid', 'gestreckt', 'kaufen'];
var d1VerbesConjug = ['ich zahle zurück', 'ich kann', 'ich leihe aus'];

let motsCiblesFilmDVar2 = [
    {category: "TW", type: 'adjectif&co', translation: d1Adjectifs, text: 'sérieux', audio: '03-serieux.m4a', sentence: '<p>C\'est <b>sérieux</b> avec son nouveau mec ?</p>' },
    {category: "TW", type: 'adjectif&co', translation: d1Adjectifs, text: 'curieuse', audio: '03-curieuse.m4a', sentence: '<p>« Passionnément <b>curieuse</b>.» Non, mais la fausse vie. Brangelina de la lose.</p>' },
    {category: "TW", type: 'adjectif&co', translation: d1Adjectifs, text: 'chiante', audio: '03-chiante.m4a', sentence: '<p>Pardon, les meufs. Je suis tellement <b>chiante</b>.</p>' },
    {category: "TW", type: 'adjectif&co', translation: d1Adjectifs, text: 'prête', audio: '03-prete.m4a', sentence: '<p>Moi, à ce train-là, je suis pas <b>prête</b> d\'avoir des petits-enfants.</p>' },
    {category: "TW", type: 'adjectif&co', translation: d1Adjectifs, text: 'maintenant', audio: '03-maintenant.m4a', sentence: '<p>Elle attend la réponse du pute. On fait quoi, <b>maintenant</b> ?</p>' },
    {category: "TW", type: 'adjectif&co', translation: d1Adjectifs, text: 'tellement', audio: '03-tellement.m4a', sentence: '<p>Je comprends pas. Mon plan était <b>tellement</b> ingénieusement génial.</p>' },
    {category: "TW", type: 'adjectif&co', translation: d1Adjectifs, text: 'rien', audio: '03-rien.m4a', sentence: '<p>- Ça va pas ?</p><p>- Juste une merde au boulot, <b>rien</b> de...</p>' },
    {category: "TW", type: 'adjectif&co', translation: d1Adjectifs, text: 'mais', audio: '03-mais.m4a', sentence: '<p>- Physiquement ?</p><p>- Non, <b>mais</b> aussi au niveau caractère.</p>' },
    {category: "TW", type: 'adjectif&co', translation: d1Adjectifs, text: 'avec', audio: '03-avec.m4a', sentence: '<p>- Du codo quoi ?</p><p>- Ben, du cododo. Dormir <b>avec</b> le bébé.</p>' },

    {category: "TW", type: 'nomPl', translation: d1NomPl, text: 'une poussette', audio: '03-poussette.m4a', sentence: '<p>Et merci pour la <b>poussette</b> !</p>' },
    {category: "TW", type: 'nomPl', translation: d1NomPl, text: 'une plaie', audio: '03-plaie.m4a', sentence: '<p>Quelle <b>plaie</b>.</p>' },
    {category: "TW", type: 'nomPl', translation: d1NomPl, text: 'un taf', audio: '03-taf.m4a', sentence: '<p>Je vais au <b>taf</b>. </p>' },
    {category: "TW", type: 'nomPl', translation: d1NomPl, text: 'un cadeau', audio: '03-cadeau.m4a', sentence: '<p><b>Cadeau</b> des parrains. Ça se fait, non ?</p>' },
    {category: "TW", type: 'nomPl', translation: d1NomPl, text: 'une robe', audio: '03-robe.m4a', sentence: '<p>Je vais payer pour la <b>robe</b> et pour son haut aussi.</p>' },
    {category: "TW", type: 'nomPl', translation: d1NomPl, text: 'un boulot', audio: '03-boulot.m4a', sentence: '<p>Et, au <b>boulot</b>, eh ben... je me sens complètement inutile.</p>' },

    {category: "TW", type: 'nomSg', translation: d1NomSg, text: 'des parrains', audio: '03-parrains.m4a', sentence: '<p>Cadeau des <b>parrains</b>. Ça se fait, non ?</p>' },
    {category: "TW", type: 'nomSg', translation: d1NomSg, text: 'des fringues', audio: '03-fringues.m4a', sentence: '<p>Bon, vas-y, on y va, je vais te louer des <b>fringues</b>. On va chez moi.</p>' },

    {category: "TW", type: 'verbesIndef', translation: d1VerbesIndef, text: 'aider', audio: '03-aider.m4a', sentence: '<p>Je peux vous <b>aider</b> ?</p>' },
    {category: "TW", type: 'verbesIndef', translation: d1VerbesIndef, text: 'ressembler', audio: '03-ressembler.m4a', sentence: '<p>Je vais <b>ressembler</b> à sa mère.</p>' },
    {category: "TW", type: 'verbesIndef', translation: d1VerbesIndef, text: 'envoyer', audio: '03-envoyer.m4a', sentence: '<p>Ah ! Peut-être que Jules serait d\'accord pour lui <b>envoyer</b> un message gratos.</p>' },
    {category: "TW", type: 'verbesIndef', translation: d1VerbesIndef, text: 'attends', audio: '03-attends.m4a', sentence: '<p>- Elsa, <b>attends</b> !</p><p>- On est désolées.</p>' },
    {category: "TW", type: 'verbesIndef', translation: d1VerbesIndef, text: 'arrête', audio: '03-arrete.m4a', sentence: '<p>-  Attends, <b>arrête</b>, Elsa ! </p><p>-  Hé, bébé...</p>' },
    {category: "TW", type: 'verbesIndef', translation: d1VerbesIndef, text: 'désolé', audio: '03-desole.m4a', sentence: '<p><b>Désolée</b>, on a tout vendu ce matin.</p>' },

    {category: "TW", type: 'verbesConjug', translation: d1VerbesConjug, text: 'je rembourse', audio: '03-rembourser.m4a', sentence: '<p>-C\'est loin, ton hôtel ? </p><p>- Pour faire un aller-retour. </p><p>- Je te <b>rembourse</b>, t\'inquiète !</p>' },
    {category: "TW", type: 'verbesConjug', translation: d1VerbesConjug, text: 'je peux', audio: '03-peux.m4a', sentence: '<p>Je <b>peux</b> vous aider, monsieur ?</p>' },
];

let nonWords = [
    {category: "NW", type: 'adjectif&co', translation: null, text: 'tbd', audio: '03-serieux.m4a', sentence: null },
];

const motsCiblesFilmAll = motsCiblesFilmB.concat(motsCiblesFilmC).concat(motsCiblesFilmD);
const motsCiblesFilmAllVar2 = motsCiblesFilmBVar2.concat(motsCiblesFilmCVar2).concat(motsCiblesFilmDVar2);

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

const motsCiblesFilmBVar2Preload = motsCiblesFilmBVar2.map(item => {
    return "sound/mots-cibles/" + item.audio
});
const motsCiblesFilmCVar2Preload = motsCiblesFilmCVar2.map(item => {
    return "sound/mots-cibles/" + item.audio
});
const motsCiblesFilmDVar2Preload = motsCiblesFilmDVar2.map(item => {
    return "sound/mots-cibles/" + item.audio
});
const motsCiblesFilmAllVar2Preload = motsCiblesFilmAllVar2.map(item => {
    return "sound/mots-cibles/" + item.audio
});
const nonWordsPreload = nonWords.map(item => {
    return "tbd/tbd/" + item.audio
});

numbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99'];

function getForm(klasse, group) {
    if (klasse.toLowerCase() === "3d" && group.toLowerCase() === "1") {
        return "mleovnye"
    }
    if (klasse.toLowerCase() === "3d" && group.toLowerCase() === "2") {
        return "myybvjqz"
    }
    if (klasse.toLowerCase() === "3d" && group.toLowerCase() === "3") {
        return "mzbkwgld"
    }
    if (klasse.toLowerCase() === "2a" && group.toLowerCase() === "1") {
    }
    if (klasse.toLowerCase() === "2a" && group.toLowerCase() === "2") {
    }
    if (klasse.toLowerCase() === "2a" && group.toLowerCase() === "3") {
    }

    return "mbjpwdqq"
}


function sendData(name, data) {

    var url =  'https://formspree.io/' + getForm(klasse, group);
    //TODO: Activate send
/*
    $.ajax({
        // url:'https://formspree.io/suterchristoph1@gmail.com',
        url: url,
        method: 'POST',
        data: {
            name: name,
            // _replyto: "suterchristoph1+noreply@gmail.com",
            // email: "suterchristoph1+noreply@gmail.com",
            data: data,
            _group: group,
            _klasse: klasse,
        },
        dataType: "json",
        success: function () {
            console.log('success');
        }

    });
*/
}
