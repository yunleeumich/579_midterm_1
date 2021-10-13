const wordInput = document.querySelector('#problem-5 #rhyme-with-input');
const showRhymesButton = document.querySelector('#problem-5 #show-rhymes-button');
const clearButton = document.querySelector('#problem-5 #clear-rhymes-button');
const rhymesOutput = document.querySelector('#problem-5 #rhymes');

function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({rel_rhy})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

// Write your code here
// call the API when click on "show Rhymes"
showRhymesButton.addEventListener('click', () => {
    getRhymes((wordInput, data) {
        for (const element in data) {
            console.log(element);
        };
    });
});

// clear output
clearButton.addEventListener('click', () => {
    clearButton.value = '';
})




