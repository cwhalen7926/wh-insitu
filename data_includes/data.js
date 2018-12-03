/*
-- WH judgement task
-- Key for Items:
    formalExpert
    informalExpert -
    filler1 - ne... pas/aucun fillers
    filler2 -
*/

var shuffleSequence = seq("practice", "formalExpert"); // Work out randomization for items
var practiceItemTypes = ["practice"]; // Practice Items?
var centerItems = true;


var defaults = [
  /*"Question", {
      //"as" option is obligatory
      // hasCorrect: true
        //if a question has a correct answer,
          //keep it as the first element of the "as" option
  },*/

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
  ["type", "Question", {hasCorrect: false, randomOrder: false, showNumbers: true,
    q: "...",
    as: [ "Option 1",
          "Option 2"]
        }
      ];
  */

  ["formalExpert", "Question", {hasCorrect: false, randomOrder: false, showNumbers: true,
    q: "...",
    as: ["Option 1"]
        }
      ],
  /*
  ["target1_02", "Question", {hasCorrect: false, randomOrder: false, showNumbers: true,
    q: "...",
    as: [ "Option 1",
          "Option 2"
        ]}];
  ["target1_03", "Question", {hasCorrect: false, randomOrder: false, showNumbers: true,
    q: "...",
    as: [ "Option 1",
          "Option 2"
        ]}];

  ["target1_04", "Question", {hasCorrect: false, randomOrder: false, showNumbers: true,
    q: "...",
    as: [ "Option 1",
          "Option 2"
        ]}];
  */

];
