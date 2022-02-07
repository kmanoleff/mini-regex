#!/usr/bin/env node

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -search <search>. -text <text>")
 .option(
   "s", { alias: "search", describe: "The search pattern", type: "string", demandOption: true }
 )
 .option(
   "t", { alias: "text", describe: "The text to search", type: "string", demandOption: true }
 )
 .argv;

// the final result set to be populated if searches match
let resultSet = [];

// basic character match, does character equal character?
function isCharacterEqual(search, text) {
  return search === text;
}

// now that characters can be compared, iterate through a chunk of text
function isTextEqual(search, text){
  console.log(search);
  console.log(text);
  // start with true, change to false if a mismatch is met
  result = true;
  for(let i = 0; i < search.length; i++){
    result = isCharacterEqual(search[i], text[i]);
    // if one of the characters don't match, no use in checking the rest
    if(!result) break;
  }
  console.log(result)
  return result;
}

// use the first letter of the search pattern to start, if it can find
// a match then extract the string (by length) and try to match the whole text
function checkText(search, text){
  let firstCharInSearch = search[0];
  let charactersInText = text.split('');
  let indexedOn;
  let completeMatch = false;
  for(let i = 0; i < charactersInText.length; i++){
    // possible match, check the word
    if(isCharacterEqual(search[0], charactersInText[i])){
      slicedText = text.slice(i, (i + search.length));
      completeMatch = isTextEqual(search, slicedText);
      // found a full word match
      if(completeMatch) break;
    }
  }
  return completeMatch;
}

// for the alternation requirement, separate the search by |
function checkSearch(search, text){
  let alternations = search.split('|');
  for(let word of alternations){
    let match = checkText(word, text);
    if(match) resultSet.push(word);
  }
  return resultSet;
}

console.log(checkSearch(`${options.search}`, `${options.text}`));

// Note
// this was my first attempt at checkWord() and it would split the string
// into component words, i.e. the text.split(' ')
// it would match the pattern "cat" on "cat in the hat" but I assumed that
// the pattern "the cat" should also match.
// so I deprecated this function in favor of the one used above
function _checkWord(search, text){
  let wordsInText = text.split(' ');
  console.log(wordsInText);
  let match = false;
  for(let word of wordsInText){
    match = isWordEqual(search, word);
    if(match) break;
  }
  return match;
}
