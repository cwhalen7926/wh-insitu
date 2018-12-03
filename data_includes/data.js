/*
-- WH judgement task
-- Key for Items:
    formal1 - expert
    formal2 - non expert
    informal2 - expert
    informal2 - non expert
    filler1 - negative, formal fillers
    filler2 - negative, informal
    filler3 - universal, formal
    filler4 - universal, informal
*/

var shuffleSequence = seq("practice", shuffle(randomize(filler), shuffle(randomize("formal1"), randomize("informal1")))); // Work out randomization for items
var practiceItemTypes = ["practice"]; // Practice Items?
var centerItems = true;


var defaults = [
  "Question", {
      //"as" option is obligatory
      hasCorrect: false,
      randomOrder: false,
      showNumbers: true
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
  ["formal1", "Question", {
    q: "formal1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],
  /*
  ["formal1", "Question", {
    q: "formal1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  // Formal non-expert items
  ["formal2_01", "Question", {
    q: "formal2",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["formal2_02", "Question", {
    q: "formal2",
    as: [ "Option 1",
          "Option 2"]
        }
      ],
      */

  // INFORMAL
  ["informal1", "Question", {
    q: "informal1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],
  /*
  ["informal1", "Question", {
    q: "informal1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  // Informal non-expert items
  ["informal2_01", "Question", {
    q: "informal2",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["informal2_02", "Question", {
    q: "informal2",
    as: [ "Option 1",
          "Option 2"]
        }
      ],
      */
      /*
  // NEGATIVE FILLERS
  ["filler", "Question", {
    q: "filler1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],
  /*
  ["filler", "Question", {
    q: "filler1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],
  */
  // UNIVERSAL QUANT FILLERS
  ["filler", "Question", {
    q: "filler2",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["filler", "Question", {
    q: "filler2",
    as: [ "Option 1",
          "Option 2"]
        }
      ]

];
