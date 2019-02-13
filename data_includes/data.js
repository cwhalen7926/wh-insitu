/*
-- WH judgement task
-- Key for Items:
    formal -
    informal -
    filler -
*/

var shuffleSequence = seq("consent", "instructions", seq(startsWith("practice")), sepWith("sep", seq(shuffle(randomize(startsWith("filler")), shuffle(randomize(startsWith("formal")), randomize(startsWith("informal")))))), "questionnaire");
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
      hasCorrect: false,
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

  ["consent",
    //type
    "Form",
    //obligatory option that includes a HTML file that is a questionnaire
    {html: { include: "consent.html" }
    //fields that need to have the right format when taking input from user
    // validators: {
      //age has to be a number
      // age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
    // }
  } ],

  ["instructions",
    "Form",
    {html: { include: "instructions.html"}
      }
  ],


  ["questionnaire",
    "Form",
    {html: {include: "questionnaire.html"}
      }
  ],


  //PRACTICE Items

  ["practice_01", "Question", {
    q: "Une maman dit à sa copine qui veut que ses enfants mangent sainement:",
    as: [ "Les enfants mangent souvent des bonbons",
          "Les enfants souvent mangent des bonbons"]
        }
      ],

   ["practice_02", "Question", {
       q: "Un québécois en protestant:",
       as: ["Jamais, je ne dirais cela",
            "Je ne  dirais jamais cela"]
        }
      ],


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
    q: "Un participant s’adressant au formateur qui présente une étude sur le placement des produits en rayon. Alors selon vous :",
    as: [ "Les articles de toilette seraient où dans un magasin?",
          "Où seraient les articles de toilette dans un magasin?"]
        }
      ],

  ["formal02", "Question", {
    q: "Dans un magasin, s’adressant à une cliente qui se plaint que les articles ont encore changé de place :",
    as: [ "Les articles de toilette sont où dans ce magasin?",
          "Où sont les articles de toilette dans ce magasin?"]
        }
      ],

  ["formal03", "Question", {
    q: "S’adressant à un chef de gare sur le quai d’un train qui arrive :",
    as: [ "Pardon, j’ai besoin d’aide. Il va où, ce train?",
          "Pardon, j’ai besoin d’aide.  Où il va, ce train?"]
        }
      ],

  ["formal04", "Question", {
    q: "Dans une gare, à un usager inconnu qui se trouve sur le quai :",
    as: [ "Pardon, j’ai besoin d’aide. Il va où, ce train?",
          "Pardon, j’ai besoin d’aide.  Où il va, ce train?"]
        }
      ],

  ["formal05", "Question", {
    q: "Dans une station de bus, au guichet : ",
    as: [ "Bonjour, le prochain bus 23 part quand?",
          "Bonjour, quand part le prochain bus 23?"]
        }
      ],

  ["formal06", "Question", {
    q: "Dans un abri-bus à un inconnu qui attend aussi :",
    as: [ "Bonjour, le prochain bus 23 part quand. s'il vous plaît?",
          "Bonjour, quand part le prochain bus 23, s'il vous plaît?"]
        }
      ],

  ["formal07", "Question", {
    q: "À un agent de voyage qui vante la traversée de l’atlantique en bateau :",
    as: [ "Et alors, ça prend combien de temps la traversée?",
          "Et alors, combien de temps ça prend la traversée?"]
        }
      ],

  ["formal08", "Question", {
    q: "Chez le coiffeur: une cliente qui rêve de partir aux États-Unis en bateau:",
    as: [ "À votre avis, ça prend combien de temps la traversée?",
          "À votre avis, combien de temps ça prend la traversée?"]
        }
      ],

  // INFORMAL
  ["informal09", "Question", {
    q: "À un ami décorateur qui vous conseille pour rénover votre appartement :",
    as: [ "On peut mettre quelle couleur pour éclaircir une pièce?",
          "Quelle couleur on peut mettre pour éclaircir une pièce?"]
        }
      ],

  ["informal10", "Question", {
    q: "À une amie qui ne s’intéresse pas vraiment à la décoration",
    as: [ "On peut mettre quelle couleur pour éclaircir une pièce?",
          "Quelle couleur on peut mettre pour éclaircir une pièce?"]
        }
      ],

  ["informal11", "Question", {
    q: "Une fillette à son frère : Jean, Maman a encore rangé mon nounours et je sais que tu l’as vu faire.",
    as: [ "Elle l’a mis où cette fois?",
          "Où elle l’a mis, cette fois?"]
        }
      ],

  ["informal12", "Question", {
    q: "Une fillette à sa mère qui vient de rentrer à la maison : Maman, la femme de ménage a encore rangé mon nounours. Tu sais toi... ",
    as: [ "Elle l’a mis où cette fois?",
          "Où elle l’a mis, cette fois?"]
        }
      ],

  ["informal13", "Question", {
    q: "Une cliente à son ami qui vend des voitures : Elle est superbe celle-là, ça c’est sûr... ",
    as: [ "Dis-moi, ça côute combien une voiture comme ça?",
          "Dis-moi, combien ça côute une voiture comme ça?"]
        }
      ],

  ["informal14", "Question", {
    q: "Une fille à sa copine qui admire une voiture dans un parking.",
    as: [ "À ton avis, ça côute combien une voiture comme ça?",
          "À ton avis, combien ça côute une voiture comme ça?"]
        }
      ],

  ["informal15", "Question", {
    q: "À un ami expert en recrutement professionel : ",
    as: [ "D'après toi, on la met où son expérience professionelle dans son CV?",
          "D'après toi, où on met son expérience professionelle dans son CV?"]
        }
      ],

  ["informal16", "Question", {
    q: "Une fille qui écrit son premier CV, à sa meilleure copine :",
    as: [ "D'après toi, on la met où son expérience professionelle dans son CV?",
          "D'après toi, où on met son expérience professionelle dans son CV?"]
        }
      ],

  // NEGATIVE FILLERS
  ["filler17", "Question", {
    q: "Un professeur du département qui revient d’une conférence s’addressant à son collègue :",
    as: [ "Il n'y avait pas d’étudiants de notre département à cette conférence.",
          "Il n’y avait aucun étudiant de notre département à cette conférence."]
        }
      ],

  ["filler18", "Question", {
    q: "Un étudiant s'adressant à un ami en revenant d'une conférence : ",
    as: [ "Il n'y avait pas d’étudiants de notre département à cette conférence.",
          "Il n’y avait aucun étudiant de notre département à cette conférence."]
        }
      ],

  ["filler19", "Question", {
    q: "Le maire du village s'adressant à un employé : ",
    as: [ "Je n'ai pas vu de drapeaux sur la place.",
          "Je n'ai vu aucun drapeau sur la place."]
        }
      ],

  ["filler20", "Question", {
    q: "Un papa s'adressant à son enfant : ",
    as: [ "Je n'ai pas vu de drapeaux sur la place.",
          "Je n'ai vu aucun drapeau sur la place."]
        }
      ],

  ["filler21", "Question", {
    q: "Un professeur s'adressant à ses élèves :",
    as: [ "Vous n'avez aucun devoir à faire pendant les vacances.",
          "Vous n'avez pas de devoir à faire pendant les vacances."]
        }
      ],

  ["filler22", "Question", {
    q: "Un enfant s'adressant à sa mère :",
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
    q: "Une maman à ses enfants devant leur père qui dort :",
    as: [ "Merci de ne faire aucun bruit.",
          "Merci de ne pas faire de bruit."]
        }
      ],

  // UNIVERSAL QUANT FILLERS
  ["filler25", "Question", {
    q: "Une employée responsable d'organiser une fête pour la retraite d'une des ses collégues :",
    as: [ "Tous ses amis sont invités?",
          "Ses amis sont tous invités?"]
        }
      ],

  ["filler26", "Question", {
    q: "Une maman s'adressant à son mari à propos de l'anniversaire de leur fils :",
    as: [ "Tout ses amis sont invités?",
          "Ses amis sont tous invités?"]
        }
      ],

  ["filler27", "Question", {
    q: "Un professeur à son assistant à la fin d'un examen :",
    as: [ "Toutes les copies sont ramassées?",
          "Les copies sont toutes ramassées?"]
        }
      ],

  ["filler28", "Question", {
    q: "Un élève s'addressant à son copain en sortant d'un examen : ",
    as: [ "Toutes les copies sont ramassées?",
          "Les copies sont toutes ramassées?"]
        }
      ],

  ["filler29", "Question", {
    q: "Un hôtelier à son collègue :",
    as: [ "Toutes les tables sont décorées?",
          "Les tables sont toutes décorées?"]
        }
      ],

  ["filler30", "Question", {
    q: "Une maman à son fils le jour de son anniversaire :",
    as: [ "Toutes les tables sont décorées?",
          "Les tables sont toutes décorées?"]
        }
      ],

  ["filler31", "Question", {
    q: "À la fin de la journée, le directeur de la banque à son employé :",
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
