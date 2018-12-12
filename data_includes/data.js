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
    q: "Un participant s’adressant au formateur qui a presenté une étude sur le placement des produits en rayon. C’est tres interessant ce vous dites. Alors selon vous :",
    as: [ "Les articles de toilettes seraient où dans ce magazin?",
          "Où seraient les articles de toilettes dans ce magazin?"]
        }
      ],

  ["formal02", "Question", {
    q: "S’adressant à une cliente perdue qui se plaint que les articles ont encore changé de place :",
    as: [ "Les articles de toilettes sont où dans ce magazin?",
          "Où sont les articles de toilettes dans ce magazin?"]
        }
      ],

  ["formal03", "Question", {
    q: "S’addressant a un chef de gare sur le quai d’un train qui arrive en gare :",
    as: [ "Pardon, J’ai besoin d’aide. Il va où, ce train?",
          "Pardon, j’ai besoin d’aide.  Où il va, ce train?"]
        }
      ],

  ["formal04", "Question", {
    q: "À un usager inconnu qui court sur le quai :",
    as: [ "Pardon, J’ai besoin d’aide. Il va où, ce train?",
          "Pardon, j’ai besoin d’aide.  Où il va, ce train?"]
        }
      ],

  ["formal05", "Question", {
    q: "Dans une station de bus, au guichet : ",
    as: [ "Bonjour, Il part quand le prochain bus 23?",
          "Bonjour, quand part le prochain bus 23?"]
        }
      ],

  ["formal06", "Question", {
    q: "Dans un abri-bus a un inconnu qui attend aussi :",
    as: [ "Bonjour, Il part quand le prochain bus 23?",
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
    q: "Chez le coiffeur:  1. J’aimerais bien un jour prendre le bateau pour aller aux Etats Unis. 2. Moi aussi, mais je ne l’ai jamais fait :",
    as: [ "À votre avis, ça prend combien de temps la traversée?",
          "À votre avis, combien de temps ça prend la traversée?"]
        }
      ],

  // INFORMAL
  ["informal01", "Question", {
    q: "informal1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["informal02", "Question", {
    q: "informal1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["informal01", "Question", {
    q: "informal1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["informal02", "Question", {
    q: "informal1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["informal01", "Question", {
    q: "informal1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["informal02", "Question", {
    q: "informal1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["informal01", "Question", {
    q: "informal1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["informal02", "Question", {
    q: "informal1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  // NEGATIVE FILLERS
  ["filler01", "Question", {
    q: "filler1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["filler02", "Question", {
    q: "filler1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["filler01", "Question", {
    q: "filler1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["filler02", "Question", {
    q: "filler1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["filler01", "Question", {
    q: "filler1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["filler02", "Question", {
    q: "filler1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["filler01", "Question", {
    q: "filler1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["filler02", "Question", {
    q: "filler1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  // UNIVERSAL QUANT FILLERS
  ["filler03", "Question", {
    q: "filler2",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["filler04", "Question", {
    q: "filler2",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["filler03", "Question", {
    q: "filler2",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["filler04", "Question", {
    q: "filler2",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["filler03", "Question", {
    q: "filler2",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["filler04", "Question", {
    q: "filler2",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["filler03", "Question", {
    q: "filler2",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["filler04", "Question", {
    q: "filler2",
    as: [ "Option 1",
          "Option 2"]
        }
      ]

];
