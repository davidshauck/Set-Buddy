let anArrayOfUniqueNumbers = [];
let firstSet = [];
let secondSet = [];
let firstSetClicked = false;
let songs = [
"Alabama Getaway",
"Althea",
"Big Railroad Blues",
"Bird Song",
"Brown-Eyed Women",
"California Stars",
"Candyman",
"Cassidy",
"Cold Rain and Snow",
"Crazy Fingers",
"Deal",
"Feel Like A Stranger",
"Golden Road",
"Jack Straw",
"Loser",
"Might As Well",
"Mission In The Rain",
"Mississippi Half-Step",
"Mighty Quinn",
"New Speedway Boogie",
"One More Saturday Night",
"Peggy-O",
"Promised Land",
"Ramble On Rose",
"Sugaree",
"Tangled Up In Blue",
"The Music Never Stopped",
"They Love Each Other",
"Touch Of Grey",
"Casey Jones",
"China Cat Sunflower",
"I Know You Rider",
"Dancin’ In The Street",
"Estimated Prophet",
"Eyes Of The World",
"Hard To Handle",
"He’s Gone",
"Help On The Way",
"Slipknot",
"Fire On The Mountain",
"Franklin’s Tower",
"Goin’ Down The Road",
"Lovelight",
"Morning Dew",
"Not Fade Away",
"Playin’ in the Band",
"Sampson & Delilah",
"Scarlet Begonias",
"Scalet-Fire-Good Lovin'",
"Shakedown Street",
"Ship of Fools",
"Sugar Magnolia",
"St. Stephen",
"Terrapin Station",
"The Eleven",
"The Other One",
"The Wheel",
"Truckin’",
"Uncle John’s Band",
"Viola Lee Blues",
"Wharf Rat",
"Bertha",
"Brokedown Palace",
"Powderfinger",
"U.S. Blues",
"We Bid You Goodnight",
"Dark Star",
"Good Lovin’",
"Here Comes Sunshine",
"Jack-a-Roe",
"Aiko-Aiko",
"Like a Road Leading Home (Garcia)",
"Run For The Roses",
"Tennessee Jed"
];


// loading jquery
$(document).ready(function() {  

$("#first-set-button").on("click", showGenerator);
$("#first-set-button").on("click", x);

function x() {
    if (firstSetClicked === false) {
        alert("nope");
    }
    else {
        secondSetGenerator();
    }
}


function showGenerator() {

    let numberGenerator = function(arr) {
  if (arr.length >= 20) return;
  let newNumber = Math.floor(Math.random() * 74);
  if (arr.indexOf(newNumber) < 0) {
    arr.push(newNumber);
  }
  numberGenerator(arr);
};

numberGenerator(anArrayOfUniqueNumbers);

    for (let i = 0; i < 10; i++) {
        // console.log(anArrayOfUniqueNumbers[i]);
        // console.log(songs[anArrayOfUniqueNumbers[i]]);
        // firstSet.push(songs[anArrayOfUniqueNumbers[i]])
        $("#first-set").append("<p>" + songs[anArrayOfUniqueNumbers[i]] + "<p>");
    }
    $("#first-set").html(firstSet);
    console.log(firstSet);
    firstSet = [];
    firstSetClicked = true;

}

function secondSetGenerator() {
    for (let i = 0; i < 10; i++) {
        // console.log(anArrayOfUniqueNumbers[i + 10]);
        // console.log(songs[anArrayOfUniqueNumbers[i + 10]]);
        // secondSet.push(songs[anArrayOfUniqueNumbers[i + 10]])
        $("#second-set").append("<p>" + songs[anArrayOfUniqueNumbers[i + 10]] + "<p>");

    }
    
    console.log(secondSet);
    secondSet = [];
    anArrayOfUniqueNumbers = [];
    firstSetClicked = false;

}


// console.log(anArrayOfUniqueNumbers);


});