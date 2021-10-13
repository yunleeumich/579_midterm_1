const clickCountButton = document.querySelector('#problem-3 #click-count');

// write your code here
// For example, we should say '1 car' but '5 cars'
function addS(CountButtonHomeClicks) {
    if(CountButtonHomeClicks === 1) {
        return '';
    } else {
        return 's';
    }
}

let CountButtonHomeClicks = 0;

clickCountButton.addEventListener("click", function() {
    CountButtonHomeClicks += 1;
    // console.log(CountButtonHomeClicks);
    clickCountButton.textContent = 'You clicked the button ' + CountButtonHomeClicks + ' time' + addS()
  });



