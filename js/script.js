'use strict'
console.log('Random Quote Generator Project');
/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


//global variable array with quote objects, with the keys - quote, source, year and citation

let quotes = [
  {
    quote: 'Talk is cheap. Show me the code.',
    source: 'Linus Torvalds',
    year: 2006,
    citation: 'Message to linux-kernel mailing list'

  },
  {
    quote: 'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers.',
    source: 'Larry Niven',
    year: 1982,
    citation: 'Oath of Fealty'

  },
  {
    quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    source: 'Martin Fowler',
    year: 1999,
    citation: 'Refactoring: Improving the Design of Existing Code'

  },
  {
    quote: 'You\'ve baked a really lovely cake, but then you\'ve used dog shit for frosting.',
    source: 'Steve Jobs',
    year: 2000,
    citation: 'The Second Coming of Steve Jobs (2000) by Alan Deutschman'

  },
  {
    quote: 'The most important property of a program is whether it accomplishes the intention of its user.',
    source: 'C.A.R. Hoare'

  }
];

//a function that chooses the quotes randomely
function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

//printing every random quote with alternative in case of lack properties year and/or citation
function printQuote() {
  var randomQuote = getRandomQuote();
  var printingString = '';
  printingString += '<p class="quote">' + randomQuote.quote + '</p>' + '<p class="source">' + randomQuote.source;

  //conditinal statements in case of citation or year lacking
  if (randomQuote.citation) {
    printingString += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    printingString += '<span class="year">' + randomQuote.year + ' </span>';
  }

  //closing the paragraph
  printingString += '</p>';

  //checking the variable on the console. Should remain in comment
  //console.log(printingString)


  const stringElement = document.querySelector('#quote-box');
  stringElement.innerHTML = printingString;
  
  random_bg_color()
}

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);

  document.body.style.background = bgColor;
}


//DOM connection to HTML to activate the button on page

document.getElementById('loadQuote').addEventListener("click", printQuote, false);



