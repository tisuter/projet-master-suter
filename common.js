/** global vars **/

var group = getParam("group");
var klasse = getParam("class");

//Disable or enable globally
var responseAllowedWhilePlaying = getParamOrElse('wait', false)

/** Timeline Elemente */
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


/** Content **/

let lexTaleAudioFiles = [
    {text: 'cheveux', audio: 'sound/LexTale/01_cheveux.m4a', isTW: true},
    {text: 'soumon', audio: 'sound/LexTale/02_soumon.m4a', isTW: false},
    {text: 'cloche', audio: 'sound/LexTale/03_cloche.m4a', isTW: true},
    {text: 'fascine', audio: 'sound/LexTale/04_fascine.m4a', isTW: true},
    {text: 'huif', audio: 'sound/LexTale/05_huif.m4a', isTW: false},
    {text: 'semonce', audio: 'sound/LexTale/06_semonce.m4a', isTW: true},
    {text: 'canoter', audio: 'sound/LexTale/07_canoter.m4a', isTW: true},
    {text: 'infâme', audio: 'sound/LexTale/08_infame.m4a', isTW: true},
    {text: 'fourmi', audio: 'sound/LexTale/09_fourmi.m4a', isTW: true},
    {text: 'cadenas', audio: 'sound/LexTale/10_cadenas.m4a', isTW: true},
    {text: 'racaille', audio: 'sound/LexTale/11_racaille.m4a', isTW: true},
    {text: 'pourcine', audio: 'sound/LexTale/12_pourcine.m4a', isTW: false},
    {text: 'œillet', audio: 'sound/LexTale/13_oeillet.m4a', isTW: true},
    {text: 'raplaner', audio: 'sound/LexTale/14_raplaner.m4a', isTW: false},
    {text: 'plaiser', audio: 'sound/LexTale/15_plaiser.m4a', isTW: false},
    {text: 'cerveler', audio: 'sound/LexTale/16_cerveler.m4a', isTW: false},
    {text: 'endifier', audio: 'sound/LexTale/17_endifier.m4a', isTW: false},
    {text: 'jamain', audio: 'sound/LexTale/18_jamain.m4a', isTW: false},
    {text: 'ennemi', audio: 'sound/LexTale/19_ennemi.m4a', isTW: true},
    {text: 'pouce', audio: 'sound/LexTale/20_pouce.m4a', isTW: true},
    {text: 'métir', audio: 'sound/LexTale/21_metir.m4a', isTW: false},
    {text: 'fosse', audio: 'sound/LexTale/22_fosse.m4a', isTW: true},
    {text: 'inciter', audio: 'sound/LexTale/23_inciter.m4a', isTW: true},
    {text: 'salière', audio: 'sound/LexTale/24_saliere.m4a', isTW: true},
    {text: 'fouet', audio: 'sound/LexTale/25_fouet.m4a', isTW: true},
    {text: 'cessure', audio: 'sound/LexTale/26_cessure.m4a', isTW: false},
    {text: 'clouer', audio: 'sound/LexTale/27_clouer.m4a', isTW: true},
    {text: 'mappemonde', audio: 'sound/LexTale/28_mappemonde.m4a', isTW: true},
    {text: 'gloque', audio: 'sound/LexTale/29_gloque.m4a', isTW: false},
    {text: 'lézard', audio: 'sound/LexTale/30_lezard.m4a', isTW: true},
    {text: 'sacher', audio: 'sound/LexTale/31_sacher.m4a', isTW: false},
    {text: 'nouer', audio: 'sound/LexTale/32_nouer.m4a', isTW: true},
    {text: 'occire', audio: 'sound/LexTale/33_occire.m4a', isTW: true},
    {text: 'écouce', audio: 'sound/LexTale/34_ecouce.m4a', isTW: false},
    {text: 'osseaux', audio: 'sound/LexTale/35_osseaux.m4a', isTW: false},
    {text: 'rejoute', audio: 'sound/LexTale/36_rejoute.m4a', isTW: false},
    {text: 'escroc', audio: 'sound/LexTale/37_escroc.m4a', isTW: true},
    {text: 'hache', audio: 'sound/LexTale/38_hache.m4a', isTW: true},
    {text: 'parchange', audio: 'sound/LexTale/39_parchange.m4a', isTW: false},
    {text: 'pinceau', audio: 'sound/LexTale/40_pinceau.m4a', isTW: true},
    {text: 'poisson', audio: 'sound/LexTale/41_poisson.m4a', isTW: true},
    {text: 'robinet', audio: 'sound/LexTale/42_robinet.m4a', isTW: true},
    {text: 'amadouer', audio: 'sound/LexTale/43_amadouer.m4a', isTW: true},
    {text: 'peigne', audio: 'sound/LexTale/44_peigne.m4a', isTW: true},
    {text: 'retruire', audio: 'sound/LexTale/45_retruire.m4a', isTW: false},
    {text: 'crayon', audio: 'sound/LexTale/46_crayon.m4a', isTW: true},
    {text: 'sentuelle', audio: 'sound/LexTale/47_sentuelle.m4a', isTW: false},
    {text: 'alourdir', audio: 'sound/LexTale/48_alourdir.m4a', isTW: true},
    {text: 'marteau', audio: 'sound/LexTale/49_marteau.m4a', isTW: true},
    {text: 'esquif', audio: 'sound/LexTale/50_esquif.m4a', isTW: true},
    {text: 'treillage', audio: 'sound/LexTale/51_treillage.m4a', isTW: true},
    {text: 'dauphin', audio: 'sound/LexTale/52_dauphin.m4a', isTW: true},
    {text: 'orgueil', audio: 'sound/LexTale/53_orgueil.m4a', isTW: true},
    {text: 'amorce', audio: 'sound/LexTale/54_amorce.m4a', isTW: true},
    {text: 'cintre', audio: 'sound/LexTale/55_cintre.m4a', isTW: true},
    {text: 'chameau', audio: 'sound/LexTale/56_chameau.m4a', isTW: true},
    {text: 'bouton', audio: 'sound/LexTale/57_bouton.m4a', isTW: true},
    {text: 'capeline', audio: 'sound/LexTale/58_capeline.m4a', isTW: true},
    {text: 'lanière', audio: 'sound/LexTale/59_laniere.m4a', isTW: true},
    {text: 'honteur', audio: 'sound/LexTale/60_honteur.m4a', isTW: false},
    {text: 'abêtir', audio: 'sound/LexTale/61_abetir.m4a', isTW: true},
    {text: 'fenêtre', audio: 'sound/LexTale/62_fenetre.m4a', isTW: true},
    {text: 'écureuil', audio: 'sound/LexTale/63_ecureuil.m4a', isTW: true},
    {text: 'caddie', audio: 'sound/LexTale/64_caddie.m4a', isTW: true},
    {text: 'détume', audio: 'sound/LexTale/65_detume.m4a', isTW: false},
    {text: 'oeiller', audio: 'sound/LexTale/66_oeiller.m4a', isTW: false},
    {text: 'balai', audio: 'sound/LexTale/67_balai.m4a', isTW: true},
    {text: 'prioche', audio: 'sound/LexTale/68_prioche.m4a', isTW: false},
    {text: 'vicelard', audio: 'sound/LexTale/69_vicelard.m4a', isTW: true},
    {text: 'joueux', audio: 'sound/LexTale/70_joueux.m4a', isTW: false},
    {text: 'agiré', audio: 'sound/LexTale/71_agire.m4a', isTW: false},
    {text: 'éventail', audio: 'sound/LexTale/72_eventail.m4a', isTW: true},
    {text: 'boutard', audio: 'sound/LexTale/73_boutard.m4a', isTW: false},
    {text: 'panier', audio: 'sound/LexTale/74_panier.m4a', isTW: true},
    {text: 'citrouille', audio: 'sound/LexTale/75_citrouille.m4a', isTW: true},
    {text: 'bouilloire', audio: 'sound/LexTale/76_bouilloire.m4a', isTW: true},
    {text: 'parir', audio: 'sound/LexTale/77_parir.m4a', isTW: false},
    {text: 'remporter', audio: 'sound/LexTale/78_remporter.m4a', isTW: true},
    {text: 'procoreux', audio: 'sound/LexTale/79_procoreux.m4a', isTW: false},
    {text: 'tanin', audio: 'sound/LexTale/80_tanin.m4a', isTW: true},
    {text: 'église', audio: 'sound/LexTale/81_eglise.m4a', isTW: true},
    {text: 'indicible', audio: 'sound/LexTale/82_indicible.m4a', isTW: true},
    {text: 'réporce', audio: 'sound/LexTale/83_reporce.m4a', isTW: false},
    {text: 'mignon', audio: 'sound/LexTale/84_mignon.m4a', isTW: true},
];

