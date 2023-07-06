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


                    //Create constants based on your parameters. what are your parameters? Number of Categories = 6, number of Clues per Category = 5;
const numOfCategories = 6;
const questionsPerCategory = 5;
const baseURL = "https://swapi.dev/api";
let $jeopardyHead = $("#jeopardy-head");
let $jeopardyBody = $("#jeopardy-body");


let categories = [];

async function getRandomCategory(){
    const response = await axios.get(baseURL);
    let catIds = Object.keys(response.data);
    console.log(catIds);
    return catIds;
   
  
    //let catIDs = res.data.map(cat => cat.id);
            //console.log(catIDs);
    //return _.sampleSize(catIDs, numOfCategories);
    //console.log(randomCats);
}

async function getCategory(catID) {

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

    let res = await axios.get(`https://swapi.dev/api/${catID}`);
    let allData = res.data.results;
    let catName = catID;
    //console.log(allData);
    let cluesArray = allData.map(questions =>{
      for (let c in questions){
        let ctitle = Object.keys(questions)[1];
        let ca = Object.values(questions);
        //console.log(ca[0]);

        let characteristic = ctitle + " = " + ca[1];
        //console.log(characteristic);
        // let characteristics =  "The characteristics are: " + ctitle + "are" +ca[1];
        return{
          Question: `What ${ctitle} does ${questions.name} have?`,
          Answer: characteristic,
          showing: null
        };
      }
    })
    // let cluesObject = {
    //   title: catName,
    //   clues: cluesArray};
    //console.log(cluesObject);
    let allClues = cluesArray;
    //console.log(allClues);
  
    // let allClues = cat.clues;
    // // console.log(allClues);
    let clues = _.sampleSize(allClues, questionsPerCategory);
    //console.log(randomClues);
    // let clues = randomClues.map(clue =>({
    //    question: clue.question,
    //     answer: clue.answer,
    //     showing: null,
    //     }));
    // console.log(clues);
    // // //console.log( {title: cat.title, clues});
    // console.log({title: catName, clues});
    return  {title: catName, clues};
    
}

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
    for(let catIdx = 0; catIdx < numOfCategories; catIdx++){
        $tr.append($("<th>")).text(testClues[catIdx].title);
    };
    //console.log($tr);
    $jeopardyHead.append($tr);

    //Add rows w/ questions & clear out the body
    //think of the connect 4 {x}-{y} coordinates
    $jeopardyBody.empty();
    for (let clueIdx = 0; clueIdx < questionsPerCategory; clueIdx++){
        console.log($tr);
        $tr.append($("<td>")).attr("id",`${catIdx}-${clueIdx}`);
        console.log($tr);
    }

}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(e) {
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO
