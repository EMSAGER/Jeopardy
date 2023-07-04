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


const testClues = 
[
       { title: "Math",
         clues: [
           {question: "1+1", answer: 2, showing: null},
           {question: "1+2", answer: 3, showing: null},
           {question: "2+2", answer: 4, showing: null},
           {question: "2+3", answer: 5, showing: null},
           {question: "3+3", answer: 6, showing: null},
         ],
       },
       { title: "Literature",
         clues: [
           {question: "Hamlet Author", answer: "Shakespeare", showing: null},
           {question: "Bell Jar Author", answer: "Plath", showing: null},
           {question: "Dune Author", answer: "Herbert", showing: null},
           {question: "American Gods", answer: "Gaiman", showing: null},
           {question: "Hobbit", answer: "Tolkien", showing: null},
         ],
       },
       { title: "Science",
         clues: [
           {question: "Star in our galaxy", answer: "sun", showing: null},
           {question: "third planet", answer: "earth", showing: null},
           {question: "3 phases of an element", answer: "solid, liquid, gas", showing: null},
           {question: "first planet", answer: "Mercury", showing: null},
           {question: "no longer a planet", answer: "Pluto", showing: null},
         ],
       },
       { title: "History",
         clues: [
           {question: "american indpendence", answer: 1776, showing: null},
           {question: "treaty of tripoli author", answer: "Adams", showing: null},
           {question: "western colonization reasoning", answer: "manifest destiny", showing: null},
           {question: "first democracy", answer: "Greece", showing: null},
           {question: "only state that was independent", answer: "Texas", showing: null},
         ],
       },{ title: "Art",
       clues: [
        {question: "starry night", answer: "van gogh", showing: null},
        {question: "sistine chapel", answer: "michelangelo", showing: null},
        {question: "la jaconda", answer: "da Vinci", showing: null},
        {question: "soup cans", answer: "warhol", showing: null},
        {question: "rothko chapel", answer: "rothko", showing: null},
      ],
     },
     { title: "Weather",
       clues: [
         {question: "atlantic nope", answer: "hurricane", showing: null},
         {question: "northwest pacific nope", answer: "cyclone", showing: null},
         {question: "land nope", answer: "tornado", showing: null},
         {question: "sky nope", answer: "hail", showing: null},
         {question: "tree nope", answer: "wind", showing: null},
       ],
     },
       
     ];

                    //Create constants based on your parameters. what are your parameters? Number of Categories = 6, number of Clues per Category = 5;
const numOfCategories = 6;
const questionsPerCategory = 5;
let $jeopardyHead = $("#jeopardy-head");
let $jeopardyBody = $("#jeopardy-body");


let categories = [];

async function getRandomCategory(){
    /** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

    //let res = await axios.get('https://jservice.io/api/categories?count=100');
            //console.log(res.data);
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

    // let res = await axios.get(`https://jservice.io/api/category?id=${catID}`);
    // let cat = res.data;
    // console.log(cat);
    // let allClues = cat.clues;
    // console.log(allClues);
    // let randomClues = _.sampleSize(allClues, questionsPerCategory);
    // //console.log(randomClues);
    // let clues = randomClues.map(clue =>({
    //    question: clue.question,
    //     answer: clue.answer,
    //     showing: null,
    //     }));
    // //console.log(clues);
    // //console.log( {title: cat.title, clues});
    // return  {title: cat.title, clues};
    return testClues;
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
        //console.log(testClues[catIdx].title);
        $tr.append($("<th>")).text(testClues[catIdx].title);
        //$tr.append($("<th>")).text(Categories[catIdx].title);
    };
    //console.log($tr);
    $jeopardyHead.append($tr);
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