var b1Adjectifs = ['verrückt', 'verliebt', 'widerlich', 'übrigens', 'manchmal', 'draussen', 'ehrlich', 'ansonsten', 'in der Art/so', 'vor(her)', 'gelb', 'neben', 'selten'];
var b1NomPl = ['die Schlüssel', 'die Einkäufe', 'die Kinder', 'der Bären'];
var b1NomSg = ['die Gemeinschaftskasse', 'die Schwere', 'der Typ', 'der Meter'];
var b1VerbesIndef = ['gefunden', 'bezahlt', 'abgelehnt', 'stehlen', 'auserwählt'];
var b1VerbesConjug = ['es reicht', 'es klingelt', 'man isst', 'Halt’s Maul', 'keine Sorge', 'es schneit', 'man träumt'];

let motsCiblesFilmB = [
 {category: "TW", type: 'adjectifs&co', translation: shuffle([...b1Adjectifs]), text: 'fou', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-fou.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-fou.m4a', sentence: '<p>Maintenant, dans les boîtes de Weetabix, y en a 16. Avant, il y en avait genre 32, parfois même 34. C’est <b>fou</b>, non ?</p>', solution: "verrückt"},
 {category: "TW", type: 'adjectifs&co', translation: shuffle([...b1Adjectifs]), text: 'amoureuse', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-amoureuse.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-amoureuse.m4a', sentence: '<p>On n\'est pas dans Pretty Woman. Elle va pas tomber <b>amoureuse</b> "d\'un" pute.</p>', solution: "verliebt"},
 {category: "TW", type: 'adjectifs&co', translation: shuffle([...b1Adjectifs]), text: 'dégueulasse', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-degueulasse.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-degueulasse.m4a', sentence: '<p>Elle a pas assez morflé avec Max ? Mais c\'est <b>dégueulasse</b>. Je suis négligée, je suis <b>dégueulasse</b>. Même propre, je fais sale.</p>', solution: "widerlich"},
 {category: "TW", type: 'adjectifs&co', translation: shuffle([...b1Adjectifs]), text: 'd’ailleurs', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-ailleurs.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-ailleurs.m4a', sentence: '<p><b>D\'ailleurs</b>, chéri, t\'aurais pas 200 euros à me prêter ?</p>', solution: "übrigens"},
 {category: "TW", type: 'adjectifs&co', translation: shuffle([...b1Adjectifs]), text: 'parfois', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-parfois.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-parfois.m4a', sentence: '<p>Maintenant, dans les boîtes de Weetabix, y en a 16. Avant, il y en avait genre 32, <b>parfois</b> même 34</p>', solution: "manchmal"},
 {category: "TW", type: 'adjectifs&co', translation: shuffle([...b1Adjectifs]), text: 'dehors', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-dehors.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-dehors.m4a', sentence: '<p>Vous allez pas les foutre <b>dehors</b> quand même ?</p>', solution: "draussen"},
 {category: "TW", type: 'adjectifs&co', translation: shuffle([...b1Adjectifs]), text: 'franchement', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-franchement.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-franchement.m4a', sentence: '<p><b>Franchement</b>, tu l\'as trouvée comment ? Elle est chou, non ?</p>', solution: "ehrlich"},
 {category: "TW", type: 'adjectifs&co', translation: shuffle([...b1Adjectifs]), text: 'sinon', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-sinon.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-sinon.m4a', sentence: '<p>Je compte sur toi pour régler ça, <b>sinon</b> le panier, c\'est pour moi.</p>', solution: "ansonsten"},
 {category: "TW", type: 'adjectifs&co', translation: shuffle([...b1Adjectifs]), text: 'genre', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-genre.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-genre.m4a', sentence: '<p>Lui, c\'est le mec, <b>genre</b> à dire : "Bon appétit !"</p>', solution: "in der Art/so"},
  {category: "TW", type: 'adjectifs&co', translation: shuffle([...b1Adjectifs]), text: 'avant', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-avant.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-avant.m4a', sentence: '<p>Genre, là, tout de suite, maintenant, <b>avant</b> 18h30 ?</p>', solution: "vor(her)"},

{category: "TW", type: 'nomPl', translation: shuffle([...b1NomPl]), text: 'les clés', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-cles.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-cles.m4a', sentence: '<p>Ça suffit de mettre tes <b>clés</b> là, on va se faire cambrioler.</p>', solution: "die Schlüssel"},
{category: "TW", type: 'nomPl', translation: shuffle([...b1NomPl]), text: 'les courses', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-courses.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-courses.m4a', sentence: '<p>Oui, c\'est la liste de <b>courses</b> de ma meuf.</p>', solution: "die Einkäufe"},
{category: "TW", type: 'nomPl', translation: shuffle([...b1NomPl]), text: 'les gosses', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-gosses.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-gosses.m4a', sentence: '<p>Et bruncher avec tes potes qui ont des <b>gosses</b>.</p>', solution: "die Kinder"},
{category: "TW", type: 'nomSg', translation: shuffle([...b1NomSg]), text: 'la cagnotte', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-cagnotte.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-cagnotte.m4a', sentence: '<p>- C\'est pour l\'anniv d\'Elsa.</p><p>- J\'ai déjà mis sur ta <b>cagnotte</b> Leetchi.</p>', solution: "die Gemeinschaftskasse"},
{category: "TW", type: 'nomSg', translation: shuffle([...b1NomSg]), text: 'la lourdeur', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-lourdeur.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-lourdeur.m4a', sentence: '<p>- Oh, mais la lourdeur ! Milou !</p><p>- C\'est toi, la <b>lourdeur</b>.</p>', solution: "die Schwere"},
{category: "TW", type: 'nomSg', translation: shuffle([...b1NomSg]), text: 'le mec', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-mec.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-mec.m4a', sentence: '<p>C\'était cool de passer un moment avec ce <b>mec</b>.</p>', solution: "der Typ"},

{category: "TW", type: 'verbesIndef', translation: shuffle([...b1VerbesIndef]), text: 'trouvé', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-trouve.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-trouve.m4a', sentence: '<p>Bien sûr, vous l\'avez <b>trouvé</b>. Où ça ? Dans le sac de Charlotte ?</p>', solution: "gefunden"},
{category: "TW", type: 'verbesIndef', translation: shuffle([...b1VerbesIndef]), text: 'payé', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-paye.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-paye.m4a', sentence: '<p>J\'ai <b>payé</b> que pour deux rendez-vous. Ça va la décoincer et basta.</p>', solution: "bezahlt"},
{category: "TW", type: 'verbesIndef', translation: shuffle([...b1VerbesIndef]), text: 'refusée', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-refusee.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-refusee.m4a', sentence: '<p>Ta carte a été <b>refusée</b>.</p>', solution: "abgelehnt"},
{category: "TW", type: 'verbesIndef', translation: shuffle([...b1VerbesIndef]), text: 'voler', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-voler.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-voler.m4a', sentence: '<p>- Ça suffit de mettre tes clés là, on va se faire cambrioler.</p><p>- Oui, on va vous <b>voler</b> vos poêles antiadhésives !</p>', solution: "stehlen"},

{category: "TW", type: 'verbesConjug', translation: shuffle([...b1VerbesConjug]), text: 'ça suffit', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-suffit.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-suffit.m4a', sentence: '<p>Non ! Antoine, elle le refait ! Elle le refait ! Non, <b>ça suffit</b> !</p>', solution: "es reicht"},
{category: "TW", type: 'verbesConjug', translation: shuffle([...b1VerbesConjug]), text: 'ça sonne', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-sonne.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-sonne.m4a', sentence: '<p>-Ça sonne, <b>ça sonne</b>. C\'est elle !</p><p>- Je lui dis quoi, moi ?</p>', solution: "es klingelt"},
{category: "TW", type: 'verbesConjug', translation: shuffle([...b1VerbesConjug]), text: 'ça se bouffe', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-bouffe.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-bouffe.m4a', sentence: '<p><b>Ça se bouffe</b> pas avec du lait ton truc ?</p>', solution: "man isst"},
{category: "TW", type: 'verbesConjug', translation: shuffle([...b1VerbesConjug]), text: 'ta gueule', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-gueule.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-gueule.m4a', sentence: '<p>-<b>Ta gueule</b> ! Changement d\'adresse. Qu\'est-ce que tu veux...</p><p>- Ta gueule !</p>', solution: "Halt’s Maul"},
{category: "TW", type: 'verbesConjug', translation: shuffle([...b1VerbesConjug]), text: 't’inquiète', audioAvecArticle: 'sound/mots-cibles/avec-articles/01-inquiete.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/01-inquiete.m4a', sentence: '<p>-Je vais voir ce qu\'il me reste.</p><p>- Non, c\'est bon, <b>t\'inquiète</b>.</p>', solution: "keine Sorge"},
];

var c1Adjectifs = ['verschwommen', 'allerletzte', 'schmutzig', 'falls/so/doch', 'noch', 'nie', 'denn', 'ausser', 'defekt', 'ohne', 'keine'];
var c1NomPl = ['die Hackfleischbällchen', 'die Dummheiten', 'die Schränke'];
var c1NomSg = ['der Ort', 'der Tropfen', 'die Kacke', 'der Freund', 'das Vertrauen', 'das Ding', 'die Tüte', 'die Gabel'];
var c1VerbesIndef = ['ich gestehe', 'du meinst', 'keine Sorge', 'ihr verheimlicht', 'es ist uns egal', 'ihr verräumt', 'ich zünde an', 'wir lachen'];
var c1VerbesConjug = ['(an)lügen', 'versende', 'leite weiter', 'getötet', 'aussteigen', 'geschlagen'];

let motsCiblesFilmC = [
    {category: "TW", type: 'adjectif&co', translation: shuffle([...c1Adjectifs]), text: 'flou', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-flou.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-flou.m4a', sentence: '<p>Pourquoi j\'arrive pas à rester propre comme toutes ces filles avec leur petit carré <b>flou</b> parfait, leur petit slim noir sans plis...</p>', solution: 'verschwommen'},
    {category: "TW", type: 'adjectif&co', translation: shuffle([...c1Adjectifs]), text: 'ultime', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-ultime.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-ultime.m4a', sentence: '<p>C\'est ma passion <b>ultime</b>, les boulettes !</p>', solution: 'allerletzte'},
    {category: "TW", type: 'adjectif&co', translation: shuffle([...c1Adjectifs]), text: 'sale', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-sale.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-sale.m4a', sentence: '<p>Je suis négligée, je suis dégueulasse. Même propre, je fais <b>sale</b>.</p>', solution: 'schmutzig'},
    {category: "TW", type: 'adjectif&co', translation: shuffle([...c1Adjectifs]), text: 'si', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-si.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-si.m4a', sentence: '<p>T\'es <b>si </b>jolie que j\'en oublie que ton pull est dégueulasse.</p>', solution: 'falls/so/doch'},
    {category: "TW", type: 'adjectif&co', translation: shuffle([...c1Adjectifs]), text: 'encore', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-encore.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-encore.m4a', sentence: '<p>Antoine croit <b>encore </b>que tu vas au yoga prénatal ?</p>', solution: 'noch'},
    {category: "TW", type: 'adjectif&co', translation: shuffle([...c1Adjectifs]), text: 'jamais', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-jamais.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-jamais.m4a', sentence: '<p>Ce sera <b>jamais </b>fini avant l\'arrivée du bébé.</p>', solution: 'nie'},
    {category: "TW", type: 'adjectif&co', translation: shuffle([...c1Adjectifs]), text: 'car', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-car.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-car.m4a', sentence: '<p>Et t\'attends pas à un cadeau commun <b>car </b>personne a mis sur la cagnotte</p>', solution: 'denn'},
    {category: "TW", type: 'adjectif&co', translation: shuffle([...c1Adjectifs]), text: 'sauf', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-sauf.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-sauf.m4a', sentence: '<p>- Non, mais... je vois tout <b>sauf</b> quelqu\'un de bidon, moi.</p><p>- T\'es magnifique.</p>', solution: 'ausser'},

    {category: "TW", type: 'nomPl', translation: shuffle([...c1NomPl]), text: 'les boulettes', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-boulettes.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-boulettes.m4a', sentence: '<p>Des sandwichs <b>aux boulettes</b> ? </p><p>– Oui.</p>', solution: 'die Hackfleischbällchen'},
    {category: "TW", type: 'nomPl', translation: shuffle([...c1NomPl]), text: 'les conneries', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-conneries.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-conneries.m4a', sentence: '<p>- Je comprends rien au texto. Tiens.</p><p>- Envoie pas <b>de conneries</b>. </p>', solution: 'die Dummheiten'},

    {category: "TW", type: 'nomSg', translation: shuffle([...c1NomSg]), text: 'l\'endroit', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-endroit.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-endroit.m4a', sentence: '<p>On a pas <b>d\'endroit</b> pour faire ton anniversaire.</p>', solution: 'der Ort'},
    {category: "TW", type: 'nomSg', translation: shuffle([...c1NomSg]), text: 'la goutte', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-goutte.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-goutte.m4a', sentence: '<p>- Vas-y, la petite touche pro : maïs, donut, <b>goutte</b>, <b>goutte</b>. Terminé.</p>', solution: 'der Tropfen'},
    {category: "TW", type: 'nomSg', translation: shuffle([...c1NomSg]), text: 'la crotte', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-crotte.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-crotte.m4a', sentence: '<p>- Il m\'a répondu !</p><p>- Ça dit quoi ? </p><p>- Alien, alien, <b>crotte</b>, bébé.</p>', solution: 'die Kacke'},
    {category: "TW", type: 'nomSg', translation: shuffle([...c1NomSg]), text: 'le pote', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-pote.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-pote.m4a', sentence: '<p>C\'est la <b>pote </b>d\'Elsa qui me l\'a filé pour être dans le perso.</p>', solution: 'der Freund'},
    {category: "TW", type: 'nomSg', translation: shuffle([...c1NomSg]), text: 'la confiance', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-confiance.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-confiance.m4a', sentence: '<p>- C\'est une surprise ?</p><p>- T\'as <b>confiance</b> en moi?</p>', solution: 'das Vertrauen'},
    {category: "TW", type: 'nomSg', translation: shuffle([...c1NomSg]), text: 'le truc', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-truc.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-truc.m4a', sentence: '<p>Vous me cachez <b>un truc</b> ou quoi ?</p>', solution: 'das Ding'},

    {category: "TW", type: 'verbesIndef', translation: shuffle([...c1VerbesIndef]), text: 'j’avoue', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-avoue.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-avoue.m4a', sentence: '<p>Bon, OK, <b>j\'avoue</b>. Je venais ici, petit.</p>', solution: 'ich gestehe'},
    {category: "TW", type: 'verbesIndef', translation: shuffle([...c1VerbesIndef]), text: 'tu crois', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-crois.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-crois.m4a', sentence: '<p>- Et le père Noël, c\'est pour dire que t\'es un cadeau du ciel.</p><p>- <b>Tu crois </b>? </p>', solution: 'du meinst'},
    {category: "TW", type: 'verbesIndef', translation: shuffle([...c1VerbesIndef]), text: 't’inquiète', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-inquiete.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-inquiete.m4a', sentence: '<p>- Tu m\'en veux pas, hein ? </p><p>- Non, <b>t\'inquiète</b>.</p>', solution: 'keine Sorge'},
    {category: "TW", type: 'verbesIndef', translation: shuffle([...c1VerbesIndef]), text: 'vous cachez', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-cachez.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-cachez.m4a', sentence: '<p>- Qu\'est-ce qui se passe ? Vous êtes trop cheloues ce soir.</p><p>- Vous me <b>cachez</b> un truc ou quoi ?</p>', solution: 'ihr verheimlicht'},
    {category: "TW", type: 'verbesIndef', translation: shuffle([...c1VerbesIndef]), text: 'on s’en fout', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-fout.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-fout.m4a', sentence: '<p><b>On s\'en fout</b> ! Réponds. Sinon, ça fait la meuf qui attend pour répondre.</p>', solution: 'es ist uns egal'},

    {category: "TW", type: 'verbesConjug', translation: shuffle([...c1VerbesConjug]), text: 'mentir', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-mentir.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-mentir.m4a', sentence: '<p>C\'est pour savoir si je dois continuer <b>mentir</b> à mon frère sur ton congé.</p>', solution: '(an)lügen'},
    {category: "TW", type: 'verbesConjug', translation: shuffle([...c1VerbesConjug]), text: 'envoie', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-envoie.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-envoie.m4a', sentence: '<p><b>Envoie</b> juste un texto.</p>', solution: 'versende'},
    {category: "TW", type: 'verbesConjug', translation: shuffle([...c1VerbesConjug]), text: 'transfère', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-transfere.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-transfere.m4a', sentence: '<p>- Vas-y, la petite touche pro : maïs, donut, goutte, goutte. Terminé. <b>Transfère</b>.</p><p>- Il m\'a répondu !</p>', solution: 'leite weiter'},
    {category: "TW", type: 'verbesConjug', translation: shuffle([...c1VerbesConjug]), text: 'tué', audioAvecArticle: 'sound/mots-cibles/avec-articles/02-tue.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/02-tue.m4a', sentence: '<p>Le gars qui a <b>tué</b> cette fille rencontrée sur Tinder.  </p>', solution: 'getötet'},
];

var d1Adjectifs = ['ernst', 'neugierig', 'mühsam', 'bereit', 'jetzt', 'so/derart', 'nichts', 'aber', 'mit', 'scheu', 'gestern', 'fast'];
var d1NomPl = ['der Kinderwagen', 'die Plage', 'die Arbeit', 'das Geschenk', 'das Kleid', 'die Arbeit', 'der Sattel', 'das Kabel'];
var d1NomSg = ['die Paten', 'die Klamotten', 'die Rinder'];
var d1VerbesIndef = ['helfen', 'ähnlich sehen', '(ver)senden', 'warte', 'hör auf', 'tut mir leid', 'gestreckt', 'kaufen'];
var d1VerbesConjug = ['ich zahle zurück', 'ich kann', 'ich leihe aus'];

let motsCiblesFilmD = [
    {category: "TW", type: 'adjectif&co', translation: shuffle([...d1Adjectifs]), text: 'sérieux', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-serieux.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-serieux.m4a', sentence: '<p>C\'est <b>sérieux</b> avec son nouveau mec ?</p>', solution: 'ernst' },
    {category: "TW", type: 'adjectif&co', translation: shuffle([...d1Adjectifs]), text: 'curieuse', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-curieuse.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-curieuse.m4a', sentence: '<p>« Passionnément <b>curieuse</b>.» Non, mais la fausse vie. Brangelina de la lose.</p>', solution: 'neugierig' },
    {category: "TW", type: 'adjectif&co', translation: shuffle([...d1Adjectifs]), text: 'chiante', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-chiante.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-chiante.m4a', sentence: '<p>Pardon, les meufs. Je suis tellement <b>chiante</b>.</p>', solution: 'mühsam' },
    {category: "TW", type: 'adjectif&co', translation: shuffle([...d1Adjectifs]), text: 'prête', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-prete.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-prete.m4a', sentence: '<p>Moi, à ce train-là, je suis pas <b>prête</b> d\'avoir des petits-enfants.</p>', solution: 'bereit' },
    {category: "TW", type: 'adjectif&co', translation: shuffle([...d1Adjectifs]), text: 'maintenant', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-maintenant.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-maintenant.m4a', sentence: '<p>Elle attend la réponse du pute. On fait quoi, <b>maintenant</b> ?</p>', solution: 'jetzt' },
    {category: "TW", type: 'adjectif&co', translation: shuffle([...d1Adjectifs]), text: 'tellement', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-tellement.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-tellement.m4a', sentence: '<p>Je comprends pas. Mon plan était <b>tellement</b> ingénieusement génial.</p>', solution: 'so/derart' },
    {category: "TW", type: 'adjectif&co', translation: shuffle([...d1Adjectifs]), text: 'rien', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-rien.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-rien.m4a', sentence: '<p>- Ça va pas ?</p><p>- Juste une merde au boulot, <b>rien</b> de...</p>', solution: 'nichts' },
    {category: "TW", type: 'adjectif&co', translation: shuffle([...d1Adjectifs]), text: 'mais', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-mais.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-mais.m4a', sentence: '<p>- Physiquement ?</p><p>- Non, <b>mais</b> aussi au niveau caractère.</p>', solution: 'aber' },
    {category: "TW", type: 'adjectif&co', translation: shuffle([...d1Adjectifs]), text: 'avec', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-avec.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-avec.m4a', sentence: '<p>- Du codo quoi ?</p><p>- Ben, du cododo. Dormir <b>avec</b> le bébé.</p>', solution: 'mit' },

    {category: "TW", type: 'nomPl', translation: shuffle([...d1NomPl]), text: 'la poussette', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-poussette.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-poussette.m4a', sentence: '<p>Et merci pour la <b>poussette</b> !</p>', solution: 'der Kinderwagen' },
    {category: "TW", type: 'nomPl', translation: shuffle([...d1NomPl]), text: 'la plaie', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-plaie.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-plaie.m4a', sentence: '<p>Quelle <b>plaie</b>.</p>', solution: 'die Plage' },
    {category: "TW", type: 'nomPl', translation: shuffle([...d1NomPl]), text: 'le taf', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-taf.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-taf.m4a', sentence: '<p>Je vais au <b>taf</b>. </p>', solution: 'die Arbeit' },
    {category: "TW", type: 'nomPl', translation: shuffle([...d1NomPl]), text: 'le cadeau', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-cadeau.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-cadeau.m4a', sentence: '<p><b>Cadeau</b> des parrains. Ça se fait, non ?</p>', solution: 'das Geschenk' },
    {category: "TW", type: 'nomPl', translation: shuffle([...d1NomPl]), text: 'la robe', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-robe.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-robe.m4a', sentence: '<p>Je vais payer pour la <b>robe</b> et pour son haut aussi.</p>', solution: 'das Kleid' },
    {category: "TW", type: 'nomPl', translation: shuffle([...d1NomPl]), text: 'le boulot', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-boulot.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-boulot.m4a', sentence: '<p>Et, au <b>boulot</b>, eh ben... je me sens complètement inutile.</p>', solution: 'die Arbeit' },

    {category: "TW", type: 'nomSg', translation: shuffle([...d1NomSg]), text: 'les parrains', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-parrains.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-parrains.m4a', sentence: '<p>Cadeau des <b>parrains</b>. Ça se fait, non ?</p>', solution: 'die Paten' },
    {category: "TW", type: 'nomSg', translation: shuffle([...d1NomSg]), text: 'les fringues', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-fringues.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-fringues.m4a', sentence: '<p>Bon, vas-y, on y va, je vais te louer des <b>fringues</b>. On va chez moi.</p>', solution: 'die Klamotten' },

    {category: "TW", type: 'verbesIndef', translation: shuffle([...d1VerbesIndef]), text: 'aider', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-aider.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-aider.m4a', sentence: '<p>Je peux vous <b>aider</b> ?</p>', solution: 'helfen' },
    {category: "TW", type: 'verbesIndef', translation: shuffle([...d1VerbesIndef]), text: 'ressembler', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-ressembler.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-ressembler.m4a', sentence: '<p>Je vais <b>ressembler</b> à sa mère.</p>', solution: 'ähnlich sehen' },
    {category: "TW", type: 'verbesIndef', translation: shuffle([...d1VerbesIndef]), text: 'envoyer', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-envoyer.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-envoyer.m4a', sentence: '<p>Ah ! Peut-être que Jules serait d\'accord pour lui <b>envoyer</b> un message gratos.</p>', solution: '(ver)senden' },
    {category: "TW", type: 'verbesIndef', translation: shuffle([...d1VerbesIndef]), text: 'attends', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-attends.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-attends.m4a', sentence: '<p>- Elsa, <b>attends</b> !</p><p>- On est désolées.</p>', solution: 'warte' },
    {category: "TW", type: 'verbesIndef', translation: shuffle([...d1VerbesIndef]), text: 'arrête', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-arrete.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-arrete.m4a', sentence: '<p>- Attends, <b>arrête</b>, Elsa ! </p><p>- Hé, bébé...</p>', solution: 'hör auf' },
    {category: "TW", type: 'verbesIndef', translation: shuffle([...d1VerbesIndef]), text: 'désolé', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-desole.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-desole.m4a', sentence: '<p><b>Désolée</b>, on a tout vendu ce matin.</p>', solution: 'tut mir leid' },

    {category: "TW", type: 'verbesConjug', translation: shuffle([...d1VerbesConjug]), text: 'je rembourse', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-rembourse.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-rembourse.m4a', sentence: '<p>- C\'est loin, ton hôtel ? </p><p>- Pour faire un aller-retour. </p><p>- Je te <b>rembourse</b>, t\'inquiète !</p>', solution: 'ich zahle zurück' },
    {category: "TW", type: 'verbesConjug', translation: shuffle([...d1VerbesConjug]), text: 'je peux', audioAvecArticle: 'sound/mots-cibles/avec-articles/03-peux.m4a', audioSansArticle: 'sound/mots-cibles/sans-articles/03-peux.m4a', sentence: '<p>Je <b>peux</b> vous aider, monsieur ?</p>', solution: 'ich kann' },
];

let motsCiblesFilmDGroup2 = [

    {category: "TW", type: "adjectif&co", translation: shuffle([...d1Adjectifs]), text: 'devant', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-devant.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-devant.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "adjectif&co", translation: shuffle([...d1Adjectifs]), text: 'durs', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-durs.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-durs.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "adjectif&co", translation: shuffle([...d1Adjectifs]), text: 'enfin', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-enfin.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-enfin.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "adjectif&co", translation: shuffle([...d1Adjectifs]), text: 'exprès', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-expres.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-expres.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "adjectif&co", translation: shuffle([...d1Adjectifs]), text: 'foutu', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-foutu.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-foutu.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "adjectif&co", translation: shuffle([...d1Adjectifs]), text: 'guère', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-guere.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-guere.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "adjectif&co", translation: shuffle([...d1Adjectifs]), text: 'longtemps', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-longtemps.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-longtemps.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "adjectif&co", translation: shuffle([...d1Adjectifs]), text: 'manuel', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-manuel.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-manuel.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "adjectif&co", translation: shuffle([...d1Adjectifs]), text: 'mille', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-mille.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-mille.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "adjectif&co", translation: shuffle([...d1Adjectifs]), text: 'plein', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-plein.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-plein.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "adjectif&co", translation: shuffle([...d1Adjectifs]), text: 'serré', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-serre.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-serre.m4a', sentence: '<p>tbd</p>'},

    {category: "TW", type: "verbesIndef", translation: shuffle([...d1VerbesIndef]), text: 'accompagner', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-accompagner.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-accompagner.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "verbesIndef", translation: shuffle([...d1VerbesIndef]), text: 'baiser', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-baiser.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-baiser.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "verbesIndef", translation: shuffle([...d1VerbesIndef]), text: 'chier', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-chier.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-chier.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "verbesIndef", translation: shuffle([...d1VerbesIndef]), text: 'dû', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-du.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-du.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "verbesIndef", translation: shuffle([...d1VerbesIndef]), text: 'essayer', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-essayer.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-essayer.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "verbesIndef", translation: shuffle([...d1VerbesIndef]), text: 'pu', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-pu.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-pu.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "verbesIndef", translation: shuffle([...d1VerbesIndef]), text: 'quitter', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-quitter.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-quitter.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "verbesIndef", translation: shuffle([...d1VerbesIndef]), text: 'tromper', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-tromper.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-tromper.m4a', sentence: '<p>tbd</p>'},

    {category: "TW", type: "verbesConjug", translation: shuffle([...d1VerbesConjug]), text: 'j’adore', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-adore.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-adore.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "verbesConjug", translation: shuffle([...d1VerbesConjug]), text: 'il ait', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-ait.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-ait.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "verbesConjug", translation: shuffle([...d1VerbesConjug]), text: 'on apprécie', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-apprecie.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-apprecie.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "verbesConjug", translation: shuffle([...d1VerbesConjug]), text: 'je dois', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-dois.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-dois.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "verbesConjug", translation: shuffle([...d1VerbesConjug]), text: 'je m’en occupe', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-occupe.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-occupe.m4a', sentence: '<p>tbd</p>'},
    {category: "TW", type: "verbesConjug", translation: shuffle([...d1VerbesConjug]), text: 'il savait', audioAvecArticle: 'sound/mots-cibles/episode-3/avec-article/03-savait.m4a', audioSansArticle: 'sound/mots-cibles/episode-3/sans-article/03-savait.m4a', sentence: '<p>tbd</p>'},
];

checkAllInclude(motsCiblesFilmB);
checkAllInclude(motsCiblesFilmC);
checkAllInclude(motsCiblesFilmD);

let nonWords = [
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'bondar', audioAvecArticle: 'sound/pseudo-mots/bondar.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'l\'archout', audioAvecArticle: 'sound/pseudo-mots/archout.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'canbais', audioAvecArticle: 'sound/pseudo-mots/canbais.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'les cantians', audioAvecArticle: 'sound/pseudo-mots/cantians.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'vous civez', audioAvecArticle: 'sound/pseudo-mots/civez.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'déstorgrer', audioAvecArticle: 'sound/pseudo-mots/destorgrer.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'dorte', audioAvecArticle: 'sound/pseudo-mots/dorte.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'la flinse', audioAvecArticle: 'sound/pseudo-mots/flinse.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'himmadent', audioAvecArticle: 'sound/pseudo-mots/himmadent.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'la loinse', audioAvecArticle: 'sound/pseudo-mots/loinse.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'magnin', audioAvecArticle: 'sound/pseudo-mots/magnin.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'les matcorios', audioAvecArticle: 'sound/pseudo-mots/matcorios.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'pleurne', audioAvecArticle: 'sound/pseudo-mots/pleurne.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'la pristie', audioAvecArticle: 'sound/pseudo-mots/pristie.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'puet', audioAvecArticle: 'sound/pseudo-mots/puet.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'ça rarde', audioAvecArticle: 'sound/pseudo-mots/rarde.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'réliol', audioAvecArticle: 'sound/pseudo-mots/reliol.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'les riaunes', audioAvecArticle: 'sound/pseudo-mots/riaunes.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'ça roppit', audioAvecArticle: 'sound/pseudo-mots/roppit.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'le ruc', audioAvecArticle: 'sound/pseudo-mots/ruc.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'tu truis', audioAvecArticle: 'sound/pseudo-mots/truis.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'la viarse', audioAvecArticle: 'sound/pseudo-mots/viarse.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'le voustier', audioAvecArticle: 'sound/pseudo-mots/voustier.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'zébé', audioAvecArticle: 'sound/pseudo-mots/zebe.m4a'},
    { category: "NW", type: 'NW', translation: null, sentence: null, text: 'les zyrnes', audioAvecArticle: 'sound/pseudo-mots/zyrnes.m4a'},
];

let nonWordsShort = nonWords.slice(0, 10);

const motsCiblesFilmAll = motsCiblesFilmB.concat(motsCiblesFilmC).concat(motsCiblesFilmD);

const lexTaleAudioFilesPreload = lexTaleAudioFiles.map(item => {
    return item.audio
});

const motsCiblesFilmBSansArticlePreload = motsCiblesFilmB.map(item => {
    return item.audioSansArticle
});
const motsCiblesFilmCVSansArticlear2Preload = motsCiblesFilmC.map(item => {
    return item.audioSansArticle
});
const motsCiblesFilmDSansArticlePreload = motsCiblesFilmD.map(item => {
    return item.audioSansArticle
});
const motsCiblesFilmDGroup2SansArticlePreload = motsCiblesFilmDGroup2.map(item => {
    return item.audioSansArticle
});

const motsCiblesFilmAllSansArticlePreload = motsCiblesFilmAll.map(item => {
    return item.audioSansArticle
});
const motsCiblesFilmBAvecArticlePreload = motsCiblesFilmB.map(item => {
    return item.audioAvecArticle
});
const motsCiblesFilmCAvecArticlePreload = motsCiblesFilmC.map(item => {
    return item.audioAvecArticle
});
const motsCiblesFilmDAvecArticlePreload = motsCiblesFilmD.map(item => {
    return item.audioAvecArticle
});
const motsCiblesFilmDGroup2AvecArticlePreload = motsCiblesFilmDGroup2.map(item => {
    return item.audioAvecArticle
});

const motsCiblesFilmAllAvecArticlePreload = motsCiblesFilmAll.map(item => {
    return item.audioAvecArticle
});

const nonWordsPreload = nonWords.map(item => {
    return item.audioAvecArticle;
});

numbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99'];

function getForm(klasse, group) {
    if (window.location.href.toLowerCase().includes("localhost")) {
        //local testing
        return "mbjpwdqq"
    }

    if (klasse.toLowerCase() === "3d") {
        return "mleovnye"
    }
    if (klasse.toLowerCase() === "2a") {
    }

    return "xgepqloj";
}

function sendData(name, data) {

    var url =  'https://formspree.io/' + getForm(klasse, group);

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
}

// helper
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let loopFunction = function (data) {
    return data.values()[0].button_pressed === 1;
};

function getParamOrElse(param, elseValue) {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has(param)) {
        return searchParams.get(param)
    }
    return elseValue
}

function getParam(param) {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has(param)) {
        return searchParams.get(param)
    }
    return '?'
}

function checkAllInclude(listOfWords) {
    for (i = 0; i < listOfWords.length; i++) {
        let element = listOfWords[i];
        if(!element.translation.includes(element.solution)) {
            throw element.text + " should have a solution (" + element.solution + ") in tranlation (" + element.translation + ")";
        }
    }
}