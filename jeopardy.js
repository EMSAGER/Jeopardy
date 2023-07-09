// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]
                    //Create constants based on your parameters. what are your parameters? Number of Categories 
let $jeopardyHead = $("#jeopardy-head");
let $jeopardyBody = $("#jeopardy-body");

let categories = [];

async function getCategoryIds(){
    /** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */
    let res = await axios.get('https://jservice.io/api/categories?count=100');
    let catIDs = _.sampleSize(res.data.map(cat => cat.id),6);
    return catIDs;
}

async function getCategory(catID) {
/** Return object with data about a category:
 *  Returns { title: "Math", clues: clue-array }
 *///pull data for a specified category & assign it to a variable
    let res = await axios.get(`https://jservice.io/api/category?id=${catID}`);
    let cat = res.data;
          //create a variable that only returns clues
    let allClues = cat.clues;
        
            //randomnize the clues
    let randomClues = _.sampleSize(allClues, 5);
            //create an array of clues with the randominized sample of clues
    let clues = randomClues.map(clue =>({
       question: clue.question,
        answer: clue.answer,
        showing: null,
        }));
  
                // return an object that k:v title: categoryTitle, then the clues Array
  return { title: cat.title, clues: clues};
};

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
    //empty out the Jeopardy Head
    $jeopardyHead.empty();
          //add a row with headers with categories - now loop through the array of Objects and each index to get the title
    let $tr = $("<tr>");
    for (let catIdx = 0; catIdx < 6; catIdx++){
      $tr.append($("<th>").text(categories[catIdx].title));

    };
    $jeopardyHead.append($tr);

    //Add rows w/ questions & clear out the body
    //think of the connect 4 {x}-{y} coordinates
    $jeopardyBody.empty();
    for (let clueIdx = 0; clueIdx < 5; clueIdx++){
        let $tr = $("<tr>");                    //notes for future: this bug was based on (), double check punctuation w/ loop errors
        for(let catIdx = 0; catIdx < 6; catIdx++){
          $tr.append($("<td>").attr("id",`${catIdx}-${clueIdx}`).text("?"));
        } 
    $jeopardyBody.append($tr);
  }
    // let $restartButton = $("<button id>").attr("id", "restart-button").text("Restart");
    // $jeopardyBody.append($restartButton);
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

async function handleClick(e) {
  //console.log(e.target.id);
  let id = e.target.id;
  //console.log(id);
  
  let [catIdx, clueIdx] = id.split("-");
  let clue = categories[catIdx].clues[clueIdx];
  //console.log(clue);
  let cardFace;
  if(!clue.showing){
    cardFace = clue.question;
    clue.showing = "question";
    //console.log(cardFace);
  } 
  else if (clue.showing === "question"){
    cardFace = clue.answer;
    clue.showing = "answer";
    //console.log(cardFace);
  }
  else{
    return;
  }
  return ($(`#${catIdx}-${clueIdx}`).html(cardFace));
};

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
  $("#jeopardy").empty();
  $(".BOARD").toggle();
  $(".SPIN").show();
  console.log("test");
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
    $(".SPIN").hide();
    $("#start").hide();
    $(".BOARD").toggle();
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
  
  let catIDs = await getCategoryIds();
  categories = [];
  for(let catID of catIDs){
    categories.push(await getCategory(catID));
  }
  //console.log(categories);
  
  fillTable(categories);
  let $restartButton = $("<button id>").attr("id", "restart").text("Restart");
  $(".container").append($restartButton);
  hideLoadingView();
}

/** On click of start / restart button, set up game. */
$("#start").on("click", setupAndStart);

$("#restart").on("click", async function(){
  console.log("test");
});
// TODO

/** On page load, add event handler for clicking clues */

$(async function(){
  setupAndStart;
  $("#jeopardy").on("click", "td", handleClick);
});
  
