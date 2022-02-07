# mini-regex

This project is a mini-regex engine that will allow you to enter a search pattern along with text to be searched and it will return an array of pattern matches.  
-- Author note : in `index.js` you will see my first attempt at pattern match (the deprecated function at the bottom) which worked for "cat" in "the dog sat on the cat" but I assumed "the cat" should also match so I re-wrote the function to be more extensible.

# Getting Started

- Clone this repository to your local machine.
- Open command line and navigate to the root of the project e.g. `\mini-regex`
- The project assumes you have node and npm installed on your machine.  To check, run the following commands to verify version `node -v` and `npm -v`.  You should see the versions installed.  If not, download node and / or npm.
- To install and run this project from the command line using the `mini-regex` command, run `npm install -g` (from the project root).

# Testing

- This project requires two arguments to be passed in when running from the command line.  `-s` will be the search pattern and `-t` will be the text to be searched.
- For example, to search for the word "cat" in "the dog sat on the cat", run the command `mini-regex -s "cat" -t "the dog sat on the cat"`
- The final output will be an array of pattern matches in the text, for example the above will result in `[ 'cat' ]` since it exists in the text.
- **Alternation**.  Multiple search parameters can be accomplished using the `|` on the search pattern.  For example, `mini-regex -s "cat|dog" -t "the dog sat on the cat"` will result in a final result of `[ 'cat', 'dog' ]` since both patterns exist in the text.
- Finally, if no searches match anything in the text the final output will be an empty array, for example `mini-regex -s "fox" -t "the dog sat on the cat"` will result in a final output of `[]` since the search doesn't exist in the text.


# Cleanup

- You can uninstall this project using the command `npm uninstall -g mini-regex`
