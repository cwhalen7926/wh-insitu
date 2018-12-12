/*
-- WH judgement task
-- Key for Items:
    formal -
    informal -
    filler -
*/

var shuffleSequence = seq("intro", sepWith("sep", seq(shuffle(randomize(startsWith("filler")), shuffle(randomize(startsWith("formal")), randomize(startsWith("informal")))))));
var centerItems = true;


var defaults = [

  "Separator", {
      transfer: 1000, //wait for 1000ms
        //other options: "keypress", "click"
      normalMessage: "Please wait for the next sentence.", //message to be displayed
      // errorMessage: "Wrong. Please wait for the next sentence." //message to be displayed in red
  },

  "Question", {
      //"as" option is obligatory
      hasCorrect: true,
      randomOrder: true,
      showNumbers: true,
      instructions: "S'il vous plaît, lisez la réplique et choisissez la réponse qui vous semble la plus naturelle."
        //if a question has a correct answer,
          //keep it as the first element of the "as" option
  },

  "Form", {
      //"html" option is obligatory
      hideProgressBar: true,
      continueOnReturn: true,
      saveReactionTime: true
  }
];

var items = [
  /*
  Do we need separators?
  Is there a way to import from CSV?
  */

  //ends after timer (1000ms)
  ["sep", "Separator", {transfer: 1000, normalMessage: "Merci d'attendre la prochaine phrase."}],

  //ends when key is press
  //["sep", "Separator", {transfer: "keypress", normalMessage: "Please press any key to continue."}],


  /*
  INTRODUCTION
  */

  ["intro",
    //type
    "Form",
    //obligatory option that includes a HTML file that is a questionnaire
    {html: { include: "example_intro.html" },
    //fields that need to have the right format when taking input from user
    validators: {
      //age has to be a number
      age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
      }
  } ],

  //PRACTICE Items

  ["practice", "DashedSentence", {s: "This is a practice sentence before the experiment begins."}],

  // TARGET ITEMS

  /*
  TEMPLATE for all items
  ["type", "Question", {
    q: "...",
    as: [ "Option 1",
          "Option 2"]
        }
      ],
  */

  // FORMAL
  ["formal01", "Question", {
    q: "Un participant s’adressant au formateur qui a presenté une étude sur le placement des produits en rayon. C’est très interessant ce que vous dites. Alors selon vous :",
    as: [ "Les articles de toilettes seraient où dans ce magasin?",
          "Où seraient les articles de toilettes dans ce magasin?"]
        }
      ],

  ["formal02", "Question", {
    q: "S’adressant à une cliente perdue qui se plaint que les articles ont encore changé de place :",
    as: [ "Les articles de toilettes sont où dans ce magasin?",
          "Où sont les articles de toilettes dans ce magasin?"]
        }
      ],

  ["formal03", "Question", {
    q: "S’addressant a un chef de gare sur le quai d’un train qui arrive en gare :",
    as: [ "Pardon, j’ai besoin d’aide. Il va où, ce train?",
          "Pardon, j’ai besoin d’aide.  Où il va, ce train?"]
        }
      ],

  ["formal04", "Question", {
    q: "À un usager inconnu qui court sur le quai :",
    as: [ "Pardon, j’ai besoin d’aide. Il va où, ce train?",
          "Pardon, j’ai besoin d’aide.  Où il va, ce train?"]
        }
      ],

  ["formal05", "Question", {
    q: "Dans une station de bus, au guichet : ",
    as: [ "Bonjour, il part quand le prochain bus 23?",
          "Bonjour, quand part le prochain bus 23?"]
        }
      ],

  ["formal06", "Question", {
    q: "Dans un abri-bus a un inconnu qui attend aussi :",
    as: [ "Bonjour, il part quand le prochain bus 23?",
          "Bonjour, quand part le prochain bus 23?"]
        }
      ],

  ["formal07", "Question", {
    q: "À un agent de voyage qui vante la traverse de l’atlantique en bateau :",
    as: [ "Et alors, ça prend combien de temps la traversée?",
          "Et alors, combien de temps ça prend la traversée?"]
        }
      ],

  ["formal08", "Question", {
    q: "Chez le coiffeur qui rêve de partir aux états-unis, en discutant de l'idée de prendre le bateau pour y aller :",
    as: [ "À votre avis, ça prend combien de temps la traversée?",
          "À votre avis, combien de temps ça prend la traversée?"]
        }
      ],

  // INFORMAL
  ["informal09", "Question", {
    q: "À un ami decorateur qui vous conseille pour renover un appartement :",
    as: [ "On peut mettre quelle couleur pour eclaircir une pièce?",
          "Quelle couleur on peut mettre pour eclairir une pièce?"]
        }
      ],

  ["informal10", "Question", {
    q: "À une amie qui ne s’interesse pas vraiment a la décoration?",
    as: [ "On peut mettre quelle couleur pour eclaircir une pièce?",
          "Quelle couleur on peut mettre pour eclairir une pièce?"]
        }
      ],

  ["informal11", "Question", {
    q: "Une fillette à son frère : Jean, Maman a encore rangé mon nounours et je sais que tu l’as vue.",
    as: [ "Elle l’a mis où cette fois?",
          "Où elle l’a mis, cette fois?"]
        }
      ],

  ["informal12", "Question", {
    q: "Une fillette à sa mere qui vient de rentrer a la maison : Maman, la femme de ménage a encore rangé mon nounours. Tu sais toi?",
    as: [ "Elle l’a mis où cette fois?",
          "Où elle l’a mis, cette fois?"]
        }
      ],

  ["informal13", "Question", {
    q: "Une cliente à son ami qui vend des voitures : Elle est superbe, ca c’est sur... ",
    as: [ "Dis-moi, ça coute à peu pres combien une voiture comme ça?",
          "Dis-moi, combien ça coute à peu pres une voiture comme ça?"]
        }
      ],

  ["informal14", "Question", {
    q: "Une fille à sa copine qui admire une voiture dans un parking.",
    as: [ "À ton avis, ça coute à peu pres combien une voiture comme ça?",
          "À ton avis, combien ça coute à peu pres une voiture comme ça?"]
        }
      ],

  ["informal15", "Question", {
    q: "À un ami expert en recrutement professionel : ",
    as: [ "D'aprés toi, on met son expérience professionelle où dans son cv?",
          "D'aprés toi, où on met son expérience professionelle dans son cv?"]
        }
      ],

  ["informal16", "Question", {
    q: "Une fille qui fait son premier cv, à sa meilleure copine :",
    as: [ "D'aprés toi, on met son experience professionelle ou dans son cv?",
          "D'aprés toi, ou on met son experience professionelle dans son cv?"]
        }
      ],

  // NEGATIVE FILLERS
  ["filler17", "Question", {
    q: "Un professeur du départment qui revient d’une conférence s’addressant a son collègue :",
    as: [ "Il y avait pas d’étudiants de notre department à cette conférence.",
          "Il n’y avait aucun étudiant de notre department à cette conférence."]
        }
      ],

  ["filler18", "Question", {
    q: "Un étudiant s'adressant à un ami en revenant d'une conférence : ",
    as: [ "Il y avait pas d’étudiants de notre department à cette conférence.",
          "Il n’y avait aucun étudiant de notre department à cette conférence."]
        }
      ],

  ["filler19", "Question", {
    q: "Le maire du village s'adressant a un employé : ",
    as: [ "Je n'ai pas vu de drapeaux sur la place.",
          "Je n'ai vu aucun drapeux sur la place."]
        }
      ],

  ["filler20", "Question", {
    q: "Un papa s'adressant à son enfant : ",
    as: [ "Je n'ai pas vu de drapeaux sur la place.",
          "Je n'ai vu aucun drapeux sur la place."]
        }
      ],

  ["filler21", "Question", {
    q: "Un professeur s'addressant a ses élèves :",
    as: [ "Vous n'avez aucun devoir à faire pendant les vacances.",
          "Vous n'avez pas de devoir à faire pendant les vacances."]
        }
      ],

  ["filler22", "Question", {
    q: "Un enfant s'adressant a sa mère :",
    as: [ "Je n'ai aucun devoir à faire pendant les vacances.",
          "Je n'ai pas de devoir à faire pendant les vacances."]
        }
      ],

  ["filler23", "Question", {
    q: "Une affiche sur la porte d'un laboratoire :",
    as: [ "Merci de ne faire aucun bruit.",
          "Merci de ne pas faire de bruit."]
        }
      ],

  ["filler24", "Question", {
    q: "Une maman a ses enfants devant leur père qui dort :",
    as: [ "Merci de ne faire aucun bruit.",
          "Merci de ne pas faire de bruit."]
        }
      ],

  // UNIVERSAL QUANT FILLERS
  ["filler25", "Question", {
    q: "Une collègue responsable d'organiser une fête pour la retraite d'un des ses collegues :",
    as: [ "Tout ses amis sont invités?",
          "Ses amis sont tous invités?"]
        }
      ],

  ["filler26", "Question", {
    q: "Une maman s'adressant a son mari a propos de l'anniversaire de leur fils :",
    as: [ "Tout ses amis sont invités?",
          "Ses amis sont tous invités?"]
        }
      ],

  ["filler27", "Question", {
    q: "Un professeur à son assistant à la fin d'un examen :",
    as: [ "Toutes les copies sont rammassées?",
          "Les copies sont toutes rammassées?"]
        }
      ],

  ["filler28", "Question", {
    q: "Un élève s'addressant a son copain en sortant d'un examen : ",
    as: [ "Toutes les copies sont rammassées?",
          "Les copies sont toutes rammassées?"]
        }
      ],

  ["filler29", "Question", {
    q: "Un hotelier à son collègue :",
    as: [ "Toutes les tables sont décorées?",
          "Les tables sont tous décorées?"]
        }
      ],

  ["filler30", "Question", {
    q: "Une maman a son fils le jour de son anniversaire :",
    as: [ "Toutes les tables sont décorées?",
          "Les tables sont tous décorées?"]
        }
      ],

  ["filler31", "Question", {
    q: "Le directeur de la banque à son employé :",
    as: [ "Toutes les lumières sont éteintes?",
          "Les lumières sont toutes éteintes?"]
        }
      ],

  ["filler32", "Question", {
    q: "Un père à son fils alors qu'ils quittent la maison : ",
    as: [ "Toutes les lumières sont éteintes?",
          "Les lumières sont toutes éteintes?"]
        }
      ]

];
